import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, comments, Comment, InsertComment } from "../drizzle/schema";
import { ENV } from './_core/env';
import { notifyOwner } from "./_core/notification";

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

export async function addComment(data: InsertComment): Promise<Comment | null> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot add comment: database not available");
    return null;
  }

  try {
    const result = await db.insert(comments).values(data);
    const insertedId = (result as any)[0]?.insertId;
    if (!insertedId) return null;
    
    const comment = await db.select().from(comments).where(eq(comments.id, Number(insertedId))).limit(1);
    if (comment.length > 0) {
      await sendCommentEmail(comment[0]);
      return comment[0];
    }
    return null;
  } catch (error) {
    console.error("[Database] Failed to add comment:", error);
    throw error;
  }
}

export async function getCommentsByArticle(articleSlug: string): Promise<Comment[]> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get comments: database not available");
    return [];
  }

  try {
    return await db.select().from(comments).where(eq(comments.articleSlug, articleSlug));
  } catch (error) {
    console.error("[Database] Failed to get comments:", error);
    return [];
  }
}

export async function sendCommentEmail(comment: Comment): Promise<void> {
  try {
    await notifyOwner({
      title: `New comment on Article: ${comment.articleSlug}`,
      content: `From: ${comment.authorName} (${comment.authorEmail})\n\nComment:\n${comment.content}\n\nPosted: ${comment.createdAt.toLocaleString()}`,
    });
  } catch (error) {
    console.error("[Email] Failed to send comment notification:", error);
  }
}

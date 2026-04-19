import { describe, it, expect, beforeAll, afterAll, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/types/manusTypes";

describe("Comments API", () => {
  let caller: ReturnType<typeof appRouter.createCaller>;

  beforeAll(() => {
    // Mock the database and notification service
    vi.mock("./db", () => ({
      addComment: vi.fn(async (data) => ({
        id: 1,
        articleSlug: data.articleSlug,
        authorName: data.authorName,
        authorEmail: data.authorEmail,
        content: data.content,
        createdAt: new Date(),
      })),
      getCommentsByArticle: vi.fn(async () => []),
    }));

    // Create a minimal context
    const mockContext: TrpcContext = {
      user: null,
      req: {} as any,
      res: {} as any,
    };

    caller = appRouter.createCaller(mockContext);
  });

  it("should submit a comment with valid data", async () => {
    const result = await caller.comments.submit({
      articleSlug: "article-01",
      authorName: "Test User",
      authorEmail: "test@example.com",
      content: "This is a test comment.",
    });

    expect(result.success).toBe(true);
    expect(result.commentId).toBeDefined();
  });

  it("should reject comment with invalid email", async () => {
    try {
      await caller.comments.submit({
        articleSlug: "article-01",
        authorName: "Test User",
        authorEmail: "invalid-email",
        content: "This is a test comment.",
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.code).toBe("BAD_REQUEST");
    }
  });

  it("should retrieve comments for an article", async () => {
    const comments = await caller.comments.getByArticle({
      articleSlug: "article-01",
    });

    expect(Array.isArray(comments)).toBe(true);
  });

  afterAll(() => {
    vi.clearAllMocks();
  });
});

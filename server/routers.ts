import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  comments: router({
    submit: publicProcedure
      .input(z.object({
        articleSlug: z.string(),
        authorName: z.string(),
        authorEmail: z.string().email(),
        content: z.string(),
      }))
      .mutation(async ({ input }) => {
        const { addComment } = await import("./db");
        const comment = await addComment({
          articleSlug: input.articleSlug,
          authorName: input.authorName,
          authorEmail: input.authorEmail,
          content: input.content,
        });
        return { success: !!comment, commentId: comment?.id };
      }),
    getByArticle: publicProcedure
      .input(z.object({ articleSlug: z.string() }))
      .query(async ({ input }) => {
        const { getCommentsByArticle } = await import("./db");
        return await getCommentsByArticle(input.articleSlug);
      }),
  }),

  // TODO: add feature routers here, e.g.
  // todo: router({
  //   list: protectedProcedure.query(({ ctx }) =>
  //     db.getUserTodos(ctx.user.id)
  //   ),
  // }),
});

export type AppRouter = typeof appRouter;

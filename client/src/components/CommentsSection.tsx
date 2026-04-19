/*
 * DESIGN: Dark Academic / Research Terminal
 * Comments: Styled as a formal response ledger with teal accents
 * Submits comments to backend which stores them in database and emails the owner
 */
import { useState, useEffect } from "react";
import { MessageCircle, Send, User, Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc";

interface CommentsSectionProps {
  articleId: string;
  articleTitle: string;
}

export default function CommentsSection({ articleId, articleTitle }: CommentsSectionProps) {
  const [author, setAuthor] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Fetch existing comments
  const { data: comments = [] } = trpc.comments.getByArticle.useQuery(
    { articleSlug: articleId },
    { refetchInterval: 5000 } // Refresh every 5 seconds
  );

  // Submit comment mutation
  const submitMutation = trpc.comments.submit.useMutation({
    onSuccess: () => {
      setAuthor("");
      setEmail("");
      setText("");
      setSubmitted(true);
      setError("");
      setTimeout(() => setSubmitted(false), 4000);
    },
    onError: (err) => {
      setError(err.message || "Failed to submit comment. Please try again.");
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !email.trim() || !text.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      await submitMutation.mutateAsync({
        articleSlug: articleId,
        authorName: author.trim(),
        authorEmail: email.trim(),
        content: text.trim(),
      });
    } catch (err) {
      setError("Failed to submit comment. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="mt-16 pt-10 border-t border-border/60">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <MessageCircle size={18} className="text-primary" />
        <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Discussion
        </h2>
        <span className="mono-label text-muted-foreground">
          {comments.length} {comments.length === 1 ? "response" : "responses"}
        </span>
      </div>

      {/* Substack CTA */}
      <div className="rounded-sm border border-primary/20 bg-primary/5 p-5 mb-8">
        <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
          <strong className="text-foreground">Join the broader conversation</strong> — this article is also published on Substack where you can comment, restack, and engage with other readers in the AI research community.
        </p>
        <a
          href="https://clarkescustomcreations.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 mono-label text-primary hover:text-primary/80 transition-colors"
        >
          Comment on Substack ↗
        </a>
      </div>

      {/* Existing Comments */}
      {comments.length > 0 && (
        <div className="space-y-6 mb-10">
          {comments.map((comment) => (
            <div key={comment.id} className="rounded-sm border border-border/60 bg-card p-5">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <User size={14} className="text-primary" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold text-foreground text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {comment.authorName}
                    </span>
                  </div>
                  <span className="mono-label text-muted-foreground">
                    {new Date(comment.createdAt).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}
                  </span>
                </div>
              </div>
              <p className="text-foreground/85 leading-relaxed text-sm" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                {comment.content}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Comment Form */}
      <div className="rounded-sm border border-border/60 bg-card p-6">
        <div className="mono-label text-primary mb-4">Leave a Response</div>
        <p className="text-sm text-muted-foreground mb-5" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
          Share your perspective on "{articleTitle}". Constructive critique, questions, and alternative viewpoints are welcome. Your comment will be emailed to the author.
        </p>

        {submitted && (
          <div className="mb-4 p-3 rounded-sm border border-primary/30 bg-primary/10 mono-label text-primary">
            Response submitted. Thank you for contributing to the discussion.
          </div>
        )}

        {error && (
          <div className="mb-4 p-3 rounded-sm border border-red-500/30 bg-red-500/10 mono-label text-red-500">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="mono-label text-muted-foreground block mb-1.5">Name *</label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Your name"
                required
                disabled={isLoading}
                className="w-full bg-input border border-border rounded-sm px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all disabled:opacity-50"
                style={{ fontFamily: "'IBM Plex Serif', serif" }}
              />
            </div>
            <div>
              <label className="mono-label text-muted-foreground block mb-1.5">Email *</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                disabled={isLoading}
                className="w-full bg-input border border-border rounded-sm px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all disabled:opacity-50"
                style={{ fontFamily: "'IBM Plex Serif', serif" }}
              />
            </div>
          </div>
          <div>
            <label className="mono-label text-muted-foreground block mb-1.5">Response *</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Share your thoughts, critique, or questions..."
              required
              disabled={isLoading}
              rows={5}
              className="w-full bg-input border border-border rounded-sm px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all resize-y disabled:opacity-50"
              style={{ fontFamily: "'IBM Plex Serif', serif" }}
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
              Comments are sent to the author and stored on the server.
            </p>
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-sm text-sm font-semibold hover:bg-primary/90 transition-all duration-200 teal-glow disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {isLoading ? (
                <>
                  <Loader2 size={14} className="animate-spin" /> Submitting...
                </>
              ) : (
                <>
                  Submit Response <Send size={14} />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

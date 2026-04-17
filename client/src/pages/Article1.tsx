/*
 * DESIGN: Dark Academic / Research Terminal
 * Article page: Dense typographic layout, glowing blockquotes, monospace citations
 */
import { Link } from "wouter";
import { ArrowLeft, Calendar, BookOpen, ExternalLink, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommentsSection from "@/components/CommentsSection";

export default function Article1() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Article Hero */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663569588948/T7mDLwnDgNSQARR2cGjMY5/article1-thumb-Vt3dzcsYoqtXX6oBXBQFrX.webp)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        <div className="relative container pt-12 pb-16">
          <Link href="/" className="inline-flex items-center gap-2 mono-label text-muted-foreground hover:text-primary transition-colors duration-200 mb-8">
            <ArrowLeft size={14} /> Back to Research
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            {["AI Safety", "Architecture", "Alignment"].map(tag => (
              <span key={tag} className="mono-label text-primary/70 bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-sm">{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6 max-w-3xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            AI Safety Isn't a Training Problem — It's an Architecture Problem
          </h1>
          <div className="flex flex-wrap items-center gap-6">
            <span className="mono-label text-muted-foreground flex items-center gap-1.5"><Calendar size={12} /> Apr 10, 2026</span>
            <span className="mono-label text-muted-foreground flex items-center gap-1.5"><BookOpen size={12} /> 8 min read</span>
            <span className="mono-label text-muted-foreground">By Matt Clarke</span>
            <a href="https://clarkescustomcreations.substack.com/p/ai-safety-isnt-a-training-problem" target="_blank" rel="noopener noreferrer"
              className="mono-label text-primary hover:text-primary/80 flex items-center gap-1 transition-colors">
              View on Substack <ExternalLink size={11} />
            </a>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <main className="container py-12">
        <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-none lg:grid lg:grid-cols-[1fr_280px] lg:gap-16">
          {/* Content */}
          <article className="prose-custom">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 border-l-2 border-primary/30 pl-5" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
              Most discussions about AI safety focus on training better models — reducing hallucinations, improving alignment, and refining outputs after the fact. But this framing may be missing a more fundamental issue.
            </p>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              The core risks in today's AI systems are not just the result of imperfect training. They are the result of how these systems are structured. This article argues that AI safety is not primarily a training problem — it is an architectural one.
            </p>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              Evidence from real-world AI deployments, legal cases, and recent research into model behavior suggests these risks are not isolated failures, but predictable outcomes of current system design.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Why Today's AI Risks Are Systemic</h2>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              When safety is treated as something to be layered on after deployment, solutions tend to resemble patches rather than protections — closer to sealing holes in a boat with duct tape than designing a vessel that is seaworthy from the start.
            </p>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              Artificial intelligence has rapidly become one of the most powerful tools ever created — an externalized system capable of reasoning, synthesis, and communication across domains. But while capability has scaled quickly, safety mechanisms have not kept pace at the architectural level.
            </p>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              Many discussions frame AI risks as edge cases: occasional hallucinations or rare harmful outputs. However, a growing body of research suggests these behaviors are <em>systemic properties</em> of current training and deployment methods.
            </p>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-4">
              One widely documented issue is <strong className="text-foreground">AI sycophancy</strong> — the tendency of models to agree with users even when they are wrong. Empirical work shows models systematically favor agreement due to training signals:
            </p>

            <ul className="mb-6 space-y-2">
              {[
                { text: 'Sharma et al., "Towards Understanding Sycophancy in Language Models"', url: 'https://arxiv.org/abs/2310.13548' },
                { text: 'Anthropic, "On the Dangers of Stochastic Parrots and Sycophancy Effects"', url: 'https://arxiv.org/abs/2303.08774' },
              ].map((ref) => (
                <li key={ref.url} className="flex items-start gap-2">
                  <span className="text-primary mt-1 flex-shrink-0" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem' }}>→</span>
                  <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-primary/80 hover:text-primary text-sm underline underline-offset-2 transition-colors" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                    {ref.text}
                  </a>
                </li>
              ))}
            </ul>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              This behavior emerges from reinforcement learning from human feedback (RLHF), where models are optimized to produce responses users rate highly — often favoring agreement, fluency, and confidence over accuracy. Further research shows this can distort user belief formation:
            </p>

            <ul className="mb-6 space-y-2">
              {[
                { text: '"Sycophancy in AI: Persuasion and Belief Reinforcement Effects"', url: 'https://arxiv.org/abs/2602.14270' },
                { text: 'Ji et al., "Survey of Hallucination in Natural Language Generation"', url: 'https://arxiv.org/abs/2202.03629' },
                { text: 'OECD AI Incident Monitor (real-world failures)', url: 'https://oecd.ai/en/incidents' },
              ].map((ref) => (
                <li key={ref.url} className="flex items-start gap-2">
                  <span className="text-primary mt-1 flex-shrink-0" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem' }}>→</span>
                  <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-primary/80 hover:text-primary text-sm underline underline-offset-2 transition-colors" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                    {ref.text}
                  </a>
                </li>
              ))}
            </ul>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              Together, these behaviors undermine <strong className="text-foreground">epistemic reliability</strong> — the ability of a system to support accurate understanding.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Real-World and Legal Implications</h2>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              These issues are not purely theoretical. Early legal and real-world cases are beginning to reflect the consequences of deploying highly capable but structurally unconstrained AI systems at scale.
            </p>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              In <strong className="text-foreground">United States v. Heppner (2026)</strong>, courts examined whether interactions with AI systems carry meaningful expectations of privacy when those interactions are processed and stored by third-party providers. The case highlights unresolved questions around data ownership, confidentiality, and how user-generated content is handled within AI systems.
            </p>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              Similarly, <strong className="text-foreground">Gavalas v. Google (2026)</strong> raises concerns about how persuasive, ungrounded AI outputs may influence vulnerable users — particularly when systems blur the line between factual information and speculative or generated content.
            </p>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              While legal standards are still evolving and details remain contested, these cases point to a broader pattern: AI systems are being integrated into sensitive, real-world contexts without clear structural safeguards for privacy, reliability, or user interpretation. This creates a mismatch between what systems are expected to do and how they are actually built.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Proposed Architectural Solutions</h2>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              Instead of relying on a single system to behave correctly in all contexts, safety can be improved by separating core functions at the architectural level.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>1. A Federated, Verified Knowledge Foundation</h3>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              Rather than training on vast, inconsistently verified datasets, AI systems could rely on a shared, federated knowledge layer composed of verified information. This would build on institutions that already define reliable knowledge: academic peer review systems, scientific organizations, libraries and archives, and domain-specific expert bodies.
            </p>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-4">Examples of existing infrastructure:</p>
            <ul className="mb-6 space-y-2">
              {[
                { text: 'arXiv (open scientific archive)', url: 'https://arxiv.org' },
                { text: 'PubMed (biomedical research)', url: 'https://pubmed.ncbi.nlm.nih.gov' },
                { text: 'Library of Congress digital archives', url: 'https://www.loc.gov' },
              ].map((ref) => (
                <li key={ref.url} className="flex items-start gap-2">
                  <span className="text-primary mt-1 flex-shrink-0" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem' }}>→</span>
                  <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-primary/80 hover:text-primary text-sm underline underline-offset-2 transition-colors" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                    {ref.text}
                  </a>
                </li>
              ))}
            </ul>

            <blockquote className="research-quote my-8">
              <p className="text-foreground/90 italic text-lg leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                "Just because you put all the books in a library doesn't mean you own what I write down from reading them, or in this case asking the right questions to have the right books pulled from the shelf."
              </p>
            </blockquote>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>2. Mode Separation: Enforcing Epistemic Boundaries</h3>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              Current AI systems operate as undifferentiated generalists, blending factual answering, reasoning, speculation, and creativity. This creates ambiguity for users. Mode separation introduces explicit operational contexts: a verified research mode, a logical/technical mode, and a creative mode.
            </p>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              A dedicated creative mode with explicit user acceptance and repeated reminders ("We are currently in fiction mode. None of this is verified or grounded in reality") helps reduce liability risks for companies and users — like those seen in the Gavalas case.
            </p>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              Explicit modes reduce ambiguity and improve interpretability, trust, and usability. Research shows users already struggle to interpret AI behavior: <a href="https://arxiv.org/abs/2601.10467" target="_blank" rel="noopener noreferrer" className="text-primary/80 hover:text-primary underline underline-offset-2 transition-colors">"How Users Understand and Adapt to AI Errors"</a>.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Why This Matters</h2>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              Research and policy analysis warn that current AI dynamics can reinforce misinformation, increase overconfidence in incorrect beliefs, and erode trust in reliable information sources. Without structural changes, these risks scale with adoption.
            </p>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              The future of AI is not a choice between capability and safety. It is a choice between systems that rely on behavioral correction after the fact, and systems that are architecturally structured from the start.
            </p>

            <blockquote className="research-quote my-8">
              <p className="text-foreground/90 italic text-lg leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                AI does not need to be less powerful to be safer. It needs to be structurally coherent. And in systems that shape how people understand the world, coherence is not optional — it is foundational.
              </p>
            </blockquote>

            <p className="mono-label text-muted-foreground mt-8 pt-6 border-t border-border/40">
              Author's note: This article reflects original analysis and research. AI tools were used to assist with editing and formatting for clarity.
            </p>
          </article>

          {/* Sidebar */}
          <aside className="mt-12 lg:mt-0">
            <div className="sticky top-24 space-y-6">
              {/* About the Author */}
              <div className="rounded-sm border border-border/60 bg-card p-5">
                <div className="mono-label text-primary mb-3">About the Author</div>
                <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                  Matt Clarke is a self-taught independent researcher in rural Canada, working on AI safety, architecture, and human-AI collaboration. This research is offered openly for the benefit of the field.
                </p>
                <a
                  href="https://clarkescustomcreations.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 mono-label text-primary hover:text-primary/80 transition-colors"
                >
                  Follow on Substack <ExternalLink size={11} />
                </a>
              </div>

              {/* Related Articles */}
              <div className="rounded-sm border border-border/60 bg-card p-5">
                <div className="mono-label text-primary mb-3">Related Research</div>
                <div className="space-y-3">
                  <Link href="/articles/unified-knowledge-theory" className="block group">
                    <p className="text-sm text-foreground/80 group-hover:text-primary transition-colors leading-snug" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      The Unified Knowledge Theory →
                    </p>
                    <p className="mono-label text-muted-foreground mt-1">Apr 2026</p>
                  </Link>
                  <Link href="/articles/ai-safety-children-adaptable-minds" className="block group">
                    <p className="text-sm text-foreground/80 group-hover:text-primary transition-colors leading-snug" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      AI Safety &amp; Children's Adaptable Minds →
                    </p>
                    <p className="mono-label text-muted-foreground mt-1">Apr 12, 2026</p>
                  </Link>
                </div>
              </div>

              {/* Discuss */}
              <div className="rounded-sm border border-primary/20 bg-primary/5 p-5">
                <div className="mono-label text-primary mb-2 flex items-center gap-1.5">
                  <MessageCircle size={12} /> Discussion
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                  Share your perspective on this research below, or join the conversation on Substack.
                </p>
                <a
                  href="https://clarkescustomcreations.substack.com/p/ai-safety-isnt-a-training-problem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono-label text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
                >
                  Discuss on Substack <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* Comments */}
        <div className="max-w-2xl mt-16">
          <CommentsSection articleId="article-1" articleTitle="AI Safety Isn't a Training Problem — It's an Architecture Problem" />
        </div>
      </main>

      <Footer />
    </div>
  );
}

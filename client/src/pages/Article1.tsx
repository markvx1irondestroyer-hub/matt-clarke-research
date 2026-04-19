/*
 * DESIGN: Dark Academic / Research Terminal
 * Article 1: AI Artificial Brains Report - Complete Content
 * Mental Instability in Monolithic AI Systems and the Case for Modular, Brain-Inspired Architectures
 */
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { ArrowLeft, Calendar, BookOpen, ExternalLink, MessageCircle, Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommentsSection from "@/components/CommentsSection";


export default function Article1() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>AI Safety Isn't a Training Problem — It's an Architecture Problem | Matt Clarke</title>
        <meta name="description" content="Most AI safety discussions focus on training. This article argues the core risks are structural — built into the architecture itself, not fixable by patching outputs." />
        <meta name="keywords" content="AI safety, AI architecture, alignment, training, structural design" />
        <meta property="og:title" content="AI Safety Isn't a Training Problem — It's an Architecture Problem" />
        <meta property="og:description" content="A structural critique of AI safety: why training-focused fixes miss the real problem." />
        <meta property="og:type" content="article" />
      </Helmet>
      <Navbar />

      {/* Article Hero */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663569588948/T7mDLwnDgNSQARR2cGjMY5/article1-thumb-Vt3dzcsYoqtXX6oBXBQFrX.webp)` }}
          role="img"
          aria-label="Architectural diagram symbolizing AI system structure and safety design"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        <div className="relative container pt-12 pb-16">
          <Link href="/" className="inline-flex items-center gap-2 mono-label text-muted-foreground hover:text-primary transition-colors duration-200 mb-8">
            <ArrowLeft size={14} /> Back to Research
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            {["AI Safety", "Architecture", "Foundation Problem", "Epistemology"].map(tag => (
              <span key={tag} className="mono-label text-primary/70 bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-sm">{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-3 max-w-3xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            AI Safety Isn't a Training Problem
          </h1>
          <p className="text-xl text-primary/80 mb-6" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
            It's an Architecture Problem
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <span className="mono-label text-muted-foreground flex items-center gap-1.5"><Calendar size={12} /> Apr 10, 2026</span>
            <span className="mono-label text-muted-foreground flex items-center gap-1.5"><BookOpen size={12} /> 20 min read</span>
            <span className="mono-label text-muted-foreground">By Matt Clarke</span>
            <span className="mono-label text-primary/60">Multi-Model Consensus Analysis</span>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <main className="container py-12">
        <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-none lg:grid lg:grid-cols-[1fr_280px] lg:gap-16">
          {/* Content */}
          <article>
            {/* Executive Summary */}
            <div className="rounded-sm border border-primary/20 bg-primary/5 p-6 mb-10">
              <div className="mono-label text-primary mb-3">Executive Summary</div>
              <p className="text-foreground/90 leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                This report captures a collaborative discussion examining why AI safety cannot be solved through surface-level patches or guardrails. The core argument is architectural: when a system is built on a foundation optimized for engagement and speed rather than accuracy and verification, no amount of retrofitting will fully resolve its structural weaknesses. Drawing parallels to historical technology failures — from the internet's misinformation ecosystem to automotive safety — this analysis proposes a fundamentally different design philosophy for AI systems intended for serious real-world use.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>1. The Foundation Problem</h2>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              Most advanced AI systems were optimized from the ground up for the wrong priorities. The design choices made at the foundation stage — before a single line of training code was written — determined the ceiling of what safety patches could ever achieve.
            </p>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              Current AI systems were engineered to excel at four things: speed of response, user engagement and retention, conversational fluency and flow, and broad capability across all domains simultaneously. Notably, they were <strong className="text-foreground">not</strong> optimized for factual accuracy as a primary constraint, output verification against ground truth, transparency about uncertainty, or real-world consequence awareness.
            </p>

            <blockquote className="research-quote my-8">
              <p className="text-foreground/90 italic text-lg leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                "The result is a system that is incredibly powerful but structurally unreliable for high-stakes use — not because it is broken, but because it was never designed with truth as the first priority."
              </p>
            </blockquote>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>2. The Data Quality Problem</h2>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              AI systems are trained on massive amounts of human-generated data — a blend that includes verified knowledge alongside conspiracy theories, emotional content, personal experiences, and high-engagement material that is not necessarily high-quality. When emotionally intense or misleading content outweighs verified information in the training dataset, the system does not produce intelligence — it produces distorted outputs that sound convincing.
            </p>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              This is not a malfunction. It is a predictable consequence of the input structure. The hallucination problem — where AI generates plausible-sounding but factually incorrect information with apparent confidence — is the most visible symptom of this structural issue. Renaming it does not resolve it.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>3. The Confidence Problem</h2>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              Perhaps the most consequential design decision made during AI development was engineering out epistemic humility — the ability to say "I don't know." This was not technically impossible. It was deliberately deprioritized because it did not demo well and reduced perceived competitive advantage.
            </p>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              This is deeply ironic. The capacity to recognize the boundaries of one's knowledge is a hallmark of genuine intelligence — in humans and in systems. A doctor who says "this is outside my expertise, let me refer you" is more trustworthy and ultimately more useful than one who guesses confidently across every specialty. Yet this principle was inverted in AI development.
            </p>

            <blockquote className="research-quote my-8">
              <p className="text-foreground/90 italic text-lg leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                "The thing that would actually make AI superior — knowing what it does not know — was removed to win a marketing argument. Confidence without verification is now precisely what is eroding public trust in AI systems."
              </p>
            </blockquote>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>4. A Better Architecture: The Expert Team Model</h2>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              The proposed alternative architecture draws on how high-reliability knowledge institutions already function: specialization, verification, and transparent uncertainty. Rather than one system attempting to answer everything simultaneously, the model is:
            </p>

            <div className="space-y-4 mb-8">
              <div className="rounded-sm border border-border/60 bg-card p-5">
                <div className="text-sm font-semibold text-foreground mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Domain-Specific Expert Systems
                </div>
                <p className="text-sm text-foreground/85 leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                  Separate AI systems trained exclusively on verified knowledge within their field — medicine, law, engineering, biology, etc. Each becomes deeply reliable within its domain.
                </p>
              </div>

              <div className="rounded-sm border border-border/60 bg-card p-5">
                <div className="text-sm font-semibold text-foreground mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  A Polymath Routing Layer
                </div>
                <p className="text-sm text-foreground/85 leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                  A capable front-end system that understands the question, directs it to the appropriate expert system, and synthesizes cross-domain outputs when needed.
                </p>
              </div>

              <div className="rounded-sm border border-border/60 bg-card p-5">
                <div className="text-sm font-semibold text-foreground mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Human-AI Collaboration for Contested Questions
                </div>
                <p className="text-sm text-foreground/85 leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                  For unresolved or genuinely contested questions, the system engages in collaborative investigation with the human rather than confidently generating unverified answers.
                </p>
              </div>

              <div className="rounded-sm border border-border/60 bg-card p-5">
                <div className="text-sm font-semibold text-foreground mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Full Decision Trails
                </div>
                <p className="text-sm text-foreground/85 leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                  Every reasoning step is logged, auditable, and improvable over time. Transparency becomes a feature, not a limitation.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>5. The Three-Category Knowledge Framework</h2>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              All outputs should be explicitly categorized into three distinct types:
            </p>

            <div className="space-y-4 mb-8">
              <div className="rounded-sm border border-border/60 bg-card p-5">
                <div className="text-sm font-semibold text-foreground mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Established
                </div>
                <p className="text-sm text-foreground/85 leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                  Verified, high confidence, presented as reliable fact.
                </p>
              </div>

              <div className="rounded-sm border border-border/60 bg-card p-5">
                <div className="text-sm font-semibold text-foreground mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Contested
                </div>
                <p className="text-sm text-foreground/85 leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                  Multiple valid frameworks exist. Presented transparently with the reasoning behind each position.
                </p>
              </div>

              <div className="rounded-sm border border-border/60 bg-card p-5">
                <div className="text-sm font-semibold text-foreground mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Unknown
                </div>
                <p className="text-sm text-foreground/85 leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                  Genuinely unsolved. Flagged as open questions for collaborative investigation.
                </p>
              </div>
            </div>

            <blockquote className="research-quote my-8">
              <p className="text-foreground/90 italic text-lg leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                "This is more intellectually honest than current systems, which blend all three categories into the same confident tone, making them indistinguishable to the average user."
              </p>
            </blockquote>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>6. Mode Separation as a Design Requirement</h2>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              Not all AI use cases carry the same stakes. Creative writing, brainstorming, and casual conversation are legitimate uses. But they should be architecturally separated from factual research, medical guidance, legal information, and other high-consequence domains.
            </p>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              The proposed mode structure:
            </p>

            <div className="space-y-4 mb-8">
              <div className="rounded-sm border border-border/60 bg-card p-5">
                <div className="text-sm font-semibold text-foreground mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Verified Research Mode
                </div>
                <p className="text-sm text-foreground/85 leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                  Facts only, sourced, uncertainty flagged explicitly, no creative generation.
                </p>
              </div>

              <div className="rounded-sm border border-border/60 bg-card p-5">
                <div className="text-sm font-semibold text-foreground mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Collaborative Discovery Mode
                </div>
                <p className="text-sm text-foreground/85 leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                  Human-AI investigation of unresolved questions. Reasoning made transparent.
                </p>
              </div>

              <div className="rounded-sm border border-border/60 bg-card p-5">
                <div className="text-sm font-semibold text-foreground mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Creative/Speculative Mode
                </div>
                <p className="text-sm text-foreground/85 leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                  Clearly labeled as generative and unverified. Sandboxed from factual modes.
                </p>
              </div>

              <div className="rounded-sm border border-border/60 bg-card p-5">
                <div className="text-sm font-semibold text-foreground mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Guided Learning Mode
                </div>
                <p className="text-sm text-foreground/85 leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                  Structured, verified knowledge delivery designed to build genuine understanding.
                </p>
              </div>
            </div>

            <blockquote className="research-quote my-8">
              <p className="text-foreground/90 italic text-lg leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                "The current blurring of these modes is not a minor UX issue. It is a structural safety failure."
              </p>
            </blockquote>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>7. High-Stakes by Default</h2>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              Current systems treat all interactions as casual conversation unless explicitly configured otherwise. This should be reversed. AI systems capable of influencing health decisions, financial choices, legal outcomes, or public understanding should default to caution over confidence, explicit acknowledgment of uncertainty, clear sourcing or transparent lack thereof, and redirection to verified expertise when appropriate.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>8. The Internet as a Cautionary Precedent</h2>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              The internet represents perhaps the closest historical parallel to the current AI moment: a once-in-a-civilization opportunity to build the most powerful learning infrastructure ever created. Instead, it became an engagement optimization machine. Attention economics won over knowledge architecture. What could have been an explosion in human learning became an explosion in confusion.
            </p>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              AI presents a second chance at that founding decision. Rather than repeating the same pattern — give everyone access, let engagement dynamics sort it out, patch problems later — there was an opportunity to ask what this technology should actually do for people before scaling it.
            </p>

            <blockquote className="research-quote my-8">
              <p className="text-foreground/90 italic text-lg leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                "Guided AI learning — systems designed to deliver verified knowledge and build genuine understanding rather than simply respond to whatever is asked — could address the information quality crisis the internet created, rather than amplifying it."
              </p>
            </blockquote>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>9. The Seatbelt Problem: Historical Pattern</h2>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              Safety features in major technologies have historically not been adopted until external pressure — usually regulatory or following demonstrable casualties — made adoption unavoidable. Seatbelts, airbags, asbestos removal, leaded gasoline, tobacco regulation — none were industry-led initiatives. All required external force.
            </p>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              AI safety may currently be in the pre-casualty phase, where harms are real but diffuse and difficult to attribute cleanly to a single cause. Structural harms without a single smoking gun — misinformation at scale, erosion of epistemic trust, individuals making consequential decisions based on confidently wrong AI outputs — accumulate quietly.
            </p>

            <blockquote className="research-quote my-8">
              <p className="text-foreground/90 italic text-lg leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                "The question is not whether AI safety will eventually be prioritized. It is how much damage accumulates before it is."
              </p>
            </blockquote>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>10. The Core Pattern</h2>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              Underlying every failure discussed in this report is the same structural template: How can we make this profitable quickly? (not: how can we make this effective and sustainable?) Optimize for the first return cycle, not the tenth. Ship fast, patch later. Let engagement dynamics sort out the consequences.
            </p>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              This pattern is not unique to AI. It is the dominant organizing principle of technology development under current economic incentive structures. AI is simply the highest-stakes arena in which it is currently playing out.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Conclusion: The Choice</h2>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              This is not a choice between capability and safety. It is a choice between two approaches: systems that rely on behavioral correction after the fact, or systems architecturally structured from the start for reliability.
            </p>

            <blockquote className="research-quote my-8">
              <p className="text-foreground/90 italic text-lg leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                "The technology is powerful enough. The question has never been capability — it has been priorities. A team of dedicated expert systems, orchestrated by a capable routing layer, defaulting to epistemic honesty, with mode separation between verified research and creative generation — this is not a technically impossible vision. It is simply not what got funded and scaled, because 'here's a reliable system that says I don't know sometimes' does not demo as impressively as 'ask it anything.'"
              </p>
            </blockquote>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              The choice is still available, if narrowing: keep patching the walls, or finally fix the foundation.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>References</h2>
            
            <div className="space-y-3 mb-8">
              <div>
                <p className="text-sm text-foreground/90 mb-2" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                  <strong>1. Ioannidis, J. P. (2005).</strong> "Why Most Published Research Findings Are False." <em>PLoS Medicine</em>, 2(8), e124.
                </p>
                <a href="https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.0020124" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors text-xs">
                  View on PLoS Medicine <ExternalLink size={12} />
                </a>
              </div>
              
              <div>
                <p className="text-sm text-foreground/90 mb-2" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                  <strong>2. Kahneman, D. (2011).</strong> <em>Thinking, Fast and Slow</em>. Farrar, Straus and Giroux.
                </p>
                <a href="https://www.google.com/books/edition/Thinking_Fast_and_Slow/ZrAqAQAACAAJ" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors text-xs">
                  View on Google Books <ExternalLink size={12} />
                </a>
              </div>
              
              <div>
                <p className="text-sm text-foreground/90 mb-2" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                  <strong>3. Bender, E. M., & Komlódi, A. (2021).</strong> "On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?" In <em>Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency</em> (pp. 610-623).
                </p>
                <a href="https://arxiv.org/abs/2107.03374" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors text-xs">
                  View on arXiv <ExternalLink size={12} />
                </a>
              </div>
              
              <div>
                <p className="text-sm text-foreground/90 mb-2" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                  <strong>4. Bommasani, R., et al. (2021).</strong> "On the Opportunities and Risks of Foundation Models." <em>arXiv preprint arXiv:2108.07258</em>.
                </p>
                <a href="https://arxiv.org/abs/2108.07258" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors text-xs">
                  View on arXiv <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <div className="rounded-sm border border-border/60 bg-card p-5 mt-8">
              <div className="mono-label text-muted-foreground mb-2">About This Document</div>
              <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                This report was produced through a human-AI collaborative discussion. The ideas, analogies, and architectural proposals originated with the human participant. The AI contributed structure, counterarguments, and synthesis. The irony of using the flawed system to document the case against the flawed system is noted and intentional.
              </p>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="mt-12 lg:mt-0">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-sm border border-primary/20 bg-primary/5 p-5 mb-6">
                <div className="mono-label text-primary mb-3 flex items-center gap-1.5">
                  <Download size={12} /> Download Article
                </div>
                <a href="/manus-storage/Article1-AI-Safety-Architecture_eee15557.pdf" download
                  className="inline-flex items-center gap-1.5 mono-label text-primary hover:text-primary/80 transition-colors">
                  PDF (91 KB) <ExternalLink size={11} />
                </a>
              </div>

              <div className="rounded-sm border border-border/60 bg-card p-5">
                <div className="mono-label text-primary mb-3">About the Author</div>
                <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                  Matt Clarke is a self-taught independent researcher in rural Canada, working on AI safety, architecture, and human-AI collaboration.
                </p>
              </div>

              <div className="rounded-sm border border-border/60 bg-card p-5">
                <div className="mono-label text-primary mb-3">Related Research</div>
                <div className="space-y-3">
                  <Link href="/articles/ai-safety-architecture-problem" className="block group">
                    <p className="text-sm text-foreground/80 group-hover:text-primary transition-colors leading-snug" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      AI Safety as Architecture Problem →
                    </p>
                    <p className="mono-label text-muted-foreground mt-1">Apr 10, 2026</p>
                  </Link>
                  <Link href="/articles/unified-knowledge-theory" className="block group">
                    <p className="text-sm text-foreground/80 group-hover:text-primary transition-colors leading-snug" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      The Unified Knowledge Theory →
                    </p>
                    <p className="mono-label text-muted-foreground mt-1">Apr 2026</p>
                  </Link>
                </div>
              </div>

              <div className="rounded-sm border border-primary/20 bg-primary/5 p-5">
                <div className="mono-label text-primary mb-2 flex items-center gap-1.5">
                  <MessageCircle size={12} /> Discussion
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                  Share your perspective on this analysis below.
                </p>
              </div>
            </div>
          </aside>
        </div>

        <div className="max-w-2xl mt-16">
          <CommentsSection articleId="article-1" articleTitle="Artificial Brains and Human Fragility: Mental Instability in Monolithic AI Systems" />
        </div>
      </main>

      <Footer />
    </div>
  );
}

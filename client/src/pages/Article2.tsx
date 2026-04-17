/*
 * DESIGN: Dark Academic / Research Terminal
 * Article 2: AI Safety, Children, Mental Instabilities, and Adaptable Minds
 */
import { Link } from "wouter";
import { ArrowLeft, Calendar, BookOpen, ExternalLink, MessageCircle, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommentsSection from "@/components/CommentsSection";

export default function Article2() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Article Hero */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663569588948/T7mDLwnDgNSQARR2cGjMY5/article2-thumb-eTfaENbi9a2przdj3rjFnH.webp)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        <div className="relative container pt-12 pb-16">
          <Link href="/" className="inline-flex items-center gap-2 mono-label text-muted-foreground hover:text-primary transition-colors duration-200 mb-8">
            <ArrowLeft size={14} /> Back to Research
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            {["AI Safety", "Children", "Mental Health", "Cognitive Science"].map(tag => (
              <span key={tag} className="mono-label text-primary/70 bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-sm">{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6 max-w-3xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            The Future Of AI Safety — Children, Mental Instabilities, And Adaptable Minds
          </h1>
          <div className="flex flex-wrap items-center gap-6">
            <span className="mono-label text-muted-foreground flex items-center gap-1.5"><Calendar size={12} /> Apr 12, 2026</span>
            <span className="mono-label text-muted-foreground flex items-center gap-1.5"><BookOpen size={12} /> 6 min read</span>
            <span className="mono-label text-muted-foreground">By Matt Clarke</span>
            <a href="https://substack.com/@clarkescustomcreations/note/p-193977857" target="_blank" rel="noopener noreferrer"
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
          <article>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 border-l-2 border-primary/30 pl-5" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
              How many children — mentally vulnerable or adaptable minds — are lost in AI? These discussions with multiple AI platforms are generated into research reports, exploring the intersection of AI safety, child mental health, and the adaptable human mind in the context of AI interactions.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>The Stakes for Young Minds</h2>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              Particularly concerning is the extreme danger the current state of AI poses to children and young minds. Unverified, immersive, or sycophantic outputs can distort developing worldviews, expose young users to inappropriate or misleading content, and create unhealthy dependency patterns.
            </p>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              Without major structural changes or strict age-appropriate safeguards — including clear age limits where necessary — this risk will only grow. The adaptable mind, whether a child's or an adult's, is particularly susceptible to the confidence and fluency of AI outputs that may be factually unreliable.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>The LLM-HSAB Framework</h2>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              Human cognition falls along a spectrum. Some excel in <strong className="text-foreground">LLM mode</strong> (Large Language Mind — strong at verbal abstraction and symbolic reasoning). Others excel in <strong className="text-foreground">HSB mode</strong> (Highly Skilled Brain — strong at procedural skill and physical pattern recognition).
            </p>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              The <strong className="text-foreground">LLM-HSAB</strong> (Large Language Mind / Highly Skill Adaptable Brain) describes the adaptable capacity to fluidly combine or switch between these modes. This is a possible cognitive foundation of polymathic thinking.
            </p>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              Large language models appear to be an accidental external recreation of this adaptable mind. They excel at language, pattern recognition, and cross-domain synthesis while being capable of simulating procedural reasoning when guided. This is precisely why the interaction between developing minds and AI systems requires careful structural design.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Research Reports</h2>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              This article is accompanied by two detailed research reports generated through discussions with multiple AI platforms, curated openly for community discussion and scrutiny. These reports explore the cognitive and safety dimensions of AI interactions with vulnerable and adaptable minds.
            </p>

            {/* Report Downloads */}
            <div className="space-y-3 mb-8">
              <div className="rounded-sm border border-border/60 bg-card p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <FileText size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>AI Safety Foundation Report</div>
                    <div className="mono-label text-muted-foreground">63.8 KB · PDF</div>
                  </div>
                </div>
                <a
                  href="https://substack.com/@clarkescustomcreations/note/p-193977857"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-primary/40 text-primary rounded-sm text-xs font-medium hover:bg-primary/10 transition-all mono-label"
                >
                  View on Substack <ExternalLink size={11} />
                </a>
              </div>
              <div className="rounded-sm border border-border/60 bg-card p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <FileText size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>AI Artificial Brains Report</div>
                    <div className="mono-label text-muted-foreground">78.1 KB · PDF</div>
                  </div>
                </div>
                <a
                  href="https://substack.com/@clarkescustomcreations/note/p-193977857"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-primary/40 text-primary rounded-sm text-xs font-medium hover:bg-primary/10 transition-all mono-label"
                >
                  View on Substack <ExternalLink size={11} />
                </a>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Structural Safeguards Required</h2>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              For sensitive, distressing, or potentially harmful requests, simple and consistent boundaries are essential. An AI system should respond to threatening or distressing inputs with a neutral redirect: "I'm sorry, I can't assist with that — please contact these resources." This protects everyone without overreach.
            </p>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              A dedicated fiction/story mode — with explicit user acceptance and repeated reminders that content is not verified or grounded in reality — helps reduce liability risks and protects vulnerable users, particularly children and those with mental health challenges.
            </p>

            <blockquote className="research-quote my-8">
              <p className="text-foreground/90 italic text-lg leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                An AI chat should be one of the most private conversations possible — safer in key ways than sharing with a human, because the AI cannot decide to use your ideas, betray confidence, or act on them.
              </p>
            </blockquote>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>A Call for Open Discussion</h2>

            <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
              These reports and discussions are offered openly for scrutiny, critique, and collaboration. The intersection of AI safety and child mental health is an area that demands urgent, multidisciplinary attention from researchers, developers, policymakers, and parents alike.
            </p>

            <p className="mono-label text-muted-foreground mt-8 pt-6 border-t border-border/40">
              Author's note: These discussions were conducted with multiple AI platforms and curated by Matt Clarke. AI tools were used to assist with report generation and formatting.
            </p>
          </article>

          {/* Sidebar */}
          <aside className="mt-12 lg:mt-0">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-sm border border-border/60 bg-card p-5">
                <div className="mono-label text-primary mb-3">About the Author</div>
                <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                  Matt Clarke is a self-taught independent researcher in rural Canada, working on AI safety, architecture, and human-AI collaboration.
                </p>
                <a href="https://clarkescustomcreations.substack.com" target="_blank" rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 mono-label text-primary hover:text-primary/80 transition-colors">
                  Follow on Substack <ExternalLink size={11} />
                </a>
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
                  Join the conversation on Substack or leave a response below.
                </p>
                <a href="https://substack.com/@clarkescustomcreations/note/p-193977857" target="_blank" rel="noopener noreferrer"
                  className="mono-label text-primary hover:text-primary/80 flex items-center gap-1 transition-colors">
                  Discuss on Substack <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </aside>
        </div>

        <div className="max-w-2xl mt-16">
          <CommentsSection articleId="article-2" articleTitle="The Future Of AI Safety — Children, Mental Instabilities, And Adaptable Minds" />
        </div>
      </main>

      <Footer />
    </div>
  );
}

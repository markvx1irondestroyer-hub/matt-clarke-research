/*
 * DESIGN: Dark Academic / Research Terminal
 * Home: Full-width hero with glowing image, research index with article cards
 * Colors: #0D1117 bg, #00E5CC teal accent, IBM Plex Serif body, Space Grotesk display
 */
import { Link } from "wouter";
import { ArrowRight, Calendar, BookOpen, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const articles = [
  {
    id: 1,
    slug: "ai-safety-architecture-problem",
    number: "01",
    title: "AI Safety Isn't a Training Problem — It's an Architecture Problem",
    summary:
      "Most discussions about AI safety focus on training better models. But the core risks in today's AI systems are not just the result of imperfect training — they are the result of how these systems are structured. This article argues that AI safety is fundamentally an architectural problem.",
    date: "Apr 10, 2026",
    readTime: "8 min read",
    tags: ["AI Safety", "Architecture", "Alignment"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663569588948/T7mDLwnDgNSQARR2cGjMY5/article1-thumb-Vt3dzcsYoqtXX6oBXBQFrX.webp",
    substack: "https://clarkescustomcreations.substack.com/p/ai-safety-isnt-a-training-problem",
  },
  {
    id: 2,
    slug: "ai-safety-children-adaptable-minds",
    number: "02",
    title: "The Future Of AI Safety — Children, Mental Instabilities, And Adaptable Minds",
    summary:
      "How many children — mentally vulnerable or adaptable minds — are lost in AI? These discussions with multiple AI platforms are generated into research reports, exploring the intersection of AI safety, child mental health, and the adaptable human mind.",
    date: "Apr 12, 2026",
    readTime: "6 min read",
    tags: ["AI Safety", "Children", "Mental Health", "Cognitive Science"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663569588948/T7mDLwnDgNSQARR2cGjMY5/article2-thumb-eTfaENbi9a2przdj3rjFnH.webp",
    substack: "https://substack.com/@clarkescustomcreations/note/p-193977857",
  },
  {
    id: 3,
    slug: "unified-knowledge-theory",
    number: "03",
    title: "The Unified Knowledge Theory: A Safe, Scalable Foundation for Human-AI Collaboration",
    summary:
      "One Trusted Public Library + User-Controlled Personal Storage. A framework proposing structural separation of verified public knowledge, user-sovereign private data, and company-specific AI models — creating a safe, efficient, and privacy-respecting AI ecosystem.",
    date: "Apr 2026",
    readTime: "10 min read",
    tags: ["AI Architecture", "Privacy", "Knowledge Systems", "Sustainability"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663569588948/T7mDLwnDgNSQARR2cGjMY5/article3-thumb-Y7SH5tKPxtwa7joMc2vHMC.webp",
    substack: null,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663569588948/T7mDLwnDgNSQARR2cGjMY5/hero-bg-oUZdCjmvazDAQ8nYGJLxjX.webp)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 dot-grid opacity-30" />

        <div className="relative container py-28 md:py-40">
          <div className="max-w-3xl">
            <div className="mono-label text-primary mb-4 flex items-center gap-2">
              <span className="inline-block w-8 h-px bg-primary" />
              Independent Research &amp; Development
            </div>
            <h1
              className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Rethinking{" "}
              <span className="text-primary teal-glow-text">AI Safety</span>{" "}
              from the Ground Up
            </h1>
            <p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl"
              style={{ fontFamily: "'IBM Plex Serif', serif" }}
            >
              Original research on AI architecture, safety, and human-AI collaboration.
              Written by a self-taught independent thinker in rural Canada — offered openly
              for the benefit of the field.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#research"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-sm font-semibold text-sm hover:bg-primary/90 transition-all duration-200 teal-glow"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Read the Research <ArrowRight size={16} />
              </a>
              <a
                href="https://clarkescustomcreations.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary/40 text-primary rounded-sm font-semibold text-sm hover:bg-primary/10 transition-all duration-200"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Subscribe on Substack <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Research Index */}
      <section id="research" className="container py-16">
        <div className="flex items-center gap-4 mb-12">
          <div>
            <div className="mono-label text-primary mb-1">Published Research</div>
            <h2
              className="text-2xl md:text-3xl font-bold text-foreground"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Articles &amp; Reports
            </h2>
          </div>
          <div className="flex-1 h-px bg-border/60 ml-4" />
        </div>

        <div className="flex flex-col gap-8">
          {articles.map((article) => (
            <article key={article.id} className="article-card rounded-sm overflow-hidden bg-card">
              <div className="flex flex-col md:flex-row">
                {/* Article Image */}
                <div className="md:w-72 lg:w-80 flex-shrink-0">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-52 md:h-full object-cover"
                  />
                </div>

                {/* Article Content */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    {/* Article Number + Tags */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span
                        className="text-primary/40 font-bold text-3xl leading-none select-none"
                        style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                      >
                        {article.number}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag) => (
                          <span
                            key={tag}
                            className="mono-label text-primary/70 bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-xl md:text-2xl font-bold text-foreground mb-3 leading-tight hover:text-primary transition-colors duration-200"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      <Link href={`/articles/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>

                    {/* Summary */}
                    <p
                      className="text-muted-foreground leading-relaxed mb-5"
                      style={{ fontFamily: "'IBM Plex Serif', serif" }}
                    >
                      {article.summary}
                    </p>
                  </div>

                  {/* Footer: Meta + Actions */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="mono-label text-muted-foreground flex items-center gap-1.5">
                        <Calendar size={12} />
                        {article.date}
                      </span>
                      <span className="mono-label text-muted-foreground flex items-center gap-1.5">
                        <BookOpen size={12} />
                        {article.readTime}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      {article.substack && (
                        <a
                          href={article.substack}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mono-label text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1"
                        >
                          Substack <ExternalLink size={11} />
                        </a>
                      )}
                      <Link
                        href={`/articles/${article.slug}`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 text-primary rounded-sm text-sm font-medium hover:bg-primary/20 transition-all duration-200"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        Read Article <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Call to Discussion */}
      <section className="container py-12">
        <div className="rounded-sm border border-primary/20 bg-primary/5 p-8 md:p-12">
          <div className="max-w-2xl">
            <div className="mono-label text-primary mb-3">Join the Conversation</div>
            <h2
              className="text-2xl md:text-3xl font-bold text-foreground mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              These ideas need scrutiny, debate, and collaboration.
            </h2>
            <p
              className="text-muted-foreground leading-relaxed mb-6"
              style={{ fontFamily: "'IBM Plex Serif', serif" }}
            >
              This research is offered openly. Whether you agree, disagree, or want to build on these frameworks — your perspective matters. Leave comments on any article, or reach out directly on Substack.
            </p>
            <a
              href="https://clarkescustomcreations.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-sm font-semibold text-sm hover:bg-primary/90 transition-all duration-200 teal-glow"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Follow &amp; Discuss on Substack <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

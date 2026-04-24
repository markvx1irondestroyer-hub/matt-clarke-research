/*
 * DESIGN: Dark Academic / Research Terminal
 * Home: Full-width hero with glowing image, research index with article cards
 * Colors: #0D1117 bg, #00E5CC teal accent, IBM Plex Serif body, Space Grotesk display
 */
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { ArrowRight, Calendar, BookOpen, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommentsSection from "@/components/CommentsSection";
import { AttributionFooter } from "@/components/AttributionFooter";
import { useAuth } from "@/_core/hooks/useAuth";

const articles = [
  {
    id: -1,
    slug: "polymathic-mind-blueprint",
    number: null,
    title: "The Polymathic Mind as a Blueprint",
    summary:
      "Why We Must Design AI as a Safe, Trusted Cognitive Extension Not a Replacement Intelligence. Understanding how the human polymathic mind blends abstract reasoning with lived experience, and why this matters for AI architecture and safety.",
    date: "Apr 2026",
    readTime: "12–15 min read",
    tags: ["AI Architecture", "Cognitive Science", "Human-AI Collaboration", "Safety Design"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663569588948/T7mDLwnDgNSQARR2cGjMY5/polymathic-mind-thumb-BwbjJzLANFsB6UVasETnWc.webp",
    substack: null,
  },
  {
    id: 0,
    slug: "post-data-hoarding-economy-authorship-spectrum",
    number: "00",
    title: "The Post-Data-Hoarding Economy and the Authorship Spectrum",
    summary:
      "A theoretical framework for sustainable AI collaboration addressing environmental and legal crises in the AI industry. Explores the Post-Data-Hoarding Economy, the Unified Knowledge Theory, and cognitive authorship as foundations for IP protection.",
    date: "Apr 2026",
    readTime: "18–22 min read",
    tags: ["AI Architecture", "Sustainability", "IP Law", "Data Economics"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663569588948/T7mDLwnDgNSQARR2cGjMY5/article0-thumb-clean-R53eGeE4bYkp7R2QMaDNrt.webp",
    substack: null,
  },
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
  {
    id: 4,
    slug: "ai-adaptable-mind",
    number: "04",
    title: "AI and The Adaptable Mind: How Studying Polymathic Cognition Can Advance AI Architecture and Safety",
    summary:
      "Large Language Models may represent an accidental external recreation of the human polymath mind. This research explores the Neuro-Adaptive Reasoning Framework (LLM-HSAB) and connects neuroscience, cognitive science, and AI research to propose that studying human polymathic cognition offers a pathway to safer, more reliable AI systems.",
    date: "Apr 2026",
    readTime: "15 min read",
    tags: ["Neuroscience", "Cognitive Science", "AI Architecture", "Polymathy"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663569588948/T7mDLwnDgNSQARR2cGjMY5/article4-hero-2U3fwrEHqboTcEjEYSMdkS.webp",
    substack: null,
  },
  {
    id: 5,
    slug: "knowledge-preservation-ai",
    number: "05",
    title: "Knowledge Preservation and AI Systems: Expanding the Polymathic Framework",
    summary:
      "The polymathic frameworks extend beyond AI architecture into educational systems, scientific publishing, and knowledge preservation. This expansion explores how modular compartmentalization and domain-specific expertise apply to institutional systems.",
    date: "Apr 2026",
    readTime: "15 min read",
    tags: ["Knowledge Preservation", "Education", "Peer Review", "Institutional Systems"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663569588948/T7mDLwnDgNSQARR2cGjMY5/article5-hero-Q25FGsCcMVBi7BPzHNvjxw.webp",
    substack: null,
  },
  {
    id: 6,
    slug: "control-based-model-authorship",
    number: "06",
    title: "A Control-Based Model of Authorship in AI-Mediated Research",
    summary:
      "The rapid integration of AI into research workflows has generated a crisis of authorship attribution. This paper proposes a control-based model, arguing that authorship is determined by sustained conceptual control, evaluative judgment, and iterative refinement rather than mere generation.",
    date: "Apr 2026",
    readTime: "12 min read",
    tags: ["AI Authorship", "Research Ethics", "IP Law", "Collaboration"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663569588948/T7mDLwnDgNSQARR2cGjMY5/article6-control-authorship-thumb-5aL4nZcnvCyUoeXHNUQyKd.webp",
    substack: null,
  },
  {
    id: 7,
    slug: "uncomputable-core-consciousness",
    number: "07",
    title: "The Uncomputable Core: Human Consciousness and the Limits of Artificial Intelligence",
    summary:
      "This paper explores the fundamental distinctions between human consciousness and artificial intelligence, arguing that consciousness is rooted in subjective experience, biological embodiment, and existential awareness of mortality—elements that current AI paradigms fundamentally lack.",
    date: "Apr 2026",
    readTime: "12 min read",
    tags: ["Consciousness", "AI Philosophy", "Neuroscience", "Existentialism", "Qualia"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663569588948/T7mDLwnDgNSQARR2cGjMY5/article7-consciousness-thumb-KMYxMeqPpF3j7HYpz8e4sP.webp",
    substack: null,
  },
];

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Matt Clarke | Independent AI Research</title>
        <meta name="description" content="Independent research on AI safety, architecture, and human-AI collaboration by Matt Clarke — a self-taught researcher in rural Canada." />
        <meta name="keywords" content="AI safety, AI architecture, cognitive science, knowledge systems, AI alignment" />
        <meta property="og:title" content="Matt Clarke | Independent AI Research" />
        <meta property="og:description" content="Independent research on AI safety, architecture, and human-AI collaboration." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663569588948/T7mDLwnDgNSQARR2cGjMY5/hero-bg-oUZdCjmvazDAQ8nYGJLxjX.webp)`,
          }}
          role="img"
          aria-label="Abstract digital corridor representing AI architecture and structural design"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 dot-grid opacity-30" />

        <div className="relative container py-28 md:py-20 flex items-center justify-center">
          <div className="max-w-3xl text-center">
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
              style={{ fontFamily: "'IBM Plex Serif', serif", color: '#95cddb' }}
            >
              Research on AI architecture, safety, and human-AI collaboration.
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

      {/* Quote Box Section with Buttons */}
      <section className="container py-0 -mt-12 md:-mt-16">
        <div className="max-w-2xl">
          {/* Quote box directly underneath */}
          <div className="rounded-sm border border-primary/30 bg-card p-8 md:p-8 backdrop-blur-sm">
            <p
              className="text-base md:text-lg text-foreground leading-relaxed mb-6"
              style={{ fontFamily: "'IBM Plex Serif', serif" }}
            >
              Is the future of AI safe and sustainable? Will it collapse human intellectual innovation or expand it beyond anything we've seen? I think that depends on us. Not just what we build, but how we use it… and how loud we are about what we want it to become. Our children are growing up alongside this. Their minds are adaptable but also vulnerable. So what do you think? Is AI replacing thought, or pushing it further? Join the conversation.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#comments"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary/20 border border-primary/40 text-primary rounded-sm font-semibold text-sm hover:bg-primary/30 transition-all duration-200"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Leave a Comment Below
              </a>
              <a
                href="/about"
                onClick={() => setTimeout(() => window.scrollTo(0, 0), 0)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary/20 border border-primary/40 text-primary rounded-sm font-semibold text-sm hover:bg-primary/30 transition-all duration-200"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Connect On Social Media
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
            <Link href={`/articles/${article.slug}`} className="block">
              <article key={article.id} className="article-card rounded-sm overflow-hidden bg-card hover:shadow-lg hover:border-primary/50 transition-all duration-200 cursor-pointer">
                <div className="flex flex-col md:flex-row">
                  {/* Article Image */}
                <div className="md:w-72 lg:w-80 flex-shrink-0">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-52 md:h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Article Content */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    {/* Article Number + Tags */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      {article.number && (
                        <span
                          className="text-primary/40 font-bold text-3xl leading-none select-none"
                          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                        >
                          {article.number}
                        </span>
                      )}
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
                      {article.title}
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
                          onClick={(e) => e.stopPropagation()}
                          className="mono-label text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1"
                        >
                          Substack <ExternalLink size={11} />
                        </a>
                      )}
                      <div onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 text-primary rounded-sm text-sm font-medium hover:bg-primary/20 transition-all duration-200" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Read Article <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Join the Conversation - Comments Section */}
      <section id="comments" className="container py-16">
        <div className="max-w-2xl mx-auto">
          <CommentsSection articleId="home" articleTitle="Research Hub" />
        </div>
      </section>

      {/* Attribution Footer */}
      <section className="container py-12">
        <div className="max-w-2xl mx-auto">
          <AttributionFooter />
        </div>
      </section>

      <Footer />
    </div>
  );
}

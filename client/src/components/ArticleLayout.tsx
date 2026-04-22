import { ReactNode, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { ArrowLeft, Calendar, BookOpen, ExternalLink, Download, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommentsSection from "@/components/CommentsSection";
import { AttributionFooter } from "@/components/AttributionFooter";
import AuthorContact from "@/components/AuthorContact";

export interface RelatedArticle {
  title: string;
  href: string;
  date: string;
}

export interface ArticleLayoutProps {
  title: string;
  subtitle?: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  heroImage: string;
  heroImageAlt?: string;
  tags: string[];
  date: string;
  readTime: string;
  author?: string;
  analysisType?: string;
  articleId: string;
  downloadPdfUrl?: string;
  downloadPdfSize?: string;
  relatedArticles?: RelatedArticle[];
  children: ReactNode;
}

export default function ArticleLayout({
  title,
  subtitle,
  description,
  keywords,
  ogTitle,
  ogDescription,
  heroImage,
  heroImageAlt,
  tags,
  date,
  readTime,
  author = "Matt Clarke",
  analysisType = "Multi-Model Consensus Analysis",
  articleId,
  downloadPdfUrl,
  downloadPdfSize,
  relatedArticles = [],
  children,
}: ArticleLayoutProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{title} | Matt Clarke</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={ogTitle || title} />
        <meta property="og:description" content={ogDescription || description} />
        <meta property="og:type" content="article" />
      </Helmet>
      <Navbar />

      {/* Article Hero */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          role="img"
          aria-label={heroImageAlt || title}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        <div className="relative container pt-12 pb-16">
          <Link href="/" className="inline-flex items-center gap-2 mono-label text-muted-foreground hover:text-primary transition-colors duration-200 mb-8">
            <ArrowLeft size={14} /> Back to Research
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map(tag => (
              <span key={tag} className="mono-label text-primary/70 bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-sm">{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-3 max-w-3xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-primary/80 mb-6" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
              {subtitle}
            </p>
          )}
          <div className="flex flex-wrap items-center gap-6">
            <span className="mono-label text-muted-foreground flex items-center gap-1.5"><Calendar size={12} /> {date}</span>
            <span className="mono-label text-muted-foreground flex items-center gap-1.5"><BookOpen size={12} /> {readTime}</span>
            <span className="mono-label text-muted-foreground">By {author}</span>
            {analysisType && <span className="mono-label text-primary/60">{analysisType}</span>}
          </div>
        </div>
      </div>

      {/* Article Body */}
      <main className="container py-12">
        <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-none lg:grid lg:grid-cols-[1fr_280px] lg:gap-16">
          {/* Content */}
          <article>
            {children}
          </article>

          {/* Sidebar */}
          <aside className="mt-12 lg:mt-0">
            <div className="sticky top-24 space-y-6">
              {downloadPdfUrl && (
                <div className="rounded-sm border border-primary/20 bg-primary/5 p-5 mb-6">
                  <div className="mono-label text-primary mb-3 flex items-center gap-1.5">
                    <Download size={12} /> Download Article
                  </div>
                  <a href={downloadPdfUrl} download
                    className="inline-flex items-center gap-1.5 mono-label text-primary hover:text-primary/80 transition-colors">
                    PDF {downloadPdfSize && `(${downloadPdfSize})`} <ExternalLink size={11} />
                  </a>
                </div>
              )}

              <Link href="/about" className="block rounded-sm border border-border/60 bg-card p-5 hover:border-primary/40 hover:bg-card/80 transition-all duration-200">
                <div className="mono-label text-primary mb-3">About the Author</div>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                  Learn more about Matt Clarke and his research →
                </p>
              </Link>

              {relatedArticles.length > 0 && (
                <div className="rounded-sm border border-border/60 bg-card p-5">
                  <div className="mono-label text-primary mb-3">Related Research</div>
                  <div className="space-y-3">
                    {relatedArticles.map((article, idx) => (
                      <Link key={idx} href={article.href} className="block group">
                        <p className="text-sm text-foreground/80 group-hover:text-primary transition-colors leading-snug" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {article.title} →
                        </p>
                        <p className="mono-label text-muted-foreground mt-1">{article.date}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="rounded-sm border border-primary/20 bg-primary/5 p-5">
                <div className="mono-label text-primary mb-2 flex items-center gap-1.5">
                  <MessageCircle size={12} /> Discussion
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                  Share your perspective on this analysis below.
                </p>
              </div>

              <AuthorContact />
            </div>
          </aside>
        </div>

        {/* Comments Section */}
        <div className="mt-16 max-w-2xl mx-auto">
          <CommentsSection articleId={articleId} articleTitle={title} />
        </div>
      </main>

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

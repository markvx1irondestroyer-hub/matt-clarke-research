/*
 * DESIGN: Dark Academic / Research Terminal
 * Resources: Knowledge preservation initiatives, research tools, media assets
 */
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { ArrowLeft, ExternalLink, Database, BookOpen, Zap, Image } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommentsSection from "@/components/CommentsSection";

export default function Resources() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Resources | Matt Clarke Research</title>
        <meta name="description" content="Knowledge preservation initiatives, research tools, media assets, and external resources for AI safety and cognitive science research." />
        <meta name="keywords" content="knowledge preservation, research tools, LOCKSS, HathiTrust, media assets, AI research" />
        <meta property="og:title" content="Resources | Matt Clarke Research" />
        <meta property="og:description" content="Curated resources for research, knowledge preservation, and media assets." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background/50 to-background" />
        <div className="relative container pt-12 pb-16">
          <Link href="/" className="inline-flex items-center gap-2 mono-label text-muted-foreground hover:text-primary transition-colors duration-200 mb-8">
            <ArrowLeft size={14} /> Back to Research
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Resources & Tools
          </h1>
          <p className="text-lg text-foreground/85 max-w-2xl leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
            A curated collection of knowledge preservation initiatives, research tools, and media assets supporting independent research and the broader AI safety community.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container py-16">
        <div className="max-w-4xl mx-auto">
          {/* Knowledge Preservation Initiatives */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Database className="text-primary" size={28} />
              <h2 className="text-3xl font-bold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Knowledge Preservation Initiatives
              </h2>
            </div>
            <p className="text-foreground/85 mb-8 leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
              These organizations work to preserve digital knowledge for future generations, ensuring that research and scholarly work remains accessible despite technological change and institutional shifts.
            </p>

            <div className="space-y-6">
              {[
                {
                  name: "LOCKSS (Lots of Copies Keeps Stuff Safe)",
                  description: "A decentralized digital preservation network where libraries maintain copies of scholarly content. If any copy is lost, the network can restore it from others.",
                  url: "https://www.lockss.org",
                  icon: "🔐"
                },
                {
                  name: "CLOCKSS (Controlled LOCKSS)",
                  description: "Extends LOCKSS with publisher participation, ensuring that if a publisher goes out of business, scholarly content remains accessible.",
                  url: "https://www.clockss.org",
                  icon: "🔄"
                },
                {
                  name: "Portico",
                  description: "A centralized, replicated preservation service maintaining multiple copies of scholarly content in geographically distributed locations.",
                  url: "https://www.portico.org",
                  icon: "🏛️"
                },
                {
                  name: "HathiTrust Digital Library",
                  description: "A collaborative digital preservation effort by 200+ academic institutions, preserving 18+ million digitized items with both preservation and public access.",
                  url: "https://www.hathitrust.org",
                  icon: "📚"
                },
                {
                  name: "Internet Archive",
                  description: "A nonprofit library offering free access to millions of books, texts, audio, and video files. Maintains the Wayback Machine for web preservation.",
                  url: "https://archive.org",
                  icon: "🌐"
                },
                {
                  name: "arXiv",
                  description: "A preprint repository for physics, mathematics, computer science, and related fields. Provides open access to research papers before peer review.",
                  url: "https://arxiv.org",
                  icon: "📄"
                }
              ].map((initiative) => (
                <a
                  key={initiative.name}
                  href={initiative.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 rounded-sm border border-primary/20 bg-card hover:bg-card/80 hover:border-primary/40 transition-all duration-200 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">{initiative.icon}</span>
                      <div>
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{initiative.name}</h3>
                        <p className="text-foreground/75 text-sm mt-2 leading-relaxed">{initiative.description}</p>
                      </div>
                    </div>
                    <ExternalLink size={18} className="text-primary/60 group-hover:text-primary flex-shrink-0 mt-1" />
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Research Tools & Platforms */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Zap className="text-primary" size={28} />
              <h2 className="text-3xl font-bold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Research Tools & Platforms
              </h2>
            </div>
            <p className="text-foreground/85 mb-8 leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
              Tools and platforms for conducting research, analyzing data, and collaborating with other researchers in AI safety and cognitive science.
            </p>

            <div className="space-y-6">
              {[
                {
                  name: "Google Scholar",
                  description: "Search engine for scholarly literature across disciplines and sources including peer-reviewed papers, theses, books, and preprints.",
                  url: "https://scholar.google.com",
                  icon: "🔍"
                },
                {
                  name: "ResearchGate",
                  description: "Social network for researchers to share papers, ask questions, and collaborate. Direct access to researchers in your field.",
                  url: "https://www.researchgate.net",
                  icon: "👥"
                },
                {
                  name: "Semantic Scholar",
                  description: "AI-powered research paper search engine that understands scientific concepts and relationships between papers.",
                  url: "https://www.semanticscholar.org",
                  icon: "🧠"
                },
                {
                  name: "Open Science Framework (OSF)",
                  description: "Platform for open, transparent research workflows. Share preprints, data, and collaborate on research projects.",
                  url: "https://osf.io",
                  icon: "🔬"
                },
                {
                  name: "Zotero",
                  description: "Free, open-source reference management software for collecting, organizing, and citing research sources.",
                  url: "https://www.zotero.org",
                  icon: "📋"
                },
                {
                  name: "Obsidian",
                  description: "Knowledge management tool for building a personal wiki of interconnected notes and research insights.",
                  url: "https://obsidian.md",
                  icon: "🗂️"
                }
              ].map((tool) => (
                <a
                  key={tool.name}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 rounded-sm border border-primary/20 bg-card hover:bg-card/80 hover:border-primary/40 transition-all duration-200 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">{tool.icon}</span>
                      <div>
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{tool.name}</h3>
                        <p className="text-foreground/75 text-sm mt-2 leading-relaxed">{tool.description}</p>
                      </div>
                    </div>
                    <ExternalLink size={18} className="text-primary/60 group-hover:text-primary flex-shrink-0 mt-1" />
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Royalty-Free Media Assets */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Image className="text-primary" size={28} />
              <h2 className="text-3xl font-bold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Royalty-Free Media Assets
              </h2>
            </div>
            <p className="text-foreground/85 mb-8 leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
              Free and open-source resources for images, icons, and visual assets that can be used in research presentations and publications.
            </p>

            <div className="space-y-6">
              {[
                {
                  name: "Unsplash",
                  description: "High-quality free stock photos. All photos are released under the Unsplash License, free for commercial and non-commercial use.",
                  url: "https://unsplash.com",
                  icon: "📸"
                },
                {
                  name: "Pexels",
                  description: "Free stock photos and videos released under the Pexels License. No attribution required.",
                  url: "https://www.pexels.com",
                  icon: "🎬"
                },
                {
                  name: "Pixabay",
                  description: "Over 4 million free images, videos, and music tracks. Released under the Pixabay License.",
                  url: "https://pixabay.com",
                  icon: "🎨"
                },
                {
                  name: "Feather Icons",
                  description: "Beautiful, minimal open-source icons. Perfect for research presentations and web interfaces.",
                  url: "https://feathericons.com",
                  icon: "✨"
                },
                {
                  name: "Font Awesome",
                  description: "Comprehensive icon library with thousands of free icons. Available in multiple formats.",
                  url: "https://fontawesome.com",
                  icon: "🔤"
                },
                {
                  name: "Google Fonts",
                  description: "Free, open-source fonts for web and print. Easy integration for research documents and websites.",
                  url: "https://fonts.google.com",
                  icon: "🔤"
                }
              ].map((asset) => (
                <a
                  key={asset.name}
                  href={asset.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 rounded-sm border border-primary/20 bg-card hover:bg-card/80 hover:border-primary/40 transition-all duration-200 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">{asset.icon}</span>
                      <div>
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{asset.name}</h3>
                        <p className="text-foreground/75 text-sm mt-2 leading-relaxed">{asset.description}</p>
                      </div>
                    </div>
                    <ExternalLink size={18} className="text-primary/60 group-hover:text-primary flex-shrink-0 mt-1" />
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* AI & Cognitive Science Resources */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="text-primary" size={28} />
              <h2 className="text-3xl font-bold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                AI & Cognitive Science Resources
              </h2>
            </div>
            <p className="text-foreground/85 mb-8 leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
              Key publications, organizations, and communities focused on AI safety, cognitive science, and related research areas.
            </p>

            <div className="space-y-6">
              {[
                {
                  name: "Center for AI Safety (CAIS)",
                  description: "Research organization focused on AI safety research and policy. Publishes research on AI alignment and safety.",
                  url: "https://www.safe.ai",
                  icon: "🛡️"
                },
                {
                  name: "Future of Life Institute",
                  description: "Organization working to reduce existential risks from AI and other emerging technologies.",
                  url: "https://futureoflife.org",
                  icon: "🌍"
                },
                {
                  name: "Machine Intelligence Research Institute (MIRI)",
                  description: "Research organization focused on AI alignment and the long-term impacts of artificial intelligence.",
                  url: "https://intelligence.org",
                  icon: "🧮"
                },
                {
                  name: "Cognitive Science Society",
                  description: "International organization for researchers in cognitive science. Publishes journals and hosts conferences.",
                  url: "https://cognitivesciencesociety.org",
                  icon: "🧠"
                },
                {
                  name: "Nature Neuroscience",
                  description: "Leading peer-reviewed journal for neuroscience research, including cognitive neuroscience and brain architecture.",
                  url: "https://www.nature.com/neuro",
                  icon: "📖"
                },
                {
                  name: "Neuron",
                  description: "Premier peer-reviewed journal for neuroscience research covering molecular, cellular, and systems neuroscience.",
                  url: "https://www.cell.com/neuron",
                  icon: "⚡"
                }
              ].map((resource) => (
                <a
                  key={resource.name}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 rounded-sm border border-primary/20 bg-card hover:bg-card/80 hover:border-primary/40 transition-all duration-200 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">{resource.icon}</span>
                      <div>
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{resource.name}</h3>
                        <p className="text-foreground/75 text-sm mt-2 leading-relaxed">{resource.description}</p>
                      </div>
                    </div>
                    <ExternalLink size={18} className="text-primary/60 group-hover:text-primary flex-shrink-0 mt-1" />
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Comments Section */}
          <section className="mt-20 pt-16 border-t border-primary/20">
            <CommentsSection articleId="resources" articleTitle="Resources & Tools" />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

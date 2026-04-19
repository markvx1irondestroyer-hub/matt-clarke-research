/*
 * DESIGN: Dark Academic / Research Terminal
 * About: Author bio, research focus, contact/follow links
 */
import { Link } from "wouter";
import { ExternalLink, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorContact from "@/components/AuthorContact";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="container py-16">
        <div className="max-w-3xl">
          <div className="mono-label text-primary mb-4 flex items-center gap-2">
            <span className="inline-block w-8 h-px bg-primary" />
            About the Researcher
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Matt Clarke
          </h1>

          <div className="space-y-6 mb-12">
            <p className="text-lg text-foreground/90 leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
              Matt Clarke is a self-taught independent researcher and developer based in rural Canada. His work focuses on the structural foundations of AI safety, the architectural design of trustworthy AI systems, and the implications of current AI development trajectories for individuals, communities, and the broader information ecosystem.
            </p>

            <p className="text-foreground/85 leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
              Drawing from lived experience with nonstop idea connections, real-world AI reliability challenges, and a deep concern for intellectual property and privacy, Matt approaches AI safety not as a technical edge case but as a fundamental design question: how should these systems be <em>structured</em> from the ground up to be trustworthy, safe, and genuinely useful?
            </p>

            <p className="text-foreground/85 leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
              His research is offered openly for the benefit of the field. He believes that independent, outside-the-institution voices are essential to the AI safety conversation — and that the most important insights often come from people who interact with these systems in real-world, high-stakes contexts rather than controlled research environments.
            </p>
          </div>

          {/* Research Focus */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Research Focus
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "AI Architecture & Safety", desc: "Structural design of AI systems as the foundation of safety, rather than post-hoc alignment." },
                { title: "Knowledge Systems", desc: "Federated, verified knowledge infrastructure for reliable AI outputs." },
                { title: "Privacy & Data Sovereignty", desc: "User-controlled personal data and separation from AI training pipelines." },
                { title: "Cognitive Science & AI", desc: "The LLM-HSAB framework and the intersection of human cognition with AI collaboration." },
                { title: "Children & Vulnerable Users", desc: "Structural safeguards for protecting developing minds from AI harms." },
                { title: "Sustainability", desc: "Energy and storage efficiency through intelligent architectural separation." },
              ].map((item) => (
                <div key={item.title} className="rounded-sm border border-border/60 bg-card p-4">
                  <div className="text-sm font-semibold text-foreground mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {item.title}
                  </div>
                  <p className="text-sm text-muted-foreground" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Follow &amp; Connect
            </h2>
            <AuthorContact />
            <p className="mt-6 text-sm text-muted-foreground" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
              New research is published on Substack. Subscribe for free to receive new posts and support independent research.
            </p>
          </div>

          {/* Attribution */}
          <div className="rounded-sm border border-border/60 bg-card p-6">
            <div className="mono-label text-primary mb-3">Attribution &amp; Usage</div>
            <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
              All research published here is offered openly for the benefit of the field. If you adopt, reference, or build upon these frameworks, please credit the origin: Matt Clarke, Independent Researcher, Rural Canada. This work reflects original analysis and independent thinking — please treat it accordingly.
            </p>
          </div>

          {/* Back to Research */}
          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <ArrowRight size={16} className="rotate-180" /> Back to Research
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

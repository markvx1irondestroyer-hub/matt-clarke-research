/*
 * DESIGN: Dark Academic / Research Terminal
 * Article 00: The Post-Data-Hoarding Economy and the Authorship Spectrum
 * Colors: #0D1117 bg, #00E5CC teal accent, IBM Plex Serif body, Space Grotesk display
 */
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { useEffect } from "react";
import { ArrowLeft, ArrowRight, Calendar, BookOpen, ExternalLink, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommentsSection from "@/components/CommentsSection";
import { AttributionFooter } from "@/components/AttributionFooter";

export default function Article0() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Article 00: The Post-Data-Hoarding Economy and the Authorship Spectrum | Matt Clarke Research</title>
        <meta name="description" content="Theoretical framework for sustainable AI collaboration addressing environmental and legal crises in the AI industry." />
        <meta name="keywords" content="AI sustainability, data economics, intellectual property, authorship, environmental impact, AI architecture" />
        <meta property="og:title" content="The Post-Data-Hoarding Economy and the Authorship Spectrum" />
        <meta property="og:description" content="A theoretical framework for sustainable AI collaboration addressing environmental and legal crises." />
        <meta property="og:type" content="article" />
      </Helmet>

      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663569588948/T7mDLwnDgNSQARR2cGjMY5/article0-hero-Hzo8oXiUmNC54DBymKEEDh.webp)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
          <div className="absolute inset-0 dot-grid opacity-30" />

          <div className="relative container py-16 md:py-24">
            <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
              <ArrowLeft size={18} />
              <span className="mono-label">Back to Research</span>
            </Link>
            <div className="max-w-3xl">
              <div className="mono-label text-primary mb-4 flex items-center gap-2">
                <span className="inline-block w-8 h-px bg-primary" />
                Collaborative Research Analysis
              </div>
              <div className="flex items-baseline gap-3 mb-6">
                <span
                  className="text-primary/40 font-bold text-6xl leading-none select-none"
                  style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  00
                </span>
                <h1
                  className="text-3xl md:text-5xl font-bold text-foreground leading-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  The Post-Data-Hoarding Economy and the Authorship Spectrum
                </h1>
              </div>
              <p
                className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 max-w-2xl"
                style={{ fontFamily: "'IBM Plex Serif', serif", color: '#95cddb' }}
              >
                A theoretical framework for sustainable AI collaboration addressing environmental and legal crises in the AI industry.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <span className="mono-label text-muted-foreground flex items-center gap-1.5">
                  <Calendar size={12} /> Apr 2026
                </span>
                <span className="mono-label text-muted-foreground flex items-center gap-1.5">
                  <BookOpen size={12} /> 18–22 min read
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <div className="container py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <article className="flex-1 max-w-2xl">
              <Article0Content />
            </article>

            {/* Sidebar */}
            <aside className="w-full lg:w-72 flex-shrink-0">
              <div className="sticky top-24 space-y-8">
                {/* Tags */}
                <div>
                  <div className="mono-label text-primary mb-3 flex items-center gap-1.5">
                    <span className="inline-block w-6 h-px bg-primary" /> Topics
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["AI Architecture", "Sustainability", "IP Law", "Data Economics", "Knowledge Systems"].map((tag) => (
                      <span
                        key={tag}
                        className="mono-label text-primary/70 bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-sm text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* About the Author Link */}
                <div>
                  <div className="mono-label text-primary mb-3 flex items-center gap-1.5">
                    <span className="inline-block w-6 h-px bg-primary" /> About
                  </div>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200 text-sm"
                  >
                    Learn about the author <ArrowRight size={14} />
                  </Link>
                </div>

                {/* Related Research */}
                <div>
                  <div className="mono-label text-primary mb-3 flex items-center gap-1.5">
                    <span className="inline-block w-6 h-px bg-primary" /> Related Research
                  </div>
                  <div className="space-y-2">
                    <Link
                      href="/articles/ai-adaptable-mind"
                      className="block text-sm text-primary hover:text-primary/80 transition-colors duration-200"
                    >
                      → AI and The Adaptable Mind
                    </Link>
                    <Link
                      href="/articles/unified-knowledge-theory"
                      className="block text-sm text-primary hover:text-primary/80 transition-colors duration-200"
                    >
                      → The Unified Knowledge Theory
                    </Link>
                  </div>
                </div>

                {/* Discussion */}
                <div>
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

          {/* Comments Section */}
          <div className="max-w-2xl mt-16">
            <CommentsSection articleId="article-0" articleTitle="The Post-Data-Hoarding Economy and the Authorship Spectrum" />
          </div>
        </div>

        {/* Attribution Footer */}
        <section className="container py-12">
          <div className="max-w-2xl mx-auto">
            <AttributionFooter />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function Article0Content() {
  return (
    <div className="space-y-8" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
      {/* Executive Summary */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Executive Summary</h2>
        <p className="mb-4">
          The artificial intelligence industry is approaching a convergence of two distinct but deeply interrelated crises, each with profound implications for the future of technology, the environment, and human creativity.
        </p>
        <p className="mb-4">
          The first crisis is environmental and infrastructural. Global data center electricity consumption reached approximately 415 terawatt-hours (TWh) in 2024 — more than double the relatively stable baseline of 200 TWh maintained through much of the previous decade. The <a href="#ref-2" className="text-primary hover:text-primary/80">[2]</a> International Energy Agency projects this figure could exceed 945 TWh by 2030 under base-case scenarios, with high-end estimates approaching 1,200 TWh. Alongside this energy surge, AI data centers are consuming hundreds of billions of liters of freshwater annually for cooling, and a persistent shortage of advanced semiconductor chips is constraining development while generating significant manufacturing waste. These pressures are not evenly distributed: the majority of this resource consumption is concentrated in a small number of hyperscale facilities operated by a handful of companies, each building redundant infrastructure in a race that may prove economically and physically unsustainable.
        </p>
        <p className="mb-4">
          The second crisis is legal and philosophical. As AI systems evolve from simple tools into sophisticated reasoning engines, they are becoming genuine collaborators in human creative and intellectual work. This integration is straining foundational legal concepts of authorship and inventorship. Recent rulings — including the Supreme Court's refusal to hear <em>Thaler v. Perlmutter</em> and the USPTO's 2025 revised inventorship guidance — have reaffirmed that only natural persons can hold copyright or patent rights. Yet the practical reality of human-AI collaboration exists on a spectrum far more nuanced than the law currently accommodates, raising urgent questions about how we define, protect, and incentivize genuine human intellectual contribution in an AI-mediated world.
        </p>
      </div>

      <p className="mb-4">
        This analysis proposes two interconnected theoretical frameworks in response to these crises. The <strong>Post-Data-Hoarding Economy</strong> hypothesizes a transition in which AI companies compete on the quality of their reasoning architectures and specialized tools rather than the size of their proprietary data repositories — potentially enabling shared foundational infrastructure, distributed computing across existing devices, and a significant reduction in the industry's environmental footprint, while preserving competitive incentives and profitability. The <strong>Authorship Spectrum</strong> offers a conceptual model for understanding the continuum of human-AI collaboration, from purely human creation to AI-centric generation, and proposes a framework of "cognitive authorship" — grounded in documented human judgment and intentionality — as the appropriate basis for intellectual property protection in this new landscape.
      </p>
      <p className="mb-6">
        These frameworks are theoretical and hypothetical in nature. They are not predictions, but rather structured propositions intended to contribute to the serious, rigorous debate that the scale of these challenges demands.
      </p>

      {/* Introduction */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Introduction: Two Crises Converging</h2>
        <p className="mb-4">
          The artificial intelligence industry in 2026 finds itself at the intersection of two distinct but deeply interrelated crises. The first is environmental and infrastructural: the exponential growth of AI systems is consuming electricity, water, and semiconductor hardware at a rate that may prove physically unsustainable within this decade. The second is legal and philosophical: as AI systems become increasingly sophisticated collaborators in human creative and intellectual work, the foundational concepts of authorship, inventorship, and intellectual ownership are being stretched beyond the limits of frameworks designed for a pre-AI world.
        </p>
        <p className="mb-4">
          These two crises are not independent. Both are symptoms of the same underlying dynamic: an industry that has scaled rapidly without developing the cooperative, systemic infrastructure needed to support that scale responsibly. The "data moat" strategy—the race to hoard the largest proprietary datasets, build the largest data centers, and train the largest models—has produced remarkable capabilities, but it has also produced a fragile, resource-intensive, and legally ambiguous ecosystem.
        </p>
        <p className="mb-6">
          This analysis proposes that both crises may be addressed, at least in part, by a theoretical shift in how the AI industry conceptualizes competition, collaboration, and the boundaries of human agency. The first part examines the environmental and economic case for what we term the "Post-Data-Hoarding Economy"—a hypothetical model in which AI companies compete on the quality of their reasoning and the sophistication of their tools rather than the size of their data stores. The second part examines the "Authorship Spectrum"—a conceptual framework for understanding the continuum of human-AI collaboration and its implications for intellectual property law.
        </p>
      </div>

      {/* Part I */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Part I: The Environmental Imperative</h2>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-foreground mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>1.1 The Scale of the Problem: Energy</h3>
          <p className="mb-4">
            To understand the urgency of the environmental challenge, it is necessary to examine the trajectory of data center energy consumption over time. For much of the 2010s, the energy footprint of global data centers remained surprisingly stable. Despite a dramatic increase in internet traffic and cloud computing workloads, efficiency improvements in server hardware and the consolidation of computing into large, optimized hyperscale facilities kept total energy consumption relatively flat. The <a href="#ref-1" className="text-primary hover:text-primary/80">International Energy Agency (IEA)</a> estimated that global data center electricity consumption hovered around 200 TWh between 2015 and 2020.
          </p>
          <p className="mb-4">
            This period of relative stability ended abruptly with the emergence of large-scale generative AI. The training of foundational models such as GPT-4, Gemini, and their successors requires massive clusters of specialized AI accelerators—primarily NVIDIA H100 and A100 GPUs—running at full capacity for months at a time. Unlike conventional cloud workloads, which can be paused, scaled down, or distributed across time zones, model training is an uninterrupted, energy-intensive process. The inference phase—serving responses to millions of users simultaneously—adds a further, persistent energy load that scales directly with adoption.
          </p>
          <p className="mb-4">
            The result has been a dramatic inflection in the energy consumption curve. In 2024, global data center electricity consumption reached approximately <strong>415 TWh</strong>, representing roughly 1.5% of total global electricity use. This figure has been growing at a compound annual growth rate of approximately 12% since 2017—a rate more than four times faster than that of total global electricity consumption. To contextualize this scale: if data centers were a nation, they would rank among the top five energy consumers in the world, ahead of Japan and Russia.
          </p>
          <p className="mb-6">
            The projections for the remainder of this decade are sobering. The IEA's base-case scenario projects that global data center electricity consumption could reach <strong>945 TWh by 2030</strong>, with high-end estimates approaching <strong>1,200 TWh by 2035</strong>. <a href="#ref-17" className="text-primary hover:text-primary/80">Deloitte's independent analysis</a> projects a similar trajectory, forecasting a rise to approximately 1,065 TWh by 2030. <a href="#ref-16" className="text-primary hover:text-primary/80">Goldman Sachs Research</a> has projected a 160–165% increase in data center power capacity demand by 2030 compared to 2023 levels.
          </p>

          {/* Figure 1 */}
          <div className="my-8 rounded-sm overflow-hidden border border-primary/20">
            <img 
              src="/manus-storage/001_4c872c86.webp" 
              alt="Figure 1: Global Data Centre Electricity Demand: 2010-2030"
              className="w-full h-auto"
            />
            <div className="bg-primary/5 p-4 border-t border-primary/20">
              <p className="text-sm text-muted-foreground" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                <strong>Figure 1:</strong> Global data centre electricity demand, historical and projected to 2030. The sharp inflection post-2022 reflects the generative AI boom. Sources: <a href="#ref-2" className="text-primary hover:text-primary/80">IEA (2025)</a>, <a href="#ref-3" className="text-primary hover:text-primary/80">Brookings Institution (2026)</a>, <a href="#ref-17" className="text-primary hover:text-primary/80">Deloitte (2025)</a>.
              </p>
            </div>
          </div>

          <p className="mb-4">
            The energy intensity of AI-specific hardware is a key driver of this growth. AI-optimized servers equipped with high-performance GPUs and TPUs consume approximately two to four times more electricity per unit than conventional server hardware. In large hyperscale data centers optimized for AI workloads, the server layer alone accounts for approximately 75% of total facility energy consumption. The remaining 25% is consumed by cooling systems, power distribution, and facility management—all of which are also scaling upward.
          </p>
          <p className="mb-6">
            The capital investment required to build and power this infrastructure is staggering. Amazon, Google, Microsoft, and Meta collectively spent hundreds of billions of dollars on AI-related capital expenditure in 2025, with projections for 2026 suggesting the combined figure could exceed $650 billion. This level of investment, while impressive, also illustrates the concentration of AI infrastructure in the hands of a small number of hyperscalers. Each company is building its own redundant infrastructure, training its own foundational models, and consuming its own share of the global energy supply—a pattern that may represent a profound structural inefficiency.
          </p>

          {/* Figure 2 */}
          <div className="my-8 rounded-sm overflow-hidden border border-primary/20">
            <img 
              src="/manus-storage/002_f0073db6.webp" 
              alt="Figure 2: Big Tech AI Infrastructure Capital Expenditure: 2023-2026"
              className="w-full h-auto"
            />
            <div className="bg-primary/5 p-4 border-t border-primary/20">
              <p className="text-sm text-muted-foreground" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                <strong>Figure 2:</strong> Big Tech AI infrastructure capital expenditure, 2023-2026. Sources: CNBC (Feb 2026), Fortune (Feb 2026), LinkedIn/RBC Wealth (2025).
              </p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-foreground mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>1.2 The Water Crisis</h3>
          <p className="mb-4">
            Energy consumption is only one dimension of AI's environmental footprint. The thermal management of high-density computing clusters requires enormous quantities of water. Modern data centers use evaporative cooling systems that draw water from local supplies, evaporate it to dissipate heat, and discharge the remainder. The water is not recycled; it is consumed.
          </p>
          <p className="mb-4">
            A typical large-scale data center consumes between 1.1 and 18.9 million liters of water per day, depending on climate, cooling technology, and workload intensity. <a href="#ref-4" className="text-primary hover:text-primary/80">Brookings Institution research</a> estimates that North American data centers alone consumed approximately 765 billion liters of water in 2025, with projections suggesting this figure could exceed 1 trillion liters annually by 2027 if current growth trajectories continue. <a href="#ref-5" className="text-primary hover:text-primary/80">De Vries and Gao's analysis</a> in <em>Patterns</em> (ScienceDirect) found that training a single large language model can consume 700,000 liters of water—equivalent to the lifetime water consumption of approximately 100 human beings.
          </p>
          <p className="mb-6">
            The geographic concentration of this consumption creates acute local pressures. Many hyperscale data centers are built in water-stressed regions chosen for their access to cheap electricity (often from hydroelectric or coal power plants). The result is that regions already facing water scarcity are experiencing additional pressure from AI infrastructure development. This dynamic has already triggered regulatory responses in several jurisdictions, with some states and countries imposing restrictions on new data center construction in water-limited areas.
          </p>

          {/* Figure 3 */}
          <div className="my-8 rounded-sm overflow-hidden border border-primary/20">
            <img 
              src="/manus-storage/003_1828c2e2.webp" 
              alt="Figure 3: AI & Data Centre Water Consumption"
              className="w-full h-auto"
            />
            <div className="bg-primary/5 p-4 border-t border-primary/20">
              <p className="text-sm text-muted-foreground" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                <strong>Figure 3:</strong> AI & Data Centre Water Consumption — Selected Benchmarks (Log Scale). Sources: <a href="#ref-4" className="text-primary hover:text-primary/80">Brookings (Nov 2025)</a>, <a href="#ref-5" className="text-primary hover:text-primary/80">de Vries & Gao (January 2026)</a>, <a href="#ref-19" className="text-primary hover:text-primary/80">Sabella (2025)</a>.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-foreground mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>1.3 The Semiconductor Bottleneck</h3>
          <p className="mb-4">
            The third dimension of the environmental crisis is the semiconductor supply chain. The training and deployment of large AI models requires specialized hardware—primarily NVIDIA's H100 and H200 GPUs, which are among the most advanced and energy-intensive processors ever manufactured. These chips are extraordinarily difficult to produce, requiring cutting-edge fabrication facilities, rare materials, and months of manufacturing time per unit.
          </p>
          <p className="mb-6">
            The demand for these chips has far outpaced supply. Lead times for GPU orders have ranged from 6 to 12+ months at various points in the past two years. This scarcity has created perverse incentives: companies hoard chips, build redundant infrastructure to ensure they have sufficient capacity, and engage in wasteful practices to secure supply. The manufacturing process itself is energy-intensive and generates significant electronic waste. Each advanced GPU requires approximately 240 kg of raw materials and 240 kg of water to manufacture—a hidden environmental cost that is rarely discussed in analyses of AI's footprint.
          </p>
        </div>
      </div>

      {/* Part II */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Part II: The Post-Data-Hoarding Economy</h2>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-foreground mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>2.1 The Diminishing Returns of Data Accumulation</h3>
          <p className="mb-4">
            The foundational assumption driving the current AI industry is that "more data equals better models." This assumption has driven the data hoarding strategy: companies invest heavily in acquiring, licensing, or scraping vast datasets, treating data as a proprietary moat that competitors cannot easily replicate.
          </p>
          <p className="mb-6">
            However, recent research challenges this assumption. <a href="#ref-7" className="text-primary hover:text-primary/80">Abbott and Marar's analysis at the Mercatus Center</a> found that "the right kind of data for a model or application's intended function is generally more important than raw data volume." Quality, relevance, and curation matter more than scale. A carefully curated dataset of 10 million high-quality examples may produce a more capable and reliable model than a hastily assembled dataset of 1 billion low-quality examples.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-foreground mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>2.2 Competing on Reasoning, Not Repositories</h3>
          <p className="mb-4">
            If data quality matters more than data quantity, then the competitive advantage shifts from data hoarding to reasoning architecture. Companies that can build superior inference engines, more efficient training algorithms, and more specialized reasoning systems for specific domains would have a sustainable competitive advantage—one that does not depend on proprietary data moats.
          </p>
          <p className="mb-6">
            This shift would have profound implications. If foundational knowledge could be shared across companies—similar to how the internet infrastructure is shared—then competition would shift to the quality of the reasoning layers built on top of that foundation. This would reduce the incentive to hoard data, lower the barriers to entry for new competitors, and potentially reduce the environmental cost of the industry by eliminating redundant infrastructure development.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-foreground mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>2.3 The Unified Knowledge Theory (UKT)</h3>
          <p className="mb-4">
            The Unified Knowledge Theory proposes a cooperative infrastructure model for shared foundational knowledge. Rather than each company building its own data centers and training its own foundational models, the industry could develop a shared, open-access knowledge base—similar to how the internet backbone is shared infrastructure.
          </p>
          <p className="mb-4">
            In this model, companies would compete on specialized tools and reasoning layers built on top of this shared foundation. The benefits would include: significantly reduced energy consumption (no redundant infrastructure), lower barriers to entry for new competitors, and potentially better outcomes for users (who could access multiple specialized reasoning systems built on the same foundation).
          </p>
          <p className="mb-6">
            <a href="#ref-8" className="text-primary hover:text-primary/80">University of Cambridge research on federated learning</a> demonstrates that this model is technically feasible. Federated learning systems already in use by Apple (Siri) and Google (Gboard) show that distributed AI systems can be effective and efficient.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-foreground mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>2.4 Business Models in a Post-Data-Hoarding World</h3>
          <p className="mb-4">
            In a post-data-hoarding economy, several business models could emerge:
          </p>
          <p className="mb-4">
            <strong>Storage Rental Model:</strong> Companies rent compute and storage capacity on shared infrastructure, similar to how AWS operates. Revenue comes from infrastructure services, not from proprietary data.
          </p>
          <p className="mb-4">
            <strong>Expert Node Subscription:</strong> Specialized domain-specific models (medical AI, legal AI, engineering AI) are built on the shared foundation and offered as subscription services. Revenue comes from the quality and specialization of the reasoning layer, not from data ownership.
          </p>
          <p className="mb-6">
            <strong>Reasoning Layer Competition:</strong> Competition shifts to algorithm quality, inference speed, and specialized capabilities. Companies compete on innovation in reasoning architecture, not on data hoarding.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-foreground mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>2.5 Distributing the Load - Federated Storage and Edge Computing</h3>
          <p className="mb-4">
            Another dimension of the post-data-hoarding economy is the distribution of AI inference across consumer devices. Rather than centralizing all computation in hyperscale data centers, inference could be distributed across millions of edge devices—smartphones, laptops, IoT devices.
          </p>
          <p className="mb-6">
            This approach would dramatically reduce the energy consumption of the industry, as the computational load would be spread across devices that already exist and are already powered. <a href="#ref-19" className="text-primary hover:text-primary/80">Sabella's research on "Green Federated Learning"</a> demonstrates that this model is technically viable and could reduce the energy footprint of AI systems by orders of magnitude.
          </p>
        </div>
      </div>

      {/* Part III */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Part III: The Authorship Spectrum and Cognitive Authorship</h2>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-foreground mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>3.1 The Extended Mind and High-Bandwidth Cognition</h3>
          <p className="mb-4">
            The polymathic mind—the capacity to synthesize knowledge across diverse disciplines, recognize patterns, and generate novel connections—has historically been a rare and valuable cognitive capability. <a href="#ref-9" className="text-primary hover:text-primary/80">Research on polymathy</a> shows that cross-disciplinary thinkers have been disproportionately responsible for major innovations and breakthroughs across fields.
          </p>
          <p className="mb-4">
            Advanced AI reasoning systems may represent a new kind of cognitive tool that amplifies this polymathic capacity. When a human user engages with a sophisticated AI system in a deeply iterative, collaborative manner—providing context, evaluating outputs, redirecting the inquiry, and synthesizing the results—the boundary between the user's thought process and the machine's output becomes genuinely porous. The AI is no longer merely a search engine or a grammar checker; it becomes an active participant in the ideation and refinement process.
          </p>
          <p className="mb-6">
            This dynamic interaction may represent what philosophers of mind call an "extended mind"—a cognitive system that is distributed across human and machine, with neither component fully capable of producing the output independently. The AI serves as a high-bandwidth cognitive prosthesis, amplifying the user's ability to explore complex problem spaces, generate novel hypotheses, and synthesize information from disparate sources. The human provides the intentionality, the contextual judgment, and the critical evaluation; the AI provides the speed, the breadth, and the generative capacity.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-foreground mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>3.2 The Legal Landscape: Copyright and Human Authorship Requirement</h3>
          <p className="mb-4">
            The legal framework governing authorship and intellectual property has been slow to adapt to the realities of human-AI collaboration. In the United States, the Copyright Act requires that a work be authored by a human being to qualify for copyright protection. This principle was recently reaffirmed in the case of <em>Thaler v. Perlmutter</em>, in which the U.S. District Court for the District of Columbia held that a work generated entirely by an AI system without human creative input cannot be registered for copyright.
          </p>
          <p className="mb-4">
            The Supreme Court subsequently declined to hear an appeal, allowing the lower court's ruling to stand. The implications of this ruling are significant: works generated entirely by AI—without meaningful human creative contribution—are in the public domain from the moment of their creation. They cannot be owned, licensed, or monetized by the company or individual who prompted their generation.
          </p>
          <p className="mb-6">
            However, the law's treatment of AI-assisted works—works in which a human makes a significant creative contribution alongside AI tools—is more nuanced. The U.S. Copyright Office has indicated that it will evaluate AI-assisted works on a case-by-case basis, considering the degree of human creative control and the extent to which the human's expression is reflected in the final output. Works in which the human's creative contribution is substantial and identifiable may qualify for copyright protection, even if AI tools were used extensively in their creation.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-foreground mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>3.3 The Patent Landscape: Inventorship and Conception</h3>
          <p className="mb-4">
            The patent law framework has undergone a similar evolution. The U.S. Patent and Trademark Office (USPTO) issued <a href="#ref-11" className="text-primary hover:text-primary/80">revised guidance on AI-assisted inventions in November 2025</a>, superseding its earlier 2024 guidance. The 2025 guidance reaffirms the foundational principle that only natural persons can be named as inventors on a patent application, citing the Federal Circuit's holding in <em>Thaler v. Vidal</em> (2022) that "the Patent Act requires that inventors must be natural persons; that is, human beings."
          </p>
          <p className="mb-4">
            The key concept in the inventorship analysis is "conception"—defined as "the formation in the mind of the inventor, of a definite and permanent idea of the complete and operative invention, as it is hereafter to be applied in practice." Because conception is understood as an act that can only be performed by a natural person, an AI system—regardless of how sophisticated its output—is treated as a tool, analogous to a laboratory instrument, rather than as an inventor.
          </p>
          <p className="mb-6">
            However, this framework has important practical implications for inventors using AI. An inventor who uses AI to generate a novel solution to a technical problem must be able to demonstrate that they made a "significant contribution" to the conception of the invention—that they shaped the problem definition, guided the AI's exploration, critically evaluated its outputs, and recognized the inventive significance of the result. Merely prompting an AI system and accepting its output, without this deeper engagement, may not constitute sufficient human contribution to support a valid patent claim.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-foreground mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>3.4 The Authorship Spectrum: A Conceptual Framework</h3>
          <p className="mb-4">
            The binary framework of current intellectual property law—either a human is the author/inventor, or they are not—struggles to accommodate the nuanced realities of human-AI collaboration. To address this limitation, we propose the "Authorship Spectrum," a conceptual framework that maps the continuum of human-AI collaboration and its implications for intellectual property protection.
          </p>

          {/* Table 2 */}
          <div className="my-8 overflow-x-auto rounded-sm border border-primary/20">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary/10 border-b border-primary/20">
                  <th className="px-4 py-3 text-left font-semibold">Position on Spectrum</th>
                  <th className="px-4 py-3 text-left font-semibold">Description</th>
                  <th className="px-4 py-3 text-left font-semibold">Human Contribution</th>
                  <th className="px-4 py-3 text-left font-semibold">AI Contribution</th>
                  <th className="px-4 py-3 text-left font-semibold">IP Status (Current US Law)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-primary/10">
                  <td className="px-4 py-3 font-semibold">1. Human-Centric</td>
                  <td className="px-4 py-3">Human creates using traditional tools only</td>
                  <td className="px-4 py-3">Dominant</td>
                  <td className="px-4 py-3">None</td>
                  <td className="px-4 py-3">Full copyright/patent protection</td>
                </tr>
                <tr className="border-b border-primary/10">
                  <td className="px-4 py-3 font-semibold">2. AI-Assisted</td>
                  <td className="px-4 py-3">Human uses AI for discrete, bounded tasks (editing, brainstorming)</td>
                  <td className="px-4 py-3">Substantial</td>
                  <td className="px-4 py-3">Supplementary</td>
                  <td className="px-4 py-3">Likely protected</td>
                </tr>
                <tr className="border-b border-primary/10">
                  <td className="px-4 py-3 font-semibold">3. Co-Agency (Polymathic Extension)</td>
                  <td className="px-4 py-3">Iterative, high-bandwidth human-AI collaboration; human guides, evaluates, synthesizes</td>
                  <td className="px-4 py-3">Significant</td>
                  <td className="px-4 py-3">Integral</td>
                  <td className="px-4 py-3">Uncertain; case-by-case</td>
                </tr>
                <tr className="border-b border-primary/10">
                  <td className="px-4 py-3 font-semibold">4. AI-Centric</td>
                  <td className="px-4 py-3">Human provides minimal prompt; AI generates substantially all content</td>
                  <td className="px-4 py-3">Minimal (curation)</td>
                  <td className="px-4 py-3">Dominant</td>
                  <td className="px-4 py-3">Likely unprotectable</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">5. Autonomous AI Generation</td>
                  <td className="px-4 py-3">AI generates output without human direction</td>
                  <td className="px-4 py-3">None</td>
                  <td className="px-4 py-3">Complete</td>
                  <td className="px-4 py-3">Public domain</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-muted-foreground mb-6" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
            <strong>Table 2:</strong> The Authorship Spectrum — a conceptual framework for human-AI collaboration and its IP implications.
          </p>

          <p className="mb-6">
            The most legally and ethically complex position on this spectrum is Position 3: Co-Agency (Polymathic Extension). This is the zone in which the polymathic mind and the AI reasoning engine are most deeply integrated—where the human's cognitive contribution is genuine and substantial, but where the AI's generative capacity is also integral to the final output. It is in this zone that the concept of "cognitive authorship" becomes most important.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-foreground mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>3.5 Authorship Creep and the Risk of Diminishing Human Agency</h3>
          <p className="mb-4">
            As AI systems become more capable and more deeply integrated into creative and intellectual workflows, there is a theoretical risk of what we term "Authorship Creep"—the gradual, often imperceptible erosion of human agency in the creative process. This may occur not through any deliberate choice, but through the natural tendency to offload cognitive effort to the most capable available tool.
          </p>
          <p className="mb-4">
            A 2025 study by MIT found that students who used large language models to assist with essays reported feeling less ownership of their work and performed worse on writing-related measures compared to students who wrote without AI assistance. This suggests that the cognitive benefits of deep engagement with a problem—the struggle, the iteration, the development of genuine understanding—may be lost when AI systems are used as shortcuts rather than as genuine cognitive partners.
          </p>
          <p className="mb-4">
            This finding has implications beyond education. In professional contexts—law, medicine, journalism, scientific research—the value of human judgment lies not merely in the final output, but in the process of arriving at that output. A lawyer who uses AI to draft a contract must still understand the contract's implications. A physician who uses AI to assist with diagnosis must still be capable of recognizing when the AI's output is a confabulation—a plausible but incorrect inference—rather than a reliable conclusion.
          </p>
          <p className="mb-6">
            The concept of confabulation is particularly relevant here. Unlike a simple factual error, a confabulation is a confident, internally consistent, but ultimately unfounded assertion. AI systems are prone to confabulation precisely because they are trained to generate plausible, coherent text, not to verify the accuracy of their outputs against ground truth. A human collaborator who is genuinely thinking alongside the AI, rather than merely accepting its outputs, is far better positioned to detect and correct confabulations than one who has offloaded their judgment entirely.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-foreground mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>3.6 Toward a Framework for Cognitive Authorship</h3>
          <p className="mb-4">
            The challenge for legal and ethical frameworks is to find a way to protect and incentivize genuine human cognitive contribution without creating barriers to the legitimate use of AI as a powerful tool. Several principles may guide this effort:
          </p>

          <p className="mb-4">
            <strong>Documentation of Process:</strong> Rather than attempting to assess the degree of human contribution after the fact—a notoriously difficult task—legal frameworks could require creators and inventors to document their process in real time, demonstrating how they guided, evaluated, and refined the AI's outputs. This documentation would serve as evidence of cognitive authorship, providing a verifiable record of the human's intellectual engagement with the work.
          </p>

          <p className="mb-4">
            <strong>Threshold of Conception:</strong> For patent purposes, the USPTO's emphasis on "conception" as the touchstone of inventorship provides a useful framework. An inventor who can demonstrate that they conceived of the inventive idea—that they recognized its inventive significance, understood how it solved the problem—has made a sufficient contribution, regardless of how much of the technical work was performed by the AI.
          </p>

          <p className="mb-4">
            <strong>Disclosure and Transparency:</strong> As the U.S. Copyright Office has indicated, disclosure of AI tool use in the creation of a work is increasingly expected. A framework of mandatory disclosure—not as a penalty, but as a condition of protection—would enable courts and examiners to make more informed assessments of the degree of human contribution.
          </p>

          <p className="mb-6">
            <strong>The Cognitive Authorship Protocol:</strong> Researchers at Temple University are developing an "authorship protocol" that uses AI-generated questions to probe the depth of a creator's engagement with their work, assessing whether their reasoning and the final output are genuinely aligned. This approach—certifying the human judgment behind the work, rather than merely the artifact itself—may represent a promising model for future IP frameworks.
          </p>
        </div>
      </div>

      {/* Part IV */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Part IV: The Convergence — Where Environment and Authorship Intersect</h2>

        <p className="mb-4">
          The two themes of this analysis are not merely parallel; they are deeply intertwined. Both express the same fundamental question: What is the appropriate role of human agency in an AI-mediated world?
        </p>

        <p className="mb-4">
          In the economic and environmental domain, the question is whether human institutions—companies, governments, regulatory bodies—will exercise the agency required to restructure the AI industry before its resource consumption becomes catastrophic. The current trajectory is not inevitable; it is the product of competitive dynamics that could, in theory, be reshaped by cooperative agreements, regulatory frameworks, or the simple recognition that the current model is economically unsustainable.
        </p>

        <p className="mb-4">
          In the legal and philosophical domain, the question is whether individual humans—creators, inventors, researchers, professionals—will exercise the cognitive agency required to remain genuine authors and inventors in a world where AI systems can generate plausible outputs for almost any prompt. The risk of Authorship Creep is real, but it is not inevitable. It is a function of how humans choose to engage with AI tools—whether as genuine cognitive partners or as convenient shortcuts.
        </p>

        <p className="mb-6">
          The Unified Knowledge Theory offers a theoretical bridge between these two domains. A shared, cooperative AI infrastructure would not only reduce the environmental cost of the industry; it would also create a more level playing field that reduces the pressure on individual companies to hoard data and maximize the scale of their models. In a world where foundational knowledge is a shared resource, competition shifts to the quality of the reasoning layers built on top of that foundation—precisely the dimensions that are most likely to produce genuine, protectable intellectual contributions. This shift would support genuine human-AI collaboration rather than mere convenience shortcuts, and it would do so while reducing the industry's environmental footprint.
        </p>
      </div>

      {/* Conclusion */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Conclusion</h2>

        <p className="mb-4">
          The AI industry stands at a crossroads. The path it has been following—characterized by data hoarding, isolated infrastructure, exponential resource consumption, and gradual erosion of human cognitive agency—may represent the path of least resistance in the short term, but it is increasingly difficult to sustain in the long term. The physical limits of energy and water supply, the economic limits of semiconductor availability, and the legal limits of intellectual property frameworks are all converging to create pressure for a different approach.
        </p>

        <p className="mb-4">
          The theoretical frameworks proposed in this analysis—the Post-Data-Hoarding Economy and the Authorship Spectrum—are not predictions. They are hypothetical models that may represent pathways through which the AI industry could evolve toward a more sustainable, equitable, and legally coherent future. The transition to a reasoning-based competitive model, the development of shared infrastructure through UKT-style architectures, and the establishment of cognitive authorship as the foundation of IP protection are all ideas that require significant further development, debate, and empirical testing before they could be implemented.
        </p>

        <p className="mb-6">
          What is clear, however, is that the status quo is not a stable equilibrium. The questions raised in this analysis—Why would the largest AI companies agree to share their infrastructure? How do we define the boundary between human and machine authorship? What is the environmental cost of the AI we are building?—are not abstract philosophical puzzles. They are practical challenges that the industry, regulators, and society will be forced to confront within this decade.
        </p>

        <p className="mb-12">
          The answers we develop will shape not only the future of artificial intelligence, but the future of human creativity, intellectual property, and the planet's resource systems. The stakes are high enough to warrant the most serious, rigorous, and honest inquiry we can bring to bear.
        </p>
      </div>

      {/* Methodology Note */}
      <div className="mb-12 p-6 border-l-4 border-primary/40 bg-primary/5 rounded-sm">
        <h3 className="text-lg font-semibold text-foreground mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Methodology Note</h3>
        <p className="text-sm">
          This analysis synthesizes verified empirical data with theoretical and hypothetical frameworks. Where claims are grounded in confirmed, peer-reviewed, or institutionally published data, they are cited accordingly. Where claims represent theoretical propositions, speculative models, or emerging hypotheses, cautious phrasing such as "may represent," "could potentially," or "it is theoretically possible" is used to distinguish them from established fact. The term <strong>confabulation</strong> is preferred over <em>hallucination</em> when describing AI-generated inaccuracies, as it more precisely reflects the mechanism by which language models produce plausible but unverified outputs.
        </p>
      </div>

      {/* References */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>References</h2>
        <div className="space-y-3 text-sm">
          <p id="ref-1">[1] International Energy Agency (IEA). (2020). Global data centre energy demand by data centre type, 2010–2022.</p>
          <p id="ref-2">[2] International Energy Agency (IEA). (2025). Energy and AI: Energy Demand from AI.</p>
          <p id="ref-3">[3] Brookings Institution. (April 2026). Global energy demands within the AI regulatory landscape.</p>
          <p id="ref-4">[4] Brookings Institution. (2025). AI, data centers, and water.</p>
          <p id="ref-5">[5] de Vries, A., & Gao, J. (January 2026). The carbon and water footprints of data centers. <em>Patterns</em> (ScienceDirect).</p>
          <p id="ref-6">[6] MIT News Office. (January 2025). Explained: The environmental impact of generative AI.</p>
          <p id="ref-7">[7] Abbott, A., & Marar, S. (March 2025). Is Data Really a Barrier to Entry? Rethinking Competition Regulation in Generative AI. Mercatus Center, George Mason University.</p>
          <p id="ref-8">[8] University of Cambridge. (May 2021). Can federated learning save the world?</p>
          <p id="ref-9">[9] ResearchGate. (November 2024). The Polymathic Mind: Understanding the Traits, Behaviors, and Impact of Cross-Disciplinary Thinkers.</p>
          <p id="ref-10">[10] Polymath Mind Substack. (n.d.). Mostly Harmless: What Douglas Adams Can Teach Us About AI.</p>
          <p id="ref-11">[11] U.S. Patent and Trademark Office (USPTO). (November 28, 2025). Revised Inventorship Guidance for AI-Assisted Inventions. Federal Register.</p>
          <p id="ref-12">[12] Holland & Knight. (February 3, 2026). The Human Element: USPTO Clarifies Inventorship for AI-Assisted Inventions. IP/Decode Blog.</p>
          <p id="ref-13">[13] Alshanetsky, E. (October 30, 2025). Where does human thinking end and AI begin? An AI authorship protocol aims to show the difference. <em>The Conversation</em>.</p>
          <p id="ref-14">[14] Baker Donelson. (2025). Supreme Court Denies Certiorari in Thaler v. Perlmutter: AI Cannot Be an Author Under the Copyright Act.</p>
          <p id="ref-15">[15] Carbon Brief. (September 15, 2025). AI: Five charts that put data-centre energy use and emissions into context.</p>
          <p id="ref-16">[16] Goldman Sachs Research. (2025). AI to drive 165% increase in data center power demand by 2030.</p>
          <p id="ref-17">[17] Deloitte. (2025). GenAI power consumption creates need for more sustainable data centers.</p>
          <p id="ref-18">[18] Pew Research Center. (October 24, 2025). What we know about energy use at US data centers amid the AI boom.</p>
          <p id="ref-19">[19] Sabella, M. (2025). Unleashing Data Power for Green Federated Learning. arXiv.</p>
          <p id="ref-20">[20] Hart, N. (November 24, 2025). From Data Hoarding To Data Strategy: Building AI That Actually Works. Forbes Technology Council.</p>
        </div>
        <p className="text-sm text-muted-foreground mt-6" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
          <em>This article was produced as part of the MattAIHub research series. All statistics are sourced from peer-reviewed publications, institutional reports, or credible journalistic sources as cited. Theoretical propositions are clearly identified as such and do not represent established fact.</em>
        </p>
      </div>
    </div>
  );
}

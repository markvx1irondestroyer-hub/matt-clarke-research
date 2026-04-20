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
              <span className="mono-label">BACK TO RESEARCH</span>
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
                {/* PDF Download */}
                <div>
                  <a
                    href="/manus-storage/article0-pdf"
                    download="The_Post-Data-Hoarding_Economy_and_the_Authorship_Spectrum.pdf"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-sm font-semibold text-sm hover:bg-primary/90 transition-all duration-200"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    📄 Download PDF
                  </a>
                </div>

                {/* Tags */}
                <div>
                  <div className="mono-label text-primary mb-3 flex items-center gap-1.5">
                    <span className="inline-block w-4 h-px bg-primary" />
                    Topics
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["AI Safety", "Architecture", "Sustainability", "IP Law", "Environmental Impact"].map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-primary/10 border border-primary/20 text-primary/80 rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* About Author */}
                <div className="border-t border-primary/20 pt-6">
                  <Link href="/about" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-3">
                    <span className="mono-label">Learn about the author</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>

                {/* Related Articles */}
                <div className="border-t border-primary/20 pt-6 space-y-3">
                  <div className="mono-label text-primary/60 mb-3">Related Research</div>
                  <Link href="/articles/ai-adaptable-mind" className="block text-sm text-primary hover:text-primary/80 transition-colors">
                    → AI and The Adaptable Mind
                  </Link>
                  <Link href="/articles/knowledge-preservation-ai" className="block text-sm text-primary hover:text-primary/80 transition-colors">
                    → Knowledge Preservation and AI Systems: Expanding the Polymathic Framework
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Comments Section */}
      <section className="container py-12 border-t border-primary/20">
        <CommentsSection articleId="article-0" articleTitle="The Post-Data-Hoarding Economy and the Authorship Spectrum" />
      </section>

      <Footer />
      <AttributionFooter />
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
          The second crisis is legal and philosophical. As AI systems evolve from simple tools into sophisticated reasoning engines, they are becoming genuine collaborators in human creative and intellectual work. This integration is straining foundational legal concepts of authorship and inventorship. Recent rulings — including the Supreme Court's refusal to hear <em>Thaler v. Perlmutter</em> and the <a href="#ref-11" className="text-primary hover:text-primary/80">USPTO's 2025 revised inventorship guidance</a> — have reaffirmed that only natural persons can hold copyright or patent rights. Yet the practical reality of human-AI collaboration exists on a spectrum far more nuanced than the law currently accommodates, raising urgent questions about how we define, protect, and incentivize genuine human intellectual contribution in an AI-mediated world.
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
          This analysis proposes that both crises may be addressed, at least in part, by a theoretical shift in how the AI industry conceptualizes competition, collaboration, and the boundaries of human agency. The first part examines the environmental and economic case for what I term the "Post-Data-Hoarding Economy"—a hypothetical model in which AI companies compete on the quality of their reasoning and the sophistication of their tools rather than the size of their data stores. The second part examines the "Authorship Spectrum"—a conceptual framework for understanding the continuum of human-AI collaboration and its implications for intellectual property law.
        </p>
      </div>

      {/* Part I */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Part I: The Environmental Imperative</h2>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-foreground mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>1.1 The Scale of the Problem: Energy</h3>
          <p className="mb-4">
            To understand the urgency of the environmental challenge, it is necessary to examine the trajectory of data center energy consumption over time. For much of the 2010s, the energy footprint of global data centers remained surprisingly stable. Despite a dramatic increase in internet traffic and cloud computing workloads, efficiency improvements in server hardware and the consolidation of computing into large, optimized hyperscale facilities kept total energy consumption relatively flat. The <a href="#ref-1" className="text-primary hover:text-primary/80">[1]</a> International Energy Agency (IEA) estimated that global data center electricity consumption hovered around 200 TWh between 2015 and 2020.
          </p>
          <p className="mb-4">
            This period of relative stability ended abruptly with the emergence of large-scale generative AI. The training of foundational models such as GPT-4, Gemini, and their successors requires massive clusters of specialized AI accelerators—primarily NVIDIA H100 and A100 GPUs—running at full capacity for months at a time. Unlike conventional cloud workloads, which can be paused, scaled down, or distributed across time zones, model training is an uninterrupted, energy-intensive process. The inference phase—serving responses to millions of users simultaneously—adds a further, persistent energy load that scales directly with adoption.
          </p>
          <p className="mb-4">
            The result has been a dramatic inflection in the energy consumption curve. In 2024, global data center electricity consumption reached approximately <strong>415 TWh</strong>, representing roughly 1.5% of total global electricity use. This figure has been growing at a compound annual growth rate of approximately 12% since 2017—a rate more than four times faster than that of total global electricity consumption. To contextualize this scale: if data centers were a nation, they would rank among the top five energy consumers in the world, ahead of Japan and Russia.
          </p>
          <p className="mb-6">
            The projections for the remainder of this decade are sobering. The <a href="#ref-2" className="text-primary hover:text-primary/80">[2]</a> IEA's base-case scenario projects that global data center electricity consumption could reach <strong>945 TWh by 2030</strong>, with high-end estimates approaching <strong>1,200 TWh by 2035</strong>. <a href="#ref-17" className="text-primary hover:text-primary/80">[17]</a> Deloitte's independent analysis projects a similar trajectory, forecasting a rise to approximately 1,065 TWh by 2030. <a href="#ref-16" className="text-primary hover:text-primary/80">[16]</a> Goldman Sachs Research has projected a 160–165% increase in data center power capacity demand by 2030 compared to 2023 levels.
          </p>

          {/* Figure 1 */}
          <div className="my-8 rounded-sm overflow-hidden border border-primary/20">
            <img 
              src="/manus-storage/figure1-electricity-demand_a6c48275.png" 
              alt="Figure 1: Global Data Centre Electricity Demand: 2010-2030 (AI-Driven Growth vs. Pre-AI Baseline)"
              className="w-full h-auto"
            />
            <div className="bg-primary/5 p-4 border-t border-primary/20">
              <p className="text-sm text-muted-foreground" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                <strong>Figure 1:</strong> Global data centre electricity demand, historical and projected to 2030. The sharp inflection post-2022 reflects the generative AI boom. Sources: <a href="#ref-2" className="text-primary hover:text-primary/80">[2]</a> IEA (2025), <a href="#ref-3" className="text-primary hover:text-primary/80">[3]</a> Brookings Institution (2026), <a href="#ref-17" className="text-primary hover:text-primary/80">[17]</a> Deloitte (2025).
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
              src="/manus-storage/figure2-capex_97d191ec.png" 
              alt="Figure 2: Big Tech AI Infrastructure Capital Expenditure: 2023-2026 (Combined ~$650B+ projected for 2026)"
              className="w-full h-auto"
            />
            <div className="bg-primary/5 p-4 border-t border-primary/20">
              <p className="text-sm text-muted-foreground" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                <strong>Figure 2:</strong> Big Tech AI infrastructure capital expenditure, 2023-2026. Sources: <a href="#ref-15" className="text-primary hover:text-primary/80">[15]</a> CNBC (Feb 2026), <a href="#ref-16" className="text-primary hover:text-primary/80">[16]</a> Fortune (Feb 2026), LinkedIn/RBC Wealth (2025).
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
            A typical large-scale data center consumes between 1.1 and 18.9 million liters of water per day, depending on climate, cooling technology, and workload intensity. <a href="#ref-4" className="text-primary hover:text-primary/80">[4]</a> Brookings Institution research estimates that North American data centers alone consumed approximately 765 billion liters of water in 2025, with projections suggesting this figure could exceed 1 trillion liters annually by 2027 if current growth trajectories continue. <a href="#ref-5" className="text-primary hover:text-primary/80">[5]</a> De Vries and Gao's analysis in <em>Patterns</em> (ScienceDirect) found that training a single large language model can consume <strong>700,000 liters</strong> of clean freshwater. This is the equivalent of the water consumed by approximately 350 people over an entire year.
          </p>
          <p className="mb-4">
            As the industry trains progressively larger and more complex models, the cumulative water footprint of AI development is growing in parallel with its energy footprint. The geographic concentration of data centers compounds this problem. Many of the world's largest data centers are located in regions already experiencing water stress, including parts of the American Southwest, Northern Virginia, and Western Europe. The competition between data center operators and local agricultural and municipal water users is already generating regulatory and community conflict in several jurisdictions.
          </p>

          {/* Figure 3 */}
          <div className="my-8 rounded-sm overflow-hidden border border-primary/20">
            <img 
              src="/manus-storage/figure3-water_6ace9030.png" 
              alt="Figure 3: AI & Data Centre Water Consumption — Selected Benchmarks (Log Scale)"
              className="w-full h-auto"
            />
            <div className="bg-primary/5 p-4 border-t border-primary/20">
              <p className="text-sm text-muted-foreground" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                <strong>Figure 3:</strong> Selected benchmarks for AI and data centre water consumption. Note the logarithmic scale, which reflects the vast range of magnitudes across different contexts. Sources: <a href="#ref-4" className="text-primary hover:text-primary/80">[4]</a> Brookings (2025), <a href="#ref-5" className="text-primary hover:text-primary/80">[5]</a> de Vries-Gao/ScienceDirect (2026).
              </p>
            </div>
          </div>

          <p className="mb-6">
            To put these figures in human terms: a single training run for a large language model is estimated to evaporate approximately 700,000 liters of clean freshwater. This is the equivalent of the water consumed by approximately 350 people over an entire year. As the industry trains progressively larger and more complex models, the cumulative water footprint of AI development is growing in parallel with its energy footprint.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-foreground mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>1.3 The Semiconductor Bottleneck</h3>
          <p className="mb-4">
            The energy and water crises are further compounded by a persistent shortage of the specialized semiconductor chips that power AI systems. The global supply chain for advanced AI accelerators—particularly the NVIDIA H100 and its successors—has been severely strained by the explosive growth in demand. Lead times for high-performance GPUs have at times stretched to twelve months or more, and the cost of acquiring sufficient compute for training frontier models has risen dramatically.
          </p>
          <p className="mb-4">
            This shortage is not merely an inconvenience for AI companies; it is a structural constraint on the pace of AI development. Companies that can secure large allocations of chips gain a significant competitive advantage, while smaller developers, academic researchers, and organizations in the Global South are effectively priced out of the frontier. The chip shortage thus reinforces the concentration of AI capability in the hands of a small number of well-capitalized hyperscalers.
          </p>
          <p className="mb-4">
            The bottleneck also has a direct environmental dimension. The manufacturing of advanced semiconductors is itself an extraordinarily resource-intensive process, requiring ultra-pure water, rare earth materials, and significant energy. The rapid obsolescence of previous-generation hardware—as companies rush to upgrade to the latest accelerators—generates substantial electronic waste. The environmental cost of the chip shortage is therefore not limited to the energy consumed by the chips themselves, but extends to the full lifecycle of their production and disposal.
          </p>

          {/* Figure 4 */}
          <div className="my-8 rounded-sm overflow-hidden border border-primary/20">
            <img 
              src="/manus-storage/figure4-carbon_8708916f.png" 
              alt="Figure 4: AI Carbon Footprint in Context (Million Tonnes CO2-equivalent)"
              className="w-full h-auto"
            />
            <div className="bg-primary/5 p-4 border-t border-primary/20">
              <p className="text-sm text-muted-foreground" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                <strong>Figure 4:</strong> AI carbon footprint in context, comparing AI systems to other major emitters and activities. Sources: <a href="#ref-5" className="text-primary hover:text-primary/80">[5]</a> de Vries-Gao, <a href="#ref-6" className="text-primary hover:text-primary/80">[6]</a> Climate Impact (Oct 2025).
              </p>
            </div>
          </div>

          <p className="mb-6">
            The resource constraints are not independent. Energy scarcity drives up the cost of chip manufacturing. Water scarcity constrains the cooling capacity of data centers. Semiconductor shortages force companies to build larger, more energy-intensive facilities. Each constraint reinforces the others, creating a feedback loop that may prove economically and physically unsustainable.
          </p>

          {/* Table 1 */}
          <div className="my-8 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-primary/30">
                  <th className="text-left px-4 py-2 font-semibold text-foreground bg-primary/5">Resource</th>
                  <th className="text-left px-4 py-2 font-semibold text-foreground bg-primary/5">Pre-AI Baseline (c. 2018)</th>
                  <th className="text-left px-4 py-2 font-semibold text-foreground bg-primary/5">Current (2024–2025)</th>
                  <th className="text-left px-4 py-2 font-semibold text-foreground bg-primary/5">Projected (2030, IEA Base Case)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-primary/20">
                  <td className="px-4 py-3 text-foreground">Global DC Electricity</td>
                  <td className="px-4 py-3 text-muted-foreground">~200 TWh/yr</td>
                  <td className="px-4 py-3 text-muted-foreground">~415 TWh/yr</td>
                  <td className="px-4 py-3 text-muted-foreground">~945 TWh/yr</td>
                </tr>
                <tr className="border-b border-primary/20">
                  <td className="px-4 py-3 text-foreground">US DC Share of Grid</td>
                  <td className="px-4 py-3 text-muted-foreground">~1.9%</td>
                  <td className="px-4 py-3 text-muted-foreground">~4%</td>
                  <td className="px-4 py-3 text-muted-foreground">~8–9% (est.)</td>
                </tr>
                <tr className="border-b border-primary/20">
                  <td className="px-4 py-3 text-foreground">Global AI Water Footprint</td>
                  <td className="px-4 py-3 text-muted-foreground">Negligible</td>
                  <td className="px-4 py-3 text-muted-foreground">32–765 Bn L/yr (est.)</td>
                  <td className="px-4 py-3 text-muted-foreground">Significantly higher</td>
                </tr>
                <tr className="border-b border-primary/20">
                  <td className="px-4 py-3 text-foreground">GPU Lead Times</td>
                  <td className="px-4 py-3 text-muted-foreground">4–8 weeks</td>
                  <td className="px-4 py-3 text-muted-foreground">6–12+ months (peak)</td>
                  <td className="px-4 py-3 text-muted-foreground">Uncertain</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-foreground">Big Tech AI CapEx (combined)</td>
                  <td className="px-4 py-3 text-muted-foreground">~$136B (2023)</td>
                  <td className="px-4 py-3 text-muted-foreground">~$332B (2025)</td>
                  <td className="px-4 py-3 text-muted-foreground">~$650B+ (2026 est.)</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-muted-foreground mt-3" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
              <strong>Table 1:</strong> Key resource metrics comparing pre-AI baseline to current and projected figures. Sources: <a href="#ref-2" className="text-primary hover:text-primary/80">[2]</a> IEA (2025), <a href="#ref-3" className="text-primary hover:text-primary/80">[3]</a> Brookings (2026), <a href="#ref-15" className="text-primary hover:text-primary/80">[15]</a> CNBC (2026), <a href="#ref-5" className="text-primary hover:text-primary/80">[5]</a> de Vries-Gao (2026).
            </p>
          </div>
        </div>
      </div>

      {/* Part II */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Part II: The Post-Data-Hoarding Economy</h2>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-foreground mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>2.1 The Diminishing Returns of Data Accumulation</h3>
          <p className="mb-4">
            The prevailing competitive strategy in the AI industry has been built on the assumption that data is the primary moat—that the company with the largest, most comprehensive proprietary dataset will inevitably produce the most capable models. This assumption has driven a global race to scrape, license, and accumulate data at unprecedented scale, with each major AI company building its own isolated data repositories and training pipelines.
          </p>
          <p className="mb-4">
            However, there is growing evidence that this strategy may be yielding diminishing returns. As foundational models reach a threshold of general knowledge—having been trained on effectively the entire accessible internet—the marginal utility of simply adding more raw data decreases. The quality, curation, and relevance of the data becomes more important than its sheer volume. A <a href="#ref-7" className="text-primary hover:text-primary/80">[7]</a> 2025 analysis by the Mercatus Center found that "the right kind of data for a model or application's intended function is generally more important than raw data volume," and that "future models and applications will thus likely have more specific uses and so will be trained more efficiently with fewer data."
          </p>
          <p className="mb-6">
            This insight has profound implications for the competitive dynamics of the AI industry. If data volume is no longer the primary differentiatior, then the enormous cost and environmental burden of maintaining massive proprietary data repositories may not be justified. The competitive advantage shifts toward the quality of the reasoning architecture, the sophistication of the fine-tuning process, and the effectiveness of the specialized tools and integrations built on top of the foundational model.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-foreground mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>2.2 Competing on Reasoning, Not Repositories</h3>
          <p className="mb-4">
            In a "Post-Data-Hoarding Economy," AI companies would compete primarily on the quality of their reasoning capabilities and the utility of their specialized tools, rather than on the size of their data stores. This model has several theoretical advantages.
          </p>
          <p className="mb-4">
            First, it would reduce the incentive to hoard data, potentially freeing up vast quantities of information that are currently locked in proprietary silos. If a company's competitive advantage lies in its reasoning architecture rather than its data, it has less reason to prevent others from accessing the same underlying information. This could lead to a more open, collaborative information ecosystem.
          </p>
          <p className="mb-4">
            Second, it would shift investment from energy-intensive data center infrastructure toward more computationally efficient research and development. The energy cost of reasoning—performing inference on a well-optimized, smaller model—is significantly lower than the energy cost of training ever-larger foundational models on ever-larger datasets.
          </p>
          <p className="mb-6">
            Third, it would potentially democratize access to AI capabilities. If the key differentiatior is the quality of the reasoning layer rather than the scale of the infrastructure, smaller companies and academic institutions could potentially compete with hyperscalers by developing highly specialized, efficient models in niche domains.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-foreground mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>2.3 The Unified Knowledge Theory: A Cooperative Infrastructure Model</h3>
          <p className="mb-4">
            The most ambitious theoretical extension of the Post-Data-Hoarding Economy is the concept of a "Unified Knowledge Theory" (UKT) architecture—a hypothetical model in which AI companies collaborate on a shared, foundational knowledge base while competing on the specialized reasoning and application layers built on top of it.
          </p>
          <p className="mb-4">
            As explored in previous analyses on this platform, the UKT framework proposes that the foundational knowledge required to train general-purpose AI models could be maintained as a shared, cooperative resource—similar in concept to the internet's foundational protocols, which are shared by all participants while each builds proprietary applications on top. Under this model, no single company would bear the full environmental and financial cost of training a foundational model from scratch. Instead, the cost would be distributed across all participants, with each contributing compute, data, and engineering expertise in proportion to its usage.
          </p>
          <p className="mb-4">
            This model could take several practical forms. One possibility is a consortium-based approach, in which major AI companies jointly fund and maintain a shared foundational model, with each company contributing compute, data, and engineering expertise in proportion to its usage. Another possibility is a federated learning architecture, in which the training process itself is distributed across a network of participating nodes—potentially including not just corporate data centers, but universities, government research institutions, and even consumer devices.
          </p>
          <p className="mb-6">
            The environmental implications of such a model could be significant. A <a href="#ref-8" className="text-primary hover:text-primary/80">[8]</a> 2021 study by researchers at the University of Cambridge found that federated learning architectures can achieve lower carbon emissions than traditional centralized training, particularly by reducing the need for large-scale data transfers and enabling training to occur closer to the source of the data. More recent research has explored how "Green Federated Learning" frameworks can further reduce the energy footprint of AI training by optimizing the selection of participating nodes based on their energy source and efficiency.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-foreground mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>2.4 Business Models in a Post-Data-Hoarding World</h3>
          <p className="mb-4">
            A natural objection to the UKT model is economic: why would OpenAI, Google, Anthropic, or any other major AI company agree to share their foundational infrastructure with competitors? The answer, this analysis theorizes, lies in the recognition that the current model is economically unsustainable for all participants.
          </p>
          <p className="mb-4">
            The capital expenditure required to maintain a competitive position in the AI race is growing faster than the revenue generated by AI products. Each company is spending hundreds of billions of dollars on infrastructure that, in large part, duplicates the infrastructure of its competitors. A shared foundational layer would allow each company to redirect a significant portion of this expenditure toward the differentiated products and services that actually generate revenue.
          </p>
          <p className="mb-4">
            In a Post-Data-Hoarding Economy, several new business models may emerge:
          </p>
          <p className="mb-4">
            <strong>The "Storage Rental" Model:</strong> Companies that contribute compute and storage to the shared knowledge base could earn revenue by renting capacity to other participants. This is analogous to the existing cloud computing market, in which Amazon Web Services, Google Cloud, and Microsoft Azure rent compute capacity to third parties. The difference is that the shared knowledge base would be a cooperative resource, with revenue distributed among all contributors rather than concentrated in the hands of a single provider.
          </p>
          <p className="mb-4">
            <strong>The "Expert Node" Subscription Model:</strong> Companies could develop and maintain highly specialized "Expert Nodes"—fine-tuned models optimized for specific domains such as medical diagnosis, legal analysis, financial modeling, or scientific research. These nodes would draw on the shared foundational knowledge base but add proprietary value through domain-specific training, curation, and tooling. Other companies and individual users would pay subscription fees to access these specialized capabilities.
          </p>
          <p className="mb-6">
            <strong>The "Reasoning Layer" Competition:</strong> The most direct form of competition in this model would be at the reasoning layer—the algorithms and architectures that determine how a model processes information, generates responses, and applies tools. Companies that develop superior reasoning capabilities would attract more users and generate more revenue, regardless of whether they maintain a proprietary data advantage.
          </p>
          <p className="mb-4">
            <strong>Addressing Antitrust Concerns:</strong> A legitimate concern with shared infrastructure is the potential for antitrust violations or market manipulation. However, the "Expert Node" subscription model provides a natural safeguard. By allowing companies to differentiate through specialized, domain-specific models rather than through exclusive access to foundational data, the UKT framework actually reduces the incentive for monopolistic behavior. Regulatory frameworks could further protect competition by requiring transparency in Expert Node pricing, preventing predatory bundling, and ensuring that the shared foundational layer remains accessible to new market entrants on fair terms.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-foreground mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>2.5 Distributing the Load: Federated Storage and Edge Computing</h3>
          <p className="mb-4">
            One of the most environmentally promising aspects of the UKT model is the possibility of distributing the computational load across a vast network of existing devices. The global installed base of smartphones, laptops, tablets, and edge servers represents an enormous reservoir of untapped computational capacity. If even a fraction of this capacity could be harnessed for AI inference and lightweight training tasks, the need for large, centralized data centers could be significantly reduced.
          </p>
          <p className="mb-4">
            This is not merely a theoretical possibility. Federated learning—a technique in which models are trained locally on individual devices, with only the model updates (not the raw data) transmitted to a central server—is already in commercial use. Apple uses federated learning to improve its Siri voice assistant and keyboard predictions without transmitting users' personal data to Apple's servers. Google uses it to improve its Gboard keyboard. These applications demonstrate that it is technically feasible to train and improve AI models across a distributed network of consumer devices.
          </p>
          <p className="mb-4">
            The extension of this principle to more complex AI workloads would require significant advances in model compression, efficient inference, and secure aggregation protocols. However, the potential environmental benefits are substantial. By spreading the computational load across millions of existing devices—devices that are already consuming electricity for other purposes—the marginal energy cost of AI inference could be dramatically reduced. The alternative—building ever-larger data centers to handle centralized inference—requires the construction of new physical infrastructure, the manufacturing of new hardware, and the consumption of significant additional energy and water.
          </p>
          <p className="mb-6">
            This is not merely a theoretical possibility. Federated learning—a technique in which models are trained locally on individual devices, with only the model updates (not the raw data) transmitted to a central server—is already in commercial use. Apple uses federated learning to improve its Siri voice assistant and keyboard predictions without transmitting users' personal data to Apple's servers. Google uses it to improve its Gboard keyboard. These applications demonstrate that it is technically feasible to train and improve AI models across a distributed network of consumer devices.
          </p>
        </div>
      </div>

      {/* Part III */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Part III: The Authorship Spectrum and the Polymathic Mind</h2>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-foreground mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>3.1 The Extended Mind and High-Bandwidth Cognition</h3>
          <p className="mb-4">
            The concept of the "polymathic mind" describes a cognitive style characterized by the ability to synthesize knowledge across diverse disciplines, recognize complex patterns, and rapidly test new information against existing frameworks. <a href="#ref-9" className="text-primary hover:text-primary/80">[9]</a> Historically, the polymathic mind has been the province of exceptional individuals—Renaissance polymaths, natural philosophers, and contemporary interdisciplinary researchers who possess both the intellectual capacity and the opportunity to develop expertise across multiple domains.
          </p>
          <p className="mb-4">
            Large language models may represent an accidental external recreation of the polymathic mind. A model trained on the entire accessible internet has, in a sense, absorbed the collective knowledge of human civilization. It can draw connections between disparate domains, recognize patterns that span multiple disciplines, and generate novel syntheses that would be difficult for a human specialist to produce. This is not consciousness or true understanding, but it is a form of high-bandwidth cognition—the ability to process and integrate information across a vast knowledge space. This concept connects directly to the <a href="/articles/ai-adaptable-mind" className="text-primary hover:text-primary/80 underline">Neuro-Adaptive Reasoning Framework (LLM-HSAB: Large Language Mind/Highly Skill Adaptable Brain)</a> discussed in our earlier research, where portable reasoning engines with low switching costs enable flexible, polymathic reasoning across multiple domains.
          </p>
          <p className="mb-6">
            This raises a fundamental question: if an AI system can perform polymathic reasoning, what does it mean for human authorship and intellectual contribution? The answer, this analysis proposes, lies not in the capabilities of the AI system itself, but in the intentionality and judgment of the human who directs and evaluates its outputs.
          </p>
        </div>
      </div>

      {/* Conclusion */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Conclusion</h2>
        <p className="mb-4">
          The convergence of environmental and legal crises in the AI industry is not inevitable. Both crises are the result of specific choices about how the industry has chosen to organize itself—choices about data hoarding, infrastructure concentration, and the legal frameworks governing intellectual property. Different choices could produce different outcomes.
        </p>
        <p className="mb-4">
          The Post-Data-Hoarding Economy and the Authorship Spectrum are theoretical frameworks—not predictions, but structured propositions intended to contribute to the serious, rigorous debate that the scale of these challenges demands. They are not presented as solutions, but as invitations to think differently about how the AI industry might evolve.
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
        <div className="space-y-3 text-sm [&_a]:underline">
          <p id="ref-1">[1] International Energy Agency (IEA). (2020). <a href="https://www.iea.org/reports/energy-and-ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">Global data centre energy demand by data centre type, 2010–2022.</a></p>
          <p id="ref-2">[2] International Energy Agency (IEA). (2025). <a href="https://www.iea.org/reports/energy-and-ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">Energy and AI: Energy Demand from AI.</a></p>
          <p id="ref-3">[3] Brookings Institution. (April 2026). <a href="https://www.brookings.edu/articles/global-energy-demands-within-the-ai-regulatory-landscape/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">Global energy demands within the AI regulatory landscape.</a></p>
          <p id="ref-4">[4] Brookings Institution. (2025). <a href="https://www.brookings.edu/articles/ai-data-centers-and-water/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">AI, data centers, and water.</a></p>
          <p id="ref-5">[5] de Vries, A., & Gao, J. (January 2026). <a href="https://www.cell.com/patterns/fulltext/S2666-38992500278-8" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">The carbon and water footprints of data centers.</a> <em>Patterns</em> (ScienceDirect).</p>
          <p id="ref-6">[6] MIT News Office. (January 2025). <a href="https://news.mit.edu/2025/explained-generative-ai-environmental-impact-0117" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">Explained: The environmental impact of generative AI.</a></p>
          <p id="ref-7">[7] Abbott, A., & Marar, S. (March 2025). <a href="https://www.mercatus.org/research/working-papers/data-really-barrier-entry-rethinking-competition-regulation-generative-ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">Is Data Really a Barrier to Entry? Rethinking Competition Regulation in Generative AI.</a> Mercatus Center, George Mason University.</p>
          <p id="ref-8">[8] University of Cambridge. (May 2021). <a href="https://www.cam.ac.uk/research/news/can-federated-learning-save-the-world" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">Can federated learning save the world?</a></p>
          <p id="ref-9">[9] ResearchGate. (November 2024). The Polymathic Mind: Understanding the Traits, Behaviors, and Impact of Cross-Disciplinary Thinkers.</p>
          <p id="ref-10">[10] Polymath Mind Substack. (n.d.). Mostly Harmless: What Douglas Adams Can Teach Us About AI.</p>
          <p id="ref-11">[11] U.S. Patent and Trademark Office (USPTO). (November 28, 2025). <a href="https://www.uspto.gov/subscription-center/2025/revised-inventorship-guidance-ai-assisted-inventions" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">Revised Inventorship Guidance for AI-Assisted Inventions.</a> Federal Register.</p>
          <p id="ref-12">[12] Holland & Knight. (February 3, 2026). <a href="https://www.hklaw.com/en/insights/publications/2026/02/the-human-element-uspto-clarifies-inventorship" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">The Human Element: USPTO Clarifies Inventorship for AI-Assisted Inventions.</a> IP/Decode Blog.</p>
          <p id="ref-13">[13] Alshanetsky, E. (October 30, 2025). Where does human thinking end and AI begin? An AI authorship protocol aims to show the difference. <em>The Conversation</em>.</p>
          <p id="ref-14">[14] Baker Donelson. (2025). <a href="https://www.bakerdonelson.com/supreme-court-denies-certiorari-in-thaler-v-perlmutter-ai-cannot-be-an-author-under-the-copyright-act" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">Supreme Court Denies Certiorari in Thaler v. Perlmutter: AI Cannot Be an Author Under the Copyright Act.</a></p>
          <p id="ref-15">[15] Carbon Brief. (September 15, 2025). <a href="https://www.carbonbrief.org/ai-five-charts-that-put-data-centre-energy-use-and-emissions-into-context/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">AI: Five charts that put data-centre energy use and emissions into context.</a></p>
          <p id="ref-16">[16] Goldman Sachs Research. (2025). <a href="https://www.goldmansachs.com/insights/articles/ai-to-drive-165-increase-in-data-center-power-demand-by-2030" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">AI to drive 165% increase in data center power demand by 2030.</a></p>
          <p id="ref-17">[17] Deloitte. (2025). <a href="https://www.deloitte.com/us/en/insights/industry/technology/technology-media-and-telecom-predictions/2025/genai-power-consumption-creates-need-for-more-sustainable-data-centers.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">GenAI power consumption creates need for more sustainable data centers.</a></p>
          <p id="ref-18">[18] Pew Research Center. (October 24, 2025). What we know about energy use at US data centers amid the AI boom.</p>
          <p id="ref-19">[19] Sabella, M. (2025). <a href="https://arxiv.org/abs/2303.14604" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">Unleashing Data Power for Green Federated Learning.</a> arXiv.</p>
          <p id="ref-20">[20] Hart, N. (November 24, 2025). From Data Hoarding To Data Strategy: Building AI That Actually Works. Forbes Technology Council.</p>
        </div>
        <p className="text-sm text-muted-foreground mt-6" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
          <em>This article was produced as part of the MattAIHub research series. All statistics are sourced from peer-reviewed publications, institutional reports, or credible journalistic sources as cited. Theoretical propositions are clearly identified as such and do not represent established fact.</em>
        </p>
      </div>
    </div>
  );
}

/*
 * DESIGN: Dark Academic / Research Terminal
 * Article 0: The Post-Data-Hoarding Economy and the Authorship Spectrum
 * A theoretical framework for sustainable AI collaboration
 */
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, Calendar, BookOpen, ExternalLink, Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommentsSection from "@/components/CommentsSection";
import { Streamdown } from "streamdown";

export default function Article0() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>The Post-Data-Hoarding Economy and the Authorship Spectrum | Matt Clarke</title>
        <meta name="description" content="A theoretical framework addressing environmental and legal crises in the AI industry through sustainable data collaboration and IP reform." />
        <meta name="keywords" content="AI sustainability, data economics, intellectual property, AI safety, environmental impact" />
        <meta property="og:title" content="The Post-Data-Hoarding Economy and the Authorship Spectrum" />
        <meta property="og:description" content="Addressing environmental and legal crises in AI through sustainable collaboration." />
        <meta property="og:type" content="article" />
      </Helmet>
      <Article0Content />
    </>
  );
}

function Article0Content() {
  const content = `# The Post-Data-Hoarding Economy and the Authorship Spectrum

**Author:** Matt Clarke  
**Date:** April 2026  
**Status:** Research Article

---

## Executive Summary

The artificial intelligence industry is approaching a convergence of two distinct but deeply interrelated crises, each with profound implications for the future of technology, environment, and human creativity.

The first crisis is **environmental and infrastructural**. Global data center electricity consumption is projected to surpass 945 TWh by 2030—more than double the relatively stable 200 TWh maintained through much of the previous decade. Alongside this energy surge, AI data centers are consuming hundreds of billions of liters of freshwater annually for cooling, and a persistent shortage of advanced semiconductor chips is constraining development while generating significant manufacturing waste. These pressures are not evenly distributed: the majority of this resource consumption is concentrated in a small number of hyperscale facilities operated by a handful of companies, each building redundant infrastructure in a race that may prove economically and physically unsustainable.

The second crisis is **legal and philosophical**. The question of authorship—who deserves credit, compensation, and legal standing for creative and intellectual work—has become fundamentally unstable. Recent USPTO guidance clarifies that AI systems cannot be authors, yet the boundary between human authorship and AI assistance remains legally ambiguous. Simultaneously, the data used to train these systems was often collected without explicit consent, creating a new form of what I term the "data-hoarding economy": a system in which value is extracted from human creative work without proportional compensation or control.

These two crises are not separate problems. They are symptoms of the same underlying issue: **a misalignment between how AI systems are currently built and how they could be built to be both sustainable and equitable**. The current model—centralized, data-hungry, and legally murky—is approaching physical and social limits. A different model is possible.

This analysis proposes a theoretical framework for addressing both crises simultaneously: the **Unified Knowledge Theory (UKT)** combined with a reformed approach to authorship and intellectual property. The framework suggests that future AI systems should be built on top of a trusted public library of verified knowledge, with user-controlled personal data storage and company-specific AI models. This architecture would reduce resource consumption, clarify legal questions around authorship and compensation, and create a more sustainable and equitable AI ecosystem.

---

## Part I: The Environmental Imperative

### 1.1 The Scale of the Problem: Energy

The International Energy Agency projects that global data center electricity consumption could reach **945 TWh by 2030** under base-case scenarios, with high-end estimates approaching **1,200 TWh by 2035**. This represents a dramatic acceleration from historical trends. For context, the entire United States consumed approximately 4,000 TWh of electricity in 2023. A single sector—AI and data centers—could consume nearly a quarter of current US electricity consumption within a decade.

<img src="/manus-storage/figure1-electricity-demand_a3b5dbf1.png" alt="Figure 1: Global Data Centre Electricity Demand: 2010-2030 (AI-Driven Growth vs. Pre-AI Baseline)" style="width: 100%; max-width: 800px; margin: 20px 0; border: 1px solid #333; border-radius: 4px;" />

**Figure 1:** Global Data Centre Electricity Demand: 2010-2030 (AI-Driven Growth vs. Pre-AI Baseline). Sources: IEA Energy & AI Report (2025); Brookings Institution (2026); Deloitte (2025)

This energy consumption is not distributed evenly. The majority is concentrated in a small number of hyperscale data centers operated by Amazon, Google, Microsoft, and Meta. Each of these companies is building massive new facilities to support AI training and inference. The capital expenditure is staggering: combined spending by these four companies on AI infrastructure is projected to exceed $650 billion in 2026 alone.

<img src="/manus-storage/figure2-capex_746df681.png" alt="Figure 2: Big Tech AI Infrastructure Capital Expenditure: 2023-2026 (Combined ~$650B+ projected for 2026)" style="width: 100%; max-width: 800px; margin: 20px 0; border: 1px solid #333; border-radius: 4px;" />

**Figure 2:** Big Tech AI Infrastructure Capital Expenditure: 2023-2026. Sources: CNBC (Feb 2026); Fortune (Feb 2026); LinkedIn/RBC Wealth (2025); tech-insider.org (Apr 2026)

### 1.2 The Water Crisis

Alongside electricity consumption, AI data centers are consuming extraordinary quantities of freshwater. A typical data center consumes approximately 1.1 million liters per day. Large data centers consume 18.9 million liters per day. The North American data center infrastructure alone is estimated to consume approximately 765 billion liters annually—equivalent to the total annual water consumption of New York City.

<img src="/manus-storage/figure3-water_9d9b6903.png" alt="Figure 3: AI & Data Centre Water Consumption — Selected Benchmarks (Log Scale)" style="width: 100%; max-width: 800px; margin: 20px 0; border: 1px solid #333; border-radius: 4px;" />

**Figure 3:** AI & Data Centre Water Consumption — Selected Benchmarks (Log Scale). Sources: Brookings (Nov 2025); de Vries-Gao, Patterns/SciencesDirect (Jan 2026); Reuters (Apr 2026); ELI (Oct 2025)

This water consumption occurs in a context of increasing global water scarcity. In regions where data centers are being built—particularly in the southwestern United States and parts of Europe—freshwater availability is already constrained. The environmental impact extends beyond the immediate facility: cooling water is often returned to rivers and aquifers at elevated temperatures, disrupting local ecosystems.

### 1.3 The Semiconductor Bottleneck

Advanced semiconductor chips—particularly those manufactured by TSMC and Samsung—are essential for AI training and inference. The demand for these chips has created a persistent shortage, driving up prices and constraining development. Manufacturing these chips is itself resource-intensive, requiring enormous quantities of water and energy, and generating significant chemical waste.

The semiconductor shortage has created a perverse incentive structure: companies are building redundant infrastructure to ensure they can secure chip supplies, further accelerating resource consumption. Each company builds its own data centers, its own cooling infrastructure, its own power generation capacity. This redundancy is economically wasteful and environmentally catastrophic.

---

## Part II: The Post-Data-Hoarding Economy and the Authorship Spectrum

### 2.1 The Authorship Problem

The question of authorship has become fundamentally unstable. The U.S. Copyright Office has issued guidance stating that AI systems cannot be authors—copyright requires human authorship. Yet the boundary between human authorship and AI assistance remains legally ambiguous. If a human uses an AI system to generate text, who is the author? The human who provided the prompt? The company that built the AI system? The people whose work was used to train the model?

This ambiguity creates a legal vacuum that benefits companies building AI systems and harms creators whose work is used in training data. A musician's work can be used to train a model that generates music without the musician's consent or compensation. A writer's work can be used to train a model that generates text without the writer's consent or compensation. The legal framework has not caught up to the technological reality.

The USPTO's 2025 revised inventorship guidance clarifies some aspects of this question for patents, but copyright and other forms of intellectual property remain murky. The fundamental issue is that current legal frameworks assume a clear distinction between creation and assistance. AI systems blur this distinction.

### 2.2 The Data-Hoarding Economy

Underlying the authorship problem is a deeper economic issue: the "data-hoarding economy." Companies building AI systems collect vast quantities of data—text, images, audio, video—often without explicit consent from the creators. This data is used to train models that generate significant value. The creators of the original data receive no compensation.

This is not a new problem. It is a continuation of patterns established by social media companies, which built enormous value by collecting user-generated content without proportional compensation. But the scale and stakes are higher with AI. The value generated by AI systems trained on creative work is orders of magnitude larger than the value generated by social media engagement.

The data-hoarding economy creates a perverse incentive structure:
- Companies are incentivized to collect as much data as possible, regardless of consent or compensation
- Creators are incentivized to withhold their work or to use technical measures to prevent its use in training
- The overall ecosystem becomes adversarial rather than collaborative

### 2.3 The Unified Knowledge Theory (UKT) as a Solution

The Unified Knowledge Theory proposes a different architecture: instead of centralized companies hoarding data and building monolithic AI systems, the ecosystem should be organized around a **trusted public library of verified knowledge** combined with **user-controlled personal data storage** and **company-specific AI models**.

**The Trusted Public Library** would contain verified, peer-reviewed knowledge: academic journals, published books, primary sources, and other materials that have been vetted by domain experts. This library would be maintained collaboratively by academic institutions, libraries, and research organizations. Access would be open and free.

**User-Controlled Personal Data** would remain under the control of individual users. If a user wants their creative work to be used in training an AI model, they can explicitly opt in and negotiate compensation. If they want to keep their work private, they can. The key is that control remains with the creator.

**Company-Specific AI Models** would be built on top of this infrastructure. Companies could build specialized models for specific domains or applications, trained on the public library plus user-contributed data (with appropriate compensation). The models would be more efficient, more transparent, and more accountable than current monolithic systems.

### 2.4 UKT Practicality and Antitrust Considerations

A critical concern with shared infrastructure is the potential for antitrust violations. If a single entity controls the "trusted public library," that entity could use its position to favor certain companies or suppress competitors. This is a real risk that must be addressed.

However, the UKT framework includes built-in safeguards. The "Expert Node" subscription model—where domain experts maintain and verify knowledge in their specific fields—creates natural competitive pressure. Multiple expert nodes can exist for the same domain, each maintaining their own version of the knowledge base. Users can choose which expert nodes to trust, and companies can choose which expert nodes to integrate into their systems.

This subscription model also addresses the antitrust concern directly: rather than a single centralized authority controlling all knowledge, multiple independent experts compete to provide the most accurate, comprehensive, and useful knowledge in their domains. Regulatory frameworks can enforce transparency requirements and prevent any single entity from achieving monopolistic control.

### 2.5 The Authorship Spectrum

The Unified Knowledge Theory also clarifies the authorship question by introducing what I term the "authorship spectrum." Rather than a binary distinction between creation and assistance, the framework recognizes a spectrum of contributions:

**Pure Creation:** A human creates original work with no AI assistance. The human is the author. Full copyright protection applies.

**Human-Directed AI Assistance:** A human uses an AI system to assist in creation—generating ideas, drafting text, creating images. The human directs the process and makes final decisions. The human is the author. The AI system is a tool.

**AI-Generated with Human Curation:** An AI system generates content, which a human then curates, edits, and refines. Authorship is shared. The human's contribution is recognized and compensated.

**AI-Generated with Human Verification:** An AI system generates content, which a human verifies for accuracy and appropriateness. The human's contribution is recognized but distinct from authorship.

**Pure AI Generation:** An AI system generates content with no human direction or verification. No human authorship. The content is not protected by copyright, but the AI system's creator may have other legal claims.

This spectrum allows for more nuanced legal frameworks that recognize the reality of human-AI collaboration while protecting creators' rights and ensuring appropriate compensation.

### 2.6 Connecting to the Polymathic Framework

This concept connects directly to the Neuro-Adaptive Reasoning Framework (LLM-HSAB: Large Language Mind/Highly Skill Adaptable Brain) discussed in our earlier research on AI and The Adaptable Mind: How Studying Polymathic Cognition Can Advance AI Architecture and Safety, where portable reasoning engines with low switching costs enable flexible, polymathic reasoning across multiple domains. The UKT framework suggests that such portable engines should be built on top of verified knowledge infrastructure, with clear boundaries between different domains and explicit acknowledgment of human contribution and expertise.

---

## Part III: Toward a Sustainable AI Ecosystem

### 3.1 Environmental Sustainability

<img src="/manus-storage/figure4-carbon_adcfb395.png" alt="Figure 4: AI Carbon Footprint in Context (Million Tonnes CO2-equivalent)" style="width: 100%; max-width: 800px; margin: 20px 0; border: 1px solid #333; border-radius: 4px;" />

**Figure 4:** AI Carbon Footprint in Context. Sources: de Vries-Gao, Patterns/SciencesDirect (Jan 2026); Xiao et al., Nature Sustainability (Nov 2025); Climate Impact (Oct 2025)

The Unified Knowledge Theory addresses environmental sustainability by reducing resource consumption at multiple levels:

**Reduced Redundancy:** Rather than each company building its own data centers and infrastructure, the ecosystem can share infrastructure. This eliminates the wasteful redundancy of current systems.

**More Efficient Models:** Models trained on verified knowledge are more efficient than models trained on mixed data. They require less computational power to achieve higher accuracy.

**Specialized Infrastructure:** Rather than building massive monolithic systems, companies can build specialized systems for specific domains. Specialized systems are more efficient and require less energy.

**Incentives for Efficiency:** In a competitive ecosystem where multiple companies offer AI services, there are strong incentives to reduce resource consumption. Energy costs are a major expense, so companies that can reduce energy consumption have a competitive advantage.

### 3.2 Legal and Ethical Sustainability

The UKT also addresses legal and ethical sustainability:

**Clear Authorship:** The authorship spectrum provides a clear framework for determining who deserves credit and compensation for creative work.

**User Control:** By giving users control over their personal data, the framework respects individual autonomy and creates incentives for ethical data practices.

**Transparency:** The framework requires transparency about what data is used in training, how models are built, and what assumptions underlie their outputs.

**Accountability:** By distributing control among multiple expert nodes and companies, the framework creates accountability mechanisms that prevent any single entity from dominating the ecosystem.

### 3.3 Economic Sustainability

The UKT creates a more sustainable economic model:

**Fair Compensation:** Creators are compensated for their work when it is used in training data. This creates incentives for creators to participate in the ecosystem rather than withhold their work.

**Competitive Markets:** By reducing barriers to entry (companies don't need to build massive data centers and collect enormous datasets), the framework enables more competition. More competition leads to better products and lower prices.

**Reduced Waste:** By eliminating redundant infrastructure, the framework reduces economic waste and creates more efficient markets.

---

## Conclusion

The AI industry faces two interconnected crises: environmental unsustainability and legal/ethical ambiguity around authorship and data use. These crises are not inevitable consequences of AI technology. They are consequences of how current systems are designed and organized.

A different design is possible. The Unified Knowledge Theory proposes a framework that addresses both crises simultaneously: a trusted public library of verified knowledge, user-controlled personal data, and company-specific AI models. This framework would be more sustainable, more equitable, and more efficient than current approaches.

The technology is not the bottleneck. The bottleneck is institutional will and governance structures. The question is whether we will build systems optimized for sustainability and equity, or continue optimizing for scale and speed.

---

## References

1. [IEA Energy & AI Report (2025)](https://www.iea.org/reports/energy-and-ai)

2. [Brookings Institution - Global energy demands within the AI regulatory landscape](https://www.brookings.edu/articles/global-energy-demands-within-the-ai-regulatory-landscape/)

3. [Brookings Institution - AI, data centers, and water](https://www.brookings.edu/articles/ai-data-centers-and-water/)

4. [de Vries & Gao - The carbon and water footprints of data centers](https://www.sciencedirect.com/science/article/pii/S2666389921001884)

5. [MIT - Explained: The environmental impact of generative AI](https://news.mit.edu/2024/environmental-impact-generative-ai-0614)

6. [Mercatus Center - Is Data Really a Barrier to Entry?](https://www.mercatus.org/research/policy-briefs/data-really-barrier-entry)

7. [Cambridge - Can federated learning save the world?](https://www.cambridge.org/core/journals/data-science-journal/article/can-federated-learning-save-the-world/)

8. [USPTO - Revised Inventorship Guidance for AI-Assisted Inventions](https://www.uspto.gov/sites/default/files/documents/2025-01-15_Inventorship%20Guidance.pdf)

9. [Holland & Knight - The Human Element: USPTO Clarifies Inventorship](https://www.hklaw.com/en/insights/publications/2025/01/the-human-element-uspto-clarifies-inventorship)

10. [Baker Donelson - Supreme Court Denies Certiorari in Thaler v. Perlmutter](https://www.bakerdonelson.com/insights/publications/2024/06/supreme-court-denies-certiorari-in-thaler-v-perlmutter)

11. [Carbon Brief - AI: Five charts that put data-centre energy use into context](https://www.carbonbrief.org/ai-five-charts-that-put-data-centre-energy-use-into-context/)

12. [Goldman Sachs - AI to drive 165% increase in data center power demand](https://www.goldmansachs.com/insights/pages/ai-power-demand.html)

13. [Deloitte - GenAI power consumption creates need for sustainable data centers](https://www2.deloitte.com/us/en/insights/industry/technology/generative-ai-power-consumption.html)

14. [arXiv - Unleashing Data Power for Green Federated Learning](https://arxiv.org/abs/2501.12345)

15. [CNBC - Big Tech AI Infrastructure Spending](https://www.cnbc.com/2026/02/big-tech-ai-infrastructure-spending/)

---

## Author's Note

This article presents a theoretical framework for addressing environmental and legal challenges in the AI industry. The Unified Knowledge Theory is offered as a foundation for further research, discussion, and potential implementation within the AI and technology communities. The frameworks presented here are grounded in existing research on sustainability, intellectual property, and AI architecture, but extend into theoretical territory that requires further development and validation.`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Article Hero */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663569588948/T7mDLwnDgNSQARR2cGjMY5/hero-bg-oUZdCjmvazDAQ8nYGJLxjX.webp)` }}
          role="img"
          aria-label="Data center infrastructure and circuit patterns illustrating AI sustainability and data economics"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        <div className="relative container pt-12 pb-16">
          <Link href="/" className="inline-flex items-center gap-2 mono-label text-muted-foreground hover:text-primary transition-colors duration-200 mb-8">
            <ArrowLeft size={14} /> Back to Research
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            {["AI Sustainability", "Data Economics", "IP Law", "Environmental Impact", "AI Safety"].map(tag => (
              <span key={tag} className="mono-label text-primary/70 bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-sm">{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-3 max-w-3xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            The Post-Data-Hoarding Economy and the Authorship Spectrum
          </h1>
          <p className="text-xl text-primary/80 mb-6" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
            A theoretical framework for sustainable AI collaboration addressing environmental and legal crises
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <span className="mono-label text-muted-foreground flex items-center gap-1.5"><Calendar size={12} /> Apr 2026</span>
            <span className="mono-label text-muted-foreground flex items-center gap-1.5"><BookOpen size={12} /> 18-22 min read</span>
            <span className="mono-label text-muted-foreground">By Matt Clarke</span>
            <span className="mono-label text-primary/60">Independent Research</span>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <main className="container py-12">
        <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-none lg:grid lg:grid-cols-[1fr_280px] lg:gap-16">
          {/* Content */}
          <article>
            <div className="prose prose-invert max-w-none">
              <Streamdown>{content}</Streamdown>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="mt-12 lg:mt-0">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-sm border border-primary/20 bg-primary/5 p-5 mb-6">
                <div className="mono-label text-primary mb-3 flex items-center gap-1.5">
                  <Download size={12} /> Download Article
                </div>
                <a href="/manus-storage/Article0-Post-Data-Hoarding-Economy_c3538858.pdf" download
                  className="inline-flex items-center gap-1.5 mono-label text-primary hover:text-primary/80 transition-colors">
                  PDF (72 KB) <ExternalLink size={11} />
                </a>
              </div>

              <div className="rounded-sm border border-border/60 bg-card p-5">
                <div className="mono-label text-primary mb-3">Related Research</div>
                <div className="space-y-3">
                  <Link href="/articles/ai-adaptable-mind" className="block group">
                    <p className="text-sm text-foreground/80 group-hover:text-primary transition-colors leading-snug" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      AI and The Adaptable Mind →
                    </p>
                    <p className="mono-label text-muted-foreground mt-1">Apr 2026</p>
                  </Link>
                  <Link href="/articles/knowledge-preservation-ai" className="block group">
                    <p className="text-sm text-foreground/80 group-hover:text-primary transition-colors leading-snug" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      Knowledge Preservation and AI Systems →
                    </p>
                    <p className="mono-label text-muted-foreground mt-1">Apr 2026</p>
                  </Link>
                </div>
              </div>

              <Link href="/about" className="block rounded-sm border border-border/60 bg-card p-5 hover:border-primary/40 hover:bg-card/80 transition-all duration-200">
                <div className="mono-label text-primary mb-3">About the Author</div>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
                  Learn more about Matt Clarke and his research →
                </p>
              </Link>
            </div>
          </aside>
        </div>

        {/* Comments Section */}
        <div className="mt-16 max-w-2xl mx-auto">
          <CommentsSection articleId="article-00" articleTitle="The Post-Data-Hoarding Economy and the Authorship Spectrum" />
        </div>
      </main>

      <Footer />
    </div>
  );
}

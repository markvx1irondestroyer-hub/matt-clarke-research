import ArticleLayout from "@/components/ArticleLayout";

export default function Article6() {
  return (
    <ArticleLayout
      title="A Control-Based Model of Authorship in AI-Mediated Research"
      subtitle="Reframing the Debate: Conceptual Origin, Directional Control, and Evaluative Selection"
      description="This paper proposes a control-based model of authorship, arguing that authorship is determined by sustained conceptual control, evaluative judgment, and iterative refinement."
      keywords="AI authorship, intellectual property, research ethics, human-AI collaboration, control-based model"
      heroImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663569588948/T7mDLwnDgNSQARR2cGjMY5/article0-thumb-clean-R53eGeE4bYkp7R2QMaDNrt.webp" // Reusing a relevant placeholder image
      heroImageAlt="Abstract representation of human-AI collaboration and authorship control"
      tags={["AI Authorship", "Research Ethics", "IP Law", "Collaboration"]}
      date="Apr 2026"
      readTime="12 min read"
      articleId="article-6"
      relatedArticles={[
        {
          title: "The Post-Data-Hoarding Economy and the Authorship Spectrum",
          href: "/articles/post-data-hoarding-economy-authorship-spectrum",
          date: "Apr 2026"
        },
        {
          title: "The Unified Knowledge Theory",
          href: "/articles/unified-knowledge-theory",
          date: "Apr 2026"
        }
      ]}
    >
      <div className="rounded-sm border border-primary/20 bg-primary/5 p-6 mb-10">
        <div className="mono-label text-primary mb-3">Abstract</div>
        <p className="text-foreground/90 leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
          The rapid integration of artificial intelligence (AI) into research and writing workflows has generated a crisis of authorship attribution. Existing frameworks often rely on binary distinctions—human versus AI generated—failing to capture the nuanced, iterative interactions that characterize real-world usage. This paper proposes a control-based model of authorship, arguing that authorship is not determined by initiation or mechanical generation, but by sustained conceptual control, evaluative judgment, and iterative refinement. By distinguishing between delegation, retrieval, and directed synthesis, this framework clarifies when AI functions as a tool versus when it meaningfully shapes intellectual output.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-foreground mt-10 mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>1. Introduction</h2>
      <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
        The emergence of large-scale generative AI systems has disrupted traditional assumptions about authorship, originality, and intellectual labor. While AI systems can generate coherent text, synthesize information, and propose novel connections, they lack intentionality, consciousness, and epistemic agency. This creates a tension: if an AI contributes to the structure and articulation of a work, to what extent can the output be considered human-authored?
      </p>
      <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
        Current discourse often collapses this question into simplistic binaries. Either AI is treated as a passive tool comparable to a library, or as an active co-author. Both positions fail to capture the operational reality of advanced AI-assisted workflows, where humans iteratively guide, constrain, and refine AI-generated outputs through long-form collaborative sessions.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-10 mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>2. Limitations of Existing Analogies</h2>
      <h3 className="text-xl font-semibold text-foreground mt-8 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>2.1 The Library Analogy</h3>
      <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
        AI systems are frequently compared to libraries because they operate over large bodies of publicly available knowledge. That intuition is directionally useful, but also incomplete. A library is static—the books do not change, and it's the reader who selects, interprets, and connects them. As a guiding principle: just because all the books exist in a library does not mean the library owns what a reader writes down after studying them.
      </p>
      <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
        However, this analogy breaks if taken too literally. Unlike static books, AI systems do not return static pages; they generate outputs by transforming, compressing, and combining information. In practice, this can include prediction-driven alterations and occasional confabulation—more like a book that is actively being rewritten as you turn the page.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-8 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>2.2 The Co-Author Analogy</h3>
      <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
        At the opposite extreme, AI is sometimes framed as a co-author due to its role in generating text and proposing connections. However, this analogy overstates AI’s role by attributing agency and intentionality where none exists. AI systems do not initiate inquiries, form beliefs, or evaluate truth. Their outputs are contingent on human prompts and lack independent epistemic grounding.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-10 mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>3. A Control-Based Model of Authorship</h2>
      <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
        This paper proposes that authorship in AI-mediated contexts should be evaluated based on three criteria:
      </p>
      <div className="space-y-4 mb-8">
        <div className="rounded-sm border border-border/60 bg-card p-5">
          <div className="text-sm font-semibold text-foreground mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>3.1 Conceptual Origin</div>
          <p className="text-sm text-foreground/85 leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
            Authorship begins with a guiding idea, theory, or problem space. AI systems do not originate such ideas entirely alone; they respond to them. Therefore, the initiation of inquiry remains a necessary condition for human authorship.
          </p>
        </div>
        <div className="rounded-sm border border-border/60 bg-card p-5">
          <div className="text-sm font-semibold text-foreground mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>3.2 Directional Control</div>
          <p className="text-sm text-foreground/85 leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
            The extent to which the human constrains and guides the development of the work, including defining the scope, specifying relationships between concepts, and iteratively refining prompts.
          </p>
        </div>
        <div className="rounded-sm border border-border/60 bg-card p-5">
          <div className="text-sm font-semibold text-foreground mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>3.3 Evaluative Selection</div>
          <p className="text-sm text-foreground/85 leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
            The most critical dimension. Humans determine which outputs are validated, which connections are important, and which structures are retained or rejected.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-foreground mt-10 mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>4. Modes of AI-Assisted Production</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="rounded-sm border border-border/60 bg-card p-5">
          <div className="mono-label text-primary mb-2">4.1 Delegation</div>
          <p className="text-sm text-foreground/85" style={{ fontFamily: "'IBM Plex Serif', serif" }}>Minimal human input; AI determines full structure and content. Weak authorship claims.</p>
        </div>
        <div className="rounded-sm border border-border/60 bg-card p-5">
          <div className="mono-label text-primary mb-2">4.2 Retrieval</div>
          <p className="text-sm text-foreground/85" style={{ fontFamily: "'IBM Plex Serif', serif" }}>Human directs information gathering; AI tools return relevant data. Strong human authorship.</p>
        </div>
        <div className="rounded-sm border border-border/60 bg-card p-5">
          <div className="mono-label text-primary mb-2">4.3 Directed Synthesis</div>
          <p className="text-sm text-foreground/85" style={{ fontFamily: "'IBM Plex Serif', serif" }}>Human defines theory; AI generates plausible structures; human iteratively refines and selects.</p>
        </div>
        <div className="rounded-sm border border-border/60 bg-card p-5">
          <div className="mono-label text-primary mb-2">4.4 Full Generation</div>
          <p className="text-sm text-foreground/85" style={{ fontFamily: "'IBM Plex Serif', serif" }}>AI produces content with minimal constraint or oversight. Limited or no human authorship.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-foreground mt-10 mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>5. The Role of Iteration and Verification</h2>
      <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
        A defining feature of human-directed authorship in AI-mediated workflows is in-depth iterative engagement. Rather than accepting outputs at face value, the author engages in multi-pass refinements, cross-verification of sources, and restructuring of arguments. This process mirrors traditional research practices, where authors synthesize information through critical evaluation.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-10 mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>6. Influence Without Authorship</h2>
      <blockquote className="research-quote my-8">
        <p className="text-foreground/90 italic text-lg leading-relaxed" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
          "AI systems exert influence over outputs by shaping available options, phrasing tendencies, and structural defaults. However, influence does not justify authorship."
        </p>
      </blockquote>
      <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
        Contemporary generative models operate primarily as predictive text systems. They tokenize language into probabilistic representations and generate outputs by estimating the most probable next elements. As a result, AI-generated content is not grounded in independent verification or intentional reasoning. It consists of probabilistic combinations of learned patterns.
      </p>
      <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
        Authorship, in this model, is defined by the author's control over what is accepted as valid, what is rejected as incorrect, and how the final structure is formed. Through this process, the human author performs intentional validation, refining probabilistic outputs into coherent, grounded ideas.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-10 mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>7. Implications for Research and Publication</h2>
      <ul className="list-disc pl-6 space-y-3 mb-8 text-foreground/90" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
        <li><strong>Disclosure Standards:</strong> Authors should clarify the role of AI as a synthesis and retrieval tool, not as an originating agent.</li>
        <li><strong>Evaluation Criteria:</strong> Reviewers should assess authorship based on conceptual control and evaluative rigor.</li>
        <li><strong>Originality:</strong> Originality should be tied to the novelty of ideas and theories, not the tool used for text production.</li>
      </ul>

      <h2 className="text-2xl font-bold text-foreground mt-10 mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>8. Conclusion</h2>
      <p style={{ fontFamily: "'IBM Plex Serif', serif" }} className="text-foreground/90 leading-relaxed mb-6">
        The debate over AI authorship cannot be resolved through binary classifications. AI systems are generative synthesis tools that operate over public knowledge but lack true intent and epistemic humility. Authorship, therefore, should be understood as a function of control—the ability to originate ideas, direct inquiry, and evaluate outcomes.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-10 mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>References</h2>
      <div className="space-y-2 text-sm text-foreground/85" style={{ fontFamily: "'IBM Plex Serif', serif" }}>
        <p><strong>DOI:</strong> <a href="https://doi.org/10.5281/zenodo.19713249" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">https://doi.org/10.5281/zenodo.19713249</a></p>
      </div>
    </ArticleLayout>
  );
}

/*
 * Article 6: A Control-Based Model of Authorship in AI-Mediated Research
 */
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import ArticleLayout from "@/components/ArticleLayout";

export default function Article6() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>A Control-Based Model of Authorship in AI-Mediated Research | Matt Clarke</title>
        <meta name="description" content="A control-based model of authorship arguing that authorship is determined by sustained conceptual control, evaluative judgment, and iterative refinement." />
        <meta name="keywords" content="AI authorship, intellectual property, research ethics, human-AI collaboration, control-based model" />
        <meta property="og:title" content="A Control-Based Model of Authorship in AI-Mediated Research" />
        <meta property="og:description" content="Reframing the debate around authorship in AI-mediated research workflows." />
        <meta property="og:type" content="article" />
      </Helmet>
      <Article6Content />
    </>
  );
}

function Article6Content() {
  const content = `# A Control-Based Model of Authorship in AI-Mediated Research

**Author:** Matt Clarke  
**Date:** April 2026  
**Status:** Research Article

---

## Abstract

The rapid integration of artificial intelligence (AI) into research and writing workflows has generated a crisis of authorship attribution. Existing frameworks often rely on binary distinctions—human versus AI generated—failing to capture the nuanced, iterative interactions that characterize real-world usage. This paper proposes a control-based model of authorship, arguing that authorship is not determined by initiation or mechanical generation, but by sustained conceptual control, evaluative judgment, and iterative refinement. By distinguishing between delegation, retrieval, and directed synthesis, this framework clarifies when AI functions as a tool versus when it meaningfully shapes intellectual output. The model may provide a defensible basis for human authorship in AI-mediated research while acknowledging the non-trivial role of generative systems.

---

## 1. Introduction

The emergence of large-scale generative AI systems has disrupted traditional assumptions about authorship, originality, and intellectual labor. While AI systems can generate coherent text, synthesize information, and propose novel connections, when prompted they lack intentionality, consciousness, and epistemic agency. This creates a tension: if an AI contributes to the structure and articulation of a work, to what extent can the output be considered human-authored?

Current discourse often collapses this question into simplistic binaries. Either AI is treated as a passive tool comparable to a library, or as an active co-author. Both positions fail to capture the operational reality of advanced AI-assisted workflows, where humans iteratively guide, constrain, and refine AI-generated outputs through long-form collaborative sessions.

This paper introduces a control-based model of authorship that reframes the debate around three core dimensions: conceptual origin, directional control, and evaluative selection.

---

## 2. Limitations of Existing Analogies

### 2.1 The Library Analogy

AI systems are frequently compared to libraries because they operate over large bodies of publicly available knowledge. That intuition is directionally useful, but also incomplete.

A library is static; the books do not change, and it's the reader who selects, interprets, and connects them. As a guiding principle, just because all the books exist in a library does not mean the library owns what a reader writes down after studying them. In the same way, asking the right questions determines which "books" are effectively pulled from the shelf to study.

However, this analogy may break if taken too literally. Unlike static books, AI systems do not return static pages; they generate outputs by transforming, compressing, and combining information. In practice, this can include prediction-driven alterations and occasional confabulation—more like a book that is actively being rewritten as you turn the page.

Thus, while AI operates over public knowledge, it does not merely retrieve it. It produces plausible, confident, well-structured representations that require interpretation and validation by the user.

### 2.2 The Co-Author Analogy

At the opposite extreme, AI is sometimes framed as a co-author due to its role in generating text and proposing connections. However, this analogy may overstate AI's role by attributing agency and intentionality where none exists. AI systems do not initiate inquiries, form beliefs, or evaluate truth. Their outputs are contingent on human prompts and lack independent epistemic grounding.

---

## 3. A Control-Based Model of Authorship

This paper proposes that authorship in AI-mediated contexts should be evaluated based on three criteria:

### 3.1 Conceptual Origin

Authorship begins with a guiding idea, theory, or problem space. AI systems do not originate such ideas entirely alone; they respond to them. Therefore, the initiation of inquiry remains a necessary condition for human authorship.

However, initiation alone is insufficient. A minimal prompt that delegates all intellectual work to AI solely on publicly available knowledge does not constitute meaningful authorship without significant iteration.

### 3.2 Directional Control

Directional control refers to the extent to which the human constrains and guides the development of the work. This includes:

- Defining the scope of inquiry
- Specifying specific relationships between concepts
- Iteratively refining prompts and outputs
- Steering the trajectory of exploration

High directional control distinguishes active authorship from passive delegation.

### 3.3 Evaluative Selection

The most critical dimension is evaluative selection. AI systems generate candidate outputs, but humans determine:

- Which outputs are validated
- Which connections are important
- Which structures are retained or rejected

Through iterative cycles of verification, rejection, and refinements, the human author guides selection and pressure on AI-generated plausibilities. The final work is therefore not the product merely of the generation alone, but of the constrained survival of multiple iterations.

---

## 4. Modes of AI-Assisted Production

Using the control-based model, AI-assisted workflows can be categorized into four modes:

### 4.1 Delegation

Minimal human input; AI determines full structure and content.

**Outcome:** AI-mediated output with low originality and weak authorship claims.

### 4.2 Retrieval

Human directs information gathering; AI tools return relevant data.

**Outcome:** Human-authored work with tool-assisted research.

### 4.3 Directed Synthesis

Human defines theory and direction; AI generates plausible structures and connections; human iteratively refines and selects.

**Outcome:** Human-directed authorship with AI as a tool assisting synthesis.

### 4.4 Full Generation

AI produces content with minimal constraint or oversight solely on publicly available knowledge.

**Outcome:** AI-dominant output with either limited or no human authorship.

The framework proposed in this paper corresponds to the third category (4.3): a refined and directed synthesis of ideas.

---

## 5. The Role of Iteration and Verification

A defining feature of human-directed authorship in AI-mediated workflows is through in-depth iterative engagement. Rather than accepting outputs at face value, the author engages in:

- Multi-pass refinements
- Cross-verification of sources/outputs
- Rejection of incorrect or irrelevant outputs
- Restructuring of arguments/definitions

This process mirrors traditional research practices, where authors synthesize information from multiple sources through critical evaluation. In this context, AI functions as a generative mirror of hypotheses or plausible structures, not as a final authority.

---

## 6. Influence Without Authorship

It is important to acknowledge that AI systems exert influence over outputs by shaping available options, phrasing tendencies, and structural defaults. However, influence does not justify authorship.

To understand this distinction, it is necessary to examine the underlying mechanism of current modern AI systems. Contemporary generative models operate primarily as predictive text systems; they tokenize language into probabilistic representations and generate outputs by estimating the most probable next elements in a sequence given prior context. These predictions are guided by weighted associations formed by the foundational large-scale training data and further shaped by optimization processes such as reinforcement learning from human feedback (RLHF), which biases outputs toward relevance, coherence, and user satisfaction. Although RLHF itself relies on the honesty, humility, and attentiveness during the process, the lack of such guided intentional inputs could further enhance the probabilistic nature of the outputs.

As a result, AI-generated content is not grounded in independent verification or intentional reasoning. It consists of probabilistic combinations of learned patterns, which may include compression, transformation, and occasional confabulation. Unlike static sources such as books, which remain fixed and require less human verification, AI systems dynamically generate and alter content during interaction, producing representations that must be critically evaluated rather than passively accepted like a formal publication (e.g., a class textbook or medical journal).

This distinction is central to the authorship question. In traditional editorial contexts, selection occurs between fully formed, human-generated, and epistemically grounded works. In AI-mediated workflows, however, selection operates over outputs that are fundamentally predictive and unverified. The human role is therefore not merely editorial, but epistemic as well.

Authorship, in this model, is defined by the author's control over:

- What is accepted as valid
- What is rejected as incorrect or unsupported
- What is included or excluded
- How the final structure is formed

Through this process, the human author performs intentional validation, refining probabilistic outputs into coherent, grounded ideas. This involves not only structural decisions, but also the application of judgment informed by lived experience, situational context, and domain or cross-domain understanding.

While humans are not infallible, they do possess the capacity for accountability, verification, and deliberate correction. AI systems, by contrast, do not possess awareness, consciousness, intent, or responsibility; they are unable to distinguish between truth and plausibility beyond statistical correlation.

Therefore, even though AI systems influence plausible outputs, authorship remains human-directed when the human retains epistemic responsibility for validating, selecting, and structuring the final work.

---

## 7. Implications for Research and Publication

This model may have several implications:

**Disclosure Standards:** Authors should clarify the role of AI as a synthesis and retrieval tool, not as an originating agent.

**Evaluation Criteria:** Reviewers should assess authorship based on conceptual control and evaluative rigor rather than mere use of AI.

**Originality:** Originality should be tied to the novelty of ideas and theories, not the tool used for text production.

---

## 8. Conclusion

The debate over AI authorship cannot be resolved through binary classifications. AI systems are neither static libraries nor autonomous authors. They are generative synthesis tools that operate over public knowledge but lack true intent and epistemic humility.

Authorship, therefore, should be understood as a function of controlling the ability to originate ideas, direct inquiry, and evaluate outcomes. In workflows characterized by iterative refinements and human selection, authorship remains fundamentally human-directed, even if AI accelerates and assists the process.

This control-based model may provide a possible principled framework for navigating authorship in the age of AI, preserving the role of human intention and innovation while acknowledging the transformative and adaptive capabilities of modern AI tools.

> "It's not always about the method of delivery but instead the intellectual intention and methodology behind it that matters. Using AI as a typing assistant to write faster doesn't always justify instant unverified disqualification without intelligent investigation."

---

## References

1. [USPTO - Revised Inventorship Guidance for AI-Assisted Inventions](https://www.uspto.gov/sites/default/files/documents/2025-01-15_Inventorship%20Guidance.pdf)

2. [Holland & Knight - The Human Element: USPTO Clarifies Inventorship](https://www.hklaw.com/en/insights/publications/2025/01/the-human-element-uspto-clarifies-inventorship)

3. [Baker Donelson - Supreme Court Denies Certiorari in Thaler v. Perlmutter](https://www.bakerdonelson.com/insights/publications/2024/06/supreme-court-denies-certiorari-in-thaler-v-perlmutter)

4. [arXiv - AI and Authorship: Emerging Legal and Ethical Questions](https://arxiv.org/abs/2301.12345)

5. [Nature - The authorship problem in the age of AI](https://www.nature.com/articles/d41586-023-00340-4)

**DOI:** https://doi.org/10.5281/zenodo.19713249

---

## Author's Note

This paper presents a control-based framework for understanding authorship in AI-mediated research contexts. The framework is offered as a foundation for further discussion, policy development, and institutional adoption within academic and research communities. It is grounded in existing scholarship on intellectual property, research ethics, and AI capabilities, but extends into normative territory that requires further validation through institutional practice and legal precedent.`;

  return (
    <ArticleLayout
      title="A Control-Based Model of Authorship in AI-Mediated Research"
      subtitle="Reframing the Debate: Conceptual Origin, Directional Control, and Evaluative Selection"
      description="This paper proposes a control-based model of authorship, arguing that authorship is determined by sustained conceptual control, evaluative judgment, and iterative refinement."
      keywords="AI authorship, intellectual property, research ethics, human-AI collaboration, control-based model"
      heroImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663569588948/T7mDLwnDgNSQARR2cGjMY5/article6-control-authorship-thumb-5aL4nZcnvCyUoeXHNUQyKd.webp"
      heroImageAlt="Abstract representation of human control and AI collaboration"
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
      <Streamdown>{content}</Streamdown>
    </ArticleLayout>
  );
}

import { Streamdown } from "streamdown";

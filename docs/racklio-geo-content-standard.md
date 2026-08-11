# Racklio GEO Content Standard

**Version:** 1.0  
**Status:** Approved reference standard  
**Reference implementation:** `/comparisons/rocket-net-vs-kinsta`

Generative Engine Optimization (GEO) is an editorial layer above Racklio's existing SEO foundation. It does not replace SEO, alter Racklio's evidence-first methodology, or justify content written primarily for machines. GEO should make verified editorial reasoning easier for people and search systems to understand, extract, and trace.

## Governing principle

Racklio GEO follows this reasoning sequence:

> Verified facts → evidence → Racklio interpretation → decision relevance

Restating provider documentation is not sufficient editorial value. Racklio must help a reader understand:

- what the documented facts establish;
- which authoritative evidence supports them;
- why the facts matter;
- which buyer or workload should care; and
- how the facts affect a purchasing decision.

Every GEO addition must improve human decision quality. Do not optimize a page for AI systems at the expense of clarity, trust, accuracy, or usefulness.

## Evidence and editorial categories

### Provider fact

A provider fact is a statement directly supported by authoritative provider documentation. It must remain faithful to the source's scope, terminology, date, and limitations. Provider marketing language remains a provider claim unless Racklio has independent evidence that establishes it as fact.

### Racklio analysis

Racklio analysis interprets documented facts. It may explain differences, tradeoffs, forecasting implications, operational consequences, or questions a buyer should investigate. Analysis must not imply that Racklio performed tests or obtained evidence it does not have.

### Decision implication

A decision implication explains how facts and analysis affect a specific buyer, workload, or purchasing scenario. It should identify who should care, why the difference matters, and when further validation is required.

These categories must never be blurred. Labels are useful where the distinction may otherwise be unclear, but every paragraph does not need a mechanical label.

Do not write unsupported statements such as:

- “We tested…”
- “Our benchmarks show…”
- “X is faster…”
- “X performs better…”
- “Best overall…”
- “Winner…”

Such language is permitted only when Racklio has genuine, documented evidence that supports the exact claim and the methodology is disclosed.

## Answer-first architecture

Comparison pages should present a concise **Quick Decision** near the beginning of the page. Its preferred structure is:

- **Choose Provider A if…**
- **Choose Provider B if…**
- **The decision depends on…**

The third condition is required because documented evidence often does not support a universal winner. It should preserve meaningful uncertainty and identify the workload, operational requirement, or evidence gap that changes the decision.

The Quick Decision summarizes the conclusion. It must not duplicate the full comparison, list every feature, introduce unsupported certainty, or become a promotional CTA block.

## Key Difference pattern

A self-contained **Key Difference** block may be used when one structural distinction explains a significant part of the buying decision. It should usually contain:

1. the documented provider fact;
2. the relevant source or citation;
3. Racklio's interpretation; and
4. the purchasing implication.

The block should remain understandable when extracted from the surrounding article. Do not require it when the comparison has no sufficiently meaningful central distinction, and do not add multiple Key Difference blocks merely for visual variety.

## Decision relevance

Decision relevance is mandatory as an editorial concept. The preferred comparison-table architecture is:

| Factor | Provider A | Provider B | Decision relevance |
| ------ | ---------- | ---------- | ------------------ |

The Decision relevance column explains **why** the documented difference matters. It may address:

- which buyer should care;
- which workload changes the interpretation;
- whether a difference affects cost predictability or multi-site use;
- whether a metric is insufficient to establish capacity;
- which operational requirement should be validated; or
- when the documented difference is not meaningful.

Decision relevance must not become another marketing-claim column. It must not declare comparative performance, security, support quality, or value without evidence. If a fourth column harms usability, preserve the same information in an accessible responsive pattern rather than removing the reasoning.

## Scenario-based decision matrix

Use a scenario matrix when documented differences support meaningful workload guidance.

| Scenario                   | Lean                                                                                | Why                      |
| -------------------------- | ----------------------------------------------------------------------------------- | ------------------------ |
| Relevant buyer or workload | Lean Provider A, Lean Provider B, Depends, or Neither / Requires further validation | Evidence-grounded reason |

Allowed outcomes are:

- **Lean Provider A**
- **Lean Provider B**
- **Depends**
- **Neither / Requires further validation**, when justified

Scenarios must arise from actual documented differences. Relevant examples may include one business site, multiple sites, agency workflows, WooCommerce, developer-heavy workflows, unpredictable or predictable traffic, cost predictability, and specific workflow requirements.

Do not invent scenarios to increase page length. A “Lean” is a conditional direction, not a ranking or universal recommendation.

## Information gain

Every major section must answer:

> What decision does this information help the reader make?

If a paragraph only repeats provider documentation:

- connect it to a decision implication;
- compress it; or
- remove it.

Prefer information gain over content volume. Additional words are justified only when they improve clarity, evidence traceability, interpretation, or purchasing usefulness.

## Source standard

Use sources in this priority order:

1. Official provider pricing pages
2. Official product documentation
3. Official billing documentation
4. Official support documentation
5. Official terms, SLA, or policy pages
6. Other authoritative first-party provider pages

Third-party sources may be used only when first-party evidence is unavailable and the editorial reason is defensible and disclosed where necessary.

Verify time-sensitive claims against current authoritative sources. These include:

- prices and promotions;
- monthly and annual billing terms;
- site or install limits;
- visitors and traffic accounting;
- storage, bandwidth, and CDN allowances;
- backups and retention;
- overages and add-ons;
- support scope and channels;
- SLA terms; and
- included services.

A source must support the exact statement, not merely discuss the same product broadly. Replace redirected, outdated, or superseded documentation when a current canonical source is available.

## Pricing standard

Pricing language must distinguish:

- monthly price;
- annual-effective price;
- the amount billed annually;
- promotional or introductory price;
- regular ongoing price;
- a free first month or trial term;
- included allowances; and
- overage or add-on pricing.

Use provider-published billing figures where available. Do not independently divide an annual total to infer a monthly figure unless the calculation is editorially necessary and explicitly labeled as a Racklio calculation.

Do not call one provider “cheaper” without defining the exact plan, billing period, included allowances, and workload context that make the comparison valid. Do not compare prices for materially different products as though they are equivalent.

## Verification and freshness

Pages that support visible verification metadata must show the actual date sources were checked. Never fabricate freshness.

When provider documentation changes, update all applicable elements:

- the factual statement;
- the citation or source URL;
- the visible verification date; and
- `dateModified`, where applicable.

If official sources conflict, qualify the conclusion, disclose the conflict where material, or omit the unresolved fact. Do not silently infer an answer.

## Natural question coverage

The page should naturally answer high-intent questions such as:

- What is the main difference?
- Who should choose each option?
- What are the important limitations?
- Which workload changes the decision?
- When is neither option clearly preferable?

Do not convert every question into an exact-match heading. Integrate answers into the editorial flow and avoid repetitive FAQ-style writing.

## FAQ policy

- Useful existing FAQs may remain.
- Do not add FAQs solely for GEO coverage.
- Do not repeat answers already stated clearly elsewhere.
- Do not add `FAQPage` schema unless Racklio's schema policy is separately changed and approved.

## SEO preservation

GEO must not disrupt:

- canonical URLs;
- page titles and meta descriptions;
- crawlability;
- useful internal linking;
- Article schema;
- BreadcrumbList schema;
- semantic heading hierarchy;
- accessibility;
- mobile performance; or
- existing responsive behavior.

Do not add speculative AI-specific metadata, hidden AI-targeted content, keyword stuffing, or `llms.txt` purely because a GEO layer is being applied.

## Schema policy

Currently allowed where appropriate:

- `Article`
- `BreadcrumbList`

Do not add under this standard without separate approval:

- `FAQPage`
- `Review`
- `AggregateRating`

Schema must describe visible page content accurately. GEO does not justify additional schema by itself.

## Visual standard

GEO content must preserve Racklio's premium editorial design and must not make the site resemble an SEO content farm.

- Reuse existing components and design tokens.
- Preserve typography, hierarchy, spacing, and whitespace.
- Keep answer blocks concise and scan-friendly.
- Avoid excessive callout boxes, cards, badges, and repeated summaries.
- Do not turn every fact into a visual component.
- Avoid visual duplication between the hero, Quick Decision, table, and conclusion.

The page should still feel calm, structured, and intentionally designed after the GEO layer is added.

## Mobile standard

Review these elements at mobile, tablet, and desktop widths:

- Quick Decision;
- Key Difference;
- comparison tables;
- scenario matrices;
- long pricing strings;
- source links;
- CTA areas; and
- sticky table of contents behavior.

There must be no page-level horizontal overflow. Horizontal table scrolling is acceptable only inside a deliberate, keyboard-focusable, clearly labeled table container. Long provider names, prices, citations, and links must wrap or scroll within their intended component.

## Commercial independence

GEO must preserve Racklio's commercial rules:

- Affiliate relationships do not determine recommendations.
- Racklio does not sell paid rankings.
- Do not introduce fabricated urgency or scarcity.
- Do not publish unsupported savings claims.
- Do not use commission-driven recommendation language.
- Keep the affiliate disclosure visible and clear.

CTA placement and emphasis must not distort the editorial conclusion.

## Page-type applicability

Version 1.0 is based on an approved comparison-page pilot. Its patterns do not automatically transfer unchanged to every Racklio page type.

### Comparisons

Apply the full standard where the evidence and editorial context justify it. Quick Decision, provider-fact separation, decision relevance, source verification, and conditional conclusions are core comparison requirements.

### Reviews

Reviews require a separately approved review-specific GEO adaptation. A single-provider review does not have the same comparative table or Lean matrix structure.

### Best / Buying Guides

Best For and buying-guide pages require a separately approved selection and decision framework. This standard does not authorize rankings, scores, or universal winners.

### Homepage

The homepage must not inherit article structures mechanically. Its information architecture, trust signals, and decision paths require separate treatment.

### Informational articles

Methodology, legal, trust, and other informational pages should not receive comparison components without a page-specific editorial reason and separate approval.

## Required and optional comparison elements

| Element                                      | Comparison pages                                         | Requirement                                                                     |
| -------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Quick Decision                               | Early answer-first summary                               | Required                                                                        |
| Key Difference                               | Central structural distinction                           | Optional; use only when meaningful                                              |
| Decision relevance                           | Explains why documented differences matter               | Required concept; preferred in the primary table                                |
| Scenario matrix                              | Applies evidence to supported workloads                  | Optional; required when several distinct scenarios materially change the choice |
| Source verification                          | Current primary sources and visible verification date    | Required                                                                        |
| Provider fact / Racklio analysis distinction | Separates evidence from interpretation                   | Required                                                                        |
| Trust block                                  | Explains evidence and commercial independence            | Required where established by the page template                                 |
| FAQs                                         | Concise unresolved questions                             | Optional                                                                        |
| Internal links                               | Relevant reviews, methodology, standards, and disclosure | Required where editorially natural; avoid over-linking                          |
| Verification date                            | Actual date current sources were checked                 | Required where supported by the page type                                       |

## GEO Anti-Patterns

- Keyword stuffing
- Repetitive question headings
- Artificial FAQ expansion
- Generic AI-written filler
- Unsupported superlatives
- Fabricated tests, benchmarks, or experiences
- Excessive summaries
- Duplicating the same answer in multiple sections
- Speculative AI metadata
- Publishing large volumes of near-duplicate pages
- Turning every fact into a callout
- Adding text without decision value
- Converting provider claims into independent Racklio claims
- Using a Decision relevance column as promotional copy
- Hiding uncertainty to force a recommendation

## Editorial approval checklist

Before approving a GEO-enhanced comparison, verify:

- [ ] The Quick Decision answers who should consider each provider and when the decision depends on context.
- [ ] Factual claims are accurate and supported by authoritative sources.
- [ ] Time-sensitive pricing and limits were verified on the actual review date.
- [ ] Monthly, annual, promotional, and overage pricing are distinguished precisely.
- [ ] Provider facts, provider claims, Racklio analysis, and decision implications are not blurred.
- [ ] No fabricated testing, benchmarks, ratings, or support experiences appear.
- [ ] No unsupported winner, “best overall,” or comparative performance claim appears.
- [ ] Every included scenario is supported by documented differences.
- [ ] Decision relevance explains why a difference matters without becoming marketing copy.
- [ ] Major sections provide information gain rather than specification repetition.
- [ ] Important limitations and unresolved uncertainty remain visible.
- [ ] Quick Decision, tables, matrices, pricing, sources, CTAs, and TOC work on mobile.
- [ ] No page-level horizontal overflow exists.
- [ ] Canonical, metadata, crawlability, headings, internal links, and accessibility are preserved.
- [ ] Only approved schema types are present and describe visible content accurately.
- [ ] The affiliate disclosure remains visible and commercial relationships do not shape conclusions.
- [ ] Source URLs, verification dates, and `dateModified` are current where applicable.
- [ ] The GEO layer did not create unnecessary content inflation or visual clutter.

## Implementation philosophy

Do not optimize pages for AI systems at the expense of human decision quality.

The strongest Racklio GEO content improves these outcomes simultaneously:

- human clarity;
- trust;
- extractability;
- structured reasoning;
- source traceability; and
- purchasing usefulness.

If a proposed GEO element improves machine-oriented structure but makes the page less accurate, less readable, more repetitive, or more promotional, do not implement it.

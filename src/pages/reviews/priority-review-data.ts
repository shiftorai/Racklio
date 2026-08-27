import type { SoftwareReviewData } from '@/components/reviews';

const verificationDate = 'August 14, 2026';

export const engageBayData: SoftwareReviewData = {
  slug: 'engagebay',
  name: 'EngageBay',
  category: 'CRM and customer engagement software',
  categoryLinks: [
    {
      title: 'CRM & Customer Engagement',
      href: '/categories/crm-customer-engagement',
    },
  ],
  headline:
    'EngageBay review: an integrated CRM, marketing, sales, and service workspace for smaller teams',
  dek: 'EngageBay combines contact management, deal workflows, marketing automation, live chat, and help-desk functions. The buying question is whether one connected suite is more useful than deeper specialist tools for each team.',
  metaTitle: 'EngageBay Review 2026: Pricing, Features & Fit | Racklio',
  metaDescription:
    'Evidence-first EngageBay review covering CRM, marketing, sales, help desk, pricing limits, integrations, strengths, limitations, and small-business fit.',
  officialUrl: 'https://www.engagebay.com/',
  providerKey: 'engageBay',
  video: {
    embedUrl: 'https://www.youtube-nocookie.com/embed/Z2_30q90dHc',
    title:
      'EngageBay Review 2026: Is It Worth It for Small Businesses? by Racklio',
    heading: 'Watch: EngageBay Review 2026',
    description:
      'This video summarizes who EngageBay fits, its main trade-offs, and the factors small businesses should evaluate before choosing it.',
  },
  relatedComparisons: [
    { title: 'EngageBay pricing guide', href: '/guides/engagebay-pricing' },
    {
      title: 'EngageBay alternatives',
      href: '/alternatives/engagebay-alternatives',
    },
    {
      title: 'Compare EngageBay vs HubSpot',
      href: '/comparisons/engagebay-vs-hubspot',
    },
  ],
  verificationDate,
  idealUser:
    'Small or growing businesses that want customer records, sales activity, marketing workflows, and service context in one system.',
  pricingModel:
    'Per-user subscription with separate All-in-One, Marketing, CRM & Sales, and Service Bay product choices; plan limits vary by contacts and features.',
  summary: [
    {
      label: 'Best for',
      text: 'Smaller teams seeking one connected customer system across CRM, marketing, sales, and support.',
    },
    {
      label: 'Consider if',
      text: 'Shared contact context and bundled workflows matter more than specialist depth in every department.',
    },
    {
      label: 'Look elsewhere if',
      text: 'A team needs a deeply specialized enterprise CRM, contact center, or help desk with independently verified requirements.',
    },
    {
      label: 'Main limitation',
      text: 'Contacts, automation, reporting, storage, and other capabilities change materially by plan, so a feature-level requirements check is essential.',
    },
  ],
  fit: [
    'You want CRM records connected with sales, marketing, live chat, and service activity.',
    'Your team prefers a suite with modular product choices instead of assembling several tools.',
    'Contact allowances and plan-specific automation limits can be forecast before purchase.',
  ],
  notFit: [
    'You need specialist depth that is not documented in EngageBay’s current plan comparison.',
    'You require a fixed total cost without modeling users, contacts, email volume, and feature limits.',
    'You need to verify a specific integration or data-governance requirement before committing.',
  ],
  capabilities: [
    {
      title: 'CRM and sales workflow',
      description:
        'Contacts, companies, deals, tasks, appointment scheduling, email activity, pipelines, and reporting are documented across CRM & Sales plans.',
    },
    {
      title: 'Marketing and engagement',
      description:
        'Email broadcasts, sequences, forms, landing pages, segmentation, site messaging, and automation vary by plan.',
    },
    {
      title: 'Service workspace',
      description:
        'Service Bay documents contact management, tickets, views, macros, groups, canned responses, and customer context.',
    },
    {
      title: 'Integrations and extensibility',
      description:
        'EngageBay publishes an integration directory and API documentation; exact sync direction and object coverage should be checked per connection.',
    },
  ],
  pricing: [
    {
      plan: 'All-in-One Free',
      basis: '$0 per user/month',
      allowance: '250 contacts',
      note: 'Includes a limited combination of marketing, CRM, help-desk, and live-chat capabilities.',
    },
    {
      plan: 'All-in-One Basic',
      basis: '$14.99 per user/month when paid yearly',
      allowance: '500 contacts',
      note: 'The official page also displays lower effective rates for longer billing commitments.',
    },
    {
      plan: 'All-in-One Growth',
      basis: '$64.99 per user/month when paid yearly',
      allowance: '5,000 contacts',
      note: 'Adds broader automation, reporting, site messaging, and sales/service capabilities with documented limits.',
    },
    {
      plan: 'All-in-One Pro',
      basis: '$119.99 per user/month when paid yearly',
      allowance: '50,000 contacts',
      note: 'Adds higher limits and controls including SSO, role management, goals, and custom reporting.',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      code: 'W1',
      title: 'What EngageBay is',
      description: 'A customer platform sold as a suite or as functional bays.',
      paragraphs: [
        'EngageBay organizes customer-facing work into All-in-One, Marketing, CRM & Sales, and Service Bay offerings. Its official pricing comparison connects contact records with email marketing, sales pipelines, live chat, ticketing, and automation.',
        'That breadth is the central decision factor. A smaller business may reduce handoffs between separate systems, while a team with advanced departmental requirements should validate whether each included module has sufficient depth.',
      ],
      evidence:
        'Verified against EngageBay’s official All-in-One pricing, product, support, integration, and API pages. No hands-on product testing is claimed.',
      contextualLink: {
        title: 'Compare EngageBay and HubSpot',
        href: '/comparisons/engagebay-vs-hubspot',
      },
    },
    {
      id: 'pricing-limits',
      code: 'P1',
      title: 'How pricing scales',
      description:
        'Model the selected bay, users, contacts, billing term, and feature limits together.',
      paragraphs: [
        'The official pricing interface displays different effective rates for annual and longer commitments. The table above uses the annual All-in-One prices shown during verification rather than presenting the lowest advertised rate without its commitment context.',
        'Plan progression changes more than contact capacity. Lists, forms, automation workflows, workflow nodes, reporting, file storage, service views, macros, and other functions have tier-specific availability or limits.',
      ],
      contextualLink: {
        title: 'See EngageBay’s pricing and plan structure',
        href: '/guides/engagebay-pricing',
      },
    },
    {
      id: 'integrations',
      code: 'I1',
      title: 'Integrations and operating fit',
      description:
        'A directory listing establishes availability, not implementation depth.',
      paragraphs: [
        'EngageBay publishes connections for services including Zapier, Shopify, SendGrid, Stripe, Outlook, Salesforce, Aircall, and other tools, alongside APIs and webhooks.',
        'Buyers should verify the exact objects, sync direction, update frequency, permissions, and plan access required for their workflow. Racklio does not infer those details from the presence of an integration listing.',
      ],
      contextualLink: {
        title: 'Explore EngageBay alternatives',
        href: '/alternatives/engagebay-alternatives',
      },
    },
  ],
  strengths: [
    'One product family covers customer records, marketing, sales, live chat, and ticketing.',
    'The official plan comparison exposes many feature and usage limits for evaluation.',
    'Modular bays let a buyer select a narrower functional scope than the complete suite.',
  ],
  limitations: [
    'Plan comparison is dense, and the practical fit depends on many feature-level limits.',
    'Published integration breadth does not establish the depth of every connection.',
    'A broad suite may provide less specialist depth than a dedicated tool for a complex departmental workflow.',
  ],
  scenarios: [
    {
      scenario: 'Small team consolidating customer operations',
      fit: 'Consider',
      why: 'The suite connects customer records with several sales, marketing, and service workflows.',
    },
    {
      scenario: 'Team needing one specialist help desk',
      fit: 'Verify carefully',
      why: 'Compare required ticketing, SLA, reporting, channel, and administration depth with Service Bay documentation.',
    },
    {
      scenario: 'Enterprise with complex governance requirements',
      fit: 'Requirements-led',
      why: 'Validate controls, integrations, data practices, implementation, and contractual requirements directly.',
    },
  ],
  alternatives: [
    {
      title: 'Tidio Review',
      href: '/reviews/tidio',
      description:
        'Consider when web chat, help-desk workflow, and AI conversation handling are the primary scope.',
    },
    {
      title: 'respond.io Review',
      href: '/reviews/respond-io',
      description:
        'Consider when omnichannel messaging and active-contact workflows matter more than broad CRM-suite coverage.',
    },
  ],
  faqs: [
    {
      question: 'Is EngageBay only a CRM?',
      answer:
        'No. Official product and pricing pages describe CRM & Sales, Marketing, Service Bay, and an All-in-One option.',
    },
    {
      question: 'Does EngageBay have a free plan?',
      answer:
        'Yes. The official All-in-One pricing page listed a free plan with 250 contacts at verification. Limits and eligibility should be reconfirmed before use.',
    },
    {
      question: 'Has Racklio tested EngageBay hands-on?',
      answer:
        'No. This review is an editorial analysis of current official provider documentation.',
    },
  ],
  sources: [
    {
      title: 'EngageBay — All-in-One pricing',
      href: 'https://www.engagebay.com/pricing/all-in-one',
    },
    {
      title: 'EngageBay — Marketing product',
      href: 'https://www.engagebay.com/products/marketing',
    },
    {
      title: 'EngageBay — Integrations',
      href: 'https://www.engagebay.com/integrations/',
    },
    { title: 'EngageBay — API', href: 'https://www.engagebay.com/api' },
    {
      title: 'EngageBay — Help Center',
      href: 'https://www.engagebay.com/support',
    },
  ],
};

export const eazyChatData: SoftwareReviewData = {
  slug: 'eazychat',
  name: 'EazyChat.io',
  category: 'AI customer support software',
  categoryLinks: [
    { title: 'AI Customer Support', href: '/categories/ai-customer-support' },
  ],
  headline:
    'EazyChat.io review: AI website chat with human handoff and an optional help-desk layer',
  dek: 'EazyChat.io combines an AI-trained website chat experience with human conversations, multisite controls, integrations, and EazyDesk on higher plans. Its fit depends on AI-conversation volume and how much operational maturity a buyer requires from the surrounding support platform.',
  metaTitle: 'EazyChat.io Review 2026: Pricing, AI Chat & Fit | Racklio',
  metaDescription:
    'Evidence-first EazyChat.io review covering AI chat, knowledge inputs, human handoff, help desk, integrations, pricing limits, strengths, and limitations.',
  officialUrl: 'https://eazychat.io/',
  providerKey: 'eazyChat',
  video: {
    allow: 'encrypted-media; picture-in-picture',
    embedUrl: 'https://www.youtube-nocookie.com/embed/BxoM9BskIgE',
    title:
      'EazyChat.io Review 2026: Is It Actually Worth It for Small Businesses?',
    eyebrow: 'Video review',
    heading: 'Watch the EazyChat.io review',
    description:
      "Prefer the short version? This video summarizes EazyChat.io's core fit, pricing considerations, strengths, and limitations for small businesses.",
    note: '2-minute overview • Published by Racklio',
    sectionId: 'video-review',
    referrerPolicy: 'strict-origin-when-cross-origin',
  },
  relatedComparisons: [
    { title: 'EazyChat.io pricing guide', href: '/guides/eazychat-pricing' },
    {
      title: 'EazyChat.io alternatives',
      href: '/alternatives/eazychat-alternatives',
    },
    {
      title: 'Compare EazyChat.io vs Tidio',
      href: '/comparisons/eazychat-vs-tidio',
    },
  ],
  verificationDate,
  idealUser:
    'Small teams that want website AI chat trained from existing content, with unlimited human chats and a path to connected ticketing.',
  pricingModel:
    'Per-user monthly or annual subscription with plan-level AI-conversation allowances and optional conversation add-ons.',
  summary: [
    {
      label: 'Best for',
      text: 'Small teams evaluating AI website chat with human takeover and document- or website-based knowledge.',
    },
    {
      label: 'Consider if',
      text: 'You can forecast monthly AI conversations and validate the required integrations before purchase.',
    },
    {
      label: 'Look elsewhere if',
      text: 'You require mature multichannel service operations, extensive public documentation, or production voice capability today.',
    },
    {
      label: 'Main limitation',
      text: 'Official product documentation is comparatively limited, and EazyVoice is explicitly marked as coming soon.',
    },
  ],
  fit: [
    'Website chat and AI answers from a website, PDFs, files, or direct instructions are the main workflow.',
    'Human operators need to continue conversations after AI escalation.',
    'The published AI-conversation allowances align with forecast usage.',
  ],
  notFit: [
    'Voice AI is a current production requirement; the provider marks EazyVoice as coming soon.',
    'Your procurement process requires extensive public security, compliance, or developer documentation.',
    'You need established evidence for a broad set of messaging channels beyond website chat and documented integrations.',
  ],
  capabilities: [
    {
      title: 'Knowledge setup',
      description:
        'Official pages describe website scanning, PDF and file uploads, and direct text instructions as AI knowledge inputs.',
    },
    {
      title: 'AI and human chat',
      description:
        'Plans include AI-conversation allowances and unlimited human chats; unanswered AI conversations are described as escalating to human operators.',
    },
    {
      title: 'Help-desk connection',
      description:
        'EazyDesk is optional on Launch and included on Pro and Infinity according to the pricing page; product pages describe tickets, inbox, prioritization, and collaboration.',
    },
    {
      title: 'Integrations',
      description:
        'Official pages identify Shopify, API, and workflow integrations; buyers should confirm the exact supported action and data scope.',
    },
  ],
  pricing: [
    {
      plan: 'Launch',
      basis: '$29.99 per user monthly; $23.99 annually',
      allowance: '100 AI conversations/month',
      note: 'One website and widget, unlimited human chats, Shopify and API integrations; EazyDesk is optional.',
    },
    {
      plan: 'Pro',
      basis: '$59.99 per user monthly; $47.99 annually',
      allowance: '1,000 AI conversations/month',
      note: 'Three websites/widgets, advanced analytics, and EazyDesk included.',
    },
    {
      plan: 'Infinity',
      basis: '$79.99 per user monthly; $63.99 annually',
      allowance: '20,000 AI conversations/month',
      note: 'Unlimited websites/widgets and AI Advisor; “Infinity” does not mean unlimited AI conversations.',
    },
    {
      plan: 'AI add-ons',
      basis: '$10 / $39 / $99',
      allowance: '+100 / +500 / +2,000 AI conversations',
      note: 'Confirm add-on recurrence, taxes, and account eligibility directly with the provider.',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      code: 'W1',
      title: 'What EazyChat.io is',
      description:
        'A website-centered AI support product with human chat and a connected help-desk option.',
      paragraphs: [
        'EazyChat.io’s current official pages position the product around AI chat trained from a website, PDFs, files, or direct instructions. The same account can manage human chat, multiple sites and widgets according to plan, and EazyDesk integration.',
        'Racklio classifies it under AI Customer Support rather than general CRM because the documented center of gravity is AI-assisted support conversation and ticket handling, not lifecycle customer-record management.',
      ],
      evidence:
        'This category decision is based on the official homepage, product, pricing, and contact FAQ pages accessed on the verification date.',
    },
    {
      id: 'usage-model',
      code: 'U1',
      title: 'Conversation limits and handoff',
      description:
        'The AI allowance is finite even where human chat is described as unlimited.',
      paragraphs: [
        'Each plan publishes a monthly AI-conversation allowance. The provider’s FAQ states that once the allowance is reached, conversations bypass AI and go to human operators until an add-on is purchased or a new billing cycle begins.',
        'This makes forecast AI usage and staffing important. “Unlimited human chats” does not mean unlimited AI usage or unlimited operational capacity.',
      ],
    },
    {
      id: 'maturity',
      code: 'M1',
      title: 'Documentation and product maturity',
      description:
        'Buyers should separate available functions from roadmap statements.',
      paragraphs: [
        'EazyDesk is described as available, while EazyVoice is labeled “soon” on official product and pricing pages. Racklio therefore does not treat voice support as a currently available buying capability.',
        'Public documentation is less extensive than the product pages. Security and compliance statements should be verified contractually rather than inferred from general marketing language.',
      ],
    },
  ],
  strengths: [
    'Clear published AI-conversation allowances and add-on quantities support basic cost modeling.',
    'Knowledge can be sourced from websites, files, PDFs, and direct text instructions.',
    'The pricing page distinguishes human chat from finite AI-conversation usage.',
  ],
  limitations: [
    'EazyVoice is a future capability, not a current reason to select the product.',
    'Public technical, security, and integration documentation is limited relative to a mature procurement process.',
    'The AI-conversation cap can move work to human operators when exhausted.',
  ],
  scenarios: [
    {
      scenario: 'Small website support team',
      fit: 'Consider',
      why: 'The product combines AI website chat, human chat, and content-based training with published entry pricing.',
    },
    {
      scenario: 'Team needing ticket operations',
      fit: 'Plan-dependent',
      why: 'EazyDesk is optional on Launch and included on Pro and Infinity; validate required help-desk depth.',
    },
    {
      scenario: 'Voice-first support operation',
      fit: 'Not yet established',
      why: 'The provider marks EazyVoice as coming soon, so current production voice capability should not be assumed.',
    },
  ],
  alternatives: [
    {
      title: 'Tidio Review',
      href: '/reviews/tidio',
      description:
        'Consider for a documented web-chat, help-desk, automation, and Lyro AI model with different usage units.',
    },
    {
      title: 'Typewise Review',
      href: '/reviews/typewise',
      description:
        'Consider for enterprise-oriented automation tied to resolved customer-service outcomes.',
    },
  ],
  faqs: [
    {
      question: 'Is EazyChat.io an AI customer support product?',
      answer:
        'Yes. Official pages center the product on AI website chat, human handoff, knowledge inputs, and connected help-desk workflows.',
    },
    {
      question: 'Is voice support available now?',
      answer:
        'Racklio does not treat it as available. EazyVoice is marked “soon” on the official product and pricing pages.',
    },
    {
      question: 'Has Racklio tested EazyChat.io hands-on?',
      answer:
        'No. The review is based on official provider-controlled pages and clearly separates provider statements from Racklio analysis.',
    },
  ],
  sources: [
    { title: 'EazyChat.io — Homepage', href: 'https://eazychat.io/' },
    { title: 'EazyChat.io — Pricing', href: 'https://eazychat.io/pricing' },
    { title: 'EazyChat.io — Products', href: 'https://eazychat.io/products' },
    {
      title: 'EazyChat.io — Contact and product FAQ',
      href: 'https://eazychat.io/contact',
    },
  ],
};

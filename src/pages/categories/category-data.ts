import type { SoftwareCategoryData } from '@/components/categories';

export const softwareCategories: SoftwareCategoryData[] = [
  {
    slug: 'ai-customer-support',
    code: 'AI',
    title: 'AI Customer Support Software',
    shortTitle: 'AI Customer Support',
    eyebrow: 'Customer software category',
    definition:
      'Software that helps businesses automate, manage, or improve customer support using AI agents, help-desk workflows, automation, routing, knowledge tools, and related customer-service capabilities.',
    introduction:
      'Start with the support workflow and required human oversight. An AI feature does not establish that a product can replace a help desk, knowledge process, or service team.',
    metaTitle: 'AI Customer Support Software Reviews & Comparisons | Racklio',
    metaDescription:
      'Explore evidence-based AI customer support software reviews, comparisons, buying factors, and practical guidance from Racklio.',
    startPaths: [
      {
        title: 'Automate support with AI',
        description:
          'Assess resolution scope, knowledge inputs, escalation, review, and pricing units.',
        href: '/reviews/typewise',
      },
      {
        title: 'Manage tickets and help-desk work',
        description:
          'Compare inbox structure, ownership, ticket handling, reporting, and team controls.',
        href: '/comparisons/tidio-vs-gorgias',
      },
      {
        title: 'Combine AI with human agents',
        description:
          'Evaluate handoff rules, context transfer, permissions, and agent workflow.',
        href: '/reviews/tidio',
      },
      {
        title: 'Support ecommerce customers',
        description:
          'Consider commerce context, store actions, channels, ticket volume, and automation.',
        href: '/reviews/gorgias',
      },
    ],
    products: [
      {
        title: 'Typewise Review',
        description:
          'Outcome-priced AI automation, integrations, deployment requirements, and business fit.',
        href: '/reviews/typewise',
      },
      {
        title: 'Tidio Review',
        description:
          'Live chat, help-desk workflows, Lyro AI, automation, and usage limits.',
        href: '/reviews/tidio',
      },
      {
        title: 'Gorgias Review',
        description:
          'Ecommerce help desk, ticket pricing, AI Agent, channels, and overages.',
        href: '/reviews/gorgias',
      },
      {
        title: 'respond.io Review',
        description:
          'Omnichannel messaging, AI workflows, users, channels, and active-contact pricing.',
        href: '/reviews/respond-io',
      },
      {
        title: 'EazyChat.io Review',
        description:
          'AI website chat, human handoff, EazyDesk integration, conversation limits, and product maturity.',
        href: '/reviews/eazychat',
      },
    ],
    comparisons: [
      {
        title: 'Tidio vs Gorgias',
        description:
          'Live chat and AI support compared with an ecommerce-oriented help-desk workflow.',
        href: '/comparisons/tidio-vs-gorgias',
      },
      {
        title: 'respond.io vs Tidio',
        description:
          'Omnichannel messaging workflows compared with web chat and ticket support.',
        href: '/comparisons/respond-io-vs-tidio',
      },
    ],
    factors: (
      [
        [
          'AI capability',
          'Define what the system automates and how outputs are governed.',
        ],
        [
          'Help-desk depth',
          'Check ticket ownership, queues, history, reporting, and administration.',
        ],
        [
          'Human handoff',
          'Verify escalation triggers and whether full conversation context transfers.',
        ],
        [
          'Knowledge integration',
          'Identify supported sources, update processes, and access controls.',
        ],
        [
          'Limits and pricing',
          'Model conversations, resolutions, tickets, seats, and overages.',
        ],
        [
          'Channels and fit',
          'Confirm supported channels, ecommerce context, team size, and integrations.',
        ],
      ] as [string, string][]
    ).map(([title, description]) => ({
      title,
      description,
    })),
    audience: [
      'Support teams evaluating AI agents or agent-assistance workflows.',
      'Businesses comparing help-desk, automation, and human escalation models.',
      'Ecommerce or omnichannel teams that need customer context inside support work.',
    ],
    alternatives: [
      'Teams that only need a business phone system should explore Business Phone & Voice AI.',
      'Teams centered on WhatsApp or shared messaging may need Live Chat & Messaging.',
      'Organizations seeking broad relationship and lifecycle management may need CRM & Customer Engagement.',
    ],
  },
  {
    slug: 'business-phone-voice-ai',
    code: 'VO',
    title: 'Business Phone & Voice AI Software',
    shortTitle: 'Business Phone & Voice AI',
    eyebrow: 'Customer software category',
    definition:
      'Software for business calling, cloud phone systems, virtual numbers, AI voice agents, contact-center workflows, and receptionist or voice automation.',
    introduction:
      'Separate the phone-system requirement from AI voice automation. Number availability, routing, included usage, integrations, and geographic coverage can shape the decision before advanced features do.',
    metaTitle: 'Business Phone & Voice AI Software | Racklio',
    metaDescription:
      'Explore business phone and voice AI software reviews, comparisons, pricing factors, calling workflows, and practical buying guidance.',
    startPaths: [
      {
        title: 'Choose a business phone system',
        description:
          'Compare users, numbers, routing, administration, calling, SMS, and integrations.',
        href: '/reviews/krispcall',
      },
      {
        title: 'Evaluate virtual numbers',
        description:
          'Check number types, countries, identity requirements, recurring costs, and usage.',
        href: '/comparisons/krispcall-vs-callhippo',
      },
      {
        title: 'Plan sales or support calling',
        description:
          'Assess queues, recording, supervision, analytics, workflows, and integrations.',
        href: '/comparisons/krispcall-vs-aircall',
      },
      {
        title: 'Investigate AI reception',
        description:
          'Define answering scope, escalation, operating hours, oversight, and billing before selecting a tool.',
        href: '/categories/business-phone-voice-ai',
      },
    ],
    products: [
      {
        title: 'KrispCall Review',
        description:
          'Cloud calling, virtual numbers, SMS, per-user plans, and separate usage charges.',
        href: '/reviews/krispcall',
      },
    ],
    comparisons: [
      {
        title: 'KrispCall vs Aircall',
        description:
          'A compact business-phone model compared with structured team communication workflows.',
        href: '/comparisons/krispcall-vs-aircall',
      },
      {
        title: 'KrispCall vs CallHippo',
        description:
          'Cloud phone plans, virtual numbers, calling usage, SMS, and routing.',
        href: '/comparisons/krispcall-vs-callhippo',
      },
    ],
    factors: (
      [
        [
          'Numbers and coverage',
          'Verify local and toll-free availability, countries, and identity requirements.',
        ],
        [
          'Routing and IVR',
          'Map business hours, queues, transfers, menus, and escalation.',
        ],
        [
          'Calling and SMS',
          'Confirm included usage, per-minute charges, messaging access, and restrictions.',
        ],
        [
          'Voice AI',
          'Define supported tasks, human handoff, recording, monitoring, and billing.',
        ],
        [
          'Integrations',
          'Check the exact CRM, help-desk, workflow, and data objects supported.',
        ],
        [
          'Total cost',
          'Model users, numbers, usage, recording, add-ons, and international activity.',
        ],
      ] as [string, string][]
    ).map(([title, description]) => ({
      title,
      description,
    })),
    audience: [
      'Businesses replacing or introducing a cloud phone system.',
      'Sales and support teams that need virtual numbers, routing, calling, or SMS.',
      'Teams investigating receptionist or contact-center automation with clear human oversight.',
    ],
    alternatives: [
      'Website chat and WhatsApp-first teams may need Live Chat & Messaging.',
      'Ticket-based service operations may need an AI Customer Support platform.',
      'Teams seeking contact records and lifecycle automation may need CRM & Customer Engagement.',
    ],
  },
  {
    slug: 'live-chat-messaging',
    code: 'CH',
    title: 'Live Chat & Messaging Software',
    shortTitle: 'Live Chat & Messaging',
    eyebrow: 'Customer software category',
    definition:
      'Software for live chat, WhatsApp, messaging, shared inboxes, conversational automation, and omnichannel customer communication.',
    introduction:
      'Begin with the channels customers actually use, then compare inbox workflow, ownership, automation, conversation history, and the pricing unit applied to contacts, users, or conversations.',
    metaTitle: 'Live Chat & Messaging Software | Racklio',
    metaDescription:
      'Explore live chat and messaging software reviews, WhatsApp and omnichannel comparisons, buying factors, and practical guidance.',
    startPaths: [
      {
        title: 'Add website live chat',
        description:
          'Compare widget deployment, human conversations, ticket handling, automation, and limits.',
        href: '/reviews/tidio',
      },
      {
        title: 'Support customers on WhatsApp',
        description:
          'Evaluate account setup, templates, inbox workflow, automation, contacts, and provider charges.',
        href: '/reviews/respond-io',
      },
      {
        title: 'Build an omnichannel inbox',
        description:
          'Check channel coverage, shared context, assignment, history, integrations, and reporting.',
        href: '/comparisons/respond-io-vs-tidio',
      },
      {
        title: 'Combine messaging and automation',
        description:
          'Define bot scope, AI usage, escalation, conversation ownership, and billing.',
        href: '/comparisons/tidio-vs-gorgias',
      },
    ],
    products: [
      {
        title: 'Tidio Review',
        description:
          'Live chat, help-desk workflows, Lyro AI, automation, and conversation limits.',
        href: '/reviews/tidio',
      },
      {
        title: 'respond.io Review',
        description:
          'Omnichannel messaging, WhatsApp, AI workflows, users, and active-contact pricing.',
        href: '/reviews/respond-io',
      },
      {
        title: 'Gorgias Review',
        description:
          'Ecommerce support channels, ticket workflow, AI Agent, and usage pricing.',
        href: '/reviews/gorgias',
      },
    ],
    comparisons: [
      {
        title: 'respond.io vs Tidio',
        description:
          'Omnichannel messaging workflows compared with web chat and ticket support.',
        href: '/comparisons/respond-io-vs-tidio',
      },
      {
        title: 'Tidio vs Gorgias',
        description:
          'Live chat and AI support compared with ecommerce-oriented help-desk operations.',
        href: '/comparisons/tidio-vs-gorgias',
      },
    ],
    factors: (
      [
        [
          'Supported channels',
          'Confirm the required web, WhatsApp, social, email, and messaging channels.',
        ],
        [
          'Shared inbox',
          'Check ownership, assignment, collision handling, roles, and conversation history.',
        ],
        [
          'Automation and AI',
          'Define workflow scope, knowledge, escalation, usage limits, and oversight.',
        ],
        [
          'Pricing unit',
          'Model contacts, users, conversations, tickets, messages, and channel fees.',
        ],
        [
          'Integrations',
          'Verify exact ecommerce, CRM, help-desk, and workflow connections.',
        ],
        [
          'Collaboration',
          'Assess notes, permissions, handoff, reporting, export, and retention.',
        ],
      ] as [string, string][]
    ).map(([title, description]) => ({
      title,
      description,
    })),
    audience: [
      'Teams adding live chat to a website or customer portal.',
      'Businesses managing WhatsApp or multiple messaging channels in a shared workspace.',
      'Support and engagement teams combining human conversations with automation.',
    ],
    alternatives: [
      'Voice-first operations may need Business Phone & Voice AI.',
      'Teams centered on ticketing and service automation may need AI Customer Support.',
      'Businesses requiring relationship records and lifecycle management may need CRM & Customer Engagement.',
    ],
  },
  {
    slug: 'crm-customer-engagement',
    code: 'CRM',
    title: 'CRM & Customer Engagement Software',
    shortTitle: 'CRM & Customer Engagement',
    eyebrow: 'Customer software category',
    definition:
      'Software for managing customer relationships, communications, engagement, lifecycle interactions, and related CRM or customer-contact workflows.',
    introduction:
      'Start with the customer record and lifecycle workflow. Racklio keeps this category focused on customer communication and engagement rather than unrelated sales prospecting or generic marketing software.',
    metaTitle: 'CRM & Customer Engagement Software | Racklio',
    metaDescription:
      'Explore CRM and customer engagement software categories, decision paths, evaluation factors, boundaries, and future Racklio research.',
    startPaths: [
      {
        title: 'Manage customer relationships',
        description:
          'Define records, ownership, activity history, lifecycle stages, permissions, and reporting.',
        href: '/categories/crm-customer-engagement',
      },
      {
        title: 'Combine CRM with communication',
        description:
          'Map email, messaging, calling, shared history, contact context, and workflow ownership.',
        href: '/categories/crm-customer-engagement',
      },
      {
        title: 'Automate customer engagement',
        description:
          'Assess triggers, segmentation, consent, frequency controls, escalation, and measurement.',
        href: '/categories/crm-customer-engagement',
      },
      {
        title: 'Choose a small-business CRM',
        description:
          'Compare setup effort, contact management, communication, automation, integrations, and cost.',
        href: '/categories/crm-customer-engagement',
      },
    ],
    products: [
      {
        title: 'EngageBay Review',
        description:
          'CRM, marketing, sales, service workflows, plan limits, integrations, and small-business fit.',
        href: '/reviews/engagebay',
      },
    ],
    comparisons: [],
    factors: (
      [
        [
          'CRM depth',
          'Define the records, relationships, pipelines, lifecycle stages, and permissions required.',
        ],
        [
          'Customer communication',
          'Check email, messaging, calling, shared history, and channel context.',
        ],
        [
          'Automation',
          'Evaluate triggers, segmentation, routing, approvals, limits, and oversight.',
        ],
        [
          'Contact management',
          'Review imports, identity matching, consent, data quality, export, and deletion.',
        ],
        [
          'Reporting and teamwork',
          'Assess ownership, collaboration, dashboards, attribution, and access controls.',
        ],
        [
          'Pricing and integrations',
          'Model contacts, users, messaging, add-ons, implementation, and connected systems.',
        ],
      ] as [string, string][]
    ).map(([title, description]) => ({
      title,
      description,
    })),
    audience: [
      'Small and growing businesses organizing customer records and communication.',
      'Teams connecting relationship context with engagement or service workflows.',
      'Organizations evaluating lifecycle communication with clear ownership and consent controls.',
    ],
    alternatives: [
      'Teams seeking only a shared messaging inbox may need Live Chat & Messaging.',
      'Service teams focused on tickets and AI resolution may need AI Customer Support.',
      'Voice-first operations may need Business Phone & Voice AI.',
    ],
  },
];

export function getSoftwareCategory(slug: string) {
  const category = softwareCategories.find((item) => item.slug === slug);
  if (!category) throw new Error(`Unknown software category: ${slug}`);
  return category;
}

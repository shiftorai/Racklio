import type { CommercialPageData } from '@/components/commercial';
import type { SoftwareReviewData } from '@/components/reviews/software-review-template';

const officialUrl = 'https://landbot.io/';
const verificationDate = 'August 24, 2026';
const schemaDate = '2026-08-24';

const landbotSources = [
  { title: 'Landbot pricing', href: 'https://landbot.io/pricing' },
  { title: 'Landbot product overview', href: 'https://landbot.io/' },
  {
    title: 'Landbot AI Agent chatbots',
    href: 'https://landbot.io/ai-agent-chatbots',
  },
  { title: 'Landbot WhatsApp automation', href: 'https://landbot.io/whatsapp' },
  {
    title: 'What is Landbot?',
    href: 'https://help.landbot.io/article/mq53cht078-what-is-landbot',
  },
  {
    title: 'Landbot WhatsApp pricing FAQ',
    href: 'https://help.landbot.io/article/le7jeofsk0-whats-app-integration-update',
  },
  {
    title: 'Landbot integrations',
    href: 'https://help.landbot.io/category/xrzijeeke9-landbot-integrations',
  },
  {
    title: 'Landbot webhooks',
    href: 'https://help.landbot.io/article/n9zxrqx1ig-message-hooks-landbot-webhooks',
  },
];

export const landbotReviewData: SoftwareReviewData = {
  slug: 'landbot',
  name: 'Landbot',
  category: 'Conversational automation and chatbot software',
  categoryLinks: [
    { title: 'Live Chat & Messaging', href: '/categories/live-chat-messaging' },
  ],
  headline: 'Landbot Review 2026: Pricing, Features, AI & Best Fit',
  dek: 'Landbot is a no-code platform for designing rule-based and AI-assisted conversational journeys across web, WhatsApp, Messenger, and API-supported experiences. It is most relevant when flow design, qualification, automation, and structured data capture matter more than a traditional help-desk operating model.',
  metaTitle: 'Landbot Review 2026: Pricing, AI & Best Fit | Racklio',
  metaDescription:
    'Evidence-first Landbot review covering chatbot flows, AI Agents, web and WhatsApp channels, human handoff, integrations, pricing, usage limits and buyer fit.',
  officialUrl,
  providerKey: 'landbot',
  verificationDate,
  schemaDate,
  idealUser:
    'Marketing, sales, and service teams that want to design automated conversational journeys, qualify leads, capture structured data, and hand selected conversations to people.',
  pricingModel:
    'Plan subscription plus included chat and AI-chat allowances, possible overage, seats, WhatsApp plan or channel cost, Meta message charges, and optional services.',
  summary: [
    {
      label: 'Operating model',
      text: 'A visual no-code builder combining rule-based flows and AI Agents for web, WhatsApp, Messenger, and API-supported deployments.',
    },
    {
      label: 'Cost boundary',
      text: 'Plan price is only one layer; model standard chats, AI chats, seats, WhatsApp access, service and template messages, and Meta charges.',
    },
    {
      label: 'Human workflow',
      text: 'Landbot documents human takeover and team-inbox capabilities, but it is not evaluated as a full ticket-based help desk.',
    },
    {
      label: 'Evidence boundary',
      text: 'Racklio has not independently tested flow completion, AI accuracy, conversion impact, or support outcomes.',
    },
  ],
  fit: [
    'You need custom conversational flows for qualification, lead capture, appointment routing, FAQs, or structured customer journeys.',
    'You want to combine predictable rules with AI Agents and explicit human-handoff paths.',
    'You can forecast chat, AI-chat, seat, WhatsApp, and message usage before selecting a plan.',
  ],
  notFit: [
    'Your primary requirement is a ticket-centric help desk, shared support queue, SLA management, or broad agent-service operations.',
    'You need a complete CRM or business phone system rather than conversational automation connected to those systems.',
    'You cannot govern AI knowledge, escalation, channel consent, message templates, and usage-based cost.',
  ],
  strengths: [
    'A visual conversational builder that can combine controlled branching with AI-driven conversation steps.',
    'Official support for web and WhatsApp AI Agents, structured field capture, integrations, webhooks, and human takeover.',
    'Published chat, AI-chat, seat, and WhatsApp cost components make key economic boundaries inspectable.',
  ],
  limitations: [
    'Configured cost can extend beyond the base plan through chat overage, AI chats, seats, WhatsApp access, Landbot message fees, and Meta charges.',
    'Landbot is conversation-automation centered rather than a traditional help desk or full CRM.',
    'Channel, integration, branding, support, and usage entitlements vary by plan and require live confirmation.',
  ],
  capabilities: [
    {
      title: 'Conversational flow builder',
      description:
        'Visual workflows, fields, conditional logic, templates, A/B testing, goals, and custom flow operations within plan scope.',
    },
    {
      title: 'AI Agents',
      description:
        'AI Agents for web and WhatsApp that can use custom knowledge, capture structured data, and connect to controlled flows and handoff.',
    },
    {
      title: 'Channels and handoff',
      description:
        'Web, Messenger, WhatsApp, and API-supported experiences with team inbox and human-takeover capabilities by plan.',
    },
    {
      title: 'Connected workflows',
      description:
        'Native integrations, CRM connections, webhooks, APIs, analytics connections, and external automation tools.',
    },
  ],
  pricing: [
    {
      plan: 'Free',
      basis: '$0; no expiration shown',
      allowance: '100 chats/month; no included AI chats; 1 seat',
      note: 'Builder and templates for exploration; verify channel, branding, integration, and production-use boundaries.',
    },
    {
      plan: 'Starter',
      basis: '$45 monthly or $36/month billed annually',
      allowance: '500 chats/month; 100 AI chats; 2 seats',
      note: 'Adds AI Agents and broader flow operations; extra usage and seats can add cost.',
    },
    {
      plan: 'Professional',
      basis: '$110 monthly or $88/month billed annually',
      allowance: '2,500 chats/month; 300 AI chats; 3 seats',
      note: 'Adds broader integrations, webhooks, API access, branding controls, and live-chat support under current plan presentation.',
    },
    {
      plan: 'Professional WhatsApp',
      basis: '$220 monthly or $176/month billed annually',
      allowance:
        '2,500 standard chats; 500 AI chats; 3 seats; WhatsApp number and message allowance',
      note: 'WhatsApp economics also include Landbot message fees and applicable Meta charges.',
    },
    {
      plan: 'Business',
      basis: 'Starting at $450/month; contract configuration',
      allowance: 'Custom chat, AI-chat, seat, channel, and support scope',
      note: 'Confirm contracted volume, WhatsApp configuration, security, services, support, and overage terms.',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      code: 'O1',
      title: 'What Landbot is',
      description:
        'Conversational automation rather than a generic chat widget.',
      paragraphs: [
        'Provider fact: Landbot describes a no-code chatbot platform for building AI Agents, rule-based chatbots, or combined experiences across web, WhatsApp, Facebook Messenger, and other channels through an API.',
        'Racklio analysis: Landbot belongs on a shortlist when the buyer wants to design a journey—qualification, routing, data capture, booking, FAQ handling, or escalation—not merely open a chat window.',
      ],
      evidence:
        'Official product and Help Center pages establish scope; Racklio does not claim independent product testing.',
    },
    {
      id: 'builder',
      code: 'B1',
      title: 'Builder, logic, and structured journeys',
      description:
        'Rules and AI can occupy different parts of the same workflow.',
      paragraphs: [
        'Provider fact: Landbot documents a visual builder, templates, fields, conditional operations, A/B testing, integrations, goals, and custom workflow capabilities with plan-dependent access.',
        'Racklio analysis: map every entry point, required field, branch, validation rule, fallback, system write, owner, consent step, exit, and recovery path before assessing builder fit.',
      ],
    },
    {
      id: 'ai',
      code: 'A1',
      title: 'AI Agents and knowledge',
      description: 'AI scope requires usage and governance decisions.',
      paragraphs: [
        'Provider fact: Landbot documents AI Agents for web and WhatsApp, custom knowledge, structured data capture, cross-channel deployment, connections to rule-based flows, and human takeover. Its current site also describes AI Copilot assistance while building.',
        'Racklio analysis: these labels do not establish answer accuracy, conversion lift, autonomous resolution, or suitability for sensitive decisions. Test knowledge boundaries, unsupported questions, prompt behavior, data handling, review, escalation, and AI-chat consumption.',
      ],
    },
    {
      id: 'channels-handoff',
      code: 'C1',
      title: 'Channels and human handoff',
      description: 'Web and WhatsApp are central, but entitlements differ.',
      paragraphs: [
        'Provider fact: Landbot supports web, Messenger, WhatsApp, and API-connected experiences. It documents team inbox and human-takeover capabilities, while WhatsApp requires its own commercial and operational configuration.',
        'Racklio analysis: validate queue ownership, assignment, context transfer, availability, transcript access, concurrent work, notifications, escalation after hours, and whether an external help desk remains necessary.',
      ],
    },
    {
      id: 'integrations-analytics',
      code: 'I1',
      title: 'Integrations, API, and analytics',
      description:
        'A listed connection must be verified against the intended data flow.',
      paragraphs: [
        'Provider fact: Landbot publishes native integrations, CRM connections, Zapier and n8n workflows, webhooks, APIs, custom-code options, and analytics or tracking connections. MessageHooks can pass message and event data to external systems.',
        'Racklio analysis: verify objects, field mapping, direction, triggers, retries, failure visibility, authentication, quotas, export, deletion, and reporting ownership for every required connection.',
      ],
    },
    {
      id: 'pricing',
      code: 'P1',
      title: 'Pricing and usage economics',
      description: 'Landbot pricing is not only about the plan name.',
      paragraphs: [
        'Provider fact: current pricing separates subscription tier, included standard chats, AI chats, seats, extra usage, and WhatsApp scope. Annual billing is presented at a 20% discount from monthly rates. Business begins with a custom configuration.',
        'Racklio analysis: forecast normal and peak standard chats, AI chats, seats, WhatsApp numbers, service and template messages, Meta charges, integrations, implementation, and managed services before comparing totals.',
      ],
      contextualLink: {
        title: 'Read the Landbot pricing guide',
        href: '/guides/landbot-pricing',
      },
    },
    {
      id: 'tradeoffs',
      code: 'T1',
      title: 'Strengths and trade-offs',
      description:
        'Flow flexibility adds design, governance, and cost responsibilities.',
      paragraphs: [
        'Consider Landbot when custom conversational design, qualification, automation, structured capture, AI and rule blending, and channel-specific journeys are central.',
        'Consider alternatives when agent-centric live chat, ticketing, broad omnichannel inbox operations, or ecommerce help-desk context is the primary operating model.',
      ],
      contextualLink: {
        title: 'Explore Landbot alternatives',
        href: '/alternatives/landbot-alternatives',
      },
    },
  ],
  scenarios: [
    {
      scenario: 'Team designing qualification and booking journeys',
      fit: 'Strong conditional fit',
      why: 'The builder supports structured fields, branches, integrations, AI steps, and controlled outcomes.',
    },
    {
      scenario: 'Business deploying AI Agents on web or WhatsApp',
      fit: 'Evaluate plan and usage carefully',
      why: 'AI Agents are documented on both channels, but AI-chat and WhatsApp economics require forecasting.',
    },
    {
      scenario: 'Support team primarily managing tickets and SLAs',
      fit: 'Consider an alternative',
      why: 'Landbot is not evaluated as a traditional ticket-centric help desk.',
    },
    {
      scenario: 'Company needs a complete CRM or phone platform',
      fit: 'Use Landbot only as a connected layer',
      why: 'Its core role is conversational automation rather than replacing those systems.',
    },
  ],
  faqs: [
    {
      question: 'Is Landbot a live-chat help desk?',
      answer:
        'Landbot documents live chat, team inbox, and human takeover, but Racklio evaluates it primarily as a conversational automation and chatbot platform rather than a full ticket-based help desk.',
    },
    {
      question: 'Does Landbot have a free plan?',
      answer:
        'Yes. The current pricing page presents a no-expiration Free plan with 100 chats per month, no included AI chats, and one seat.',
    },
    {
      question: 'Are WhatsApp costs included in the base web plan?',
      answer:
        'Not universally. WhatsApp can require a Professional WhatsApp configuration or an added channel, and delivered messages can involve Landbot fees plus applicable Meta charges.',
    },
    {
      question: 'Has Racklio tested Landbot hands-on?',
      answer:
        'No. This review uses official provider-controlled sources and does not claim independent product, AI, conversion, or support testing.',
    },
  ],
  alternatives: [
    {
      title: 'Tidio',
      description:
        'Consider when website live chat, tickets, agent workflows, Flows, and a separately metered AI layer are more central.',
      href: '/reviews/tidio',
    },
    {
      title: 'respond.io',
      description:
        'Consider when omnichannel messaging, shared conversation ownership, workflows, and active-contact economics define the need.',
      href: '/reviews/respond-io',
    },
    {
      title: 'Gorgias',
      description:
        'Consider when ecommerce order context and help-desk operations are the primary workflow.',
      href: '/reviews/gorgias',
    },
  ],
  relatedComparisons: [
    { title: 'Landbot vs Tidio', href: '/comparisons/landbot-vs-tidio' },
  ],
  sources: landbotSources,
};

export const landbotPricingData: CommercialPageData = {
  path: '/guides/landbot-pricing',
  breadcrumbParent: { title: 'Guides', href: '/guides' },
  code: 'LP',
  eyebrow: 'Pricing decision guide',
  headline: 'Landbot Pricing 2026: Plans, Usage, AI & WhatsApp Costs',
  dek: 'Landbot pricing combines a platform plan with standard-chat allowances, AI chats, seats, possible overage, and WhatsApp-specific costs. This guide separates those layers so buyers can model the configuration they actually need.',
  metaTitle: 'Landbot Pricing 2026: Plans, AI & WhatsApp Costs | Racklio',
  metaDescription:
    'Understand Landbot pricing across Free, Starter, Professional, Professional WhatsApp and Business, including chats, AI usage, seats and WhatsApp fees.',
  verificationDate,
  schemaDate,
  provider: 'Landbot',
  providerKey: 'landbot',
  officialUrl,
  categoryLinks: [
    { title: 'Live Chat & Messaging', href: '/categories/live-chat-messaging' },
  ],
  summary: [
    {
      label: 'Annual discount',
      text: 'Starter, Professional, and Professional WhatsApp display 20%-lower annual-billing equivalents than monthly rates.',
    },
    {
      label: 'Usage layers',
      text: 'Model standard chats, AI chats, seats, WhatsApp numbers, service messages, templates, and applicable Meta charges.',
    },
    {
      label: 'Free boundary',
      text: 'Free currently includes 100 chats/month, no AI chats, and one seat; it is useful for exploration rather than assuming full production scope.',
    },
    {
      label: 'Contract boundary',
      text: 'Business starts from a published entry point but uses custom volume, AI, seat, channel, support, and service terms.',
    },
  ],
  table: {
    caption: 'Landbot plan and allowance snapshot verified August 24, 2026',
    columns: ['Plan', 'Billing', 'Included usage', 'Decision boundary'],
    rows: [
      [
        'Free',
        '$0; no expiration shown',
        '100 chats/month; 0 AI chats; 1 seat',
        'Confirm branding, channels, integrations, and production limits',
      ],
      [
        'Starter',
        '$45 monthly or $36/month annually',
        '500 chats; 100 AI chats; 2 seats',
        'Forecast overage and required integrations',
      ],
      [
        'Professional',
        '$110 monthly or $88/month annually',
        '2,500 chats; 300 AI chats; 3 seats',
        'Confirm channels, branding, API, and live-support scope',
      ],
      [
        'Professional WhatsApp',
        '$220 monthly or $176/month annually',
        '2,500 chats; 500 AI chats; 3 seats; WhatsApp scope',
        'Add Landbot and Meta message economics',
      ],
      [
        'Business',
        'Starting at $450/month; contract',
        'Custom chats, AI chats, seats, support, and channels',
        'Obtain a written configuration and overage terms',
      ],
    ],
  },
  sections: [
    {
      id: 'subscription',
      code: 'S1',
      title: 'Subscription and billing cycle',
      description: 'Monthly and annual rates must not be conflated.',
      paragraphs: [
        'Provider fact: Landbot displays monthly and annual options, with annual pricing shown at a 20% discount for standard paid tiers. Prices exclude taxes, and Business uses a configured contract.',
        'Racklio analysis: calculate the full committed annual amount, renewal terms, seat changes, tax, implementation, and cancellation—not only the displayed monthly equivalent.',
      ],
    },
    {
      id: 'usage',
      code: 'U1',
      title: 'Standard chats and overage',
      description: 'Conversation volume can change spend after plan selection.',
      paragraphs: [
        'Provider fact: Free includes 100 chats/month, Starter 500, and Professional and Professional WhatsApp 2,500. The current table prices additional standard chats at $25 per 500, equivalent to $0.05 each, on eligible paid plans.',
        'Racklio analysis: model seasonal peaks, abandoned sessions, tests, retries, duplicate contacts, channel behavior, warning thresholds, and overage controls.',
      ],
    },
    {
      id: 'ai-economics',
      code: 'A1',
      title: 'AI-chat economics',
      description: 'AI conversations use a separate allowance.',
      paragraphs: [
        'Provider fact: current allowances are 0 AI chats on Free, 100 on Starter, 300 on Professional, and 500 on Professional WhatsApp; extra AI chats are displayed at $0.10 each on eligible plans. Business is custom.',
        'Racklio analysis: determine which paths invoke AI, expected turns and retries, fallback behavior, knowledge maintenance, testing consumption, and whether rule-based paths can control unnecessary usage.',
      ],
    },
    {
      id: 'seats',
      code: 'T1',
      title: 'Seats and team implications',
      description: 'Builder and inbox participation affects seat requirements.',
      paragraphs: [
        'Provider fact: Free includes one seat, Starter two, and Professional and Professional WhatsApp three. The pricing table presents extra seats at $25/month or $20/month under annual billing for eligible plans; Business is custom.',
        'Racklio analysis: separate builders, administrators, analysts, inbox agents, approvers, and occasional users before counting seats.',
      ],
    },
    {
      id: 'whatsapp',
      code: 'W1',
      title: 'WhatsApp economics',
      description:
        'Subscription, channel access, Landbot fees, and Meta fees are distinct.',
      paragraphs: [
        'Provider fact: Professional WhatsApp includes a WhatsApp number and 10,000 service messages per account/month. Beyond that quota, Landbot documents $0.003 per service message. Marketing, utility, and authentication templates add a $0.05 Landbot fee per delivered message plus applicable Meta cost.',
        'Provider fact: WhatsApp can be added to Professional at $100/month or $80/month under annual billing in the current comparison table. Meta pricing varies by message category, recipient country, and volume tier.',
        'Racklio analysis: forecast inbound service replies, outbound templates by category and destination, opt-in operations, number migration, campaign behavior, quality controls, and Meta policy exposure.',
      ],
    },
    {
      id: 'plans',
      code: 'P1',
      title: 'Upgrade triggers and plan fit',
      description:
        'Choose from channel, integration, governance, and volume requirements.',
      paragraphs: [
        'Starter can fit a small web or Messenger deployment requiring AI Agents and moderate usage. Professional becomes relevant for higher volume, more seats, broader integrations, API or webhook workflows, branding control, and live support.',
        'Professional WhatsApp fits when WhatsApp is a defined production channel and its message economics are modeled. Business is a procurement decision for custom volume, support, success management, training, or documentation review.',
      ],
    },
  ],
  scenarios: [
    {
      scenario: 'Exploring the builder before production',
      guidance: 'Start with Free',
      why: 'It has no displayed expiration and provides a limited chat allowance without AI-chat credits.',
    },
    {
      scenario: 'Small web deployment using AI Agents',
      guidance: 'Evaluate Starter',
      why: 'It adds AI chats, two seats, and broader builder capability.',
    },
    {
      scenario:
        'Growing team needs integrations, webhooks, API, and live support',
      guidance: 'Evaluate Professional',
      why: 'Its published scope and allowances are broader.',
    },
    {
      scenario: 'WhatsApp is a production channel',
      guidance:
        'Compare Professional WhatsApp with the Professional add-on path',
      why: 'Normalize number, service messages, templates, AI chats, Landbot fees, and Meta charges.',
    },
  ],
  faqs: [
    {
      question: 'Is the annual rate the same as monthly billing?',
      answer:
        'No. The annual display is 20% lower and represents a longer billing commitment. Verify the checkout total and term.',
    },
    {
      question: 'Are AI chats unlimited?',
      answer:
        'No. Standard plans publish separate AI-chat allowances and an eligible-plan overage rate.',
    },
    {
      question: 'Does Professional automatically include WhatsApp?',
      answer:
        'Not in the base configuration shown. The current pricing comparison presents WhatsApp as an added channel or a Professional WhatsApp plan.',
    },
    {
      question: 'How long is the paid-plan trial?',
      answer:
        'Landbot displays a free-trial CTA, but Racklio did not find a stable official duration in the reviewed pricing material and therefore does not state one.',
    },
  ],
  sources: landbotSources,
  related: [
    { title: 'Landbot review', href: '/reviews/landbot' },
    {
      title: 'Landbot alternatives',
      href: '/alternatives/landbot-alternatives',
    },
    { title: 'Landbot vs Tidio', href: '/comparisons/landbot-vs-tidio' },
    { title: 'Live Chat & Messaging', href: '/categories/live-chat-messaging' },
  ],
};

export const landbotAlternativesData: CommercialPageData = {
  path: '/alternatives/landbot-alternatives',
  breadcrumbParent: { title: 'Alternatives', href: '/alternatives' },
  code: 'LA',
  eyebrow: 'Conditional alternatives guide',
  headline: 'Landbot Alternatives: Compare Chat, Messaging & Support Models',
  dek: 'Landbot alternatives should be selected by operating model. Compare custom conversational-flow design with agent-centric live chat, omnichannel messaging, and ecommerce help-desk workflows rather than treating every chatbot product as equivalent.',
  metaTitle: 'Landbot Alternatives by Conversational Workflow | Racklio',
  metaDescription:
    'Compare Landbot alternatives conditionally across conversational automation, live chat, omnichannel messaging, ecommerce support, pricing and buyer fit.',
  verificationDate,
  schemaDate,
  provider: 'Landbot',
  providerKey: 'landbot',
  officialUrl,
  categoryLinks: [
    { title: 'Live Chat & Messaging', href: '/categories/live-chat-messaging' },
  ],
  summary: [
    {
      label: 'Consider Tidio when',
      text: 'Website live chat, agent support, tickets, Flows automation, and Lyro AI belong in one support-oriented workspace.',
    },
    {
      label: 'Consider respond.io when',
      text: 'WhatsApp and other messaging channels, shared ownership, workflows, and active-contact operations are central.',
    },
    {
      label: 'Consider Gorgias when',
      text: 'Ecommerce order context and help-desk operations define the primary job.',
    },
    {
      label: 'Keep Landbot when',
      text: 'Custom conversational flows, qualification, structured capture, and controlled AI or rule-based journeys remain the core requirement.',
    },
  ],
  table: {
    caption: 'Conditional Landbot alternative paths',
    columns: ['Option', 'Primary model', 'Why consider it', 'Main trade-off'],
    rows: [
      [
        'Landbot',
        'Conversational automation builder',
        'Custom flows, AI and rules, qualification, structured capture',
        'Not a traditional full help desk',
      ],
      [
        'Tidio',
        'Website live chat and support workspace',
        'Agent chat, tickets, Flows, Lyro AI',
        'Different metering and less builder-centered positioning',
      ],
      [
        'respond.io',
        'Omnichannel messaging operations',
        'Shared ownership across WhatsApp and other channels',
        'Active-contact and workspace economics require modeling',
      ],
      [
        'Gorgias',
        'Ecommerce help desk',
        'Order context and ticket-based service workflow',
        'Commerce specialization may not fit non-retail journeys',
      ],
    ],
  },
  sections: [
    {
      id: 'decision',
      code: 'D1',
      title: 'Start with the operating model',
      description: 'The products organize conversations differently.',
      paragraphs: [
        'Racklio analysis: keep Landbot on the shortlist when designing the automated journey is the primary job. Move toward an alternative when agent queues, omnichannel conversation ownership, tickets, SLAs, or ecommerce context are more important.',
        'Normalize channels, automation, AI, knowledge, handoff, integrations, users, usage units, governance, and implementation before comparing price.',
      ],
    },
    {
      id: 'tidio',
      code: 'T1',
      title: 'Tidio for live chat and support workflow',
      description:
        'Tidio places broader website support operations closer to the center.',
      paragraphs: [
        'Provider fact: Tidio documents live chat, help-desk and ticket workflows, Flows automation, and Lyro AI under separately defined limits and pricing components.',
        'Racklio analysis: consider Tidio when human agents, website conversations, tickets, and support operations matter more than constructing highly customized conversational journeys.',
      ],
      contextualLink: {
        title: 'Compare Landbot vs Tidio',
        href: '/comparisons/landbot-vs-tidio',
      },
    },
    {
      id: 'respond-io',
      code: 'R1',
      title: 'respond.io for omnichannel messaging operations',
      description:
        'The shared conversation workspace is the central distinction.',
      paragraphs: [
        'Provider fact: respond.io documents WhatsApp and other messaging-channel connections, shared inbox and lifecycle workflows, automation, AI features, users, and monthly-active-contact pricing.',
        'Racklio analysis: consider respond.io when the problem is coordinating teams and customer histories across supported channels. Landbot remains more directly centered on designing the conversational flow itself.',
      ],
      contextualLink: {
        title: 'Read the respond.io review',
        href: '/reviews/respond-io',
      },
    },
    {
      id: 'gorgias',
      code: 'G1',
      title: 'Gorgias for ecommerce customer support',
      description: 'Commerce and ticket context change the decision.',
      paragraphs: [
        'Provider fact: Gorgias documents an ecommerce-focused help desk, supported channels, automation and AI capabilities, integrations, and ticket-based usage economics.',
        'Racklio analysis: consider Gorgias when orders, returns, store data, and service tickets define the workflow. That differs from Landbot’s custom conversational-journey model.',
      ],
      contextualLink: {
        title: 'Read the Gorgias review',
        href: '/reviews/gorgias',
      },
    },
    {
      id: 'economics',
      code: 'E1',
      title: 'Compare configured economics',
      description: 'Each provider meters a different operational unit.',
      paragraphs: [
        'Landbot combines plan, chats, AI chats, seats, WhatsApp and message costs. Tidio separates product and AI or automation allowances; respond.io uses workspace, users and active contacts; Gorgias uses ticket-related economics.',
        'Racklio analysis: price the same monthly workload, peaks, channels, agents, automated paths, AI use, handoff, integrations, implementation, and growth horizon.',
      ],
    },
  ],
  scenarios: [
    {
      scenario: 'Custom qualification and booking flow is central',
      guidance: 'Keep Landbot',
      why: 'Its builder and AI/rule combination directly address controlled conversational journeys.',
    },
    {
      scenario: 'Website support agents need chat and tickets',
      guidance: 'Consider Tidio',
      why: 'Its operating model is more support-workspace centered.',
    },
    {
      scenario: 'Team coordinates WhatsApp and multiple messaging channels',
      guidance: 'Consider respond.io',
      why: 'Omnichannel ownership and workflow are central to its product model.',
    },
    {
      scenario: 'Ecommerce order context drives service',
      guidance: 'Consider Gorgias',
      why: 'Its specialization is aligned with commerce support and ticket handling.',
    },
  ],
  faqs: [
    {
      question: 'Is Tidio universally better than Landbot?',
      answer:
        'No. Tidio can fit agent-centric live chat and support; Landbot can fit custom conversational automation and qualification flows.',
    },
    {
      question: 'Is respond.io a direct chatbot-builder replacement?',
      answer:
        'Not exactly. It has automation and AI capabilities, but its core buying question is often omnichannel messaging operations and shared ownership.',
    },
    {
      question: 'Why are phone and CRM products omitted?',
      answer:
        'They solve different primary problems and would not be defensible alternatives merely to lengthen the list.',
    },
  ],
  sources: [
    ...landbotSources,
    { title: 'Tidio pricing', href: 'https://www.tidio.com/pricing/' },
    { title: 'respond.io pricing', href: 'https://respond.io/pricing' },
    { title: 'Gorgias pricing', href: 'https://www.gorgias.com/pricing' },
  ],
  related: [
    { title: 'Landbot review', href: '/reviews/landbot' },
    { title: 'Landbot pricing', href: '/guides/landbot-pricing' },
    { title: 'Landbot vs Tidio', href: '/comparisons/landbot-vs-tidio' },
    { title: 'Live Chat & Messaging', href: '/categories/live-chat-messaging' },
  ],
};

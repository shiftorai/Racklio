import type { SoftwareReviewData } from '@/components/reviews/software-review-template';

const commonFaq = (name: string, category: string) => [
  {
    question: `What is ${name}?`,
    answer: `${name} is ${category}. This review evaluates its published product scope, pricing model, limits, and practical business fit.`,
  },
  {
    question: `Has Racklio tested ${name} hands-on?`,
    answer: `No hands-on testing is claimed. The analysis is based on official provider documentation accessed in August 2026.`,
  },
  {
    question: `Is ${name} universally recommended?`,
    answer: `No. Racklio uses conditional recommendations because fit depends on channels, workflow, usage, controls, and budget.`,
  },
];

export const typewiseData: SoftwareReviewData = {
  slug: 'typewise',
  name: 'Typewise',
  category: 'AI customer service automation',
  headline:
    'Typewise review: outcome-priced AI automation for established customer service teams',
  dek: 'Typewise combines AI agents and agent assistance for customer communication. Its published outcome-based pricing and enterprise-oriented deployment make it most relevant to teams with meaningful automation volume and integration capacity.',
  metaTitle: 'Typewise Review (2026): Pricing, AI Automation & Fit | Racklio',
  metaDescription:
    'Evidence-based Typewise review covering outcome pricing, AI customer service automation, integrations, security claims, deployment needs, and business fit.',
  officialUrl: 'https://www.typewise.app/',
  summary: [
    {
      label: 'What it is',
      text: 'An AI customer service platform for automating resolutions and assisting service agents.',
    },
    {
      label: 'Primary fit',
      text: 'Established service operations with repeatable inquiries, historical communications, and integration resources.',
    },
    {
      label: 'Main tradeoff',
      text: 'The commercial model starts from a published per-resolution rate, while full scope and implementation pricing require provider engagement.',
    },
    {
      label: 'Verify before purchase',
      text: 'Resolution definition, minimum commitment, supported system integration, rollout scope, and security configuration.',
    },
  ],
  fit: [
    'You want automation tied to resolved outcomes.',
    'Your team can support an integration and onboarding project.',
    'EU data hosting or zero-retention options are material requirements.',
  ],
  notFit: [
    'You need a simple standalone live-chat widget.',
    'You want transparent self-service plan tiers.',
    'Your volume is too low to justify enterprise-oriented deployment work.',
  ],
  pricing: [
    {
      plan: 'AI automation',
      basis: 'Starting from $1 per resolution',
      allowance: 'Outcome based',
      note: 'The provider publishes a starting rate, not a complete self-service plan matrix.',
    },
    {
      plan: 'Enterprise scope',
      basis: 'Contact Typewise',
      allowance: 'Configured to requirements',
      note: 'Confirm minimums, implementation, integrations, and the definition of a billable resolution.',
    },
  ],
  sections: [
    {
      id: 'capabilities',
      code: 'C0',
      title: 'Core capabilities and workflow',
      description:
        'Typewise positions automation and agent assistance around existing customer communication operations.',
      paragraphs: [
        'According to Typewise, the platform can automate customer service responses and support agents as they compose communications. The practical value depends on the quality of connected knowledge, historical interactions, and the actions the deployment is permitted to take.',
        'Racklio analysis: this is closer to an AI layer for an established service operation than a lightweight help desk replacement. Buyers should map where Typewise sits in the existing stack, how human handoff works, and which channels are actually included in the proposed deployment.',
      ],
      bullets: [
        'Document the source systems and channels in scope.',
        'Define which outcomes count as resolved.',
        'Set escalation rules for uncertain or sensitive requests.',
      ],
      evidence:
        'Typewise describes success-based pricing and customer-specific integration; the provider—not Racklio—makes the published automation and efficiency claims.',
    },
    {
      id: 'integrations',
      code: 'I0',
      title: 'Integrations and deployment',
      description:
        'Integration requirements are a central buying consideration.',
      paragraphs: [
        'The provider presents Typewise as working with existing customer service environments rather than requiring every workflow to move into a new inbox. That can reduce tool replacement, but it also makes technical discovery and onboarding important.',
        'Ask for a written implementation plan covering data access, knowledge preparation, identity and permissions, testing, acceptance criteria, monitoring, and rollback. Confirm which connections are standard and which require custom work.',
      ],
    },
    {
      id: 'security',
      code: 'S1',
      title: 'Security and operational limits',
      description:
        'Security statements are provider claims that require buyer verification.',
      paragraphs: [
        'Typewise states that it is ISO 27001 certified, hosts data on AWS in the EU, encrypts data in transit and at rest, and does not use customer data for cross-customer model training. It also describes zero-data-retention and PII-masking options.',
        'Buyers should request current certification scope, a data processing agreement, subprocessors, retention configuration, incident terms, access controls, and details of any external model provider. A security page is useful evidence, but it does not replace the buyer’s own review.',
      ],
      evidence:
        'Security capabilities can vary by deployment. Verify that the controls required by your organization are included in the contracted configuration.',
    },
    {
      id: 'tradeoffs',
      code: 'T0',
      title: 'Key buying considerations and alternatives',
      description:
        'The strongest reason to consider Typewise is focused automation; the main risk is underestimating deployment scope.',
      paragraphs: [
        'Consider Typewise when resolution automation can be measured against a defined service workflow and the team has enough volume to evaluate outcome economics. A pilot should establish what counts as success, which requests remain human-owned, and how quality is reviewed.',
        'Look at a simpler help desk or live-chat platform when the immediate need is a shared inbox, basic ticketing, or quick website chat deployment. Those products solve a different problem and may require less implementation.',
      ],
    },
  ],
  scenarios: [
    {
      scenario: 'Established enterprise service team',
      fit: 'Consider',
      why: 'Historical communications and integration capacity can support a governed automation project.',
    },
    {
      scenario: 'Small team needing its first help desk',
      fit: 'Look elsewhere',
      why: 'A conventional help desk may address the core workflow with less deployment work.',
    },
    {
      scenario: 'Regulated EU operation',
      fit: 'Investigate',
      why: 'Published EU hosting and privacy options are relevant, but contract-level verification remains necessary.',
    },
  ],
  faqs: [
    ...commonFaq('Typewise', 'an AI customer service automation platform'),
    {
      question: 'Does Typewise publish pricing?',
      answer:
        'It publishes pricing starting from $1 per resolution. Complete commercial terms, minimums, implementation costs, and resolution definitions should be confirmed with sales.',
    },
    {
      question: 'Does Typewise replace a help desk?',
      answer:
        'The provider positions it as AI automation and assistance integrated with service workflows. Buyers needing a standalone inbox or ticketing system should confirm whether another platform remains required.',
    },
    {
      question: 'Is customer data used to train other customers’ models?',
      answer:
        'Typewise states that customer data is not used for cross-customer training. Verify the contractual language and selected deployment.',
    },
  ],
  sources: [
    {
      title: 'Typewise AI Customer Service Platform',
      href: 'https://www.typewise.app/',
    },
    { title: 'Typewise Security', href: 'https://www.typewise.app/security' },
    { title: 'Typewise AI Agent', href: 'https://www.typewise.app/ai-agent' },
    {
      title: 'Typewise Integrations',
      href: 'https://www.typewise.app/integrations',
    },
  ],
};

export const krispcallData: SoftwareReviewData = {
  slug: 'krispcall',
  name: 'KrispCall',
  category: 'cloud business phone system',
  headline:
    'KrispCall review: cloud calling and messaging for distributed business teams',
  dek: 'KrispCall combines virtual numbers, calling, SMS, voicemail, workspaces, and call-management features. The subscription is per user, while numbers and communications can add separate usage charges.',
  metaTitle: 'KrispCall Review (2026): Pricing, Calling & Limits | Racklio',
  metaDescription:
    'Evidence-based KrispCall review covering per-user pricing, virtual numbers, calling, SMS, workspace features, usage charges, integrations, and fit.',
  officialUrl: 'https://krispcall.com/',
  summary: [
    {
      label: 'What it is',
      text: 'A cloud phone system for business calling, SMS, virtual numbers, voicemail, and team administration.',
    },
    {
      label: 'Primary fit',
      text: 'Small and midsize teams that need business numbers and shared cloud telephony without a traditional PBX.',
    },
    {
      label: 'Main tradeoff',
      text: 'Subscription prices do not make calling, SMS, number, and add-on costs disappear.',
    },
    {
      label: 'Verify before purchase',
      text: 'Number availability, KYC requirements, porting eligibility, local rates, usage charges, and integration access.',
    },
  ],
  fit: [
    'You need virtual business numbers with team calling and SMS.',
    'Per-user workspace pricing suits the team structure.',
    'Standard-plan IVR, transfer, API, or CRM connections match requirements.',
  ],
  notFit: [
    'You require a contracted enterprise contact center with extensive workforce tooling.',
    'You need predictable bundled usage in every destination.',
    'Required number types or countries are not available.',
  ],
  pricing: [
    {
      plan: 'Essential',
      basis: '$15/user monthly; $12/user monthly billed annually',
      allowance: 'Up to 5 users; one eligible US/Canada or UK number per user',
      note: 'Calling and SMS charges apply.',
    },
    {
      plan: 'Standard',
      basis: '$40/user monthly; $32/user monthly billed annually',
      allowance: 'Unlimited users; broader call management and integrations',
      note: 'Calling, SMS, and some number charges apply.',
    },
    {
      plan: 'Enterprise',
      basis: 'Custom',
      allowance: 'Custom users and bundled rates',
      note: 'Requires sales contact.',
    },
  ],
  sections: [
    {
      id: 'capabilities',
      code: 'C0',
      title: 'Calling, messaging, and administration',
      description: 'KrispCall groups telephony functions in a team workspace.',
      paragraphs: [
        'Official materials describe inbound and outbound calling, SMS, voicemail, call recording, analytics, number porting, and virtual numbers. Standard adds capabilities such as phone trees, transfer, API and webhook access, and additional integrations.',
        'Feature availability does not determine carrier coverage or regulatory eligibility. Confirm what works for each target country, number type, and messaging use case before designing a workflow around it.',
      ],
      bullets: [
        'Map inbound routing, transfers, voicemail, and after-hours behavior.',
        'Confirm recording consent and retention responsibilities.',
        'Test SMS support and sender requirements in each market.',
      ],
    },
    {
      id: 'usage',
      code: 'U0',
      title: 'Numbers, usage, and billing limits',
      description:
        'The subscription, phone numbers, and communications are distinct cost layers.',
      paragraphs: [
        'KrispCall states that each user can receive one eligible local number from the United States or Canada or a UK local/mobile number. Other countries can require number purchase fees and carrier-specific documentation. Call and SMS functionality can be limited until KYC verification is complete.',
        'The terms state that number fees recur monthly and calling or messaging consumes credits or incurs charges. Buyers should model destination-specific rates, number rental, porting, add-ons, taxes, and expected usage—not only the seat price.',
      ],
      evidence:
        'The pricing page contains broad “unlimited” FAQ language while the plan cards and terms state that calling and SMS charges apply. Racklio treats the explicit charge disclosures as the safer budgeting basis.',
    },
    {
      id: 'integrations',
      code: 'I0',
      title: 'Integrations and team workflow',
      description: 'Integration access varies by plan.',
      paragraphs: [
        'Published plan information places Slack on Essential and broader CRM, API, webhook, IVR, and transfer capabilities on Standard. Confirm the exact application, data objects, synchronization behavior, rate limits, and permissions required.',
        'For a sales or support team, test contact matching, click-to-call, call notes, disposition, ownership, recordings, and reporting. A nominal integration is not evidence that every workflow is supported.',
      ],
    },
    {
      id: 'tradeoffs',
      code: 'T0',
      title: 'Key buying considerations and alternatives',
      description:
        'KrispCall can reduce PBX complexity, but communications scope still needs country-by-country diligence.',
      paragraphs: [
        'Consider it when a distributed team needs cloud numbers and shared calling administration at a published per-user entry price. The Standard plan is the more relevant comparison point when call routing and systems integration matter.',
        'Look to an enterprise contact-center platform when procurement requires formal service commitments, advanced workforce management, deep quality assurance, or complex global carrier arrangements.',
      ],
    },
  ],
  scenarios: [
    {
      scenario: 'Small distributed sales team',
      fit: 'Consider',
      why: 'Virtual numbers, shared contacts, calling, and SMS align with a lightweight cloud-phone workflow.',
    },
    {
      scenario: 'Multi-country regulated contact center',
      fit: 'Investigate carefully',
      why: 'Number rules, KYC, carrier coverage, compliance, and enterprise controls require validation.',
    },
    {
      scenario: 'Messaging-only support operation',
      fit: 'Look elsewhere',
      why: 'An omnichannel inbox may align more directly than a phone-centered system.',
    },
  ],
  faqs: [
    ...commonFaq(
      'KrispCall',
      'a cloud business phone and virtual-number system',
    ),
    {
      question: 'How much does KrispCall cost?',
      answer:
        'Published monthly rates are $15 per Essential user and $40 per Standard user; annual billing is presented as $12 and $32 per user per month respectively. Enterprise is custom.',
    },
    {
      question: 'Are calls and SMS included in the seat price?',
      answer:
        'The plan cards and terms state that calling and SMS charges apply. Confirm rates, credits, and any bundle directly with KrispCall.',
    },
    {
      question: 'Does KrispCall provide a phone number?',
      answer:
        'The pricing page states that each user receives one eligible US/Canada local number or UK local/mobile number. Other countries can require purchase fees and documentation.',
    },
  ],
  sources: [
    { title: 'KrispCall Pricing', href: 'https://krispcall.com/pricing/' },
    {
      title: 'KrispCall Subscription Plans',
      href: 'https://help.krispcall.com/en/article/what-are-different-subscription-plans-available-with-krispcall-1hp42ym/',
    },
    { title: 'KrispCall Features', href: 'https://krispcall.com/features/' },
    {
      title: 'KrispCall Integrations',
      href: 'https://krispcall.com/integration/',
    },
    {
      title: 'KrispCall Terms and Conditions',
      href: 'https://krispcall.com/wp-content/uploads/2025/12/Terms-and-Conditions-12-22.pdf',
    },
  ],
};

export const tidioData: SoftwareReviewData = {
  slug: 'tidio',
  name: 'Tidio',
  category: 'AI customer support, live chat, and help desk',
  headline:
    'Tidio review: live support, ticketing, automation, and Lyro AI in one service stack',
  dek: 'Tidio combines live chat, ticketing, Flows automation, and the Lyro AI Agent. Its modular usage model can suit growing support teams, but buyers need to separate billable conversations, Flow visitors, Lyro conversations, seats, and add-on costs.',
  metaTitle: 'Tidio Review (2026): Pricing, Lyro AI & Limits | Racklio',
  metaDescription:
    'Evidence-based Tidio review covering live chat, help desk, Lyro AI, pricing, conversation limits, automation, integrations, and support-team fit.',
  officialUrl: 'https://www.tidio.com/',
  summary: [
    {
      label: 'What it is',
      text: 'A customer service platform combining live chat, ticketing, automation, and an optional AI agent.',
    },
    {
      label: 'Primary fit',
      text: 'Small and growing teams that want chat, tickets, and entry-level automation in one platform.',
    },
    {
      label: 'Main tradeoff',
      text: 'Several different usage meters can shape the final bill and operational capacity.',
    },
    {
      label: 'Verify before purchase',
      text: 'Billable-conversation tier, Lyro quota, Flow visitors, seat count, channels, and over-limit behavior.',
    },
  ],
  fit: [
    'You want live chat and ticketing with optional AI automation.',
    'A self-service entry plan and ecommerce integrations matter.',
    'The team can forecast conversations and AI usage.',
  ],
  notFit: [
    'You require enterprise service management depth or complex governance.',
    'You want one unlimited meter across human, Flow, and AI interactions.',
    'Your channel or reporting requirements exceed the selected tier.',
  ],
  pricing: [
    {
      plan: 'Free',
      basis: '$0',
      allowance: 'Entry usage; 50 one-time Lyro conversations',
      note: 'The free Lyro quota does not renew.',
    },
    {
      plan: 'Starter',
      basis: '$24.17/month on displayed annual-effective pricing',
      allowance: '100 billable conversations; 100 Flow visitors',
      note: '7-day trial; verify monthly price separately.',
    },
    {
      plan: 'Growth',
      basis: 'From $49.17/month on displayed annual-effective pricing',
      allowance: 'From 250 billable conversations',
      note: 'Cost scales with selected usage.',
    },
    {
      plan: 'Plus / Premium',
      basis: 'From $300/month plus usage / custom',
      allowance: 'Custom limits and enterprise options',
      note: 'Sales-assisted scope.',
    },
  ],
  sections: [
    {
      id: 'capabilities',
      code: 'C0',
      title: 'Core support capabilities',
      description:
        'Tidio combines human support and automation rather than treating them as one undifferentiated feature.',
      paragraphs: [
        'Official materials list live chat, ticketing, visitor monitoring, operating hours, analytics, automated Flows, and Lyro AI. Teams can use the inbox for agent conversations while automation handles defined paths or knowledge-based questions.',
        'Racklio analysis: the combined stack is attractive when a business wants fewer separate tools. Buyers should still document channel coverage, routing, ownership, collision handling, attachments, reporting, and escalation before assuming it replaces an established enterprise help desk.',
      ],
    },
    {
      id: 'limits',
      code: 'L0',
      title: 'Conversation and AI usage model',
      description: 'Human, Flow, and Lyro activity use distinct allowances.',
      paragraphs: [
        'Tidio defines plan capacity through billable conversations, visitors reached by Flows, and Lyro conversations. The initial 50 Lyro conversations are a lifetime, non-renewing allowance; a paid Lyro quota renews on its billing cycle.',
        'A Lyro use is counted when Lyro first responds in a new conversation or ticket thread. Buyers should confirm how reopenings, transfers, spam, bot-only interactions, and over-limit events are treated under the selected plan.',
      ],
      evidence:
        'Do not read the free 50-conversation Lyro allowance as 50 conversations every month. Tidio documentation explicitly describes it as one-time.',
    },
    {
      id: 'integrations',
      code: 'I0',
      title: 'Channels, integrations, and administration',
      description:
        'Channel and integration fit should be checked at the plan level.',
      paragraphs: [
        'Tidio publishes ecommerce and service integrations, including Shopify and other common business systems, plus OpenAPI access on Growth. Exact channel availability and integration depth can differ by product and tier.',
        'Test customer identity matching, ticket history, order context, permissions, departments, business hours, automation ownership, and data export. Confirm seat limits because some higher-tier pricing is customized around team size.',
      ],
    },
    {
      id: 'tradeoffs',
      code: 'T0',
      title: 'Key buying considerations and alternatives',
      description:
        'Tidio is strongest when chat, tickets, and practical automation need to coexist.',
      paragraphs: [
        'Consider it for a small or growing support operation that values rapid web-chat deployment and a staged path into AI. Model all usage meters against a normal month and a peak month.',
        'Look at a more advanced help desk when the buying requirement centers on complex SLAs, deep case management, extensive audit controls, or large multi-brand administration.',
      ],
    },
  ],
  scenarios: [
    {
      scenario: 'Small ecommerce support team',
      fit: 'Consider',
      why: 'Live chat, tickets, automation, and commerce connections align with common support workflows.',
    },
    {
      scenario: 'Team piloting AI answers',
      fit: 'Consider with limits',
      why: 'The one-time Lyro allowance supports evaluation, but production usage needs a paid quota.',
    },
    {
      scenario: 'Complex enterprise service desk',
      fit: 'Look elsewhere or validate deeply',
      why: 'Governance and case-management requirements may exceed the product’s simpler operating model.',
    },
  ],
  faqs: [
    ...commonFaq(
      'Tidio',
      'a live chat, help desk, automation, and AI customer service platform',
    ),
    {
      question: 'Does Tidio have a free plan?',
      answer:
        'Yes. Current materials show a free entry option and 50 one-time Lyro conversations.',
    },
    {
      question: 'Does the free Lyro allowance reset monthly?',
      answer:
        'No. Tidio documentation says the 50-conversation free Lyro quota is non-renewing.',
    },
    {
      question: 'Is Tidio priced per seat?',
      answer:
        'Pricing combines plan and usage limits; seat treatment varies by tier and custom plans can include a custom number of seats.',
    },
  ],
  sources: [
    { title: 'Tidio Pricing', href: 'https://www.tidio.com/pricing/' },
    {
      title: 'Tidio Lyro AI Agent Limit',
      href: 'https://help.tidio.com/hc/en-us/articles/13924459295900-The-Lyro-AI-agent-limit',
    },
    { title: 'Tidio Features', href: 'https://www.tidio.com/features/' },
    {
      title: 'Tidio Integrations',
      href: 'https://www.tidio.com/integrations/',
    },
    { title: 'Tidio Security', href: 'https://www.tidio.com/security/' },
  ],
};

export const respondIoData: SoftwareReviewData = {
  slug: 'respond-io',
  name: 'respond.io',
  category: 'omnichannel customer conversation management',
  headline:
    'respond.io review: omnichannel messaging, workflows, and AI for B2C conversation teams',
  dek: 'respond.io brings messaging, email, and supported calling channels into a shared workspace with automation and AI. Pricing scales through plan tier, users, and Monthly Active Contacts, while channel-provider fees remain separate.',
  metaTitle: 'respond.io Review (2026): Pricing, Channels & AI | Racklio',
  metaDescription:
    'Evidence-based respond.io review covering omnichannel messaging, WhatsApp, AI agents, workflows, users, active-contact pricing, security, and fit.',
  officialUrl: 'https://respond.io/',
  summary: [
    {
      label: 'What it is',
      text: 'A customer conversation management platform for chat, messaging, email, supported calls, workflows, and AI agents.',
    },
    {
      label: 'Primary fit',
      text: 'B2C teams managing high-value conversations across WhatsApp and other messaging channels.',
    },
    {
      label: 'Main tradeoff',
      text: 'Subscription, users, active contacts, and channel-provider fees create multiple cost layers.',
    },
    {
      label: 'Verify before purchase',
      text: 'Channel eligibility, Meta fees, MAC tier, seats, workflow limits, onboarding, and security controls by plan.',
    },
  ],
  fit: [
    'WhatsApp and multiple messaging channels are central.',
    'A shared team inbox and workflow automation are required.',
    'The organization can forecast active contacts and user growth.',
  ],
  notFit: [
    'You primarily need conventional ticket-based case management.',
    'Business telephony is the dominant requirement.',
    'A lightweight single-channel chat tool would cover the workflow.',
  ],
  pricing: [
    {
      plan: 'Starter',
      basis: '$79 monthly; $948/year billed annually',
      allowance: '5 users; unlimited Monthly Active Contacts',
      note: 'Additional users $12/month; no AI Agents or workflows.',
    },
    {
      plan: 'Growth',
      basis: '$159 monthly; $1,908/year billed annually',
      allowance: '10 users; starts at 1,000 MACs',
      note: 'Additional users $20/month; extra MACs $12 per 100.',
    },
    {
      plan: 'Advanced',
      basis: '$279 monthly; $3,348/year billed annually',
      allowance: '10 users; starts at 1,000 MACs',
      note: 'Additional users $24/month; extra MACs $15 per 100.',
    },
    {
      plan: 'Enterprise',
      basis: 'Custom',
      allowance: 'Unlimited users; custom MACs and controls',
      note: 'Sales contact required.',
    },
  ],
  sections: [
    {
      id: 'capabilities',
      code: 'C0',
      title: 'Channels, inbox, and customer context',
      description:
        'respond.io is organized around ongoing customer conversations rather than traditional help-desk tickets.',
      paragraphs: [
        'The provider documents WhatsApp, Instagram, Facebook Messenger, TikTok, email, web chat, and supported voice capabilities in a unified inbox. Owners connect channels; channel-specific rules and messaging windows still apply.',
        'Racklio analysis: this model fits teams that need continuity across conversational channels. It should not automatically be described as a full help desk; buyers needing case hierarchies, SLA management, or IT service workflows should validate those requirements directly.',
      ],
    },
    {
      id: 'automation',
      code: 'A1',
      title: 'Workflows, AI, and administration',
      description:
        'Automation begins on Growth and advanced control is tiered.',
      paragraphs: [
        'Growth adds broadcasts, workflows, AI Agents, advanced reports, integrations, and developer API access. Advanced adds HTTP requests, webhooks, multiple workspaces, SSO, custom channels, and contact-data masking.',
        'AI usage is described as included on eligible plans under a fair-use policy. Ask for the current fair-use terms, AI action scope, approval controls, handoff behavior, knowledge sources, logging, and channel-specific limitations.',
      ],
    },
    {
      id: 'limits',
      code: 'L0',
      title: 'Contacts, users, and external fees',
      description:
        'Monthly Active Contacts are the principal usage unit on Growth and Advanced.',
      paragraphs: [
        'A Monthly Active Contact is a contact the business talks to through calls or chat during the billing month. Growth and Advanced start with 1,000 MACs; temporary excess is billed in 100-contact increments.',
        'WhatsApp fees are not included in the subscription. Meta and other channel providers can impose separate charges, messaging windows, templates, verification, and policy constraints. Model these alongside respond.io fees.',
      ],
      evidence:
        'Starter lists unlimited MACs but omits Growth features such as workflows and AI Agents. Unlimited contacts should not be confused with unlimited functionality, users, or channel fees.',
    },
    {
      id: 'security',
      code: 'S1',
      title: 'Security claims and tradeoffs',
      description: 'Published controls vary by plan.',
      paragraphs: [
        'respond.io states that it is ISO 27001 certified and GDPR compliant, uses AWS, encrypts stored and transferred data, and backs up its database daily. Two-factor authentication is listed on Starter; SSO and contact masking appear on Advanced.',
        'Request certification scope, data locations, subprocessors, retention, access logs, DPA terms, recovery commitments, and the exact controls included in the selected plan.',
      ],
    },
  ],
  scenarios: [
    {
      scenario: 'WhatsApp-heavy B2C team',
      fit: 'Strong consideration',
      why: 'The channel model, shared inbox, workflows, and active-contact pricing align with conversation-led operations.',
    },
    {
      scenario: 'Traditional ticket-based support desk',
      fit: 'Validate carefully',
      why: 'Conversation management is the center of gravity; help-desk requirements may differ.',
    },
    {
      scenario: 'Phone-first contact center',
      fit: 'Look elsewhere or combine tools',
      why: 'Supported calls exist, but telephony-centric workforce and carrier needs require separate evaluation.',
    },
  ],
  faqs: [
    ...commonFaq(
      'respond.io',
      'an omnichannel customer conversation management platform',
    ),
    {
      question: 'Does respond.io support WhatsApp?',
      answer:
        'Yes. WhatsApp is a core supported channel, but Meta messaging and calling fees are not included in the subscription.',
    },
    {
      question: 'What is a Monthly Active Contact?',
      answer:
        'It is a contact the business talks to through calls or chat during the billing month, according to the current pricing FAQ.',
    },
    {
      question: 'Are AI Agents included?',
      answer:
        'They are listed on Growth, Advanced, and Enterprise under a fair-use policy, not Starter.',
    },
  ],
  sources: [
    { title: 'respond.io Pricing', href: 'https://respond.io/pricing' },
    {
      title: 'respond.io Platform Overview',
      href: 'https://respond.io/omnichannel-ai-crm-conversation-platform',
    },
    {
      title: 'respond.io Channels Documentation',
      href: 'https://respond.io/help/workspace-settings/channels',
    },
    { title: 'respond.io Security', href: 'https://respond.io/security' },
    {
      title: 'respond.io Terms of Service',
      href: 'https://respond.io/terms-of-service',
    },
  ],
};

export const gorgiasData: SoftwareReviewData = {
  slug: 'gorgias',
  name: 'Gorgias',
  category: 'ecommerce customer support help desk',
  headline:
    'Gorgias review: ticket-priced customer support built around ecommerce operations',
  dek: 'Gorgias is a help desk designed around ecommerce stores, with tickets, multiple support channels, commerce data, rules, and an optional AI Agent. Its cost follows support volume rather than a simple per-seat model.',
  metaTitle: 'Gorgias Review (2026): Pricing, AI Agent & Fit | Racklio',
  metaDescription:
    'Evidence-based Gorgias review covering ecommerce help desk features, Shopify, ticket pricing, AI Agent charges, channels, overages, and tradeoffs.',
  officialUrl: 'https://www.gorgias.com/',
  summary: [
    {
      label: 'What it is',
      text: 'An ecommerce-focused help desk that centralizes support conversations and store context.',
    },
    {
      label: 'Primary fit',
      text: 'Shopify and other supported commerce teams that want support agents to work with customer and order data.',
    },
    {
      label: 'Main tradeoff',
      text: 'Helpdesk tickets, AI automation, Voice, and SMS can each create billable usage.',
    },
    {
      label: 'Verify before purchase',
      text: 'Ticket definition, overages, seats, store compatibility, AI interaction charges, channel add-ons, and legacy pricing status.',
    },
  ],
  fit: [
    'Ecommerce context is central to support.',
    'Ticket-based pricing matches forecastable support volume.',
    'Store integrations and order workflows can reduce tool switching.',
  ],
  notFit: [
    'The business is not commerce-oriented.',
    'You need a general-purpose IT or B2B service desk.',
    'Seasonal ticket spikes make usage pricing difficult to predict.',
  ],
  pricing: [
    {
      plan: 'Starter',
      basis: '$10/month',
      allowance: '50 tickets; 3 seats',
      note: '$0.40 per extra ticket; email-focused entry tier.',
    },
    {
      plan: 'Basic',
      basis: '$60/month',
      allowance: '300 tickets; published pricing table lists up to 500 seats',
      note: '$40 per 100 overage tickets.',
    },
    {
      plan: 'Pro',
      basis: '$360/month',
      allowance: '2,000 tickets; up to 500 seats',
      note: '$36 per 100 overage tickets.',
    },
    {
      plan: 'Advanced',
      basis: '$900/month',
      allowance: '5,000 tickets; up to 500 seats',
      note: '$36 per 100 overage tickets.',
    },
    {
      plan: 'Enterprise',
      basis: 'Custom',
      allowance: 'Custom tickets and terms',
      note: 'Sales contact required.',
    },
  ],
  sections: [
    {
      id: 'capabilities',
      code: 'C0',
      title: 'Help desk and commerce workflow',
      description:
        'Gorgias connects support conversations to ecommerce context.',
      paragraphs: [
        'The provider describes email, live chat, social channels, rules, ticket management, help-center tools, reporting, and ecommerce integrations. The pricing table lists Shopify, Shopify Plus, BigCommerce, Magento, and WooCommerce connectivity, with feature availability varying by plan.',
        'The product’s strongest distinction is commerce specialization. Agents can work with store and order context instead of treating every customer conversation as an isolated ticket. Buyers should verify which actions, stores, brands, and permissions are supported in the selected configuration.',
      ],
    },
    {
      id: 'billing',
      code: 'B0',
      title: 'Billable tickets, AI, and overages',
      description:
        'Understanding the billable event is essential to forecasting Gorgias.',
      paragraphs: [
        'Gorgias documentation says a helpdesk ticket fee applies when at least one message is sent from Gorgias by a human, AI Agent, or Rule. Multiple messages can remain one ticket, while a later reply after inactivity can become a new billable ticket.',
        'AI Agent adds an outcome-based fee when it resolves a conversation without human handoff. Current pricing materials state $1 per AI interaction monthly or $0.90 on annual plans, and the interaction also counts as a helpdesk ticket. Voice and SMS are separate add-ons.',
      ],
      evidence:
        'Accounts created before May 28, 2025 may use a legacy pricing model. Existing customers should verify their actual Billing & usage page rather than assuming current public terms apply.',
    },
    {
      id: 'ai',
      code: 'A1',
      title: 'AI Agent, channels, and handoff',
      description:
        'AI Agent is an optional commerce-oriented automation layer.',
      paragraphs: [
        'Official documentation describes AI Agent answering shopper questions, using store and policy knowledge, automating certain commerce actions, and handing conversations to the team when required. Shopify is required for current AI Agent chat setup.',
        'Handoff behavior, eligible channels, knowledge quality, sensitive-topic rules, actions, and automation charges should be tested before production. Fully automated interactions and human-handled tickets have different economics but can both contribute to cost.',
      ],
    },
    {
      id: 'tradeoffs',
      code: 'T0',
      title: 'Key buying considerations and alternatives',
      description:
        'Gorgias is differentiated by commerce context, not by universal help-desk superiority.',
      paragraphs: [
        'Consider it when support is closely tied to orders, products, returns, and shopper conversations, especially on Shopify. Forecast ticket volume across normal and peak seasons, then add AI, Voice, SMS, implementation, and third-party integration costs.',
        'Look at a broader help desk when the organization supports non-commerce customers, needs complex B2B cases, or requires service-management structures that are not centered on store operations.',
      ],
    },
  ],
  scenarios: [
    {
      scenario: 'Growing Shopify support team',
      fit: 'Strong consideration',
      why: 'Commerce data, store actions, and support channels align with the operating model.',
    },
    {
      scenario: 'Seasonal ecommerce brand',
      fit: 'Model carefully',
      why: 'Ticket overages and AI interactions can increase during demand spikes.',
    },
    {
      scenario: 'Non-commerce B2B service desk',
      fit: 'Look elsewhere',
      why: 'The specialization may add less value than a general-purpose case platform.',
    },
  ],
  faqs: [
    ...commonFaq('Gorgias', 'an ecommerce-focused customer support help desk'),
    {
      question: 'How is Gorgias priced?',
      answer:
        'The Helpdesk is priced by included billable tickets, with plan-specific overages. AI Agent, Voice, and SMS can add separate usage charges.',
    },
    {
      question: 'Does Gorgias charge per agent?',
      answer:
        'Current public pricing emphasizes ticket volume; seat allowances vary by plan, with Starter listing 3 and higher tiers listing up to 500.',
    },
    {
      question: 'Does Gorgias work outside Shopify?',
      answer:
        'The pricing table lists other commerce integrations, but current AI Agent chat documentation specifically requires Shopify. Verify every required feature by store platform.',
    },
  ],
  sources: [
    { title: 'Gorgias Pricing', href: 'https://www.gorgias.com/pricing' },
    {
      title: 'Gorgias Plan Guide',
      href: 'https://www.gorgias.com/pricing/choose-your-plan',
    },
    {
      title: 'How Gorgias Billing Works',
      href: 'https://docs.gorgias.com/en-US/how-youre-billed-for-using-gorgias-199385',
    },
    {
      title: 'Gorgias AI Agent Chat Setup',
      href: 'https://docs.gorgias.com/en-US/set-up-and-use-ai-agent-on-chat-828220',
    },
    {
      title: 'Gorgias AI Agent Handoff',
      href: 'https://docs.gorgias.com/en-US/customize-how-ai-agent-hands-over-to-your-team-6008591',
    },
  ],
};

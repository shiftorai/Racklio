import {
  SoftwareComparisonTemplate,
  type ComparisonData,
} from '@/components/comparisons/software-comparison-template';

const data: ComparisonData = {
  slug: 'help-scout-vs-gorgias',
  a: 'Help Scout',
  b: 'Gorgias',
  category: 'AI customer support software',
  categoryLinks: [
    { title: 'AI Customer Support', href: '/categories/ai-customer-support' },
  ],
  headline: 'Help Scout vs Gorgias: Which support model fits?',
  dek: 'Help Scout and Gorgias overlap around customer support, shared workflows, automation, knowledge, reporting, integrations, and AI-related capabilities. The key buyer distinction is Help Scout’s shared inbox, Docs, and Beacon self-service model versus Gorgias’s ecommerce-centered help desk positioning.',
  metaTitle: 'Help Scout vs Gorgias 2026: Support Fit | Racklio',
  metaDescription:
    'Evidence-first Help Scout vs Gorgias comparison covering shared inboxes, ecommerce support, knowledge, messaging, AI, pricing and buyer fit.',
  aUrl: 'https://www.helpscout.com/',
  bUrl: 'https://www.gorgias.com/',
  aReview: '/reviews/help-scout',
  bReview: '/reviews/gorgias',
  verificationDate: 'August 25, 2026',
  schemaDate: '2026-08-25',
  summary: [
    {
      label: 'Consider Help Scout when',
      text: 'Shared inboxes, Docs, Beacon, self-service, support collaboration, and AI Answers usage controls are central.',
    },
    {
      label: 'Consider Gorgias when',
      text: 'Ecommerce-centered help desk workflows and related commerce context are the core requirement.',
    },
    {
      label: 'Pricing rule',
      text: 'Model support users, channels, knowledge needs, AI/automation usage, integrations, and plan-specific charges before comparing totals.',
    },
    {
      label: 'Decision boundary',
      text: 'Neither is a universal winner; choose the support operating model that fits the customer workflow.',
    },
  ],
  factors: [
    {
      factor: 'Operating model',
      a: 'Shared inbox, Docs knowledge base, Beacon, messaging, self-service, and support administration',
      b: 'Ecommerce-centered help desk and customer-support workflow',
      relevance:
        'Start with the business context and central support workflow.',
    },
    {
      factor: 'Website support',
      a: 'Beacon provides contact forms, live chat, Docs help, proactive messages, and AI Answers',
      b: 'Evaluate documented ecommerce and support-channel requirements',
      relevance:
        'Verify where customers ask for help and how escalation works.',
    },
    {
      factor: 'Knowledge and self-service',
      a: 'Docs sites and Beacon-connected content',
      b: 'Verify the required help-center and support-content scope',
      relevance:
        'Knowledge architecture should match the intended self-service model.',
    },
    {
      factor: 'AI economics',
      a: '$0.75 per eligible AI Answer resolution after trial',
      b: 'Verify current Gorgias plan and AI economics directly',
      relevance:
        'Do not compare AI labels without modeling the charge definition.',
    },
    {
      factor: 'When it may not fit',
      a: 'Primary need is ecommerce-specialist workflow',
      b: 'Primary need is a broader shared-inbox, Docs, and Beacon model',
      relevance: 'Reject the wrong operating model first.',
    },
  ],
  sections: [
    {
      id: 'business-fit',
      code: 'B1',
      title: 'Business fit and support model',
      description:
        'The products overlap but have different centers of gravity.',
      paragraphs: [
        'Provider fact: Help Scout documents shared inboxes, Docs, Beacon, live chat, proactive messages, workflows, reports, permissions, and AI Answers. Racklio’s Gorgias coverage evaluates an ecommerce-centered help desk.',
        'Racklio analysis: consider Help Scout when support collaboration and self-service are the broader operating model. Consider Gorgias when ecommerce context is the practical center of the support team.',
      ],
    },
    {
      id: 'channels-self-service',
      code: 'C1',
      title: 'Channels, Beacon, and self-service',
      description:
        'Support surfaces should be mapped before selecting a platform.',
      paragraphs: [
        'Provider fact: Help Scout’s Beacon can offer contact forms, live chat, Docs help, proactive messages, and AI Answers. Docs provides a knowledge-base system and related reporting.',
        'Racklio analysis: validate customer entry points, knowledge coverage, channel routing, agent workflow, escalation, and the exact integrations required by the support operation.',
      ],
    },
    {
      id: 'pricing-ai',
      code: 'P1',
      title: 'Pricing and AI boundaries',
      description: 'Configured economics are not one headline plan rate.',
      paragraphs: [
        'Provider fact: Help Scout documents user-based billing, additional inboxes, additional Docs sites, and AI Answers billed at $0.75 per eligible resolution after a trial for new customers.',
        'Racklio analysis: get Gorgias’s current official plan terms directly, then compare like-for-like users, support channels, ecommerce integrations, self-service scope, and expected automated interactions.',
      ],
    },
    {
      id: 'tradeoffs',
      code: 'T1',
      title: 'Conditional trade-offs',
      description: 'Choose by operating model rather than a score.',
      paragraphs: [
        'Choose Help Scout when Docs, Beacon, support collaboration, and controlled AI Answers usage fit the buyer’s support architecture. Choose Gorgias when ecommerce-centered support workflow is the clearer requirement.',
        'Neither choice removes the need to validate actual channels, integrations, plan scope, permissions, automation, reporting, and live commercial terms.',
      ],
    },
  ],
  scenarios: [
    {
      scenario:
        'Support team needs shared inbox, Docs, and Beacon self-service',
      lean: 'Consider Help Scout',
      why: 'Those components are explicit in Help Scout’s documented operating model.',
    },
    {
      scenario: 'Ecommerce support operations are central',
      lean: 'Consider Gorgias',
      why: 'Gorgias is positioned in Racklio as an ecommerce-centered help desk.',
    },
    {
      scenario: 'AI answers may handle meaningful visitor volume',
      lean: 'Model usage before selection',
      why: 'Help Scout bills eligible AI resolutions after trial; compare exact usage rules with Gorgias.',
    },
  ],
  faqs: [
    {
      question: 'Is Help Scout or Gorgias universally better?',
      answer:
        'No. The fit depends on whether shared inbox/self-service or ecommerce support context is the core operating model.',
    },
    {
      question: 'Has Racklio tested either platform hands-on?',
      answer:
        'No. This comparison is based on official provider documentation and does not claim independent performance testing.',
    },
  ],
  sources: [
    {
      title: 'Help Scout billing and plans guide',
      href: 'https://docs.helpscout.com/article/596-billing-and-plans-guide',
    },
    {
      title: 'Help Scout AI Resolutions pricing',
      href: 'https://docs.helpscout.com/article/1746-ai-resolutions-pricing',
    },
    {
      title: 'Help Scout Beacon guide',
      href: 'https://docs.helpscout.com/article/1250-beacon-jumpstart-guide',
    },
    { title: 'Gorgias pricing', href: 'https://www.gorgias.com/pricing' },
    { title: 'Gorgias helpdesk', href: 'https://www.gorgias.com/helpdesk' },
  ],
  related: [
    { title: 'Help Scout review', href: '/reviews/help-scout' },
    { title: 'Help Scout pricing', href: '/guides/help-scout-pricing' },
    { title: 'Gorgias review', href: '/reviews/gorgias' },
  ],
};

export function HelpScoutVsGorgias() {
  return <SoftwareComparisonTemplate data={data} />;
}

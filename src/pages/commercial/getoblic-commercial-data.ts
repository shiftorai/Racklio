import type { SoftwareReviewData } from '@/components/reviews/software-review-template';
import { providerLinks } from '@/lib/provider-links';

export const getOblicVerificationDate = 'September 4, 2026';
export const getOblicActionLabel = 'Claim your GetOblic business listing';
export const getOblicSources = [
  { title: 'GetOblic product and directory', href: 'https://getoblic.com/' },
  {
    title: 'GetOblic FAQ: plans, receptionist, setup, and WhatsApp',
    href: 'https://getoblic.com/faq/',
  },
  {
    title: 'GetOblic partner information: conflicting published price',
    href: 'https://getoblic.com/partners/',
  },
  {
    title: 'GetOblic WhatsApp Experience',
    href: 'https://getoblic.com/whatsapp-experience/',
  },
  {
    title: 'GetOblic terms and conditions',
    href: 'https://getoblic.com/terms-conditions/',
  },
  {
    title: 'GetOblic privacy policy',
    href: 'https://getoblic.com/privacy-policy/',
  },
  {
    title: 'GetOblic Media Kit: product layers and audience',
    href: 'https://getoblic.com/media-kit/',
  },
];

export const getOblicPricingCaveat =
  'Pricing is not conclusively verified: the FAQ lists $99/month or $89/month with annual billing, while official partner materials and terms still list $59/month. Obtain written confirmation of the current price, billing commitment, location coverage, and included services before subscribing.';

export const getOblicReviewData: SoftwareReviewData = {
  slug: 'getoblic',
  name: 'GetOblic',
  category: 'Business Phone & Voice AI',
  categoryLinks: [
    {
      title: 'Business Phone & Voice AI',
      href: '/categories/business-phone-voice-ai',
    },
  ],
  headline:
    'GetOblic Review: Does a Directory-Led AI Receptionist Fit Your Business?',
  dek: 'GetOblic connects local-business discovery with voice assistance and a paid phone receptionist. This review separates the free listing from the paid workflow, explains what to verify before handing over calls, and flags conflicting official pricing—not a tested performance verdict.',
  metaTitle: 'GetOblic Review 2026: AI Receptionist, Pricing & Fit | Racklio',
  metaDescription:
    'Independent GetOblic review: free listing vs paid AI receptionist, booking, call handoff, WhatsApp costs, pricing conflicts, and alternatives for local businesses.',
  officialUrl: providerLinks.getOblic.official,
  providerKey: 'getOblic',
  commercialActionLabel: getOblicActionLabel,
  pricingVerificationNote:
    'Sources checked September 4, 2026. Official prices conflict; the current payable offer remains unverified. Confirm the subscription and optional services before purchase.',
  verificationDate: getOblicVerificationDate,
  schemaDate: '2026-09-04',
  idealUser:
    'A local service business evaluating directory-based discovery alongside automated call answering and appointment handling.',
  pricingModel:
    'Free listing plus paid receptionist; official subscription prices conflict. Confirm the offer before purchase.',
  summary: [
    {
      label: 'Best for',
      text: 'Local service teams that want discovery, business answers, and receptionist workflows connected to one maintained listing.',
    },
    {
      label: 'Consider if',
      text: 'You can review the business knowledge, define human escalation, and validate the actual booking workflow before forwarding calls.',
    },
    {
      label: 'Look elsewhere if',
      text: 'Enterprise routing, workforce management, or text-first support operations are the primary requirement.',
    },
    {
      label: 'Main strength',
      text: 'A distinct free directory-assistant entry point, with a paid path toward phone and appointment handling.',
    },
    { label: 'Main limitation', text: getOblicPricingCaveat },
  ],
  fit: [
    'Salons, wellness practices, pet-service businesses, and similar local operators evaluating a business-information and booking front desk.',
    'Teams willing to maintain their listing and confirm the receptionist’s handoff and calendar boundaries.',
    'Owners who want to assess the free directory experience before deciding whether the paid phone workflow is appropriate.',
  ],
  notFit: [
    'Buyers requiring documented enterprise contact-center controls or a broad help desk as the core system.',
    'Businesses unwilling to resolve subscription terms or test exceptions before activating call forwarding.',
    'Sensitive or emergency workflows without separately approved data handling and escalation arrangements.',
  ],
  pricing: [
    {
      plan: 'Directory listing and listing assistant',
      basis: 'Free according to GetOblic',
      allowance: 'Public listing and listing-based voice assistance',
      note: 'Not equivalent to the paid call-handling and full scheduling workflow.',
    },
    {
      plan: 'Paid AI receptionist',
      basis: 'Current payable price requires confirmation',
      allowance: 'GetOblic advertises unlimited calls/minutes',
      note: getOblicPricingCaveat,
    },
    {
      plan: 'WhatsApp option',
      basis: 'FAQ: $49/month or $36/month with annual billing',
      allowance: 'Separately activated with the AI receptionist',
      note: 'Treat as a paid add-on, not universally included. Confirm channel setup, any other charges, currency, and annual terms alongside the main subscription.',
    },
  ],
  capabilities: [
    {
      title: 'Listing-led voice assistance',
      description:
        'The free entry point is a directory listing with an assistant; it is not a promise of free telephone receptionist service.',
    },
    {
      title: 'Paid call and appointment workflows',
      description:
        'GetOblic documents a virtual number, forwarding, lead capture, and calendar actions for its paid receptionist. Validate the exact configuration.',
    },
    {
      title: 'Website and messaging access',
      description:
        'Provider materials describe website voice access and a separately activated WhatsApp option. Inclusion and integration scope require confirmation.',
    },
  ],
  sections: [
    {
      id: 'product-model',
      code: 'M1',
      title: 'What GetOblic is—and what the free listing does not buy',
      description:
        'Separate discovery from paid reception before comparing tools.',
      paragraphs: [
        'Provider facts: GetOblic’s Media Kit describes a freemium directory with a listing voice assistant and a separate paid AI receptionist. Its stated audience is local businesses and SMBs, including salons, barbers, wellness providers, and pet services. The paid layer handles phone interactions rather than merely adding another directory entry.',
        'Racklio analysis: the distinctive buying question is whether maintaining a public business profile and connecting it to receptionist workflows solves a real operational need. A listing is not evidence of customer demand, and directory exposure does not establish lead volume. Assess the assistant on your own business questions rather than assuming visibility will become revenue.',
      ],
      evidence:
        'Official product page and Media Kit; provider positioning, not independent usage or conversion evidence.',
    },
    {
      id: 'calls-and-handoff',
      code: 'C1',
      title: 'Call answering needs a clear human boundary',
      description:
        'Around-the-clock availability is a provider claim, not an uptime guarantee.',
      paragraphs: [
        'According to GetOblic’s partner and product materials, the paid service can answer business questions, capture leads, and use a dedicated virtual line. GetOblic promotes 24/7 answering. The FAQ describes forwarding an existing number and routing requests toward a human; confirm local number availability, carrier forwarding charges, and the precise fallback configuration.',
        'Racklio analysis: define what the assistant must never decide. Test a routine enquiry, an unclear request, an unavailable staff member, and an urgent caller. Decide who receives a lead, how quickly a human must respond, and what happens when transfer fails. Racklio has not measured GetOblic’s voice quality, latency, reliability, or resolution rate.',
      ],
      evidence:
        'Official product, partner, and FAQ descriptions. No independent call benchmark was performed.',
    },
    {
      id: 'booking-and-channels',
      code: 'B1',
      title: 'Verify booking, website voice, and WhatsApp separately',
      description:
        'A captured appointment request is not necessarily a confirmed calendar booking.',
      paragraphs: [
        'Provider facts: the FAQ distinguishes listing enquiries from paid scheduling. It describes booking, changing, and cancelling appointments with a dedicated calendar, plus website access. Named third-party calendar compatibility, synchronization direction, and exceptions must be confirmed rather than inferred from the word “calendar.”',
        'The WhatsApp product page presents a business-management experience inside WhatsApp, while the FAQ also describes customer-facing assistant interactions and a paid WhatsApp option. Ask which of these workflows the quoted configuration supplies. Do not assume one WhatsApp connection provides a complete shared inbox or every messaging feature.',
        'Racklio analysis: ask for a demonstration of the exact calendar and channel you use. Include unavailable slots, rescheduling, cancellation rules, duplicate requests, and a human takeover. If Google Calendar synchronization and a minute-based receptionist are central requirements, compare the documented RingOperator workflow rather than assuming interchangeable integrations.',
      ],
      evidence:
        'GetOblic FAQ and WhatsApp Experience; channel descriptions are not a verified integration test.',
      contextualLink: {
        title: 'Compare GetOblic and RingOperator’s booking models',
        href: '/comparisons/getoblic-vs-ringoperator',
      },
    },
    {
      id: 'subscription-check',
      code: 'P1',
      title: 'GetOblic pricing: resolve the conflicting offer first',
      description:
        'There is not enough consistent public evidence to declare one paid price authoritative.',
      paragraphs: [
        getOblicPricingCaveat,
        'Verification on September 4, 2026 found both prices still published. Automated access to the public listing-signup destination was challenged by Cloudflare, so Racklio could not inspect a final payable offer. The FAQ’s annual figure is a monthly equivalent under annual billing, not a confirmed month-to-month price. Confirm currency, taxes, renewal, refund treatment, and optional services in writing.',
        'GetOblic advertises unlimited calls and minutes. Treat that as the provider’s plan description, not proof of unlimited concurrency or permission for every use case. Ask about supported traffic, fair-use conditions, number coverage, and optional channel charges. Do not base a cost comparison on the $59 headline or an assumed all-inclusive annual offer.',
        'The terms state that cancellation takes effect for the next billing cycle. Public pages also advertise a 30-day money-back guarantee. Before prepaying annually, confirm how that guarantee and cancellation interact with the specific order; “cancel anytime” alone does not establish a prorated refund.',
      ],
      evidence:
        'FAQ versus partner page and terms; price conflict unresolved as of September 4, 2026. No discount or savings recommendation is made.',
    },
    {
      id: 'setup-and-governance',
      code: 'S1',
      title: 'Setup starts with accurate business knowledge',
      description:
        'Treat claimed listings and generated answers as an operational responsibility.',
      paragraphs: [
        'Provider facts: GetOblic’s terms say that unclaimed or newly created listing demos can use pre-filled public information and automated assumptions. Owners must review and maintain that information. The FAQ describes assisted setup and manual review of listing edits; neither is evidence of a guaranteed launch time for a particular business.',
        'Racklio analysis: confirm hours, services, prices, service area, cancellation policy, and escalation contacts before enabling customer calls. Keep an owner for subsequent changes and a way to check the answers after edits. A plausible demo response should not be treated as a verified statement about your business.',
        'The privacy policy describes purpose-dependent retention and possible processing in the United States and other jurisdictions. It does not by itself settle your requirements for call data, access control, deletion, consent, or regulated information. Obtain the relevant contractual and technical answers before sending sensitive customer conversations through the service.',
      ],
      evidence:
        'GetOblic terms and privacy policy. These checks are buying guidance, not a compliance certification.',
    },
    {
      id: 'buyer-verdict',
      code: 'D1',
      title: 'Racklio’s decision: shortlist the workflow, verify the contract',
      description:
        'Choose by the job you need done—not the affiliate relationship.',
      paragraphs: [
        'GetOblic merits evaluation when a local-business listing, voice answers, and a paid receptionist are useful parts of the same customer journey. Start with accurate business information, then evaluate the paid call and appointment path against a written checklist. Its free entry point can support that evaluation; it does not demonstrate paid-service performance.',
        'Choose a different path when team telephony, enterprise routing, or text-based case management dominates the requirement. Keep price-based recommendations on hold until GetOblic confirms the current offer. Both GetOblic and RingOperator have Racklio affiliate relationships; this is a conditional editorial assessment with no numeric score or paid placement.',
      ],
      contextualLink: {
        title: 'Explore other Business Phone & Voice AI research',
        href: '/categories/business-phone-voice-ai',
      },
    },
  ],
  strengths: [
    'A free listing-based entry point distinct from the paid receptionist.',
    'Local-service orientation spanning discovery and customer enquiries.',
    'Documented paid phone, booking, and website paths to evaluate together.',
  ],
  limitations: [
    'Conflicting official subscription prices prevent a settled cost recommendation.',
    'Named integrations, number coverage, channel inclusion, and handoff details need configuration-level confirmation.',
    'No Racklio evidence of measured voice quality, uptime, or customer outcomes.',
  ],
  alternatives: [
    {
      title: 'RingOperator',
      description:
        'Evaluate a minute-bundle receptionist with explicitly listed Google Calendar and booking features; use the comparison to assess the different operating model.',
      href: '/reviews/ringoperator',
    },
    {
      title: 'AI-Receptionist.com',
      description:
        'Another focused voice-agent path to evaluate through its plan limits, knowledge model, and required transfer workflow.',
      href: '/reviews/ai-receptionist',
    },
    {
      title: 'CallHippo',
      description:
        'Investigate when the purchase is broader team calling and phone operations rather than a directory-led receptionist.',
      href: '/reviews/callhippo',
    },
  ],
  relatedComparisons: [
    {
      title: 'GetOblic vs RingOperator',
      href: '/comparisons/getoblic-vs-ringoperator',
    },
  ],
  scenarios: [
    {
      scenario: 'Local operator wants a listing plus routine business answers',
      fit: 'Evaluate the free layer',
      why: 'Verify the information and enquiry path before assuming paid phone features are included.',
    },
    {
      scenario: 'Appointments and missed-call handling are the main job',
      fit: 'Shortlist the paid workflow',
      why: 'Demonstrate booking, rescheduling, transfer, and human follow-up against your actual operating rules.',
    },
    {
      scenario: 'Buyer needs a confidently fixed annual budget today',
      fit: 'Resolve the quote first',
      why: 'The published prices conflict; the annual commitment and optional charges need confirmation.',
    },
    {
      scenario: 'Complex enterprise support or sensitive conversations',
      fit: 'Verify specialist requirements or look elsewhere',
      why: 'A local-business receptionist description is not evidence of enterprise controls or regulated-workflow suitability.',
    },
  ],
  faqs: [
    {
      question: 'Is GetOblic free?',
      answer:
        'GetOblic describes the directory listing and listing assistant as free. The telephone receptionist and advanced scheduling are paid; do not equate the two layers.',
    },
    { question: 'How much does GetOblic cost?', answer: getOblicPricingCaveat },
    {
      question: 'Does GetOblic include unlimited calls?',
      answer:
        'GetOblic advertises unlimited calls and minutes for its paid receptionist. Racklio has not independently validated capacity or fair-use conditions; confirm the terms and optional charges for your configuration.',
    },
    {
      question: 'Can GetOblic replace a human receptionist?',
      answer:
        'Treat it as a scoped automation workflow. Determine which questions, booking actions, and leads it can handle, and retain an accountable human path for exceptions. Racklio has not tested replacement outcomes.',
    },
    {
      question: 'Has Racklio tested GetOblic?',
      answer:
        'No. This assessment uses official sources and identifies unanswered buying questions. It does not claim hands-on testing, a rating, or verified business results.',
    },
  ],
  sources: getOblicSources,
};

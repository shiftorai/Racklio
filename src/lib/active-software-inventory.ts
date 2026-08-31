export const activeProducts = [
  { name: 'Typewise', slug: 'typewise', territory: 'ai-customer-support' },
  {
    name: 'KrispCall',
    slug: 'krispcall',
    territory: 'business-phone-voice-ai',
  },
  { name: 'Tidio', slug: 'tidio', territory: 'ai-customer-support' },
  { name: 'Gorgias', slug: 'gorgias', territory: 'ai-customer-support' },
  { name: 'EngageBay', slug: 'engagebay', territory: 'customer-engagement' },
  { name: 'EazyChat.io', slug: 'eazychat', territory: 'ai-customer-support' },
  { name: 'Aircall', slug: 'aircall', territory: 'business-phone-voice-ai' },
  {
    name: 'CallHippo',
    slug: 'callhippo',
    territory: 'business-phone-voice-ai',
  },
  { name: 'Vida.io', slug: 'vida', territory: 'business-phone-voice-ai' },
  {
    name: 'Campaign Monitor',
    slug: 'campaign-monitor',
    territory: 'customer-engagement',
  },
  { name: 'AWeber', slug: 'aweber', territory: 'customer-engagement' },
  { name: 'Pipedrive', slug: 'pipedrive', territory: 'customer-engagement' },
  { name: 'Landbot', slug: 'landbot', territory: 'ai-customer-support' },
  { name: 'Quo', slug: 'quo', territory: 'business-phone-voice-ai' },
  { name: 'Calilio', slug: 'calilio', territory: 'business-phone-voice-ai' },
  {
    name: 'RingOperator',
    slug: 'ringoperator',
    territory: 'business-phone-voice-ai',
  },
  {
    name: 'AI-Receptionist.com',
    slug: 'ai-receptionist',
    territory: 'business-phone-voice-ai',
  },
  { name: 'Help Scout', slug: 'help-scout', territory: 'ai-customer-support' },
  {
    name: 'Capsule CRM',
    slug: 'capsule-crm',
    territory: 'customer-engagement',
  },
] as const;

export const excludedProductSlugs = [
  'ninjaone',
  'bookyourdata',
  'demodesk',
  'claap',
  'fireflies',
  'salesmsg',
  'respond-io',
] as const;

export const activeComparisonPaths = [
  '/comparisons/help-scout-vs-gorgias',
  '/comparisons/capsule-crm-vs-pipedrive',
  '/comparisons/calilio-vs-callhippo',
  '/comparisons/quo-vs-krispcall',
  '/comparisons/landbot-vs-tidio',
  '/comparisons/pipedrive-vs-engagebay',
  '/comparisons/engagebay-vs-hubspot',
  '/comparisons/campaign-monitor-vs-aweber',
  '/comparisons/eazychat-vs-tidio',
  '/comparisons/tidio-vs-gorgias',
  '/comparisons/krispcall-vs-callhippo',
  '/comparisons/krispcall-vs-aircall',
  '/comparisons/ringoperator-vs-callhippo',
  '/comparisons/ai-receptionist-vs-ringoperator',
] as const;

export const activePricingGuidePaths = [
  '/guides/help-scout-pricing',
  '/guides/capsule-crm-pricing',
  '/guides/calilio-pricing',
  '/guides/quo-pricing',
  '/guides/landbot-pricing',
  '/guides/pipedrive-pricing',
  '/guides/aweber-pricing',
  '/guides/campaign-monitor-pricing',
  '/guides/engagebay-pricing',
  '/guides/eazychat-pricing',
  '/guides/vida-pricing',
  '/guides/ringoperator-pricing',
  '/guides/ai-receptionist-pricing',
] as const;

export const activeAlternativesPaths = [
  '/alternatives/help-scout-alternatives',
  '/alternatives/capsule-crm-alternatives',
  '/alternatives/calilio-alternatives',
  '/alternatives/quo-alternatives',
  '/alternatives/landbot-alternatives',
  '/alternatives/pipedrive-alternatives',
  '/alternatives/aweber-alternatives',
  '/alternatives/campaign-monitor-alternatives',
  '/alternatives/engagebay-alternatives',
  '/alternatives/eazychat-alternatives',
  '/alternatives/tidio-alternatives',
  '/alternatives/gorgias-alternatives',
  '/alternatives/vida-alternatives',
  '/alternatives/ringoperator-alternatives',
  '/alternatives/ai-receptionist-alternatives',
] as const;

const activeReviewPaths = new Set(
  activeProducts.map((product) => `/reviews/${product.slug}`),
);
const comparisonPaths = new Set<string>(activeComparisonPaths);
const pricingPaths = new Set<string>(activePricingGuidePaths);
const alternativesPaths = new Set<string>(activeAlternativesPaths);
const activeCategoryPaths = new Set([
  '/categories/ai-customer-support',
  '/categories/business-phone-voice-ai',
  '/categories/crm-customer-engagement',
]);

export function isActiveDiscoveryPath(path: string) {
  const normalized = path.replace(/\/+$/, '') || '/';

  if (normalized.startsWith('/reviews/'))
    return activeReviewPaths.has(normalized);
  if (normalized.startsWith('/comparisons/'))
    return comparisonPaths.has(normalized);
  if (normalized.startsWith('/guides/')) return pricingPaths.has(normalized);
  if (normalized.startsWith('/alternatives/'))
    return alternativesPaths.has(normalized);
  if (normalized.startsWith('/categories/'))
    return activeCategoryPaths.has(normalized);

  return true;
}

export function containsExcludedProductReference(value: string) {
  const normalize = (text: string) =>
    text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();
  const normalized = normalize(value);
  return excludedProductSlugs.some((slug) =>
    normalized.includes(normalize(slug)),
  );
}

export function containsInactiveProductReference(value: string) {
  const normalize = (text: string) =>
    text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();
  const normalized = normalize(value);

  return [...excludedProductSlugs, 'hubspot'].some((slug) =>
    normalized.includes(normalize(slug)),
  );
}

export function getActiveTerritoryLinks(productNames: readonly string[]) {
  const territories = new Set<string>(
    activeProducts
      .filter((product) => productNames.includes(product.name))
      .map((product) => product.territory),
  );

  return [
    {
      territory: 'business-phone-voice-ai',
      title: 'Business Phone & Voice AI',
      href: '/categories/business-phone-voice-ai',
    },
    {
      territory: 'ai-customer-support',
      title: 'AI Customer Support',
      href: '/categories/ai-customer-support',
    },
    {
      territory: 'customer-engagement',
      title: 'Customer Engagement',
      href: '/categories/crm-customer-engagement',
    },
  ].filter((link) => territories.has(link.territory));
}

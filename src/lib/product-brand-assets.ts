const productBrandAssets = {
  Typewise: '/brands/typewise.png',
  KrispCall: '/brands/krispcall.png',
  Tidio: '/brands/tidio.ico',
  'respond.io': '/brands/respond-io.png',
  Gorgias: '/brands/gorgias.png',
  EngageBay: '/brands/engagebay.ico',
  'EazyChat.io': '/brands/eazychat.png',
  Aircall: '/brands/aircall.ico',
  CallHippo: '/brands/callhippo.ico',
  Salesmsg: '/brands/salesmsg.png',
  'Vida.io': '/brands/vida.png',
  Demodesk: '/brands/demodesk.ico',
  Claap: '/brands/claap.png',
  'Fireflies.ai': '/brands/fireflies.ico',
  'Campaign Monitor': '/brands/campaign-monitor.ico',
  AWeber: '/brands/aweber.png',
  Bookyourdata: '/brands/bookyourdata.ico',
  NinjaOne: '/brands/ninjaone.png',
  Pipedrive: '/brands/pipedrive.ico',
  Landbot: '/brands/landbot.ico',
  Calilio: '/brands/calilio.ico',
  'Capsule CRM': '/brands/capsule-crm.png',
  'Help Scout': '/brands/help-scout.svg',
  HubSpot: '/brands/hubspot.png',
  Quo: '/brands/quo.png',
  RingOperator: '/brands/ringoperator.svg',
  'AI-Receptionist.com': '/brands/ai-receptionist.svg',
} as const;

const currentProductBrandNames = new Set(Object.keys(productBrandAssets));

export function getProductBrandAsset(name: string) {
  return productBrandAssets[name as keyof typeof productBrandAssets];
}

export function isCurrentProductBrand(name: string) {
  return currentProductBrandNames.has(name);
}

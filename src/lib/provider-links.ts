export type CoreProvider =
  | 'liquidWeb'
  | 'kinsta'
  | 'wpEngine'
  | 'rocketNet'
  | 'pressable'
  | 'typewise'
  | 'krispcall'
  | 'tidio'
  | 'respondIo'
  | 'gorgias'
  | 'engageBay'
  | 'eazyChat'
  | 'aircall'
  | 'callHippo'
  | 'salesmsg'
  | 'vida'
  | 'demodesk'
  | 'claap'
  | 'fireflies'
  | 'campaignMonitor'
  | 'aweber'
  | 'bookyourdata'
  | 'ninjaOne'
  | 'pipedrive'
  | 'landbot'
  | 'quo'
  | 'calilio'
  | 'capsuleCrm'
  | 'helpScout';

export const currentSoftwareProviders = [
  'typewise',
  'krispcall',
  'tidio',
  'respondIo',
  'gorgias',
  'engageBay',
  'eazyChat',
  'aircall',
  'callHippo',
  'salesmsg',
  'vida',
  'demodesk',
  'claap',
  'fireflies',
  'campaignMonitor',
  'aweber',
  'bookyourdata',
  'ninjaOne',
  'pipedrive',
  'landbot',
  'quo',
  'calilio',
  'capsuleCrm',
  'helpScout',
] as const satisfies readonly CoreProvider[];

interface ProviderLinkConfig {
  official: string;
  affiliate: string | null;
}

export const providerLinks = {
  liquidWeb: {
    official: 'https://www.liquidweb.com/',
    affiliate: null,
  },
  kinsta: {
    official: 'https://kinsta.com/',
    affiliate: null,
  },
  wpEngine: {
    official: 'https://wpengine.com/',
    affiliate: null,
  },
  rocketNet: {
    official: 'https://rocket.net/',
    affiliate: null,
  },
  pressable: {
    official: 'https://pressable.com/',
    affiliate: null,
  },
  typewise: { official: 'https://www.typewise.app/', affiliate: null },
  krispcall: { official: 'https://krispcall.com/', affiliate: null },
  tidio: { official: 'https://www.tidio.com/', affiliate: null },
  respondIo: { official: 'https://respond.io/', affiliate: null },
  gorgias: { official: 'https://www.gorgias.com/', affiliate: null },
  engageBay: {
    official: 'https://www.engagebay.com/',
    affiliate:
      'https://www.awin1.com/cread.php?awinmid=127075&awinaffid=3032289&ued=https%3A%2F%2Fwww.engagebay.com%2F',
  },
  eazyChat: {
    official: 'https://eazychat.io/',
    affiliate:
      'http://www.awin1.com/cread.php?awinmid=127785&awinaffid=3032289',
  },
  aircall: { official: 'https://aircall.io/', affiliate: null },
  callHippo: {
    official: 'https://callhippo.com/',
    affiliate: 'https://join.callhippo.com/jq1tp40dwnka',
  },
  salesmsg: { official: 'https://www.salesmessage.com/', affiliate: null },
  vida: { official: 'https://vida.io/', affiliate: null },
  demodesk: { official: 'https://demodesk.com/', affiliate: null },
  claap: { official: 'https://www.claap.io/', affiliate: null },
  fireflies: {
    official: 'https://fireflies.ai/',
    affiliate: 'https://fireflies.ai/?fpr=racklio',
  },
  campaignMonitor: {
    official: 'https://www.campaignmonitor.com/',
    affiliate: null,
  },
  aweber: { official: 'https://www.aweber.com/', affiliate: null },
  bookyourdata: { official: 'https://www.bookyourdata.com/', affiliate: null },
  ninjaOne: { official: 'https://www.ninjaone.com/', affiliate: null },
  pipedrive: { official: 'https://www.pipedrive.com/', affiliate: null },
  landbot: { official: 'https://landbot.io/', affiliate: null },
  quo: { official: 'https://www.quo.com/', affiliate: null },
  calilio: { official: 'https://www.calilio.com/', affiliate: null },
  capsuleCrm: { official: 'https://capsulecrm.com/', affiliate: null },
  helpScout: { official: 'https://www.helpscout.com/', affiliate: null },
} as const satisfies Record<CoreProvider, ProviderLinkConfig>;

export function getProviderUrl(provider: CoreProvider): string {
  const link = providerLinks[provider];
  return link.affiliate ?? link.official;
}

export function getExternalLinkRel(
  href: string,
  requestedRel: string | undefined,
  opensNewTab: boolean,
): string | undefined {
  const provider = Object.values(providerLinks).find(
    (link) => href === link.official || href === link.affiliate,
  );

  if (provider) {
    return provider.affiliate === href
      ? 'sponsored noopener noreferrer'
      : opensNewTab
        ? 'noopener noreferrer'
        : undefined;
  }

  if (requestedRel?.split(/\s+/).includes('sponsored')) {
    return opensNewTab ? 'noopener noreferrer' : undefined;
  }

  return opensNewTab ? (requestedRel ?? 'noopener noreferrer') : requestedRel;
}

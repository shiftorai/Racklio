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
  | 'gorgias';

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
      ? 'sponsored nofollow noopener'
      : opensNewTab
        ? 'noopener noreferrer'
        : undefined;
  }

  if (requestedRel?.split(/\s+/).includes('sponsored')) {
    return opensNewTab ? 'noopener noreferrer' : undefined;
  }

  return opensNewTab ? (requestedRel ?? 'noopener noreferrer') : requestedRel;
}

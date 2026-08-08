import { RacklioLogo, RACKLIO_TAGLINE } from '@/components/brand';
import { Link } from '@/components/ui';

import { Footer } from './footer';

const footerLinks = [
  ['Reviews', '/#research'],
  ['Comparisons', '/#comparisons'],
  ['Buying Guides', '/guides'],
  ['About', '/#about'],
  ['Contact', '/contact'],
  ['Privacy', '/privacy'],
  ['Terms', '/terms'],
  ['Affiliate Disclosure', '/affiliate-disclosure'],
] as const;

export function SiteFooter() {
  return (
    <Footer
      brand={<RacklioLogo tone="dark" />}
      legal={
        <>
          {RACKLIO_TAGLINE}
          <br />
          A brand of Keleva LLC
          <br />© {new Date().getFullYear()} Keleva LLC
        </>
      }
      tone="dark"
    >
      {footerLinks.map(([label, href]) => (
        <Link
          className="text-slate-300 hover:text-white"
          href={href}
          key={label}
          variant="unstyled"
        >
          {label}
        </Link>
      ))}
    </Footer>
  );
}

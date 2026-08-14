import { RacklioLogo, RACKLIO_TAGLINE } from '@/components/brand';
import { Link } from '@/components/ui';

import { Footer } from './footer';

const groups = [
  {
    title: 'Explore',
    links: [
      ['Categories', '/#categories'],
      ['Reviews', '/#reviews'],
      ['Comparisons', '/#comparisons'],
      ['Best Software', '/#best'],
      ['Guides', '/guides'],
    ],
  },
  {
    title: 'Research',
    links: [
      ['Methodology', '/#methodology'],
      ['Editorial Standards', '/editorial-standards'],
      ['Affiliate Disclosure', '/affiliate-disclosure'],
    ],
  },
  {
    title: 'Racklio',
    links: [
      ['About', '/about'],
      ['Contact', '/contact'],
      ['Privacy', '/privacy'],
      ['Terms', '/terms'],
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <Footer
      brand={<RacklioLogo tone="dark" />}
      legal={
        <>
          Racklio &mdash; {RACKLIO_TAGLINE}
          <br />
          Independent software research operated by Keleva LLC.
          <br />
          &copy; {new Date().getFullYear()} Keleva LLC
        </>
      }
      tone="dark"
    >
      {groups.map((group) => (
        <div key={group.title}>
          <h2 className="text-xs font-semibold tracking-[0.14em] text-white uppercase">
            {group.title}
          </h2>
          <ul className="mt-4 grid gap-3">
            {group.links.map(([label, href]) => (
              <li key={label}>
                <Link
                  className="text-slate-300 hover:text-white"
                  href={href}
                  variant="unstyled"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Footer>
  );
}

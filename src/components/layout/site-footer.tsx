import { RacklioLogo } from '@/components/brand';
import { PreferredSourceCTA } from '@/components/editorial';
import { Link } from '@/components/ui';

import { Footer } from './footer';

const groups = [
  {
    title: 'Explore',
    links: [
      ['Reviews', '/#reviews'],
      ['Comparisons', '/#comparisons'],
      ['Pricing Guides', '/guides'],
      ['Alternatives', '/alternatives'],
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
      ['Partner / Media Kit', '/partner-media-kit'],
      ['Contact', '/contact'],
    ],
  },
  {
    title: 'Legal',
    links: [
      ['Privacy', '/privacy'],
      ['Terms', '/terms'],
    ],
  },
] as const;

export function SiteFooter({
  showPreferredSource = true,
}: {
  showPreferredSource?: boolean;
}) {
  return (
    <Footer
      brand={<RacklioLogo tone="dark" />}
      legal={
        <>
          Independent research for customer communication, support, and
          engagement software, operated by Keleva LLC.
          <br />
          &copy; {new Date().getFullYear()} Keleva LLC
        </>
      }
      prelude={
        showPreferredSource ? <PreferredSourceCTA tone="dark" /> : undefined
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
                  className="text-stone-300 hover:text-mint"
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

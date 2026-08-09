import { RacklioLogo } from '@/components/brand';
import { Link } from '@/components/ui';

import { Header } from './header';

export function SiteHeader() {
  return (
    <Header brand={<RacklioLogo />} className="bg-surface">
      <Link href="/reviews" variant="subtle">
        Reviews
      </Link>
      <Link href="/comparisons" variant="subtle">
        Comparisons
      </Link>
      <Link href="/guides" variant="subtle">
        Buying Guides
      </Link>
      <Link href="/#about" variant="subtle">
        About
      </Link>
      <Link
        aria-label="Search Racklio"
        className="grid size-9 place-items-center border border-border"
        href="/search"
        variant="subtle"
      >
        <span aria-hidden="true" className="search-icon" />
      </Link>
    </Header>
  );
}

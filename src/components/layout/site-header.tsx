import { RacklioLogo } from '@/components/brand';
import { Link } from '@/components/ui';

import { Header } from './header';

export function SiteHeader() {
  return (
    <Header brand={<RacklioLogo />} className="bg-surface">
      <Link href="/#reviews" variant="subtle">
        Reviews
      </Link>
      <Link href="/#comparisons" variant="subtle">
        Comparisons
      </Link>
      <Link href="/#best" variant="subtle">
        Best Software
      </Link>
      <Link href="/#categories" variant="subtle">
        Categories
      </Link>
      <Link href="/#methodology" variant="subtle">
        Methodology
      </Link>
    </Header>
  );
}

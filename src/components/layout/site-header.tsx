import { RacklioLogo } from '@/components/brand';
import { Container, Link } from '@/components/ui';

const navigation = [
  ['Categories', '/#categories'],
  ['Reviews', '/#reviews'],
  ['Comparisons', '/#comparisons'],
  ['Methodology', '/#methodology'],
] as const;

function NavigationLinks({ mobile = false }: { mobile?: boolean }) {
  return (
    <>
      {navigation.map(([label, href]) => (
        <Link
          className={
            mobile
              ? 'flex min-h-11 items-center border-b border-border py-2 text-base last:border-b-0'
              : 'inline-flex min-h-10 items-center text-sm'
          }
          href={href}
          key={label}
          variant="subtle"
        >
          {label}
        </Link>
      ))}
    </>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/75 bg-surface/88 shadow-[0_1px_0_rgb(255_255_255/.7)] backdrop-blur-xl">
      <Container size="wide">
        <div className="flex min-h-16 items-center justify-between gap-5 lg:min-h-14">
          <Link
            aria-label="Racklio home"
            className="shrink-0"
            href="/"
            variant="unstyled"
          >
            <RacklioLogo />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-6 lg:flex"
          >
            <NavigationLinks />
          </nav>

          <Link
            aria-label="Search Racklio"
            className="hidden size-10 items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground lg:inline-flex"
            href="/#software-search"
            variant="unstyled"
          >
            <span aria-hidden="true" className="search-icon" />
          </Link>

          <details className="group relative lg:hidden">
            <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-md border border-border bg-surface-raised px-3 text-sm font-semibold marker:content-none">
              Menu
              <span
                aria-hidden="true"
                className="grid gap-1 group-open:[&>span:first-child]:translate-y-[5px] group-open:[&>span:first-child]:rotate-45 group-open:[&>span:last-child]:-translate-y-[5px] group-open:[&>span:last-child]:-rotate-45"
              >
                <span className="h-px w-4 bg-current transition-transform" />
                <span className="h-px w-4 bg-current group-open:opacity-0" />
                <span className="h-px w-4 bg-current transition-transform" />
              </span>
            </summary>
            <div className="absolute top-[calc(100%+0.5rem)] right-0 w-[min(19rem,calc(100vw-2.5rem))] rounded-xl border border-border bg-surface-raised p-4 shadow-panel">
              <nav aria-label="Mobile primary" className="grid">
                <NavigationLinks mobile />
              </nav>
              <div className="mt-4">
                <Link
                  aria-label="Search Racklio"
                  className="inline-flex size-11 items-center justify-center rounded-md border border-border"
                  href="/#software-search"
                  variant="unstyled"
                >
                  <span aria-hidden="true" className="search-icon" />
                </Link>
              </div>
            </div>
          </details>
        </div>
      </Container>
    </header>
  );
}

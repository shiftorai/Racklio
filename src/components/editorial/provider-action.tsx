import { ButtonLink, Link } from '@/components/ui';

export function ProviderAction({
  actionLabel,
  affiliate,
  fit,
  href,
  name,
  secondaryHref,
  secondaryLabel,
  variant = 'default',
  watchOut,
}: {
  actionLabel?: string;
  affiliate: boolean;
  fit?: string;
  href: string;
  name: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  variant?: 'compact' | 'default';
  watchOut?: string;
}) {
  if (variant === 'compact') {
    return (
      <div className="min-w-0 max-w-full">
        <p className="text-sm font-semibold">If this fits your team:</p>
        <div className="mt-2.5 flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center">
          <ButtonLink
            className="w-full sm:w-auto"
            data-cta-kind="provider-action-early"
            href={href}
            rel={
              affiliate
                ? 'sponsored noopener noreferrer'
                : 'noopener noreferrer'
            }
            target="_blank"
          >
            {actionLabel ?? `See ${name} plans`}{' '}
            <span aria-hidden="true">↗</span>
          </ButtonLink>
          {secondaryHref && secondaryLabel ? (
            <Link
              className="inline-flex min-h-10 items-center justify-center text-sm sm:justify-start"
              href={secondaryHref}
              variant="subtle"
            >
              {secondaryLabel} →
            </Link>
          ) : null}
        </div>
        <p className="mt-2.5 break-words text-xs leading-5 text-muted-foreground">
          {affiliate
            ? 'Affiliate link. Racklio may earn a commission at no additional cost to you; this does not influence the review.'
            : 'Opens the provider’s official website. Confirm current plans and terms before purchase.'}
        </p>
      </div>
    );
  }

  return (
    <aside className="provider-action min-w-0 max-w-full rounded-[1.75rem] border border-brand/20 bg-surface-mint/55 p-6 sm:p-7">
      <p className="section-eyebrow text-mint-deep">Next step</p>
      <div className="mt-4 grid min-w-0 gap-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
        <div className="min-w-0">
          <h3 className="break-words text-xl font-semibold tracking-[-0.03em]">
            Check {name} against your team’s requirements.
          </h3>
          {fit ? (
            <p className="mt-3 break-words text-sm leading-6 text-muted-foreground">
              <strong className="text-foreground">Best fit:</strong> {fit}
            </p>
          ) : null}
          {watchOut ? (
            <p className="mt-2 break-words text-sm leading-6 text-muted-foreground">
              <strong className="text-foreground">Watch out:</strong> {watchOut}
            </p>
          ) : null}
        </div>
        <div className="flex min-w-0 flex-wrap gap-3 md:justify-end">
          <ButtonLink
            data-cta-kind="provider-action"
            href={href}
            rel={
              affiliate
                ? 'sponsored noopener noreferrer'
                : 'noopener noreferrer'
            }
            target="_blank"
          >
            {actionLabel ?? `See ${name} plans`}{' '}
            <span aria-hidden="true">↗</span>
          </ButtonLink>
          {secondaryHref && secondaryLabel ? (
            <Link
              className="inline-flex min-h-10 items-center text-sm"
              href={secondaryHref}
              variant="subtle"
            >
              {secondaryLabel} →
            </Link>
          ) : null}
        </div>
      </div>
      <p className="mt-4 break-words text-xs leading-5 text-muted-foreground">
        {affiliate
          ? 'Affiliate disclosure: Racklio may earn a commission if you use this link, at no additional cost to you. This does not influence the editorial conclusion.'
          : 'This opens the provider’s official website. Confirm current pricing, eligibility, and terms there before purchase.'}
      </p>
    </aside>
  );
}

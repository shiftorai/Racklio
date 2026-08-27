import { ButtonLink } from '@/components/ui';
import { cn } from '@/lib/cn';

const preferredSourceUrl =
  'https://google.com/preferences/source?q=racklio.com';

type PreferredSourceCTAProps = {
  tone?: 'light' | 'dark';
};

export function PreferredSourceCTA({
  tone = 'light',
}: PreferredSourceCTAProps) {
  return (
    <aside
      aria-label="Google Preferred Sources"
      className={cn(
        'min-w-0 max-w-full rounded-2xl border p-5 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-6',
        tone === 'dark'
          ? 'border-white/15 bg-white/[0.04] text-white'
          : 'border-brand/15 bg-surface-subtle text-foreground',
      )}
    >
      <div className="min-w-0 max-w-2xl">
        <h2 className="break-words text-lg font-semibold tracking-[-0.025em]">
          Prefer Racklio in Google
        </h2>
        <p
          className={cn(
            'mt-2 break-words text-sm leading-6',
            tone === 'dark' ? 'text-stone-300' : 'text-muted-foreground',
          )}
        >
          Use Google&apos;s Preferred Sources feature to prioritize Racklio
          where supported.
        </p>
      </div>
      <ButtonLink
        className="mt-4 w-full whitespace-normal text-center sm:mt-0 sm:w-auto sm:shrink-0"
        href={preferredSourceUrl}
        rel="noopener noreferrer"
        target="_blank"
        variant={tone === 'dark' ? 'secondary' : 'primary'}
      >
        Add Racklio as a preferred source
      </ButtonLink>
    </aside>
  );
}

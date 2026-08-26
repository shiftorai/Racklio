import type { ReactNode } from 'react';

export interface EvidenceNoteProps {
  children: ReactNode;
  label?: string;
}

export function EvidenceNote({
  children,
  label = 'Evidence note',
}: EvidenceNoteProps) {
  return (
    <aside className="min-w-0 max-w-full border-l-2 border-accent bg-muted px-5 py-4">
      <p className="text-[0.6875rem] font-semibold tracking-[0.14em] text-accent-strong uppercase">
        {label}
      </p>
      <div className="mt-2 min-w-0 break-words text-sm leading-6 text-muted-foreground">
        {children}
      </div>
    </aside>
  );
}

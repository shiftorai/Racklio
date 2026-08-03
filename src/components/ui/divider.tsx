import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/cn';

export function Divider({
  className,
  ...props
}: HTMLAttributes<HTMLHRElement>) {
  return (
    <hr
      className={cn('m-0 w-full border-0 border-t border-border', className)}
      {...props}
    />
  );
}

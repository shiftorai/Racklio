import type { RacklioLogoProps } from './racklio-logo';
import { RacklioLogo } from './racklio-logo';

export type RacklioWordmarkProps = Omit<RacklioLogoProps, 'variant'>;

export function RacklioWordmark({ ...props }: RacklioWordmarkProps) {
  return <RacklioLogo variant="full" {...props} />;
}

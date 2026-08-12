import { SoftwareComparisonTemplate } from '@/components/comparisons/software-comparison-template';
import { krispcallVsAircall } from './customer-service-comparison-data';
export function KrispCallVsAircall() {
  return <SoftwareComparisonTemplate data={krispcallVsAircall} />;
}

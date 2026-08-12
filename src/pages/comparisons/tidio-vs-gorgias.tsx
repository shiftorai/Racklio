import { SoftwareComparisonTemplate } from '@/components/comparisons/software-comparison-template';
import { tidioVsGorgias } from './customer-service-comparison-data';
export function TidioVsGorgias() {
  return <SoftwareComparisonTemplate data={tidioVsGorgias} />;
}

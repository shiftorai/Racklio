import { SoftwareComparisonTemplate } from '@/components/comparisons/software-comparison-template';
import { respondIoVsTidio } from './customer-service-comparison-data';
export function RespondIoVsTidio() {
  return <SoftwareComparisonTemplate data={respondIoVsTidio} />;
}

import { CommercialPageTemplate } from '@/components/commercial';
import { pipedrivePricingData } from '@/pages/commercial/pipedrive-commercial-data';

export function PipedrivePricing() {
  return <CommercialPageTemplate data={pipedrivePricingData} />;
}

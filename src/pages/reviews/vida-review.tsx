import { SoftwareReviewTemplate } from '@/components/reviews/software-review-template';

import { vidaData } from './customer-service-review-data';

export function VidaReview() {
  return <SoftwareReviewTemplate data={vidaData} />;
}

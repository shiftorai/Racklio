import { SoftwareReviewTemplate } from '@/components/reviews/software-review-template';

import { aweberData } from './customer-service-review-data';

export function AWeberReview() {
  return <SoftwareReviewTemplate data={aweberData} />;
}

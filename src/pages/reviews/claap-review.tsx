import { SoftwareReviewTemplate } from '@/components/reviews/software-review-template';

import { claapData } from './customer-service-review-data';

export function ClaapReview() {
  return <SoftwareReviewTemplate data={claapData} />;
}

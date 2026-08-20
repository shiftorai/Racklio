import { SoftwareReviewTemplate } from '@/components/reviews/software-review-template';

import { demodeskData } from './customer-service-review-data';

export function DemodeskReview() {
  return <SoftwareReviewTemplate data={demodeskData} />;
}

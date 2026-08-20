import { SoftwareReviewTemplate } from '@/components/reviews/software-review-template';

import { salesmsgData } from './customer-service-review-data';

export function SalesmsgReview() {
  return <SoftwareReviewTemplate data={salesmsgData} />;
}

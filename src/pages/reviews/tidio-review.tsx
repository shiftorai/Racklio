import { SoftwareReviewTemplate } from '@/components/reviews/software-review-template';
import { tidioData } from './customer-service-review-data';
export function TidioReview() {
  return <SoftwareReviewTemplate data={tidioData} />;
}

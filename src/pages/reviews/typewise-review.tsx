import { SoftwareReviewTemplate } from '@/components/reviews/software-review-template';
import { typewiseData } from './customer-service-review-data';
export function TypewiseReview() {
  return <SoftwareReviewTemplate data={typewiseData} />;
}

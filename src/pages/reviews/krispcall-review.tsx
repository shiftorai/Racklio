import { SoftwareReviewTemplate } from '@/components/reviews/software-review-template';
import { krispcallData } from './customer-service-review-data';
export function KrispCallReview() {
  return <SoftwareReviewTemplate data={krispcallData} />;
}

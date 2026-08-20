import { SoftwareReviewTemplate } from '@/components/reviews/software-review-template';
import { ninjaOneData } from './customer-service-review-data';
export function NinjaOneReview() {
  return <SoftwareReviewTemplate data={ninjaOneData} />;
}

import { SoftwareReviewTemplate } from '@/components/reviews/software-review-template';
import { respondIoData } from './customer-service-review-data';
export function RespondIoReview() {
  return <SoftwareReviewTemplate data={respondIoData} />;
}

import { SoftwareReviewTemplate } from '@/components/reviews/software-review-template';
import { quoReviewData } from '@/pages/commercial/quo-commercial-data';

export function QuoReview() {
  return <SoftwareReviewTemplate data={quoReviewData} />;
}

import { SoftwareReviewTemplate } from '@/components/reviews/software-review-template';
import { calilioReviewData } from '@/pages/commercial/calilio-commercial-data';
export function CalilioReview() {
  return <SoftwareReviewTemplate data={calilioReviewData} />;
}

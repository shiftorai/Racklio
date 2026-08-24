import { SoftwareReviewTemplate } from '@/components/reviews/software-review-template';
import { capsuleCrmReviewData } from '@/pages/commercial/capsule-crm-commercial-data';

export function CapsuleCrmReview() {
  return <SoftwareReviewTemplate data={capsuleCrmReviewData} />;
}

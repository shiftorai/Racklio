import { SoftwareReviewTemplate } from '@/components/reviews/software-review-template';
import { aiReceptionistReviewData } from '@/pages/commercial/ai-receptionist-commercial-data';

export function AiReceptionistReview() {
  return <SoftwareReviewTemplate data={aiReceptionistReviewData} />;
}

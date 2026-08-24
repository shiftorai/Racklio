import { SoftwareReviewTemplate } from '@/components/reviews/software-review-template';
import { landbotReviewData } from '@/pages/commercial/landbot-commercial-data';

export function LandbotReview() {
  return <SoftwareReviewTemplate data={landbotReviewData} />;
}

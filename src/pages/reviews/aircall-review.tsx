import { SoftwareReviewTemplate } from '@/components/reviews/software-review-template';
import { aircallReviewData } from '@/pages/commercial/aircall-review-data';

export function AircallReview() {
  return <SoftwareReviewTemplate data={aircallReviewData} />;
}

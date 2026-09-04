import { SoftwareReviewTemplate } from '@/components/reviews/software-review-template';
import { getOblicReviewData } from '@/pages/commercial/getoblic-commercial-data';

export function GetOblicReview() {
  return <SoftwareReviewTemplate data={getOblicReviewData} />;
}

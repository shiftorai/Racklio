import { SoftwareReviewTemplate } from '@/components/reviews/software-review-template';
import { pipedriveReviewData } from '@/pages/commercial/pipedrive-commercial-data';

export function PipedriveReview() {
  return <SoftwareReviewTemplate data={pipedriveReviewData} />;
}

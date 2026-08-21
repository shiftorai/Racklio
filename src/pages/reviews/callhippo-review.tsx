import { SoftwareReviewTemplate } from '@/components/reviews/software-review-template';
import { callHippoData } from './customer-service-review-data';

export function CallHippoReview() {
  return <SoftwareReviewTemplate data={callHippoData} />;
}

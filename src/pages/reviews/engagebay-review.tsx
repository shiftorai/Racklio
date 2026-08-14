import { SoftwareReviewTemplate } from '@/components/reviews';
import { engageBayData } from './priority-review-data';

export function EngageBayReview() {
  return <SoftwareReviewTemplate data={engageBayData} />;
}

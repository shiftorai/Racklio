import { SoftwareReviewTemplate } from '@/components/reviews';
import { eazyChatData } from './priority-review-data';

export function EazyChatReview() {
  return <SoftwareReviewTemplate data={eazyChatData} />;
}

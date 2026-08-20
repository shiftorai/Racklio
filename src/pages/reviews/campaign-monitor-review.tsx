import { SoftwareReviewTemplate } from '@/components/reviews/software-review-template';

import { campaignMonitorData } from './customer-service-review-data';

export function CampaignMonitorReview() {
  return <SoftwareReviewTemplate data={campaignMonitorData} />;
}

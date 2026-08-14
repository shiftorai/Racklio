import { SoftwareComparisonTemplate } from '@/components/comparisons/software-comparison-template';
import { engageBayVsHubSpotData } from '@/pages/commercial/commercial-comparison-data';

export function EngageBayVsHubSpot() {
  return <SoftwareComparisonTemplate data={engageBayVsHubSpotData} />;
}

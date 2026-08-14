import { CategoryPageTemplate } from '@/components/categories';

import { getSoftwareCategory } from './category-data';

export function BusinessPhoneVoiceAiCategory() {
  return (
    <CategoryPageTemplate
      data={getSoftwareCategory('business-phone-voice-ai')}
    />
  );
}

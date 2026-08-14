import { CategoryPageTemplate } from '@/components/categories';

import { getSoftwareCategory } from './category-data';

export function LiveChatMessagingCategory() {
  return (
    <CategoryPageTemplate data={getSoftwareCategory('live-chat-messaging')} />
  );
}

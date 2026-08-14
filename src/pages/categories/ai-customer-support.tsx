import { CategoryPageTemplate } from '@/components/categories';

import { getSoftwareCategory } from './category-data';

export function AiCustomerSupportCategory() {
  return (
    <CategoryPageTemplate data={getSoftwareCategory('ai-customer-support')} />
  );
}

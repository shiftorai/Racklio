import { CategoryPageTemplate } from '@/components/categories';

import { getSoftwareCategory } from './category-data';

export function CrmCustomerEngagementCategory() {
  return (
    <CategoryPageTemplate
      data={getSoftwareCategory('crm-customer-engagement')}
    />
  );
}

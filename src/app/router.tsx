import { createBrowserRouter } from 'react-router';

import { AppLayout } from '@/components/layout/app-layout';
import { RouteError } from '@/components/routing/route-error';
import { Foundation } from '@/pages/foundation';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: AppLayout,
    ErrorBoundary: RouteError,
    children: [{ index: true, Component: Foundation }],
  },
]);

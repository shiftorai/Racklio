import { createBrowserRouter } from 'react-router';

import { AppLayout } from '@/components/layout/app-layout';
import { RouteError } from '@/components/routing/route-error';
import { Home } from '@/pages/home';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: AppLayout,
    ErrorBoundary: RouteError,
    children: [{ index: true, Component: Home }],
  },
]);

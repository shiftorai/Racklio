import { createBrowserRouter } from 'react-router';

import { AppLayout } from '@/components/layout/app-layout';
import { RouteError } from '@/components/routing/route-error';
import { Home } from '@/pages/home';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: AppLayout,
    ErrorBoundary: RouteError,
    HydrateFallback: () => null,
    children: [
      { index: true, Component: Home },
      {
        path: 'reviews/liquid-web',
        lazy: async () => {
          const { LiquidWebReview } =
            await import('@/pages/reviews/liquid-web-review');

          return { Component: LiquidWebReview };
        },
      },
      {
        path: 'reviews/kinsta',
        lazy: async () => {
          const { KinstaReview } =
            await import('@/pages/reviews/kinsta-review');

          return { Component: KinstaReview };
        },
      },
      {
        path: 'reviews/wp-engine',
        lazy: async () => {
          const { WpEngineReview } =
            await import('@/pages/reviews/wp-engine-review');

          return { Component: WpEngineReview };
        },
      },
    ],
  },
]);

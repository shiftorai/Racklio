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
      {
        path: 'reviews/rocket-net',
        lazy: async () => {
          const { RocketNetReview } =
            await import('@/pages/reviews/rocket-net-review');

          return { Component: RocketNetReview };
        },
      },
      {
        path: 'reviews/pressable',
        lazy: async () => {
          const { PressableReview } =
            await import('@/pages/reviews/pressable-review');

          return { Component: PressableReview };
        },
      },
      {
        path: 'comparisons/kinsta-vs-wp-engine',
        lazy: async () => {
          const { KinstaVsWpEngine } =
            await import('@/pages/comparisons/kinsta-vs-wp-engine');

          return { Component: KinstaVsWpEngine };
        },
      },
      {
        path: 'comparisons/liquid-web-vs-wp-engine',
        lazy: async () => {
          const { LiquidWebVsWpEngine } =
            await import('@/pages/comparisons/liquid-web-vs-wp-engine');

          return { Component: LiquidWebVsWpEngine };
        },
      },
      {
        path: 'comparisons/hostinger-vs-wp-engine',
        lazy: async () => {
          const { HostingerVsWpEngine } =
            await import('@/pages/comparisons/hostinger-vs-wp-engine');

          return { Component: HostingerVsWpEngine };
        },
      },
      {
        path: 'comparisons/rocket-net-vs-wp-engine',
        lazy: async () => {
          const { RocketNetVsWpEngine } =
            await import('@/pages/comparisons/rocket-net-vs-wp-engine');

          return { Component: RocketNetVsWpEngine };
        },
      },
      {
        path: 'comparisons/rocket-net-vs-kinsta',
        lazy: async () => {
          const { RocketNetVsKinsta } =
            await import('@/pages/comparisons/rocket-net-vs-kinsta');

          return { Component: RocketNetVsKinsta };
        },
      },
    ],
  },
]);

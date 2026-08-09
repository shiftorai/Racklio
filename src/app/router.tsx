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
      {
        path: 'comparisons/pressable-vs-wp-engine',
        lazy: async () => {
          const { PressableVsWpEngine } =
            await import('@/pages/comparisons/pressable-vs-wp-engine');

          return { Component: PressableVsWpEngine };
        },
      },
      {
        path: 'comparisons/liquid-web-vs-kinsta',
        lazy: async () => {
          const { LiquidWebVsKinsta } =
            await import('@/pages/comparisons/liquid-web-vs-kinsta');

          return { Component: LiquidWebVsKinsta };
        },
      },
      {
        path: 'comparisons/pressable-vs-kinsta',
        lazy: async () => {
          const { PressableVsKinsta } =
            await import('@/pages/comparisons/pressable-vs-kinsta');

          return { Component: PressableVsKinsta };
        },
      },
      {
        path: 'comparisons/rocket-net-vs-pressable',
        lazy: async () => {
          const { RocketNetVsPressable } =
            await import('@/pages/comparisons/rocket-net-vs-pressable');

          return { Component: RocketNetVsPressable };
        },
      },
      {
        path: 'comparisons/liquid-web-vs-rocket-net',
        lazy: async () => {
          const { LiquidWebVsRocketNet } =
            await import('@/pages/comparisons/liquid-web-vs-rocket-net');
          return { Component: LiquidWebVsRocketNet };
        },
      },
      {
        path: 'comparisons/liquid-web-vs-pressable',
        lazy: async () => {
          const { LiquidWebVsPressable } =
            await import('@/pages/comparisons/liquid-web-vs-pressable');
          return { Component: LiquidWebVsPressable };
        },
      },
      {
        path: 'best/managed-wordpress-hosting-for-agencies',
        lazy: async () => {
          const { ManagedWordPressHostingForAgencies } =
            await import('@/pages/best/managed-wordpress-hosting-for-agencies');
          return { Component: ManagedWordPressHostingForAgencies };
        },
      },
      {
        path: 'best/managed-wordpress-hosting-for-small-business',
        lazy: async () => {
          const { ManagedWordPressHostingForSmallBusiness } =
            await import('@/pages/best/managed-wordpress-hosting-for-small-business');
          return { Component: ManagedWordPressHostingForSmallBusiness };
        },
      },
      {
        path: 'best/managed-wordpress-hosting-for-multiple-websites',
        lazy: async () => {
          const { ManagedWordPressHostingForMultipleWebsites } =
            await import('@/pages/best/managed-wordpress-hosting-for-multiple-websites');
          return { Component: ManagedWordPressHostingForMultipleWebsites };
        },
      },
      {
        path: 'best/managed-wordpress-hosting-for-developers',
        lazy: async () => {
          const { ManagedWordPressHostingForDevelopers } =
            await import('@/pages/best/managed-wordpress-hosting-for-developers');
          return { Component: ManagedWordPressHostingForDevelopers };
        },
      },
      {
        path: 'best/managed-wordpress-hosting-for-membership-sites',
        lazy: async () => {
          const { ManagedWordPressHostingForMembershipSites } =
            await import('@/pages/best/managed-wordpress-hosting-for-membership-sites');
          return { Component: ManagedWordPressHostingForMembershipSites };
        },
      },
      {
        path: 'best/managed-wordpress-hosting-for-saas-websites',
        lazy: async () => {
          const { ManagedWordPressHostingForSaasWebsites } =
            await import('@/pages/best/managed-wordpress-hosting-for-saas-websites');
          return { Component: ManagedWordPressHostingForSaasWebsites };
        },
      },
      {
        path: 'best/managed-wordpress-hosting-for-enterprise',
        lazy: async () => {
          const { ManagedWordPressHostingForEnterprise } =
            await import('@/pages/best/managed-wordpress-hosting-for-enterprise');
          return { Component: ManagedWordPressHostingForEnterprise };
        },
      },
      {
        path: 'best/managed-woocommerce-hosting',
        lazy: async () => {
          const { ManagedWooCommerceHosting } =
            await import('@/pages/best/managed-woocommerce-hosting');
          return { Component: ManagedWooCommerceHosting };
        },
      },
      {
        path: 'best/managed-wordpress-hosting-for-high-traffic-websites',
        lazy: async () => {
          const { ManagedWordPressHostingForHighTrafficWebsites } =
            await import('@/pages/best/managed-wordpress-hosting-for-high-traffic-websites');
          return { Component: ManagedWordPressHostingForHighTrafficWebsites };
        },
      },
    ],
  },
]);

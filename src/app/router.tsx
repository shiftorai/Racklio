import { createBrowserRouter } from 'react-router';

import { AppLayout } from '@/components/layout/app-layout';
import { RouteError } from '@/components/routing/route-error';

import { HashRoute } from './hash-route';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: AppLayout,
    ErrorBoundary: RouteError,
    HydrateFallback: () => null,
    children: [
      { index: true, Component: HashRoute },
      {
        path: 'reviews',
        lazy: async () => {
          const { ReviewsHub } = await import('@/pages/content-hubs');
          return { Component: ReviewsHub };
        },
      },
      {
        path: 'comparisons',
        lazy: async () => {
          const { ComparisonsHub } = await import('@/pages/content-hubs');
          return { Component: ComparisonsHub };
        },
      },
      {
        path: 'guides',
        lazy: async () => {
          const { GuidesHub } = await import('@/pages/content-hubs');
          return { Component: GuidesHub };
        },
      },
      {
        path: 'reviews/pipedrive',
        lazy: async () => {
          const { PipedriveReview } =
            await import('@/pages/reviews/pipedrive-review');
          return { Component: PipedriveReview };
        },
      },
      {
        path: 'reviews/landbot',
        lazy: async () => {
          const { LandbotReview } =
            await import('@/pages/reviews/landbot-review');
          return { Component: LandbotReview };
        },
      },
      {
        path: 'reviews/quo',
        lazy: async () => {
          const { QuoReview } = await import('@/pages/reviews/quo-review');
          return { Component: QuoReview };
        },
      },
      {
        path: 'reviews/aircall',
        lazy: async () => {
          const { AircallReview } =
            await import('@/pages/reviews/aircall-review');
          return { Component: AircallReview };
        },
      },
      {
        path: 'reviews/calilio',
        lazy: async () => {
          const { CalilioReview } =
            await import('@/pages/reviews/calilio-review');
          return { Component: CalilioReview };
        },
      },
      {
        path: 'guides/calilio-pricing',
        lazy: async () => {
          const { CalilioPricing } =
            await import('@/pages/guides/calilio-pricing');
          return { Component: CalilioPricing };
        },
      },
      {
        path: 'alternatives/calilio-alternatives',
        lazy: async () => {
          const { CalilioAlternatives } =
            await import('@/pages/alternatives/calilio-alternatives');
          return { Component: CalilioAlternatives };
        },
      },
      {
        path: 'comparisons/calilio-vs-callhippo',
        lazy: async () => {
          const { CalilioVsCallHippo } =
            await import('@/pages/comparisons/calilio-vs-callhippo');
          return { Component: CalilioVsCallHippo };
        },
      },
      {
        path: 'guides/quo-pricing',
        lazy: async () => {
          const { QuoPricing } = await import('@/pages/guides/quo-pricing');
          return { Component: QuoPricing };
        },
      },
      {
        path: 'alternatives/quo-alternatives',
        lazy: async () => {
          const { QuoAlternatives } =
            await import('@/pages/alternatives/quo-alternatives');
          return { Component: QuoAlternatives };
        },
      },
      {
        path: 'comparisons/quo-vs-krispcall',
        lazy: async () => {
          const { QuoVsKrispCall } =
            await import('@/pages/comparisons/quo-vs-krispcall');
          return { Component: QuoVsKrispCall };
        },
      },
      {
        path: 'guides/landbot-pricing',
        lazy: async () => {
          const { LandbotPricing } =
            await import('@/pages/guides/landbot-pricing');
          return { Component: LandbotPricing };
        },
      },
      {
        path: 'alternatives/landbot-alternatives',
        lazy: async () => {
          const { LandbotAlternatives } =
            await import('@/pages/alternatives/landbot-alternatives');
          return { Component: LandbotAlternatives };
        },
      },
      {
        path: 'comparisons/landbot-vs-tidio',
        lazy: async () => {
          const { LandbotVsTidio } =
            await import('@/pages/comparisons/landbot-vs-tidio');
          return { Component: LandbotVsTidio };
        },
      },
      {
        path: 'guides/pipedrive-pricing',
        lazy: async () => {
          const { PipedrivePricing } =
            await import('@/pages/guides/pipedrive-pricing');
          return { Component: PipedrivePricing };
        },
      },
      {
        path: 'alternatives/pipedrive-alternatives',
        lazy: async () => {
          const { PipedriveAlternatives } =
            await import('@/pages/alternatives/pipedrive-alternatives');
          return { Component: PipedriveAlternatives };
        },
      },
      {
        path: 'comparisons/pipedrive-vs-engagebay',
        lazy: async () => {
          const { PipedriveVsEngageBay } =
            await import('@/pages/comparisons/pipedrive-vs-engagebay');
          return { Component: PipedriveVsEngageBay };
        },
      },
      {
        path: 'guides/engagebay-pricing',
        lazy: async () => {
          const { EngageBayPricing } =
            await import('@/pages/guides/engagebay-pricing');
          return { Component: EngageBayPricing };
        },
      },
      {
        path: 'guides/eazychat-pricing',
        lazy: async () => {
          const { EazyChatPricing } =
            await import('@/pages/guides/eazychat-pricing');
          return { Component: EazyChatPricing };
        },
      },
      {
        path: 'guides/salesmsg-pricing',
        lazy: async () => {
          const { SalesmsgPricing } =
            await import('@/pages/guides/salesmsg-pricing');
          return { Component: SalesmsgPricing };
        },
      },
      {
        path: 'guides/vida-pricing',
        lazy: async () => {
          const { VidaPricing } = await import('@/pages/guides/vida-pricing');
          return { Component: VidaPricing };
        },
      },
      {
        path: 'guides/demodesk-pricing',
        lazy: async () => {
          const { DemodeskPricing } =
            await import('@/pages/guides/demodesk-pricing');
          return { Component: DemodeskPricing };
        },
      },
      {
        path: 'guides/claap-pricing',
        lazy: async () => {
          const { ClaapPricing } = await import('@/pages/guides/claap-pricing');
          return { Component: ClaapPricing };
        },
      },
      {
        path: 'guides/fireflies-pricing',
        lazy: async () => {
          const { FirefliesPricing } =
            await import('@/pages/guides/fireflies-pricing');
          return { Component: FirefliesPricing };
        },
      },
      {
        path: 'guides/campaign-monitor-pricing',
        lazy: async () => {
          const { CampaignMonitorPricing } =
            await import('@/pages/guides/campaign-monitor-pricing');
          return { Component: CampaignMonitorPricing };
        },
      },
      {
        path: 'guides/aweber-pricing',
        lazy: async () => {
          const { AWeberPricing } =
            await import('@/pages/guides/aweber-pricing');
          return { Component: AWeberPricing };
        },
      },
      {
        path: 'alternatives/engagebay-alternatives',
        lazy: async () => {
          const { EngageBayAlternatives } =
            await import('@/pages/alternatives/engagebay-alternatives');
          return { Component: EngageBayAlternatives };
        },
      },
      {
        path: 'guides/bookyourdata-pricing',
        lazy: async () => {
          const { BookyourdataPricing } =
            await import('@/pages/guides/bookyourdata-pricing');
          return { Component: BookyourdataPricing };
        },
      },
      {
        path: 'guides/ninjaone-pricing',
        lazy: async () => {
          const { NinjaOnePricing } =
            await import('@/pages/guides/ninjaone-pricing');
          return { Component: NinjaOnePricing };
        },
      },
      {
        path: 'alternatives/bookyourdata-alternatives',
        lazy: async () => {
          const { BookyourdataAlternatives } =
            await import('@/pages/alternatives/bookyourdata-alternatives');
          return { Component: BookyourdataAlternatives };
        },
      },
      {
        path: 'alternatives/ninjaone-alternatives',
        lazy: async () => {
          const { NinjaOneAlternatives } =
            await import('@/pages/alternatives/ninjaone-alternatives');
          return { Component: NinjaOneAlternatives };
        },
      },
      {
        path: 'alternatives/eazychat-alternatives',
        lazy: async () => {
          const { EazyChatAlternatives } =
            await import('@/pages/alternatives/eazychat-alternatives');
          return { Component: EazyChatAlternatives };
        },
      },
      {
        path: 'alternatives',
        lazy: async () => {
          const { AlternativesHub } = await import('@/pages/content-hubs');
          return { Component: AlternativesHub };
        },
      },
      {
        path: 'alternatives/tidio-alternatives',
        lazy: async () => {
          const { TidioAlternatives } =
            await import('@/pages/alternatives/tidio-alternatives');
          return { Component: TidioAlternatives };
        },
      },
      {
        path: 'alternatives/gorgias-alternatives',
        lazy: async () => {
          const { GorgiasAlternatives } =
            await import('@/pages/alternatives/gorgias-alternatives');
          return { Component: GorgiasAlternatives };
        },
      },
      {
        path: 'alternatives/respond-io-alternatives',
        lazy: async () => {
          const { RespondIoAlternatives } =
            await import('@/pages/alternatives/respond-io-alternatives');
          return { Component: RespondIoAlternatives };
        },
      },
      {
        path: 'alternatives/hubspot-alternatives',
        lazy: async () => {
          const { HubSpotAlternatives } =
            await import('@/pages/alternatives/hubspot-alternatives');
          return { Component: HubSpotAlternatives };
        },
      },
      {
        path: 'alternatives/salesmsg-alternatives',
        lazy: async () => {
          const { SalesmsgAlternatives } =
            await import('@/pages/alternatives/salesmsg-alternatives');
          return { Component: SalesmsgAlternatives };
        },
      },
      {
        path: 'alternatives/vida-alternatives',
        lazy: async () => {
          const { VidaAlternatives } =
            await import('@/pages/alternatives/vida-alternatives');
          return { Component: VidaAlternatives };
        },
      },
      {
        path: 'alternatives/demodesk-alternatives',
        lazy: async () => {
          const { DemodeskAlternatives } =
            await import('@/pages/alternatives/demodesk-alternatives');
          return { Component: DemodeskAlternatives };
        },
      },
      {
        path: 'alternatives/claap-alternatives',
        lazy: async () => {
          const { ClaapAlternatives } =
            await import('@/pages/alternatives/claap-alternatives');
          return { Component: ClaapAlternatives };
        },
      },
      {
        path: 'alternatives/fireflies-alternatives',
        lazy: async () => {
          const { FirefliesAlternatives } =
            await import('@/pages/alternatives/fireflies-alternatives');
          return { Component: FirefliesAlternatives };
        },
      },
      {
        path: 'alternatives/campaign-monitor-alternatives',
        lazy: async () => {
          const { CampaignMonitorAlternatives } =
            await import('@/pages/alternatives/campaign-monitor-alternatives');
          return { Component: CampaignMonitorAlternatives };
        },
      },
      {
        path: 'alternatives/aweber-alternatives',
        lazy: async () => {
          const { AWeberAlternatives } =
            await import('@/pages/alternatives/aweber-alternatives');
          return { Component: AWeberAlternatives };
        },
      },
      {
        path: 'search',
        lazy: async () => {
          const { SearchPage } = await import('@/pages/content-hubs');
          return { Component: SearchPage };
        },
      },
      {
        path: 'categories/ai-customer-support',
        lazy: async () => {
          const { AiCustomerSupportCategory } =
            await import('@/pages/categories/ai-customer-support');
          return { Component: AiCustomerSupportCategory };
        },
      },
      {
        path: 'categories/business-phone-voice-ai',
        lazy: async () => {
          const { BusinessPhoneVoiceAiCategory } =
            await import('@/pages/categories/business-phone-voice-ai');
          return { Component: BusinessPhoneVoiceAiCategory };
        },
      },
      {
        path: 'categories/live-chat-messaging',
        lazy: async () => {
          const { LiveChatMessagingCategory } =
            await import('@/pages/categories/live-chat-messaging');
          return { Component: LiveChatMessagingCategory };
        },
      },
      {
        path: 'categories/crm-customer-engagement',
        lazy: async () => {
          const { CrmCustomerEngagementCategory } =
            await import('@/pages/categories/crm-customer-engagement');
          return { Component: CrmCustomerEngagementCategory };
        },
      },
      ...[
        ['about', 'AboutPage'],
        ['partner-media-kit', 'PartnerMediaKitPage'],
        ['methodology', 'MethodologyPage'],
        ['editorial-standards', 'EditorialStandardsPage'],
        ['affiliate-disclosure', 'AffiliateDisclosurePage'],
        ['contact', 'ContactPage'],
        ['privacy', 'PrivacyPage'],
        ['terms', 'TermsPage'],
      ].map(([path, exportName]) => ({
        path,
        lazy: async () => {
          const pages = await import('@/pages/site-information');
          return { Component: pages[exportName as keyof typeof pages] };
        },
      })),
      {
        path: 'reviews/liquid-web',
        lazy: async () => {
          const { LiquidWebReview } =
            await import('@/pages/reviews/liquid-web-review');

          return { Component: LiquidWebReview };
        },
      },
      {
        path: 'reviews/bookyourdata',
        lazy: async () => {
          const { BookyourdataReview } =
            await import('@/pages/reviews/bookyourdata-review');
          return { Component: BookyourdataReview };
        },
      },
      {
        path: 'reviews/ninjaone',
        lazy: async () => {
          const { NinjaOneReview } =
            await import('@/pages/reviews/ninjaone-review');
          return { Component: NinjaOneReview };
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
        path: 'reviews/typewise',
        lazy: async () => {
          const { TypewiseReview } =
            await import('@/pages/reviews/typewise-review');
          return { Component: TypewiseReview };
        },
      },
      {
        path: 'reviews/krispcall',
        lazy: async () => {
          const { KrispCallReview } =
            await import('@/pages/reviews/krispcall-review');
          return { Component: KrispCallReview };
        },
      },
      {
        path: 'reviews/callhippo',
        lazy: async () => {
          const { CallHippoReview } =
            await import('@/pages/reviews/callhippo-review');
          return { Component: CallHippoReview };
        },
      },
      {
        path: 'reviews/tidio',
        lazy: async () => {
          const { TidioReview } = await import('@/pages/reviews/tidio-review');
          return { Component: TidioReview };
        },
      },
      {
        path: 'reviews/respond-io',
        lazy: async () => {
          const { RespondIoReview } =
            await import('@/pages/reviews/respond-io-review');
          return { Component: RespondIoReview };
        },
      },
      {
        path: 'reviews/gorgias',
        lazy: async () => {
          const { GorgiasReview } =
            await import('@/pages/reviews/gorgias-review');
          return { Component: GorgiasReview };
        },
      },
      {
        path: 'reviews/engagebay',
        lazy: async () => {
          const { EngageBayReview } =
            await import('@/pages/reviews/engagebay-review');
          return { Component: EngageBayReview };
        },
      },
      {
        path: 'reviews/eazychat',
        lazy: async () => {
          const { EazyChatReview } =
            await import('@/pages/reviews/eazychat-review');
          return { Component: EazyChatReview };
        },
      },
      {
        path: 'reviews/salesmsg',
        lazy: async () => {
          const { SalesmsgReview } =
            await import('@/pages/reviews/salesmsg-review');
          return { Component: SalesmsgReview };
        },
      },
      {
        path: 'reviews/vida',
        lazy: async () => {
          const { VidaReview } = await import('@/pages/reviews/vida-review');
          return { Component: VidaReview };
        },
      },
      {
        path: 'reviews/demodesk',
        lazy: async () => {
          const { DemodeskReview } =
            await import('@/pages/reviews/demodesk-review');
          return { Component: DemodeskReview };
        },
      },
      {
        path: 'reviews/claap',
        lazy: async () => {
          const { ClaapReview } = await import('@/pages/reviews/claap-review');
          return { Component: ClaapReview };
        },
      },
      {
        path: 'reviews/fireflies',
        lazy: async () => {
          const { FirefliesReview } =
            await import('@/pages/reviews/fireflies-review');
          return { Component: FirefliesReview };
        },
      },
      {
        path: 'reviews/campaign-monitor',
        lazy: async () => {
          const { CampaignMonitorReview } =
            await import('@/pages/reviews/campaign-monitor-review');
          return { Component: CampaignMonitorReview };
        },
      },
      {
        path: 'reviews/aweber',
        lazy: async () => {
          const { AWeberReview } =
            await import('@/pages/reviews/aweber-review');
          return { Component: AWeberReview };
        },
      },
      {
        path: 'comparisons/tidio-vs-gorgias',
        lazy: async () => {
          const { TidioVsGorgias } =
            await import('@/pages/comparisons/tidio-vs-gorgias');
          return { Component: TidioVsGorgias };
        },
      },
      {
        path: 'comparisons/engagebay-vs-hubspot',
        lazy: async () => {
          const { EngageBayVsHubSpot } =
            await import('@/pages/comparisons/engagebay-vs-hubspot');
          return { Component: EngageBayVsHubSpot };
        },
      },
      {
        path: 'comparisons/eazychat-vs-tidio',
        lazy: async () => {
          const { EazyChatVsTidio } =
            await import('@/pages/comparisons/eazychat-vs-tidio');
          return { Component: EazyChatVsTidio };
        },
      },
      {
        path: 'comparisons/respond-io-vs-tidio',
        lazy: async () => {
          const { RespondIoVsTidio } =
            await import('@/pages/comparisons/respond-io-vs-tidio');
          return { Component: RespondIoVsTidio };
        },
      },
      {
        path: 'comparisons/krispcall-vs-callhippo',
        lazy: async () => {
          const { KrispCallVsCallHippo } =
            await import('@/pages/comparisons/krispcall-vs-callhippo');
          return { Component: KrispCallVsCallHippo };
        },
      },
      {
        path: 'comparisons/krispcall-vs-aircall',
        lazy: async () => {
          const { KrispCallVsAircall } =
            await import('@/pages/comparisons/krispcall-vs-aircall');
          return { Component: KrispCallVsAircall };
        },
      },
      {
        path: 'comparisons/claap-vs-demodesk',
        lazy: async () => {
          const { ClaapVsDemodesk } =
            await import('@/pages/comparisons/claap-vs-demodesk');
          return { Component: ClaapVsDemodesk };
        },
      },
      {
        path: 'comparisons/fireflies-vs-claap',
        lazy: async () => {
          const { FirefliesVsClaap } =
            await import('@/pages/comparisons/fireflies-vs-claap');
          return { Component: FirefliesVsClaap };
        },
      },
      {
        path: 'comparisons/campaign-monitor-vs-aweber',
        lazy: async () => {
          const { CampaignMonitorVsAWeber } =
            await import('@/pages/comparisons/campaign-monitor-vs-aweber');
          return { Component: CampaignMonitorVsAWeber };
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
        path: 'best/managed-wordpress-hosting-for-publishers',
        lazy: async () => {
          const { ManagedWordPressHostingForPublishers } =
            await import('@/pages/best/managed-wordpress-hosting-for-publishers');
          return { Component: ManagedWordPressHostingForPublishers };
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

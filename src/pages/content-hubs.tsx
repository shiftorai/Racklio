import { useEffect, useMemo, useState } from 'react';
import { ResearchMarker } from '@/components/brand';
import { CategoryHubTemplate } from '@/components/categories';
import { ComparisonIdentity } from '@/components/editorial';
import { ProductLogo } from '@/components/home';
import { isCurrentProductBrand } from '@/lib/product-brand-assets';
import { PageLayout, SiteFooter, SiteHeader } from '@/components/layout';
import {
  Card,
  CardContent,
  ClickableCard,
  Container,
  Link,
  Section,
} from '@/components/ui';
import { editorialCoverageCounts } from '@/lib/editorial-coverage';

import { softwareCategories } from './categories/category-data';

type Entry = {
  title: string;
  description: string;
  href: string;
  relatedLinks?: { title: string; href: string }[];
  suppressLink?: boolean;
};

function getEntryProductName(title: string) {
  return title.replace(/\s+(alternatives|pricing|review)$/i, '');
}

const reviewEntries: Entry[] = [
  {
    title: 'Help Scout Review',
    description:
      'Shared inbox, Docs, Beacon, automation, reporting, permissions, and AI Answers economics for customer-support teams.',
    href: '/reviews/help-scout',
    relatedLinks: [
      { title: 'Pricing guide', href: '/guides/help-scout-pricing' },
      { title: 'Alternatives', href: '/alternatives/help-scout-alternatives' },
      {
        title: 'Compare with Gorgias',
        href: '/comparisons/help-scout-vs-gorgias',
      },
    ],
  },
  {
    title: 'Capsule CRM Review',
    description:
      'CRM coverage for contacts, opportunities, pipeline stages, tasks, workflows, reporting, integrations, plan limits, and per-user pricing.',
    href: '/reviews/capsule-crm',
    relatedLinks: [
      { title: 'Pricing guide', href: '/guides/capsule-crm-pricing' },
      { title: 'Alternatives', href: '/alternatives/capsule-crm-alternatives' },
    ],
  },
  {
    title: 'Calilio Review',
    description:
      'SMB cloud phone coverage spanning virtual numbers, calling, messaging, included bundles, wallet usage, routing, monitoring, AI reporting, and commercial limits.',
    href: '/reviews/calilio',
    relatedLinks: [
      { title: 'Pricing guide', href: '/guides/calilio-pricing' },
      { title: 'Alternatives', href: '/alternatives/calilio-alternatives' },
      {
        title: 'Compare with CallHippo',
        href: '/comparisons/calilio-vs-callhippo',
      },
    ],
  },
  {
    title: 'Aircall Review',
    description:
      'Structured cloud calling covering plan minimums, shared workflows, routing, messaging, integrations, analytics, AI packaging, usage economics, and commercial limits.',
    href: '/reviews/aircall',
    relatedLinks: [
      {
        title: 'Compare with KrispCall',
        href: '/comparisons/krispcall-vs-aircall',
      },
      {
        title: 'Business Phone & Voice AI',
        href: '/categories/business-phone-voice-ai',
      },
    ],
  },
  {
    title: 'Quo Review',
    description:
      'Business phone workspace covering shared numbers, calling, texting, routing, Sona AI, integrations, pricing, usage limits, and the former OpenPhone identity.',
    href: '/reviews/quo',
    relatedLinks: [
      { title: 'Pricing guide', href: '/guides/quo-pricing' },
      { title: 'Alternatives', href: '/alternatives/quo-alternatives' },
      {
        title: 'Compare with KrispCall',
        href: '/comparisons/quo-vs-krispcall',
      },
    ],
  },
  {
    title: 'Landbot Review',
    description:
      'Conversational automation covering web and WhatsApp chatbots, AI Agents, flow design, human handoff, integrations, usage limits, and message economics.',
    href: '/reviews/landbot',
    relatedLinks: [
      { title: 'Pricing guide', href: '/guides/landbot-pricing' },
      { title: 'Alternatives', href: '/alternatives/landbot-alternatives' },
      { title: 'Compare with Tidio', href: '/comparisons/landbot-vs-tidio' },
    ],
  },
  {
    title: 'Pipedrive Review',
    description:
      'Sales-pipeline CRM covering deals, activities, email, automation, forecasting, reporting, plan limits, and add-on economics.',
    href: '/reviews/pipedrive',
    relatedLinks: [
      { title: 'Pricing guide', href: '/guides/pipedrive-pricing' },
      { title: 'Alternatives', href: '/alternatives/pipedrive-alternatives' },
      {
        title: 'Compare with EngageBay',
        href: '/comparisons/pipedrive-vs-engagebay',
      },
    ],
  },
  {
    title: 'NinjaOne Review',
    description:
      'Adjacent IT support and endpoint management covering RMM, patching, remote access, MDM, assets, ticketing, automation, modules, and quote pricing.',
    href: '/reviews/ninjaone',
    relatedLinks: [
      { title: 'Pricing guide', href: '/guides/ninjaone-pricing' },
      { title: 'Alternatives', href: '/alternatives/ninjaone-alternatives' },
    ],
  },
  {
    title: 'Bookyourdata Review',
    description:
      'Pay-as-you-go B2B prospecting data, verification, non-expiring credits, suppression, exports, enrichment, and guarantee context.',
    href: '/reviews/bookyourdata',
    relatedLinks: [
      { title: 'Pricing guide', href: '/guides/bookyourdata-pricing' },
      {
        title: 'Alternatives',
        href: '/alternatives/bookyourdata-alternatives',
      },
    ],
  },
  {
    title: 'AWeber Review',
    description:
      'Email campaigns, landing pages, automation, subscriber tiers, send limits, ecommerce tools, and creator or small-business fit.',
    href: '/reviews/aweber',
    relatedLinks: [
      { title: 'Pricing guide', href: '/guides/aweber-pricing' },
      { title: 'Alternatives', href: '/alternatives/aweber-alternatives' },
      {
        title: 'Compare with Campaign Monitor',
        href: '/comparisons/campaign-monitor-vs-aweber',
      },
    ],
  },
  {
    title: 'Campaign Monitor Review',
    description:
      'Email campaigns, segmentation, automated journeys, transactional email, plan-dependent AI, and contact-based pricing.',
    href: '/reviews/campaign-monitor',
    relatedLinks: [
      {
        title: 'Pricing guide',
        href: '/guides/campaign-monitor-pricing',
      },
      {
        title: 'Alternatives',
        href: '/alternatives/campaign-monitor-alternatives',
      },
      {
        title: 'CRM & Customer Engagement',
        href: '/categories/crm-customer-engagement',
      },
    ],
  },
  {
    title: 'Fireflies.ai Review',
    description:
      'Meeting intelligence, workflow integrations, plan storage, and advanced AI-credit boundaries.',
    href: '/reviews/fireflies',
    relatedLinks: [
      { title: 'Pricing guide', href: '/guides/fireflies-pricing' },
      { title: 'Alternatives', href: '/alternatives/fireflies-alternatives' },
      { title: 'Compare with Claap', href: '/comparisons/fireflies-vs-claap' },
    ],
  },
  {
    title: 'Typewise Review',
    description:
      'AI customer service automation, outcome pricing, deployment, and security claims.',
    href: '/reviews/typewise',
  },
  {
    title: 'KrispCall Review',
    description:
      'Cloud calling, virtual numbers, SMS, per-user pricing, and usage charges.',
    href: '/reviews/krispcall',
  },
  {
    title: 'CallHippo Review',
    description:
      'Cloud business calling, virtual numbers, routing, messaging, integrations, plan allowances, and usage-cost boundaries.',
    href: '/reviews/callhippo',
    relatedLinks: [
      {
        title: 'Compare with KrispCall',
        href: '/comparisons/krispcall-vs-callhippo',
      },
      {
        title: 'Business Phone & Voice AI',
        href: '/categories/business-phone-voice-ai',
      },
    ],
  },
  {
    title: 'Salesmsg Review',
    description:
      'Business texting, calling, CRM workflows, AI agents, credits, carrier fees, and messaging-compliance cost boundaries.',
    href: '/reviews/salesmsg',
    relatedLinks: [
      { title: 'Pricing guide', href: '/guides/salesmsg-pricing' },
      { title: 'Alternatives', href: '/alternatives/salesmsg-alternatives' },
      {
        title: 'Business Phone & Voice AI',
        href: '/categories/business-phone-voice-ai',
      },
    ],
  },
  {
    title: 'Vida.io Review',
    description:
      'Pilot-led omnichannel AI agents, connected workflows, deployment scope, and pricing boundaries.',
    href: '/reviews/vida',
    relatedLinks: [
      { title: 'Pricing guide', href: '/guides/vida-pricing' },
      { title: 'Alternatives', href: '/alternatives/vida-alternatives' },
      {
        title: 'Business Phone & Voice AI',
        href: '/categories/business-phone-voice-ai',
      },
    ],
  },
  {
    title: 'Demodesk Review',
    description:
      'Sales conversation intelligence, AI coaching, CRM automation, and separate custom-agent usage costs.',
    href: '/reviews/demodesk',
    relatedLinks: [
      { title: 'Pricing guide', href: '/guides/demodesk-pricing' },
      { title: 'Alternatives', href: '/alternatives/demodesk-alternatives' },
      {
        title: 'CRM & Customer Engagement',
        href: '/categories/crm-customer-engagement',
      },
    ],
  },
  {
    title: 'Claap Review',
    description:
      'Sales conversation capture, CRM enrichment, coaching, deal intelligence, plan limits, and AI-credit boundaries.',
    href: '/reviews/claap',
    relatedLinks: [
      { title: 'Pricing guide', href: '/guides/claap-pricing' },
      { title: 'Alternatives', href: '/alternatives/claap-alternatives' },
      {
        title: 'Compare with Demodesk',
        href: '/comparisons/claap-vs-demodesk',
      },
    ],
  },
  {
    title: 'Tidio Review',
    description:
      'Live chat, help desk, Lyro AI, automation, and conversation limits.',
    href: '/reviews/tidio',
    relatedLinks: [
      { title: 'Alternatives', href: '/alternatives/tidio-alternatives' },
      { title: 'Compare with Gorgias', href: '/comparisons/tidio-vs-gorgias' },
    ],
  },
  {
    title: 'respond.io Review',
    description:
      'Omnichannel messaging, WhatsApp, AI workflows, users, and active-contact pricing.',
    href: '/reviews/respond-io',
    relatedLinks: [
      { title: 'Alternatives', href: '/alternatives/respond-io-alternatives' },
      { title: 'Compare with Tidio', href: '/comparisons/respond-io-vs-tidio' },
    ],
  },
  {
    title: 'Gorgias Review',
    description:
      'Ecommerce help desk, ticket pricing, AI Agent, channels, and overages.',
    href: '/reviews/gorgias',
    relatedLinks: [
      { title: 'Alternatives', href: '/alternatives/gorgias-alternatives' },
      { title: 'Compare with Tidio', href: '/comparisons/tidio-vs-gorgias' },
    ],
  },
  {
    title: 'EngageBay Review',
    description:
      'CRM, marketing, sales, service workflows, plan limits, and small-business fit.',
    href: '/reviews/engagebay',
    relatedLinks: [
      { title: 'Pricing guide', href: '/guides/engagebay-pricing' },
      { title: 'Alternatives', href: '/alternatives/engagebay-alternatives' },
      {
        title: 'Compare with HubSpot',
        href: '/comparisons/engagebay-vs-hubspot',
      },
    ],
  },
  {
    title: 'EazyChat.io Review',
    description:
      'AI website chat, human handoff, help-desk integration, usage limits, and product maturity.',
    href: '/reviews/eazychat',
    relatedLinks: [
      { title: 'Pricing guide', href: '/guides/eazychat-pricing' },
      { title: 'Alternatives', href: '/alternatives/eazychat-alternatives' },
      { title: 'Compare with Tidio', href: '/comparisons/eazychat-vs-tidio' },
    ],
  },
];

const commercialGuideEntries: Entry[] = [
  {
    title: 'Help Scout Pricing',
    description:
      'User billing, additional inboxes, Docs sites, AI Answer resolutions, spending limits, and support-team cost.',
    href: '/guides/help-scout-pricing',
    relatedLinks: [
      { title: 'Help Scout review', href: '/reviews/help-scout' },
      { title: 'Alternatives', href: '/alternatives/help-scout-alternatives' },
    ],
  },
  {
    title: 'Capsule CRM Pricing',
    description:
      'Free and per-user CRM plan economics, annual versus monthly billing, contacts, storage, workflows, and upgrade boundaries.',
    href: '/guides/capsule-crm-pricing',
    relatedLinks: [
      { title: 'Capsule CRM review', href: '/reviews/capsule-crm' },
      { title: 'Alternatives', href: '/alternatives/capsule-crm-alternatives' },
    ],
  },
  {
    title: 'Calilio Pricing',
    description:
      'Separate monthly and annual seat pricing from included US/Canada bundles, wallet-funded overage, number charges, international rates, and AI usage.',
    href: '/guides/calilio-pricing',
    relatedLinks: [
      { title: 'Calilio review', href: '/reviews/calilio' },
      { title: 'Alternatives', href: '/alternatives/calilio-alternatives' },
      {
        title: 'Compare with CallHippo',
        href: '/comparisons/calilio-vs-callhippo',
      },
    ],
  },
  {
    title: 'Quo Pricing',
    description:
      'Model Starter, Business, and Scale seats alongside billing cycle, numbers, Sona credit tiers, overage, international use, messaging compliance, and other charges.',
    href: '/guides/quo-pricing',
    relatedLinks: [
      { title: 'Quo review', href: '/reviews/quo' },
      { title: 'Alternatives', href: '/alternatives/quo-alternatives' },
      {
        title: 'Compare with KrispCall',
        href: '/comparisons/quo-vs-krispcall',
      },
    ],
  },
  {
    title: 'Landbot Pricing',
    description:
      'Plans, monthly and annual billing, standard chats, AI chats, seats, overage, WhatsApp access, message fees, and Meta costs.',
    href: '/guides/landbot-pricing',
    relatedLinks: [
      { title: 'Landbot review', href: '/reviews/landbot' },
      { title: 'Alternatives', href: '/alternatives/landbot-alternatives' },
      { title: 'Compare with Tidio', href: '/comparisons/landbot-vs-tidio' },
    ],
  },
  {
    title: 'Pipedrive Pricing',
    description:
      'Per-seat plans, annual versus monthly billing, usage limits, included products, add-ons, top-ups, and configured-cost decisions.',
    href: '/guides/pipedrive-pricing',
    relatedLinks: [
      { title: 'Pipedrive review', href: '/reviews/pipedrive' },
      { title: 'Alternatives', href: '/alternatives/pipedrive-alternatives' },
      {
        title: 'Compare with EngageBay',
        href: '/comparisons/pipedrive-vs-engagebay',
      },
    ],
  },
  {
    title: 'NinjaOne Pricing',
    description:
      'Per-device guidance, volume behavior, module scope, regional differences, commercial-instance limits, incentives, and personalized quotes.',
    href: '/guides/ninjaone-pricing',
    relatedLinks: [
      { title: 'NinjaOne review', href: '/reviews/ninjaone' },
      {
        title: 'NinjaOne alternatives',
        href: '/alternatives/ninjaone-alternatives',
      },
    ],
  },
  {
    title: 'Bookyourdata Pricing',
    description:
      'Pay-as-you-go credits, free evaluation, volume discounts, no-expiry economics, guarantee remedies, and BeSpoke context.',
    href: '/guides/bookyourdata-pricing',
    relatedLinks: [
      { title: 'Bookyourdata review', href: '/reviews/bookyourdata' },
      {
        title: 'Bookyourdata alternatives',
        href: '/alternatives/bookyourdata-alternatives',
      },
    ],
  },
  {
    title: 'AWeber Pricing',
    description:
      'Free, Lite, Plus, and Unlimited pricing, subscriber tiers, send multiples, annual display, trial, upgrades, and Hold Package.',
    href: '/guides/aweber-pricing',
    relatedLinks: [
      { title: 'AWeber review', href: '/reviews/aweber' },
      {
        title: 'AWeber alternatives',
        href: '/alternatives/aweber-alternatives',
      },
    ],
  },
  {
    title: 'Campaign Monitor Pricing',
    description:
      'Contact-tier pricing, plan send allowances, trial, annual purchase, AI scope, and subscription versus pay-per-campaign billing.',
    href: '/guides/campaign-monitor-pricing',
    relatedLinks: [
      { title: 'Campaign Monitor review', href: '/reviews/campaign-monitor' },
      {
        title: 'Campaign Monitor alternatives',
        href: '/alternatives/campaign-monitor-alternatives',
      },
    ],
  },
  {
    title: 'Fireflies.ai Pricing',
    description:
      'Free through Enterprise seats, storage, analytics, included credits, and recurring AI-credit add-ons.',
    href: '/guides/fireflies-pricing',
    relatedLinks: [
      { title: 'Fireflies.ai review', href: '/reviews/fireflies' },
      {
        title: 'Fireflies.ai alternatives',
        href: '/alternatives/fireflies-alternatives',
      },
    ],
  },
  {
    title: 'EngageBay Pricing',
    description:
      'Plans, contacts, billing terms, limits, and practical cost decisions.',
    href: '/guides/engagebay-pricing',
    relatedLinks: [
      {
        title: 'EngageBay alternatives',
        href: '/alternatives/engagebay-alternatives',
      },
    ],
  },
  {
    title: 'EazyChat.io Pricing',
    description:
      'Per-user rates, AI conversation allowances, add-ons, and plan fit.',
    href: '/guides/eazychat-pricing',
    relatedLinks: [
      {
        title: 'EazyChat.io alternatives',
        href: '/alternatives/eazychat-alternatives',
      },
    ],
  },
  {
    title: 'Salesmsg Pricing',
    description:
      'Basic, Pro, and Enterprise plans, credits, extra capacity, carrier fees, 10DLC, and total-cost questions.',
    href: '/guides/salesmsg-pricing',
    relatedLinks: [
      { title: 'Salesmsg review', href: '/reviews/salesmsg' },
      {
        title: 'Salesmsg alternatives',
        href: '/alternatives/salesmsg-alternatives',
      },
    ],
  },
  {
    title: 'Vida.io Pricing',
    description:
      'Pilot investment, production-scope pricing, deployment stages, and proposal questions.',
    href: '/guides/vida-pricing',
    relatedLinks: [
      { title: 'Vida.io review', href: '/reviews/vida' },
      {
        title: 'Vida.io alternatives',
        href: '/alternatives/vida-alternatives',
      },
    ],
  },
  {
    title: 'Demodesk Pricing',
    description:
      'Capture and Coaching & AI seats, Enterprise thresholds, Workflow Runs, and AI Compute Credits.',
    href: '/guides/demodesk-pricing',
    relatedLinks: [
      { title: 'Demodesk review', href: '/reviews/demodesk' },
      {
        title: 'Demodesk alternatives',
        href: '/alternatives/demodesk-alternatives',
      },
    ],
  },
  {
    title: 'Claap Pricing',
    description:
      'Basic, Pro, Business, and Enterprise recording limits, AI credits, revenue-intelligence features, and pricing boundaries.',
    href: '/guides/claap-pricing',
    relatedLinks: [
      { title: 'Claap review', href: '/reviews/claap' },
      { title: 'Claap alternatives', href: '/alternatives/claap-alternatives' },
    ],
  },
];

const alternativeEntries: Entry[] = [
  {
    title: 'Help Scout Alternatives',
    description:
      'Conditional support alternatives for ecommerce help desk, chat-led, or messaging-led customer operations.',
    href: '/alternatives/help-scout-alternatives',
    relatedLinks: [
      { title: 'Help Scout review', href: '/reviews/help-scout' },
      { title: 'Pricing guide', href: '/guides/help-scout-pricing' },
    ],
  },
  {
    title: 'Capsule CRM Alternatives',
    description:
      'Conditional CRM alternatives for teams weighing pipeline specialization, connected suite scope, or a broader platform.',
    href: '/alternatives/capsule-crm-alternatives',
    relatedLinks: [
      { title: 'Capsule CRM review', href: '/reviews/capsule-crm' },
      { title: 'Pricing guide', href: '/guides/capsule-crm-pricing' },
    ],
  },
  {
    title: 'Calilio Alternatives',
    description:
      'Compare CallHippo, KrispCall, Quo, and Aircall through number geography, usage economics, routing, supervision, AI, and integrations.',
    href: '/alternatives/calilio-alternatives',
    relatedLinks: [
      { title: 'Calilio review', href: '/reviews/calilio' },
      { title: 'Calilio pricing', href: '/guides/calilio-pricing' },
      {
        title: 'Compare with CallHippo',
        href: '/comparisons/calilio-vs-callhippo',
      },
    ],
  },
  {
    title: 'Quo Alternatives',
    description:
      'Compare collaborative business-phone, virtual-number, cloud-calling, contact-center, and broader communications operating models.',
    href: '/alternatives/quo-alternatives',
    relatedLinks: [
      { title: 'Quo review', href: '/reviews/quo' },
      { title: 'Quo pricing', href: '/guides/quo-pricing' },
      {
        title: 'Compare with KrispCall',
        href: '/comparisons/quo-vs-krispcall',
      },
    ],
  },
  {
    title: 'Landbot Alternatives',
    description:
      'Choose between custom conversational automation, live-chat support, omnichannel messaging operations, and ecommerce help-desk workflows.',
    href: '/alternatives/landbot-alternatives',
    relatedLinks: [
      { title: 'Landbot review', href: '/reviews/landbot' },
      { title: 'Landbot pricing', href: '/guides/landbot-pricing' },
      { title: 'Compare with Tidio', href: '/comparisons/landbot-vs-tidio' },
    ],
  },
  {
    title: 'Pipedrive Alternatives',
    description:
      'Choose by pipeline specialization, broader CRM and customer-suite scope, support operations, automation, ecosystem, and configured cost.',
    href: '/alternatives/pipedrive-alternatives',
    relatedLinks: [
      { title: 'Pipedrive review', href: '/reviews/pipedrive' },
      { title: 'Pipedrive pricing', href: '/guides/pipedrive-pricing' },
      {
        title: 'Compare with EngageBay',
        href: '/comparisons/pipedrive-vs-engagebay',
      },
    ],
  },
  {
    title: 'NinjaOne Alternatives',
    description:
      'Choose by endpoint management, RMM, patching, IT help desk, remote support, MSP workflow, MDM, and narrower product scope.',
    href: '/alternatives/ninjaone-alternatives',
    relatedLinks: [
      { title: 'NinjaOne Review', href: '/reviews/ninjaone' },
      { title: 'NinjaOne Pricing', href: '/guides/ninjaone-pricing' },
    ],
  },
  {
    title: 'Bookyourdata Alternatives',
    description:
      'Choose by subscription versus pay as you go, sales intelligence, outreach, CRM-native workflow, enrichment, geography, and volume.',
    href: '/alternatives/bookyourdata-alternatives',
    relatedLinks: [
      { title: 'Bookyourdata Review', href: '/reviews/bookyourdata' },
      { title: 'Bookyourdata Pricing', href: '/guides/bookyourdata-pricing' },
    ],
  },
  {
    title: 'AWeber Alternatives',
    description:
      'Choose by subscriber economics, creator workflow, ecommerce depth, CRM breadth, volume, and automation needs.',
    href: '/alternatives/aweber-alternatives',
    relatedLinks: [
      { title: 'AWeber Review', href: '/reviews/aweber' },
      {
        title: 'Campaign Monitor vs AWeber',
        href: '/comparisons/campaign-monitor-vs-aweber',
      },
    ],
  },
  {
    title: 'Campaign Monitor Alternatives',
    description:
      'Choose by email workflow, broader CRM scope, support operations, messaging channels, automation, and billing model.',
    href: '/alternatives/campaign-monitor-alternatives',
    relatedLinks: [
      { title: 'Campaign Monitor Review', href: '/reviews/campaign-monitor' },
      {
        title: 'Campaign Monitor Pricing',
        href: '/guides/campaign-monitor-pricing',
      },
    ],
  },
  {
    title: 'Fireflies.ai Alternatives',
    description:
      'Choose by broad meeting intelligence, sales coaching, CRM workflow, AI-credit use, and governance needs.',
    href: '/alternatives/fireflies-alternatives',
    relatedLinks: [
      { title: 'Fireflies.ai Review', href: '/reviews/fireflies' },
      {
        title: 'Fireflies.ai vs Claap',
        href: '/comparisons/fireflies-vs-claap',
      },
    ],
  },
  {
    title: 'EngageBay Alternatives',
    description:
      'Choose among broader platforms, specialist support, and omnichannel messaging based on operating fit.',
    href: '/alternatives/engagebay-alternatives',
    relatedLinks: [
      { title: 'EngageBay Review', href: '/reviews/engagebay' },
      {
        title: 'EngageBay vs HubSpot',
        href: '/comparisons/engagebay-vs-hubspot',
      },
    ],
  },
  {
    title: 'EazyChat.io Alternatives',
    description:
      'Compare broader help-desk, ecommerce, and omnichannel options with focused AI website chat.',
    href: '/alternatives/eazychat-alternatives',
    relatedLinks: [
      { title: 'EazyChat.io Review', href: '/reviews/eazychat' },
      { title: 'EazyChat.io vs Tidio', href: '/comparisons/eazychat-vs-tidio' },
    ],
  },
  {
    title: 'Tidio Alternatives',
    description:
      'Choose by ecommerce specialization, omnichannel messaging, or a narrower AI-chat model.',
    href: '/alternatives/tidio-alternatives',
    relatedLinks: [
      { title: 'Tidio Review', href: '/reviews/tidio' },
      { title: 'Tidio vs Gorgias', href: '/comparisons/tidio-vs-gorgias' },
    ],
  },
  {
    title: 'Gorgias Alternatives',
    description:
      'Evaluate general support, omnichannel, or CRM paths when ecommerce help-desk depth is not central.',
    href: '/alternatives/gorgias-alternatives',
    relatedLinks: [
      { title: 'Gorgias Review', href: '/reviews/gorgias' },
      { title: 'Tidio vs Gorgias', href: '/comparisons/tidio-vs-gorgias' },
    ],
  },
  {
    title: 'respond.io Alternatives',
    description:
      'Compare website support, CRM, and business-phone paths with omnichannel conversation management.',
    href: '/alternatives/respond-io-alternatives',
    relatedLinks: [
      { title: 'respond.io Review', href: '/reviews/respond-io' },
      {
        title: 'respond.io vs Tidio',
        href: '/comparisons/respond-io-vs-tidio',
      },
    ],
  },
  {
    title: 'HubSpot Alternatives',
    description:
      'Choose by lower-complexity suite, support-first, live-chat, or omnichannel requirements.',
    href: '/alternatives/hubspot-alternatives',
    relatedLinks: [
      {
        title: 'EngageBay vs HubSpot',
        href: '/comparisons/engagebay-vs-hubspot',
      },
      { title: 'EngageBay Pricing', href: '/guides/engagebay-pricing' },
    ],
  },
  {
    title: 'Salesmsg Alternatives',
    description:
      'Choose among cloud-phone, omnichannel messaging, and CRM-suite paths when CRM-connected texting is not central.',
    href: '/alternatives/salesmsg-alternatives',
    relatedLinks: [
      { title: 'Salesmsg Review', href: '/reviews/salesmsg' },
      { title: 'Salesmsg Pricing', href: '/guides/salesmsg-pricing' },
    ],
  },
  {
    title: 'Vida.io Alternatives',
    description:
      'Choose by AI-agent deployment, business calling, CRM-connected texting, or messaging operations.',
    href: '/alternatives/vida-alternatives',
    relatedLinks: [
      { title: 'Vida.io Review', href: '/reviews/vida' },
      { title: 'Vida.io Pricing', href: '/guides/vida-pricing' },
    ],
  },
  {
    title: 'Demodesk Alternatives',
    description:
      'Choose by meeting intelligence, sales coaching, CRM workflow, autonomous agents, and governance needs.',
    href: '/alternatives/demodesk-alternatives',
    relatedLinks: [
      { title: 'Demodesk Review', href: '/reviews/demodesk' },
      { title: 'Demodesk Pricing', href: '/guides/demodesk-pricing' },
    ],
  },
  {
    title: 'Claap Alternatives',
    description:
      'Choose by meeting capture, sales coaching, CRM enrichment, deal intelligence, enterprise governance, and AI workflow needs.',
    href: '/alternatives/claap-alternatives',
    relatedLinks: [
      { title: 'Claap Review', href: '/reviews/claap' },
      { title: 'Claap vs Demodesk', href: '/comparisons/claap-vs-demodesk' },
    ],
  },
];

const softwareCategoryEntries: Entry[] = softwareCategories.map((category) => ({
  title: category.shortTitle,
  description: category.definition,
  href: `/categories/${category.slug}`,
}));

const softwareDecisionEntries: Entry[] = [
  {
    title: 'Automate customer support',
    description:
      'Start with AI automation scope, escalation, knowledge, and human oversight.',
    href: '/#categories',
  },
  {
    title: 'Improve business calling',
    description:
      'Evaluate numbers, routing, calling, messaging, administration, and usage costs.',
    href: '/#categories',
  },
  {
    title: 'Manage customer conversations',
    description:
      'Compare channel coverage, shared context, ownership, and workflow automation.',
    href: '/#categories',
  },
  {
    title: 'Add an AI receptionist',
    description:
      'Review answering scope, handoff, operating hours, controls, and billing.',
    href: '/#categories',
  },
  {
    title: 'Equip a small support team',
    description:
      'Focus on inbox, ticketing, live chat, automation, seats, and practical limits.',
    href: '/#categories',
  },
];

const comparisonEntries: Entry[] = [
  {
    title: 'Help Scout vs Gorgias',
    description:
      'Shared inbox, Docs, and Beacon support compared with ecommerce-centered help desk workflow.',
    href: '/comparisons/help-scout-vs-gorgias',
    relatedLinks: [
      { title: 'Help Scout review', href: '/reviews/help-scout' },
      { title: 'Gorgias review', href: '/reviews/gorgias' },
    ],
  },
  {
    title: 'Capsule CRM vs Pipedrive',
    description:
      'A scoped contact-and-workflow CRM compared with a more explicitly pipeline-first sales CRM.',
    href: '/comparisons/capsule-crm-vs-pipedrive',
    relatedLinks: [
      { title: 'Capsule CRM review', href: '/reviews/capsule-crm' },
      { title: 'Pipedrive review', href: '/reviews/pipedrive' },
    ],
  },
  {
    title: 'Calilio vs CallHippo',
    description:
      'SMB cloud-phone plans compared across numbers, calling, SMS, routing, dialers, monitoring, AI, bundles, and overage.',
    href: '/comparisons/calilio-vs-callhippo',
    relatedLinks: [
      { title: 'Calilio review', href: '/reviews/calilio' },
      { title: 'Calilio pricing', href: '/guides/calilio-pricing' },
    ],
  },
  {
    title: 'Quo vs KrispCall',
    description:
      'Collaborative phone workspace, virtual numbers, calling, messaging, routing, AI, integrations, usage, and conditional business fit.',
    href: '/comparisons/quo-vs-krispcall',
    relatedLinks: [
      { title: 'Quo review', href: '/reviews/quo' },
      { title: 'Quo pricing', href: '/guides/quo-pricing' },
    ],
  },
  {
    title: 'Landbot vs Tidio',
    description:
      'A conversational automation builder compared with a broader live-chat and customer-support workspace.',
    href: '/comparisons/landbot-vs-tidio',
  },
  {
    title: 'Pipedrive vs EngageBay',
    description:
      'Pipeline-first sales CRM compared with a broader connected CRM, marketing, sales, live chat, and service suite.',
    href: '/comparisons/pipedrive-vs-engagebay',
  },
  {
    title: 'Campaign Monitor vs AWeber',
    description:
      'Compare buyer fit, email workflow, automation, AI, contact and subscriber pricing, sends, integrations, and commerce context.',
    href: '/comparisons/campaign-monitor-vs-aweber',
  },
  {
    title: 'Fireflies.ai vs Claap',
    description:
      'Meeting intelligence, sales conversation workflow, CRM enrichment, coaching, AI-credit use, and plan boundaries.',
    href: '/comparisons/fireflies-vs-claap',
  },
  {
    title: 'Claap vs Demodesk',
    description:
      'Sales conversation capture, coaching, CRM workflow, deal intelligence, AI automation, and commercial-model boundaries.',
    href: '/comparisons/claap-vs-demodesk',
  },
  {
    title: 'EngageBay vs HubSpot',
    description:
      'A compact customer suite compared with a broader multi-hub platform.',
    href: '/comparisons/engagebay-vs-hubspot',
  },
  {
    title: 'EazyChat.io vs Tidio',
    description:
      'Focused AI website chat compared with a broader support stack.',
    href: '/comparisons/eazychat-vs-tidio',
  },
  {
    title: 'Tidio vs Gorgias',
    description:
      'Live chat and AI support versus an ecommerce help-desk workflow.',
    href: '/comparisons/tidio-vs-gorgias',
  },
  {
    title: 'respond.io vs Tidio',
    description:
      'Omnichannel messaging workflows versus web chat and ticket support.',
    href: '/comparisons/respond-io-vs-tidio',
  },
  {
    title: 'KrispCall vs CallHippo',
    description:
      'Cloud phone plans, virtual numbers, calling usage, and routing.',
    href: '/comparisons/krispcall-vs-callhippo',
  },
  {
    title: 'KrispCall vs Aircall',
    description:
      'A compact business-phone model versus structured communications workflows.',
    href: '/comparisons/krispcall-vs-aircall',
  },
];

function useDescription(content: string) {
  useEffect(() => {
    const meta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    const previous = meta?.content;
    if (meta) meta.content = content;
    return () => {
      if (meta && previous) meta.content = previous;
    };
  }, [content]);
}

function HubPage({
  code,
  eyebrow,
  title,
  description,
  canonical,
  entries,
  sectionTitle,
  related,
  categoryEntries,
  showReviewMethodology = false,
  structuredData = false,
}: {
  code: string;
  eyebrow: string;
  title: string;
  description: string;
  canonical: string;
  entries: Entry[];
  sectionTitle?: string;
  related: Entry[];
  categoryEntries?: Entry[];
  showReviewMethodology?: boolean;
  structuredData?: boolean;
}) {
  useDescription(description);
  const isComparisonHub = code === 'CP';
  const isReviewsHub = code === 'RV';
  const hasProductMarks = isReviewsHub || code === 'BG' || code === 'AL';
  const featuredComparison =
    entries.find((entry) => entry.title === 'Tidio vs Gorgias') ?? entries[0];
  const featuredNames = featuredComparison?.title.split(' vs ') ?? [];
  return (
    <PageLayout footer={<SiteFooter />} header={<SiteHeader />}>
      <title>{`${title} | Racklio`}</title>
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary" />
      {structuredData ? (
        <>
          <script
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'CollectionPage',
                name: title,
                description,
                url: canonical,
                hasPart: entries.map((entry) => ({
                  '@type': 'Article',
                  name: entry.title,
                  url: `https://racklio.com${entry.href}`,
                })),
              }),
            }}
            type="application/ld+json"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://racklio.com/',
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: title,
                    item: canonical,
                  },
                ],
              }),
            }}
            type="application/ld+json"
          />
        </>
      ) : null}
      <>
        <Section
          className="border-b border-border bg-[linear-gradient(120deg,var(--color-surface),var(--color-mint-subtle))] py-9 sm:py-11 lg:py-12"
          spacing="none"
        >
          <Container>
            <div
              className={
                isComparisonHub || isReviewsHub
                  ? 'grid min-w-0 items-center gap-7 lg:grid-cols-[minmax(0,0.85fr)_minmax(23rem,0.9fr)] lg:gap-12'
                  : 'min-w-0 max-w-4xl'
              }
            >
              <div className="min-w-0">
                <ResearchMarker code={code} label={eyebrow} />
                <h1 className="mt-5 max-w-4xl break-words text-3xl leading-[1.1] font-semibold tracking-[-0.045em] sm:text-5xl">
                  {title}
                </h1>
                <p className="mt-5 max-w-2xl break-words text-lg leading-8 text-muted-foreground">
                  {description}
                </p>
              </div>
              {isComparisonHub &&
              featuredComparison &&
              featuredNames.length === 2 ? (
                <aside className="min-w-0 rounded-2xl border border-brand/20 bg-white/92 p-5 shadow-panel sm:p-6">
                  <p className="text-[0.68rem] font-bold tracking-[0.14em] text-accent-strong uppercase">
                    Start with a live decision
                  </p>
                  <div className="mt-5">
                    <ComparisonIdentity
                      a={featuredNames[0] ?? ''}
                      b={featuredNames[1] ?? ''}
                      useProductLogos
                    />
                  </div>
                  <p className="mt-5 border-t border-border pt-4 text-sm leading-6 text-muted-foreground">
                    {featuredComparison.description}
                  </p>
                  <Link
                    className="mt-4 inline-block text-sm font-semibold"
                    href={featuredComparison.href}
                  >
                    Open comparison →
                  </Link>
                </aside>
              ) : null}
              {isReviewsHub ? (
                <aside className="min-w-0 rounded-2xl border border-brand/20 bg-white/92 p-5 shadow-panel sm:p-6">
                  <p className="text-[0.68rem] font-bold tracking-[0.14em] text-accent-strong uppercase">
                    Published review coverage
                  </p>
                  <dl className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
                    {[
                      [
                        String(editorialCoverageCounts.reviews),
                        'Published reviews',
                      ],
                      [
                        String(editorialCoverageCounts.categories),
                        'Focused categories',
                      ],
                    ].map(([value, label]) => (
                      <div className="bg-white p-4" key={label}>
                        <dt className="text-2xl font-semibold tracking-[-0.04em] text-brand">
                          {value}
                        </dt>
                        <dd className="mt-1 text-xs leading-5 text-muted-foreground">
                          {label}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                    <li>Official sources verified</li>
                    <li>No paid rankings</li>
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-4 text-sm">
                    <Link href="/comparisons">Browse comparisons</Link>
                    <Link href="/guides">Pricing guides</Link>
                    <Link href="/#categories">Categories</Link>
                  </div>
                </aside>
              ) : null}
            </div>
          </Container>
        </Section>
        <Section className="py-10 sm:py-12 lg:py-14" spacing="none">
          <Container>
            {categoryEntries?.length ? (
              <div className="mb-10 border-b border-border pb-10 sm:mb-12 sm:pb-12">
                <h2 className="text-2xl font-semibold">Browse by category</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
                  Start with the customer workflow, then evaluate the products
                  and trade-offs inside that category.
                </p>
                <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {categoryEntries.map((entry) => (
                    <ClickableCard
                      className="min-w-0"
                      href={entry.href}
                      key={entry.href}
                      label={`Explore ${entry.title}`}
                    >
                      <CardContent className="flex h-full min-w-0 flex-col">
                        <h3 className="break-words font-semibold">
                          {entry.title}
                        </h3>
                        <p className="mt-3 break-words text-sm leading-6 text-muted-foreground">
                          {entry.description}
                        </p>
                        <span className="mt-auto pt-5 text-sm font-semibold">
                          Explore category →
                        </span>
                      </CardContent>
                    </ClickableCard>
                  ))}
                </div>
              </div>
            ) : null}
            {sectionTitle ? (
              <h2 className="mb-7 text-2xl font-semibold">{sectionTitle}</h2>
            ) : null}
            <div className="grid min-w-0 gap-4 md:grid-cols-2">
              {entries.map((entry, index) => {
                const comparedNames = entry.title.split(' vs ');
                const productName = getEntryProductName(entry.title);
                return (
                  <ClickableCard
                    className="min-w-0"
                    href={entry.href}
                    key={entry.title}
                    label={`Open ${entry.title}`}
                  >
                    <CardContent className="flex h-full min-w-0 flex-col">
                      {isComparisonHub && comparedNames.length === 2 ? (
                        <ComparisonIdentity
                          a={comparedNames[0] ?? ''}
                          b={comparedNames[1] ?? ''}
                          useProductLogos
                        />
                      ) : hasProductMarks &&
                        isCurrentProductBrand(productName) ? (
                        <ProductLogo name={productName} size="sm" />
                      ) : (
                        <p className="font-mono text-[0.625rem] text-accent-strong">
                          {String(index + 1).padStart(2, '0')}
                        </p>
                      )}
                      {sectionTitle ? (
                        <h3
                          className={
                            isComparisonHub
                              ? 'sr-only'
                              : 'mt-4 break-words text-xl font-semibold tracking-tight'
                          }
                        >
                          {entry.suppressLink ? entry.title : entry.title}
                        </h3>
                      ) : (
                        <h2 className="mt-4 break-words text-xl font-semibold tracking-tight">
                          {entry.suppressLink ? entry.title : entry.title}
                        </h2>
                      )}
                      <p className="mt-3 break-words text-sm leading-6 text-muted-foreground">
                        {entry.description}
                      </p>
                      {isComparisonHub ? (
                        <p className="mt-4 border-t border-border pt-4 text-xs font-semibold tracking-[0.08em] text-mint-deep uppercase">
                          Decision lens: operating fit and documented trade-offs
                        </p>
                      ) : null}
                      {!entry.suppressLink ? (
                        <span className="mt-auto inline-block pt-5 text-sm font-semibold">
                          Open decision page →
                        </span>
                      ) : null}
                      {entry.relatedLinks?.length ? (
                        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-4 text-sm">
                          {entry.relatedLinks.map((link) => (
                            <Link
                              className="relative z-20"
                              href={link.href}
                              key={link.href}
                            >
                              {link.title}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </CardContent>
                  </ClickableCard>
                );
              })}
            </div>
            {showReviewMethodology ? (
              <div className="mt-14 grid gap-4 border-t border-border pt-10 md:grid-cols-2">
                <Card>
                  <CardContent>
                    <p className="text-xs font-semibold tracking-[0.14em] text-accent-strong uppercase">
                      Research process
                    </p>
                    <h2 className="mt-3 text-xl font-semibold">
                      How Racklio reviews software
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      Racklio starts with official pricing, product
                      documentation, help centers, legal pages, and other
                      provider-controlled sources. Conclusions remain
                      conditional on buyer needs.
                    </p>
                    <Link className="mt-5 inline-block" href="/methodology">
                      Read the methodology →
                    </Link>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent>
                    <p className="text-xs font-semibold tracking-[0.14em] text-accent-strong uppercase">
                      Editorial independence
                    </p>
                    <h2 className="mt-3 text-xl font-semibold">
                      Evidence before commercial relationships
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      Racklio does not sell rankings or publish scores.
                      Affiliate relationships do not determine conclusions or
                      product fit.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                      <Link href="/editorial-standards">
                        Editorial Standards
                      </Link>
                      <Link href="/affiliate-disclosure">
                        Affiliate Disclosure
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : null}
          </Container>
        </Section>
        <Section
          className="border-t border-border bg-surface-subtle"
          spacing="md"
        >
          <Container>
            <h2 className="text-2xl font-semibold">Continue your decision</h2>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
              {related.map((entry) => (
                <Link href={entry.href} key={entry.href}>
                  {entry.title}
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      </>
    </PageLayout>
  );
}

export function ReviewsHub() {
  return (
    <HubPage
      code="RV"
      eyebrow="Provider investigation"
      title="Software Reviews for Customer-Facing Teams"
      description="Racklio reviews software used to support customers, manage conversations, improve business communication, and organize customer relationships—using official evidence, explicit limitations, and conditional decision guidance."
      canonical="https://racklio.com/reviews"
      entries={reviewEntries}
      sectionTitle="Customer service software"
      categoryEntries={softwareCategoryEntries}
      showReviewMethodology
      related={[
        { title: 'Compare providers', description: '', href: '/comparisons' },
        { title: 'Choose by workload', description: '', href: '/guides' },
      ]}
    />
  );
}
export function ComparisonsHub() {
  return (
    <HubPage
      code="CP"
      eyebrow="Direct provider comparison"
      title="Customer Service Software Comparisons"
      description="Evidence-first comparisons of AI customer support and business communication software, focused on pricing, capabilities, limitations, and practical business fit."
      canonical="https://racklio.com/comparisons"
      entries={comparisonEntries}
      sectionTitle="Customer service software"
      related={[
        { title: 'Read provider reviews', description: '', href: '/reviews' },
        { title: 'Choose by workload', description: '', href: '/guides' },
      ]}
    />
  );
}
export function BestSoftwareHub() {
  return (
    <HubPage
      code="BS"
      eyebrow="Outcome-based software decisions"
      title="Best Software for Your Business Need"
      description="Start with the outcome your team needs, then evaluate software around verified capabilities, limits, and operating fit."
      canonical="https://racklio.com/#best"
      entries={softwareDecisionEntries}
      related={[
        {
          title: 'Browse software reviews',
          description: '',
          href: '/#reviews',
        },
        { title: 'Explore categories', description: '', href: '/#categories' },
      ]}
    />
  );
}
export function CategoriesHub() {
  return <CategoryHubTemplate categories={softwareCategories} />;
}
export function GuidesHub() {
  return (
    <HubPage
      code="BG"
      eyebrow="Workload-based decisions"
      title="Customer Service Software Guides"
      description="Start with the customer workflow your team needs to improve, then evaluate software around relevant capabilities, limits, and operating fit."
      canonical="https://racklio.com/guides"
      entries={commercialGuideEntries}
      sectionTitle="Pricing and product decisions"
      categoryEntries={softwareCategoryEntries}
      related={[
        { title: 'Read provider reviews', description: '', href: '/reviews' },
        { title: 'Compare providers', description: '', href: '/comparisons' },
      ]}
    />
  );
}

export function AlternativesHub() {
  return (
    <HubPage
      code="AL"
      eyebrow="Scenario-led replacement paths"
      title="Software Alternatives by Business Need"
      description="Alternative guides begin with the reason a product may not fit, then connect buyers to products with a meaningfully different workflow, scope, pricing model, or operating requirement. No universal replacements or paid rankings."
      canonical="https://racklio.com/alternatives"
      entries={alternativeEntries}
      sectionTitle="Current alternative guides"
      categoryEntries={softwareCategoryEntries}
      showReviewMethodology
      structuredData
      related={[
        { title: 'Read software reviews', description: '', href: '/reviews' },
        { title: 'Compare finalists', description: '', href: '/comparisons' },
        { title: 'Understand pricing', description: '', href: '/guides' },
      ]}
    />
  );
}

export function SearchPage() {
  const [query, setQuery] = useState('');
  useDescription(
    'Search Racklio reviews, comparisons, categories, and software buying guidance.',
  );
  const entries = useMemo(
    () => [
      ...reviewEntries,
      ...comparisonEntries,
      ...commercialGuideEntries,
      ...alternativeEntries,
      ...softwareCategoryEntries,
    ],
    [],
  );
  const results = entries.filter((entry) =>
    `${entry.title} ${entry.description}`
      .toLowerCase()
      .includes(query.trim().toLowerCase()),
  );
  return (
    <PageLayout footer={<SiteFooter />} header={<SiteHeader />}>
      <title>Search Racklio</title>
      <link rel="canonical" href="https://racklio.com/search" />
      <meta name="robots" content="noindex,follow" />
      <Section>
        <Container>
          <ResearchMarker code="SR" label="Site search" />
          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em]">
            Search Racklio
          </h1>
          <label className="mt-8 block max-w-2xl">
            <span className="text-sm font-semibold">
              Search existing decision content
            </span>
            <input
              className="mt-2 w-full border border-border bg-surface-raised px-4 py-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Provider, comparison, or workload"
              type="search"
              value={query}
            />
          </label>
          <p aria-live="polite" className="mt-4 text-sm text-muted-foreground">
            {results.length} {results.length === 1 ? 'result' : 'results'}
          </p>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {results.map((entry) => {
              const productName = getEntryProductName(entry.title);
              const showProductLogo = isCurrentProductBrand(productName);
              return (
                <Link
                  className="flex items-start gap-3 border border-border p-5"
                  href={entry.href}
                  key={entry.href}
                >
                  {showProductLogo ? (
                    <ProductLogo name={productName} size="sm" />
                  ) : null}
                  <span>
                    <span className="font-semibold">{entry.title}</span>
                    <span className="mt-2 block text-sm text-muted-foreground">
                      {entry.description}
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}

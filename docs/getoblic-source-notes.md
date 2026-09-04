# GetOblic integration source notes

Verified: September 4, 2026. Documentary research only; no account, call-quality, reliability, booking, security, or conversion testing.

## Official evidence

- https://getoblic.com/ — current directory/voice product positioning and public cancellation/guarantee claims.
- https://getoblic.com/media-kit/ — free listing assistant versus paid receptionist, local-service audience. No customer-count or performance claims imported.
- https://getoblic.com/faq/ — receptionist, virtual number, forwarding, dedicated calendar, website access, setup, and WhatsApp descriptions. FAQ lists $99/month or $89/month with annual billing. WhatsApp is separately activated and listed at $49/month or $36/month with annual billing.
- https://getoblic.com/partners/ — still lists $59/month. Used to document the conflict, not as proof of a currently purchasable offer.
- https://getoblic.com/terms-conditions/ — also lists $59/month per location; cancellation takes effect next billing cycle. Owners must review pre-filled listing/demo information. Do not infer annual refund entitlement from “cancel anytime.”
- https://getoblic.com/privacy-policy/ — retention varies by purpose; international processing described. No compliance certification inferred.
- https://getoblic.com/whatsapp-experience/ — business-management interactions; FAQ also describes customer messaging. Confirm the purchased workflow instead of equating the descriptions.
- https://www.ringoperator.com/ — monthly tiers $25/$100/$300; included minutes 100/500/2,000; extra minutes $0.25/$0.20/$0.15; SMS $0.20/$0.15/$0.10. Google Calendar, booking, waitlist, number and transfer scope. The page’s summer promotion ends August 31; the new comparison deliberately makes no current trial entitlement claim.

## Pricing decision

Conflict remains unresolved. The public referral/signup destination was challenged by Cloudflare during automated inspection; no final order or payment step was submitted. Both conflicting prices are visible in the new content. Readers are directed to obtain written confirmation of price, currency, taxes, billing frequency, locations, usage conditions, optional channels, renewal and refund terms. No savings or cheapest-provider recommendation.

## Official asset

Media Kit → View Brand Assets → https://getoblic.com/design-system/.

Original compact mark: https://getoblic.com/brand/getoblic-logo-128.png (used by the official Media Kit page).

Local: `public/brands/getoblic.png`. Original bytes retained, no recoloring, cropping, or recreation. The official SVG contains embedded 160px raster artwork. The official 512px PNG is 446,718 bytes; the 128px variant is 26,145 bytes and exceeds 3× the largest 40px rendered artwork size. The compact version avoids unnecessary image transfer without changing the mark. The brand-assets page explicitly permits editorial/partnership use and prohibits alterations. No product screenshots added.

## Architecture

Public affiliate destination exists only in `provider-links.ts`. Review and comparison CTA labels describe claiming a listing, not opening a plan table. Optional label fields preserve default output on all existing pages. Sources remain ordinary editorial links. Search derives routes from the sitemap and active inventory; the name override preserves GetOblic capitalization and logo matching.

One comparison selected: RingOperator, because both serve local-business call-answering and booking intent. The meaningful differences are directory/free-assistant entry, calendar documentation, and usage models—not commission. No thin pricing or alternatives page created.

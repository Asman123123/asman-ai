# ASMAN TECH Premium Website

A premium enterprise-grade ASMAN TECH website built with Next.js 15, React, TypeScript, Tailwind CSS, Framer Motion, GSAP, Three.js, Lucide Icons, and a lightweight local i18n layer.

## Latest conversion and trust pass

- Updated hero messaging toward enterprise conversion: smarter systems, measurable outcomes, refined product panel.
- Removed fake-looking numeric proof stats and replaced them with trust indicators: Enterprise Solutions, Global Delivery, Multi-Industry Expertise, Long-Term Support.
- Replaced generic testimonials with Client Success Stories organized by Industry, Challenge, Solution, Outcome, and KPI visualization.
- Updated Technology section wording to “Technologies We Work With” to avoid implying vendor affiliation.
- Added Why Businesses Choose ASMAN TECH trust section.
- Added Resources Center with article cards for AI Automation, Software Development, SaaS Strategy, CRM Systems, and Digital Transformation.
- Added enterprise CTA before footer: “Ready to Discuss Your Next Technology Initiative?” with Request Proposal and Book a Strategy Call actions.
- Simplified the desktop and mobile navigation to Home, Services, Solutions, Case Studies, About, and Resources.
- Added a dedicated `/terms-and-policies` hub and reduced legal clutter in the header and footer.
- Added a premium “What Happens Next?” timeline to the Contact page.
- Added `sitemap.xml`, `robots.txt`, and a custom 404 page for launch readiness.
- Redesigned footer into Brand, Services, Company, Resources, Contact, and Newsletter sections.
- Added the required small legal footer notice: “ASMAN TECH is a brand operated by ASMAN LLC. All rights reserved.”
- Added Organization, FAQ, and Blog schema JSON-LD for SEO authority.
- Removed artificial hero metrics and replaced them with status-based labels.
- Updated hero headline and subheadline to: “Build Smarter Systems. Scale Faster.”
- Added contact-form consent links to Terms & Conditions and Privacy Policy.
- Added production legal routes for Payment Terms, Project Delivery Policy, Cancellation Policy, and Intellectual Property Policy.
- Removed public location display from Organization schema while keeping ASMAN LLC only where legally relevant.

## Brand/i18n pass

- Integrated the provided ASMAN wordmark and favicon/app icon.
- Added multilingual support for English, Russian, Turkish, and Turkmen.
- Added `locales/en.json`, `locales/ru.json`, `locales/tr.json`, and `locales/tk.json`.
- Added a premium header language switcher with localStorage persistence.
- Added Services, Solutions, and Resources dropdown navigation.
- Added Blog, Documentation, and FAQs resource routes.
- Removed visible legal-company wording from marketing pages and kept it only in legal/metadata/footer notice areas.

## Run locally

```powershell
$env:PATH="C:\Users\Windows 11 Pro\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;" + $env:PATH
pnpm install
pnpm dev -- --port 4173
```

Production preview:

```powershell
pnpm build
pnpm start -- --port 4173
```

## Contact form

The form posts to `/api/contact` and supports either Formspree or Resend. Copy `.env.example` to `.env.local` and configure one of these:

- `FORMSPREE_ENDPOINT`
- `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and optionally `CONTACT_FROM_EMAIL`

Optional booking link:

- `NEXT_PUBLIC_CALENDLY_URL`

Without delivery credentials, the API returns a professional fallback message directing the visitor to email ASMAN TECH.

## Pages

- Home
- Services
- Pricing
- Solutions / Industries
- Case Studies
- About
- Contact
- Blog
- Guides
- FAQs
- Terms & Policies
- Privacy Policy
- Terms & Conditions
- Refund Policy
- Cookie Policy
- Acceptable Use Policy
- Payment Terms
- Project Delivery Policy
- Cancellation Policy
- Intellectual Property Policy

## Brand Assets

- Dark UI wordmark: `public/brand/asman-ai-white.png`
- Alternate wordmark: `public/brand/asman-ai-black.png`
- App icon/favicon: `public/icon.png` and `public/apple-icon.png`

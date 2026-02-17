# MN Commercial Solar - Claude Context

## RightNow

**Current State:** SEO pages complete with full internal linking. Site is live at https://www.mncommercialsolar.com

### What's Live (25 pages total)
- 1 Homepage with ROI calculator
- 16 Location pages (Twin Cities metro)
- 8 Industry pages (property types)
- XML sitemap at /sitemap.xml

### Recent Work (Feb 13, 2026)
- Created 16 location SEO pages for Minneapolis metro suburbs
- Created 8 industry vertical pages (warehouses, manufacturing, retail, etc.)
- Added global Navigation component with dropdowns
- Added global Footer component with all links
- Added "Industries We Serve" section to homepage
- Added "Minnesota Service Areas" section to homepage
- Created XML sitemap for Google Search Console

### Pending
- Add real photos to industry pages (placeholders currently)
- Submit sitemap to Google Search Console
- Consider adding more cities or industry pages

---

## Project Overview

Commercial solar lead generation site for Minnesota businesses. Features an interactive ROI calculator that captures leads and sends email notifications.

**Live URL:** https://www.mncommercialsolar.com

---

## Architecture

### Pages Structure
```
src/app/
├── page.tsx                 # Homepage
├── sitemap.ts              # XML sitemap generator
├── api/submit-lead/        # Lead notification API
├── minneapolis/            # Location page
├── st-paul/                # Location page
├── bloomington/            # Location page
├── ... (13 more cities)
├── warehouses/             # Industry page
├── manufacturing/          # Industry page
├── retail/                 # Industry page
├── ... (5 more industries)
```

### Shared Components
```
src/components/
├── Navigation.tsx          # Global nav with dropdowns
├── Footer.tsx              # Global footer with all links
├── SolarEstimator.tsx      # ROI calculator + lead form
├── LocationPage.tsx        # Template for city pages
├── IndustryPage.tsx        # Template for industry pages
```

### Key Files
| File | Purpose |
|------|---------|
| `src/lib/calculations.ts` | Solar cost/financing calculations |
| `src/app/api/submit-lead/route.ts` | Email notification via Resend |

---

## Location Pages (16)

| City | URL | Region |
|------|-----|--------|
| Minneapolis | /minneapolis | Twin Cities |
| St. Paul | /st-paul | East Metro |
| Bloomington | /bloomington | South Metro |
| Plymouth | /plymouth | West Metro |
| Eagan | /eagan | South Metro |
| Woodbury | /woodbury | East Metro |
| Maple Grove | /maple-grove | Northwest |
| Brooklyn Park | /brooklyn-park | Northwest |
| St. Louis Park | /st-louis-park | West Metro |
| Edina | /edina | Southwest |
| Roseville | /roseville | North Metro |
| Maplewood | /maplewood | East Metro |
| Golden Valley | /golden-valley | West Metro |
| Shakopee | /shakopee | Southwest |
| Wayzata | /wayzata | West Metro |
| Chaska | /chaska | Southwest |

---

## Industry Pages (8)

| Industry | URL | Key Keywords |
|----------|-----|--------------|
| Warehouses | /warehouses | warehouse solar, distribution center |
| Manufacturing | /manufacturing | industrial solar, factory solar |
| Retail | /retail | shopping center solar, strip mall |
| Multi-Family | /multi-family | apartment solar, multifamily |
| Office Buildings | /office-buildings | commercial office solar |
| Healthcare | /healthcare | hospital solar, medical building |
| Hospitality | /hospitality | hotel solar, resort solar |
| Agriculture | /agriculture | farm solar, USDA REAP |

---

## Tech Stack

- **Framework:** Next.js 16.1.4
- **Styling:** Tailwind CSS 4
- **Email:** Resend API
- **Hosting:** Vercel
- **Domain:** Cloudflare DNS

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Resend API key |
| `NOTIFICATION_EMAIL` | bganje@gmail.com |

---

## Deployment

```bash
# Deploy to production
npx vercel --prod

# Local development
npm run dev

# Build
npm run build
```

---

## SEO Features

- Unique title/description per page
- City-specific content (utilities, incentives, industries)
- Industry-specific FAQs and case studies
- Internal cross-linking (nav, footer, related pages)
- XML sitemap with all pages
- Location schema markup ready

---

## Next Steps (Suggested)

1. **Photos:** Add real project photos to industry pages
2. **Google:** Submit sitemap.xml to Search Console
3. **Analytics:** Add Google Analytics or Plausible
4. **More Cities:** Eden Prairie, Minnetonka, Burnsville, etc.
5. **Blog:** Consider adding blog for long-tail keywords
6. **Reviews:** Add testimonials/case studies with real data

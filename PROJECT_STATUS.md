# MN Commercial Solar - Project Status

## Live URL
**https://mncommercialsolar.com**

---

## What We Built

### 1. Cost Estimates with Financing Options
- **File:** `src/lib/calculations.ts`
- Calculates system size based on square footage (8 watts per sqft)
- Dynamic cost per watt ($3.50 at 10k sqft → $2.50 at 250k sqft)
- Three financing options:
  - **Cash:** Net cost after 30% ITC, Year 1 MACRS benefit
  - **Loan:** 10yr @ 7.5% APR with monthly payment calculator
  - **PPA:** $0.085/kWh, $0 upfront, 2% annual escalator

### 2. Updated Solar Estimator UI
- **File:** `src/components/SolarEstimator.tsx`
- System cost display card (kW, gross cost, annual production)
- 3-button financing selector (Cash / Loan / PPA)
- Conditional financing details panel
- Form submission with loading/error states
- Financing preference included in lead data

### 3. Email Notifications via Resend
- **File:** `src/app/api/submit-lead/route.ts`
- Edge API route for Vercel
- Sends formatted HTML email with:
  - Contact info
  - Building details
  - System estimate
  - Financing preference

### 4. Landing Page
- **File:** `src/app/page.tsx`
- Urgency banner (July 3, 2026 deadline)
- ROI calculator
- Asset class showcase (Industrial, Multi-Family, Retail)
- 2026 Solar Audit Checklist
- FAQ section

---

## Tech Stack
- **Framework:** Next.js 16.1.4
- **React:** 19.2.3
- **Styling:** Tailwind CSS 4
- **Email:** Resend API
- **Hosting:** Vercel
- **Domain DNS:** Cloudflare

---

## Environment Variables (Vercel)
| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Resend API key (encrypted) |
| `NOTIFICATION_EMAIL` | bganje@gmail.com |

---

## Deployment

### Hosting
- **Platform:** Vercel
- **Auto-deploy:** Connected to GitHub repo
- **Production URL:** https://mncommercialsolar.com
- **Vercel URL:** https://mn-commercial-solar.vercel.app

### DNS (Cloudflare)
| Type | Name | Value |
|------|------|-------|
| A | @ | 216.198.79.1 |
| CNAME | www | cname.vercel-dns.com |

Proxy status: OFF (gray cloud) for both records

---

## GitHub Repository
**https://github.com/BennyRogers7/mn-commercial-solar**

---

## Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

### Local Environment
Create `.env.local`:
```
RESEND_API_KEY=re_xxxxxxxxxxxx
NOTIFICATION_EMAIL=your@email.com
```

---

## Key Files

| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Main landing page |
| `src/components/SolarEstimator.tsx` | Calculator + form component |
| `src/lib/calculations.ts` | Cost/financing calculations |
| `src/app/api/submit-lead/route.ts` | Email notification API |
| `wrangler.toml` | Cloudflare config (not used - deployed to Vercel) |
| `.npmrc` | npm config for legacy peer deps |

---

## Notes

### Resend Limitation
Currently can only send emails to `bganje@gmail.com` (account owner). To send to other recipients, verify a domain at resend.com/domains.

### Cloudflare Pages (Not Used)
We initially tried Cloudflare Pages but switched to Vercel due to:
- Token permission issues
- `@cloudflare/next-on-pages` is deprecated
- Vercel has better Next.js integration

---

## Future Improvements
- [ ] Verify domain in Resend to send to multiple recipients
- [ ] Add Google Analytics
- [ ] Add more detailed system sizing options
- [ ] Consider adding a CRM integration

---

*Last updated: February 13, 2026*

import React from 'react';
import SolarEstimator from '@/components/SolarEstimator';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Commercial Solar ROI Calculator Minnesota | MN Solar Energy Asset Audit",
  description: "Calculate commercial solar ROI, MACRS depreciation, and property value increases in Minnesota. Expert solar installers with 13 years of experience.",
};

const locations = [
  { name: 'Minneapolis', slug: 'minneapolis', region: 'Twin Cities' },
  { name: 'St. Paul', slug: 'st-paul', region: 'East Metro' },
  { name: 'Bloomington', slug: 'bloomington', region: 'South Metro' },
  { name: 'Plymouth', slug: 'plymouth', region: 'West Metro' },
  { name: 'Eagan', slug: 'eagan', region: 'South Metro' },
  { name: 'Woodbury', slug: 'woodbury', region: 'East Metro' },
  { name: 'Maple Grove', slug: 'maple-grove', region: 'Northwest' },
  { name: 'Brooklyn Park', slug: 'brooklyn-park', region: 'Northwest' },
  { name: 'St. Louis Park', slug: 'st-louis-park', region: 'West Metro' },
  { name: 'Edina', slug: 'edina', region: 'Southwest' },
  { name: 'Roseville', slug: 'roseville', region: 'North Metro' },
  { name: 'Maplewood', slug: 'maplewood', region: 'East Metro' },
  { name: 'Golden Valley', slug: 'golden-valley', region: 'West Metro' },
  { name: 'Shakopee', slug: 'shakopee', region: 'Southwest' },
  { name: 'Wayzata', slug: 'wayzata', region: 'West Metro' },
  { name: 'Chaska', slug: 'chaska', region: 'Southwest' },
];

const industries = [
  { name: 'Warehouses', slug: 'warehouses', description: 'Distribution centers & logistics facilities' },
  { name: 'Manufacturing', slug: 'manufacturing', description: 'Industrial & production facilities' },
  { name: 'Retail', slug: 'retail', description: 'Shopping centers & strip malls' },
  { name: 'Multi-Family', slug: 'multi-family', description: 'Apartments & housing complexes' },
  { name: 'Office Buildings', slug: 'office-buildings', description: 'Corporate & professional offices' },
  { name: 'Healthcare', slug: 'healthcare', description: 'Hospitals, clinics & medical offices' },
  { name: 'Hospitality', slug: 'hospitality', description: 'Hotels, resorts & event venues' },
  { name: 'Agriculture', slug: 'agriculture', description: 'Farms & rural businesses (REAP eligible)' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#060606] text-[#ededed] font-sans selection:bg-green-500/30">
      {/* 2026 URGENCY BANNER */}
      <div className="bg-red-600 text-white text-[10px] font-black uppercase tracking-[0.3em] py-3 text-center px-4">
        ⚠️ 30% Federal ITC Warning: Projects must commence by July 3, 2026 (sign & pay deposit).
      </div>

      <Navigation />

      <main className="max-w-7xl mx-auto px-6">
        <header className="py-20 lg:pt-24 lg:pb-16 max-w-5xl">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.9] text-white">
            Minnesota <br/>
            <span className="text-green-500 italic text-left">Commercial Solar ROI.</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed text-left">
            Helping MN businesses transform utility expenses into appraised asset value for over 13 years. Run your 2026 financial forecast below.
          </p>
        </header>

        {/* CALCULATOR & FORM SIDE-BY-SIDE */}
        <section id="calculator" className="pb-24">
           <SolarEstimator />
        </section>

        <section className="py-24 border-t border-white/5">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-[0.3em] mb-12">Performance by Asset Class</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* WAREHOUSE / INDUSTRIAL */}
            <a href="/warehouses" className="group relative aspect-square overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-900 block">
              <img src="/warehouse-solar.jpg" alt="Commercial Solar Warehouse" className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black to-transparent">
                <p className="text-green-500 font-bold text-[10px] uppercase mb-2">Industrial</p>
                <p className="text-2xl font-bold text-white italic">High-Yield Flat Roofs</p>
              </div>
            </a>
            {/* MULTI-FAMILY */}
            <a href="/multi-family" className="group relative aspect-square overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-900 block">
              <img src="/apartment-solar.jpg" alt="Multi-family Solar" className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black to-transparent">
                <p className="text-green-500 font-bold text-[10px] uppercase mb-2">Multi-Family</p>
                <p className="text-2xl font-bold text-white italic">NOI-Driven Arrays</p>
              </div>
            </a>
            {/* RETAIL */}
            <a href="/retail" className="group relative aspect-square overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-900 block">
              <img src="/retail-solar.jpg" alt="Retail Commercial Solar" className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black to-transparent">
                <p className="text-green-500 font-bold text-[10px] uppercase mb-2">Retail / Mixed-Use</p>
                <p className="text-2xl font-bold text-white italic">OpEx Control</p>
              </div>
            </a>
          </div>
        </section>

        {/* INDUSTRIES SECTION */}
        <section className="py-24 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold italic text-white mb-2">Industries We Serve</h2>
              <p className="text-zinc-500 text-sm">Specialized solar solutions for every commercial property type</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((industry) => (
              <a
                key={industry.slug}
                href={`/${industry.slug}`}
                className="group p-6 bg-zinc-900/50 rounded-2xl border border-white/5 hover:border-green-500/30 transition-all"
              >
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-green-500 transition-colors">
                  {industry.name}
                </h3>
                <p className="text-zinc-500 text-sm">{industry.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* SERVICE AREAS SECTION */}
        <section className="py-24 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold italic text-white mb-2">Minnesota Service Areas</h2>
              <p className="text-zinc-500 text-sm">Commercial solar installation across the Twin Cities metro</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {locations.map((location) => (
              <a
                key={location.slug}
                href={`/${location.slug}`}
                className="group p-4 bg-zinc-900/50 rounded-xl border border-white/5 hover:border-green-500/30 hover:bg-zinc-900 transition-all text-center"
              >
                <p className="text-sm font-bold text-white group-hover:text-green-500 transition-colors">
                  {location.name}
                </p>
                <p className="text-[10px] text-zinc-600 uppercase tracking-wider mt-1">{location.region}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="py-24 border-t border-white/5 bg-gradient-to-b from-transparent to-zinc-950/50">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl font-bold italic mb-6">Built on 13 Years of MN Grid Expertise</h2>
            <p className="text-zinc-400 leading-relaxed mb-10">
              MN Commercial Solar is an independent ROI-modeling platform. To ensure 100% financial accuracy, every audit requested here is processed by the senior engineering team at <a href="https://apadanatechnology.com" className="text-green-500 hover:underline">Apadana Technology</a>.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="text-2xl font-black text-white">13+</p>
                <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Years in MN</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">MWs</p>
                <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Installed</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">Class A</p>
                <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Licensed</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">2026</p>
                <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Compliant</p>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST & SEO CONTENT SECTION */}
        <section className="py-24 border-t border-white/5 grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT COLUMN: CHECKLIST */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold italic text-white text-left tracking-tight">The 2026 Solar Audit Checklist</h2>
            <p className="text-zinc-500 text-sm text-left">Essential variables our engineers verify for every MN commercial asset.</p>
            <ul className="space-y-6">
              {[
                { t: "ITC Compliance Audit", d: "Verification that your project meets the July 3, 2026 Safe Harbor start-date." },
                { t: "MACRS Tax Strategy", d: "Accelerated 5-year depreciation modeling to maximize Year-1 cash flow." },
                { t: "NOI Value Appraisal", d: "Calculating exactly how much your property valuation will increase at a 7% Cap Rate." },
                { t: "Utility Interconnect", d: "MN-specific grid capacity check for Xcel Energy and local Co-ops." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4 border-b border-white/5 pb-6">
                  <span className="text-green-500 font-mono text-sm">0{i+1}</span>
                  <div className="text-left">
                    <h4 className="font-bold text-white text-sm uppercase tracking-wider">{item.t}</h4>
                    <p className="text-xs text-zinc-500 mt-1">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT COLUMN: EXPANDED 8-QUESTION FAQ */}
          <div id="faq" className="bg-zinc-900/30 p-8 md:p-12 rounded-[3rem] border border-white/5">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-green-500 mb-8 text-left">2026 Strategy FAQ</h2>
            <div className="space-y-8 text-left">
              {[
                { q: "Does solar work with Minnesota snow?", a: "Yes. Cold temperatures increase efficiency. Our 13 years of engineering ensures racking handles MN snow loads; shed usually occurs within 48 hours." },
                { q: "What is the July 3, 2026 deadline?", a: "The legislative 'Begin Construction' cutoff to lock in the 30% ITC. Requires 5% Safe Harbor spend or significant physical work." },
                { q: "How is the $3/sqft value boost calculated?", a: "Reducing OpEx increases Net Operating Income (NOI). At a 7% cap rate, every $1 saved adds ~$14 in equity value." },
                { q: "Is there a property tax penalty in MN?", a: "No. Minnesota law provides a specific property tax exemption for the value added by solar energy systems." },
                { q: "What is the ROI for Multi-Family assets?", a: "Owners see the fastest ROI by offsetting 'house loads' (hallways/elevators), directly increasing the building's appraised valuation." },
                { q: "What are the 2026 MACRS rules?", a: "Solar is a 5-year asset. We model high year-one deductions to provide an immediate tax-shield for your business income." },
                { q: "Do you offer the USDA REAP Grant?", a: "Yes. For rural/small biz, the 50% REAP Grant can stack with the ITC to cover up to 80% of project costs." },
                { q: "Who performs the engineering audits?", a: "All audits are processed by Apadana Technology, a licensed MN Class A Electrical Contractor with 13 years of history." }
              ].map((item, i) => (
                <div key={i} className="border-b border-white/5 pb-4 last:border-0">
                  <h4 className="font-bold text-white text-xs mb-2 leading-tight">{item.q}</h4>
                  <p className="text-zinc-500 text-[11px] leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

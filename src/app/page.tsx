import React from 'react';
import SolarEstimator from '@/components/SolarEstimator';

export const metadata = {
  title: "Commercial Solar ROI Calculator Minnesota | MN Solar Energy Asset Audit",
  description: "Calculate commercial solar ROI, MACRS depreciation, and property value increases in Minnesota. Expert solar installers with 13 years of experience.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#060606] text-[#ededed] font-sans selection:bg-green-500/30">
      {/* 2026 URGENCY BANNER */}
      <div className="bg-red-600 text-white text-[10px] font-black uppercase tracking-[0.3em] py-3 text-center px-4">
        ⚠️ 30% Federal ITC Warning: Projects must commence by July 3, 2026 (sign & pay deposit).
      </div>

      <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center border-b border-white/5">
        <div className="text-xl font-black tracking-tighter uppercase">
          MN<span className="text-zinc-500 font-light text-left">CommercialSolar</span>
        </div>
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
          Est. 2013 // 13 Years Excellence
        </div>
      </nav>

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
    <div className="group relative aspect-square overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-900">
      <img src="/warehouse-solar.jpg" alt="Commercial Solar Warehouse" className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black to-transparent">
        <p className="text-green-500 font-bold text-[10px] uppercase mb-2">Industrial</p>
        <p className="text-2xl font-bold text-white italic">High-Yield Flat Roofs</p>
      </div>
    </div>
    {/* MULTI-FAMILY */}
    <div className="group relative aspect-square overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-900">
      <img src="/apartment-solar.jpg" alt="Multi-family Solar" className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black to-transparent">
        <p className="text-green-500 font-bold text-[10px] uppercase mb-2">Multi-Family</p>
        <p className="text-2xl font-bold text-white italic">NOI-Driven Arrays</p>
      </div>
    </div>
    {/* RETAIL */}
    <div className="group relative aspect-square overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-900">
      <img src="/retail-solar.jpg" alt="Retail Commercial Solar" className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black to-transparent">
        <p className="text-green-500 font-bold text-[10px] uppercase mb-2">Retail / Mixed-Use</p>
        <p className="text-2xl font-bold text-white italic">OpEx Control</p>
      </div>
    </div>
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

{/* FOOTER FOR SEO */}
<footer className="py-12 border-t border-white/5 px-6">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
    <p className="text-[10px] text-zinc-600 uppercase tracking-widest">
      © 2026 MN Commercial Solar // Engineering Partner: Apadana Technology
    </p>
    <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
      <span>Minneapolis, MN</span>
      <a href="#calculator" className="hover:text-white">ROI Calculator</a>
      <a href="https://apadanatechnology.com" className="hover:text-white">Engineering Partner</a>
    </div>
  </div>
</footer>

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
    </div>
  );
}
'use client';
import React from 'react';
import SolarEstimator from './SolarEstimator';
import Navigation from './Navigation';
import Footer from './Footer';

interface LocalStat {
  value: string;
  label: string;
}

interface IndustryFocus {
  title: string;
  description: string;
}

interface LocationPageProps {
  cityName: string;
  region: string; // e.g., "East Metro", "West Metro"
  utilityProvider: string;
  averageSunHours: number;
  localStats: LocalStat[];
  industryFocus: IndustryFocus[];
  localIncentives: string[];
  nearbyAreas: { name: string; slug: string }[];
}

export default function LocationPage({
  cityName,
  region,
  utilityProvider,
  averageSunHours,
  localStats,
  industryFocus,
  localIncentives,
  nearbyAreas,
}: LocationPageProps) {
  return (
    <div className="min-h-screen bg-[#060606] text-[#ededed] font-sans selection:bg-green-500/30">
      {/* 2026 URGENCY BANNER */}
      <div className="bg-red-600 text-white text-[10px] font-black uppercase tracking-[0.3em] py-3 text-center px-4">
        ⚠️ 30% Federal ITC Warning: Projects must commence by July 3, 2026 (sign & pay deposit).
      </div>

      <Navigation />

      <main className="max-w-7xl mx-auto px-6">
        {/* HERO */}
        <header className="py-20 lg:pt-24 lg:pb-16 max-w-5xl">
          <p className="text-green-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
            {region} // Commercial Solar Installation
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[0.9] text-white">
            Commercial Solar<br />
            <span className="text-green-500 italic">in {cityName}, MN.</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            {cityName} businesses are converting utility expenses into appraised asset value.
            With {averageSunHours} peak sun hours and {utilityProvider} interconnection,
            your commercial property qualifies for the 2026 ITC before the deadline.
          </p>
        </header>

        {/* LOCAL STATS BAR */}
        <section className="py-8 border-y border-white/5 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {localStats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl font-black text-white">{stat.value}</p>
                <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CALCULATOR */}
        <section id="calculator" className="pb-24">
          <div className="mb-8">
            <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-[0.3em] mb-2">
              {cityName} Commercial Solar Calculator
            </h2>
            <p className="text-zinc-600 text-xs">
              Estimate ROI for your {cityName} commercial property
            </p>
          </div>
          <SolarEstimator />
        </section>

        {/* INDUSTRY FOCUS */}
        <section className="py-24 border-t border-white/5">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-[0.3em] mb-12">
            {cityName} Commercial Solar by Property Type
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryFocus.map((industry, i) => (
              <div
                key={i}
                className="p-8 bg-zinc-900/50 rounded-[2rem] border border-white/5 hover:border-green-500/30 transition-colors"
              >
                <span className="text-green-500 font-mono text-sm">0{i + 1}</span>
                <h3 className="text-xl font-bold text-white mt-3 mb-2">{industry.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{industry.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* LOCAL INCENTIVES */}
        <section className="py-24 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold italic text-white mb-6">
                {cityName} Solar Incentives & Rebates
              </h2>
              <p className="text-zinc-400 text-sm mb-8">
                {cityName} commercial properties benefit from federal, state, and utility-specific
                incentives. Our engineering team ensures you capture every available dollar.
              </p>
              <ul className="space-y-4">
                {localIncentives.map((incentive, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-zinc-300 text-sm">{incentive}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-zinc-900/30 p-8 md:p-12 rounded-[3rem] border border-white/5">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-green-500 mb-6">
                {utilityProvider} Grid Details
              </h3>
              <div className="space-y-6">
                <div className="border-b border-white/5 pb-4">
                  <p className="text-zinc-500 text-xs uppercase mb-1">Primary Utility</p>
                  <p className="text-white font-bold">{utilityProvider}</p>
                </div>
                <div className="border-b border-white/5 pb-4">
                  <p className="text-zinc-500 text-xs uppercase mb-1">Peak Sun Hours</p>
                  <p className="text-white font-bold">{averageSunHours} hrs/day avg</p>
                </div>
                <div className="border-b border-white/5 pb-4">
                  <p className="text-zinc-500 text-xs uppercase mb-1">Net Metering</p>
                  <p className="text-white font-bold">Available (MN Statute 216B.164)</p>
                </div>
                <div>
                  <p className="text-zinc-500 text-xs uppercase mb-1">Interconnection</p>
                  <p className="text-white font-bold">Standard Commercial Process</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY THIS CITY */}
        <section className="py-24 border-t border-white/5 bg-gradient-to-b from-transparent to-zinc-950/50">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl font-bold italic mb-6">
              Why {cityName} for Commercial Solar?
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-10">
              {cityName}&apos;s commercial corridor features ideal roof conditions for solar installation.
              The combination of Minnesota&apos;s solar-friendly policies, {utilityProvider}&apos;s net metering program,
              and the 2026 ITC deadline creates an optimal window for asset owners to act.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="text-2xl font-black text-white">30%</p>
                <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Federal ITC</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">5yr</p>
                <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">MACRS Depreciation</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">$0</p>
                <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Property Tax on Solar</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">{averageSunHours}</p>
                <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Peak Sun Hours</p>
              </div>
            </div>
          </div>
        </section>

        {/* NEARBY SERVICE AREAS */}
        <section className="py-16 border-t border-white/5">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-[0.3em] mb-8">
            Nearby Service Areas
          </h2>
          <div className="flex flex-wrap gap-3">
            {nearbyAreas.map((area, i) => (
              <a
                key={i}
                href={`/${area.slug}`}
                className="px-6 py-3 bg-zinc-900/50 rounded-full border border-white/5 text-sm text-zinc-300 hover:border-green-500/50 hover:text-white transition-colors"
              >
                {area.name}, MN
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

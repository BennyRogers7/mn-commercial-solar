'use client';
import React from 'react';
import SolarEstimator from './SolarEstimator';
import Navigation from './Navigation';
import Footer from './Footer';

interface Benefit {
  title: string;
  description: string;
}

interface CaseStudy {
  title: string;
  systemSize: string;
  annualSavings: string;
  payback: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface IndustryPageProps {
  industryName: string;
  industrySlug: string;
  headline: string;
  subheadline: string;
  heroImage: string; // placeholder path
  benefits: Benefit[];
  idealProperties: string[];
  caseStudy: CaseStudy;
  faqs: FAQ[];
  relatedIndustries: { name: string; slug: string }[];
}

export default function IndustryPage({
  industryName,
  headline,
  subheadline,
  heroImage,
  benefits,
  idealProperties,
  caseStudy,
  faqs,
  relatedIndustries,
}: IndustryPageProps) {
  return (
    <div className="min-h-screen bg-[#060606] text-[#ededed] font-sans selection:bg-green-500/30">
      {/* 2026 URGENCY BANNER */}
      <div className="bg-red-600 text-white text-[10px] font-black uppercase tracking-[0.3em] py-3 text-center px-4">
        ⚠️ 30% Federal ITC Warning: Projects must commence by July 3, 2026 (sign & pay deposit).
      </div>

      <Navigation />

      <main className="max-w-7xl mx-auto px-6">
        {/* HERO WITH IMAGE */}
        <header className="py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-green-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                {industryName} // Commercial Solar
              </p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[0.95] text-white">
                {headline}
              </h1>
              <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                {subheadline}
              </p>
              <a
                href="#calculator"
                className="inline-block bg-green-500 text-black font-black py-4 px-8 rounded-xl uppercase text-xs tracking-[0.2em] hover:bg-white transition-colors"
              >
                Calculate Your ROI
              </a>
            </div>
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 bg-zinc-900">
              {/* PLACEHOLDER IMAGE */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center">
                    <span className="text-3xl text-zinc-600">+</span>
                  </div>
                  <p className="text-zinc-600 text-sm font-bold uppercase tracking-wider">
                    {industryName} Solar Photo
                  </p>
                  <p className="text-zinc-700 text-xs mt-1">{heroImage}</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* BENEFITS GRID */}
        <section className="py-24 border-t border-white/5">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-[0.3em] mb-12">
            Why {industryName} Properties Choose Solar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="p-8 bg-zinc-900/50 rounded-[2rem] border border-white/5 hover:border-green-500/30 transition-colors"
              >
                <span className="text-green-500 font-mono text-sm">0{i + 1}</span>
                <h3 className="text-xl font-bold text-white mt-3 mb-2">{benefit.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* IDEAL PROPERTIES */}
        <section className="py-24 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold italic text-white mb-6">
                Ideal {industryName} Properties
              </h2>
              <p className="text-zinc-400 text-sm mb-8">
                These {industryName.toLowerCase()} property characteristics maximize solar ROI in Minnesota.
              </p>
              <ul className="space-y-4">
                {idealProperties.map((property, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-zinc-300 text-sm">{property}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CASE STUDY CARD */}
            <div className="bg-zinc-900/30 p-8 md:p-12 rounded-[3rem] border border-white/5">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-green-500 mb-6">
                Sample {industryName} Project
              </h3>
              <p className="text-2xl font-bold text-white italic mb-8">{caseStudy.title}</p>
              <div className="space-y-6">
                <div className="flex justify-between border-b border-white/5 pb-4">
                  <span className="text-zinc-500 text-sm">System Size</span>
                  <span className="text-white font-bold">{caseStudy.systemSize}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-4">
                  <span className="text-zinc-500 text-sm">Annual Savings</span>
                  <span className="text-green-400 font-bold">{caseStudy.annualSavings}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500 text-sm">Payback Period</span>
                  <span className="text-white font-bold">{caseStudy.payback}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CALCULATOR */}
        <section id="calculator" className="py-24 border-t border-white/5">
          <div className="mb-8">
            <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-[0.3em] mb-2">
              {industryName} Solar ROI Calculator
            </h2>
            <p className="text-zinc-600 text-xs">
              Estimate solar savings for your {industryName.toLowerCase()} property
            </p>
          </div>
          <SolarEstimator />
        </section>

        {/* FAQ */}
        <section className="py-24 border-t border-white/5">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-[0.3em] mb-12">
            {industryName} Solar FAQ
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-white/5 pb-6">
                <h4 className="font-bold text-white text-sm mb-2">{faq.question}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* RELATED INDUSTRIES */}
        <section className="py-16 border-t border-white/5">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-[0.3em] mb-8">
            Other Industries We Serve
          </h2>
          <div className="flex flex-wrap gap-3">
            {relatedIndustries.map((industry, i) => (
              <a
                key={i}
                href={`/${industry.slug}`}
                className="px-6 py-3 bg-zinc-900/50 rounded-full border border-white/5 text-sm text-zinc-300 hover:border-green-500/50 hover:text-white transition-colors"
              >
                {industry.name}
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

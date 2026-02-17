import React from 'react';

const locations = [
  { name: 'Minneapolis', slug: 'minneapolis' },
  { name: 'St. Paul', slug: 'st-paul' },
  { name: 'Bloomington', slug: 'bloomington' },
  { name: 'Plymouth', slug: 'plymouth' },
  { name: 'Eagan', slug: 'eagan' },
  { name: 'Woodbury', slug: 'woodbury' },
  { name: 'Maple Grove', slug: 'maple-grove' },
  { name: 'Brooklyn Park', slug: 'brooklyn-park' },
  { name: 'St. Louis Park', slug: 'st-louis-park' },
  { name: 'Edina', slug: 'edina' },
  { name: 'Roseville', slug: 'roseville' },
  { name: 'Maplewood', slug: 'maplewood' },
  { name: 'Golden Valley', slug: 'golden-valley' },
  { name: 'Shakopee', slug: 'shakopee' },
  { name: 'Wayzata', slug: 'wayzata' },
  { name: 'Chaska', slug: 'chaska' },
];

const industries = [
  { name: 'Warehouses & Distribution', slug: 'warehouses' },
  { name: 'Manufacturing', slug: 'manufacturing' },
  { name: 'Retail & Shopping Centers', slug: 'retail' },
  { name: 'Multi-Family & Apartments', slug: 'multi-family' },
  { name: 'Office Buildings', slug: 'office-buildings' },
  { name: 'Healthcare & Medical', slug: 'healthcare' },
  { name: 'Hotels & Hospitality', slug: 'hospitality' },
  { name: 'Agriculture & Farms', slug: 'agriculture' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <a href="/" className="text-xl font-black tracking-tighter uppercase">
              MN<span className="text-zinc-500 font-light">CommercialSolar</span>
            </a>
            <p className="text-zinc-500 text-sm mt-4 leading-relaxed">
              Minnesota&apos;s commercial solar experts. 13+ years helping businesses convert utility expenses into asset value.
            </p>
            <div className="mt-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600 mb-2">Engineering Partner</p>
              <a href="https://apadanatechnology.com" className="text-sm text-zinc-400 hover:text-green-500 transition-colors">
                Apadana Technology
              </a>
            </div>
          </div>

          {/* Locations Column */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-500 mb-4">Service Areas</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {locations.map((loc) => (
                <a
                  key={loc.slug}
                  href={`/${loc.slug}`}
                  className="text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  {loc.name}
                </a>
              ))}
            </div>
          </div>

          {/* Industries Column */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-500 mb-4">Industries</p>
            <div className="space-y-2">
              {industries.map((ind) => (
                <a
                  key={ind.slug}
                  href={`/${ind.slug}`}
                  className="block text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  {ind.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact / CTA Column */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-500 mb-4">Get Started</p>
            <p className="text-zinc-500 text-sm mb-6">
              Request a free commercial solar audit for your Minnesota property.
            </p>
            <a
              href="/#calculator"
              className="inline-block bg-green-500 text-black text-[11px] font-black uppercase tracking-[0.1em] px-6 py-3 rounded-lg hover:bg-white transition-colors"
            >
              Calculate ROI
            </a>
            <div className="mt-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600 mb-2">2026 Deadline</p>
              <p className="text-sm text-zinc-400">
                30% ITC requires project start by July 3, 2026
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-zinc-600 uppercase tracking-widest">
            © 2026 MN Commercial Solar // Minneapolis, Minnesota
          </p>
          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-zinc-600">
            <a href="/#calculator" className="hover:text-white transition-colors">ROI Calculator</a>
            <a href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</a>
            <a href="https://apadanatechnology.com" className="hover:text-white transition-colors">Engineering Partner</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

'use client';
import React, { useState } from 'react';

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
  { name: 'Warehouses', slug: 'warehouses' },
  { name: 'Manufacturing', slug: 'manufacturing' },
  { name: 'Retail', slug: 'retail' },
  { name: 'Multi-Family', slug: 'multi-family' },
  { name: 'Office Buildings', slug: 'office-buildings' },
  { name: 'Healthcare', slug: 'healthcare' },
  { name: 'Hospitality', slug: 'hospitality' },
  { name: 'Agriculture', slug: 'agriculture' },
];

export default function Navigation() {
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="max-w-7xl mx-auto px-6 py-6 border-b border-white/5">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-xl font-black tracking-tighter uppercase">
          MN<span className="text-zinc-500 font-light">CommercialSolar</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {/* Locations Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setLocationsOpen(true)}
            onMouseLeave={() => setLocationsOpen(false)}
          >
            <button className="text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-400 hover:text-white transition-colors flex items-center gap-1">
              Locations
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {locationsOpen && (
              <div className="absolute top-full left-0 mt-2 w-[480px] bg-zinc-900 border border-white/10 rounded-2xl p-6 shadow-2xl z-50">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-500 mb-4">Twin Cities Metro</p>
                <div className="grid grid-cols-3 gap-2">
                  {locations.map((loc) => (
                    <a
                      key={loc.slug}
                      href={`/${loc.slug}`}
                      className="text-sm text-zinc-400 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-colors"
                    >
                      {loc.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <button className="text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-400 hover:text-white transition-colors flex items-center gap-1">
              Industries
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {industriesOpen && (
              <div className="absolute top-full left-0 mt-2 w-[280px] bg-zinc-900 border border-white/10 rounded-2xl p-6 shadow-2xl z-50">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-500 mb-4">Property Types</p>
                <div className="space-y-1">
                  {industries.map((ind) => (
                    <a
                      key={ind.slug}
                      href={`/${ind.slug}`}
                      className="block text-sm text-zinc-400 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-colors"
                    >
                      {ind.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* CTA */}
          <a
            href="/#calculator"
            className="bg-green-500 text-black text-[11px] font-black uppercase tracking-[0.1em] px-5 py-3 rounded-lg hover:bg-white transition-colors"
          >
            Get Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-zinc-400 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-6 pt-6 border-t border-white/5">
          <div className="mb-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-500 mb-3">Locations</p>
            <div className="grid grid-cols-2 gap-2">
              {locations.map((loc) => (
                <a
                  key={loc.slug}
                  href={`/${loc.slug}`}
                  className="text-sm text-zinc-400 hover:text-white py-1"
                >
                  {loc.name}
                </a>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-500 mb-3">Industries</p>
            <div className="grid grid-cols-2 gap-2">
              {industries.map((ind) => (
                <a
                  key={ind.slug}
                  href={`/${ind.slug}`}
                  className="text-sm text-zinc-400 hover:text-white py-1"
                >
                  {ind.name}
                </a>
              ))}
            </div>
          </div>
          <a
            href="/#calculator"
            className="block w-full bg-green-500 text-black text-center text-sm font-black uppercase tracking-[0.1em] px-5 py-4 rounded-xl"
          >
            Get Quote
          </a>
        </div>
      )}
    </nav>
  );
}

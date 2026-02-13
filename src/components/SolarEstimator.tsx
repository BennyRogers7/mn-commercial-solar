'use client';
import React, { useState, useMemo } from 'react';
import {
  calculateCostEstimate,
  calculateCashFinancing,
  calculateLoanFinancing,
  calculatePPAFinancing,
  formatCurrency,
  formatNumber,
} from '@/lib/calculations';

type FinancingType = 'cash' | 'loan' | 'ppa';

export default function SolarEstimator() {
  const [sqft, setSqft] = useState(50000);
  const [financingType, setFinancingType] = useState<FinancingType>('cash');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form fields
  const [contactName, setContactName] = useState('');
  const [buildingAddress, setBuildingAddress] = useState('');
  const [workEmail, setWorkEmail] = useState('');

  // DYNAMIC ROI LOGIC
  // 10k sqft = 4.6 years | 250k sqft = 2.1 years
  const calculatePayback = (val: number) => {
    const minSqft = 10000;
    const maxSqft = 250000;
    const maxPayback = 4.6;
    const minPayback = 2.1;

    if (val <= minSqft) return maxPayback;
    if (val >= maxSqft) return minPayback;

    const percentage = (val - minSqft) / (maxSqft - minSqft);
    return (maxPayback - (percentage * (maxPayback - minPayback))).toFixed(1);
  };

  const paybackYears = calculatePayback(sqft);
  // Property Value Increase: $3 per Sq. Ft.
  const assetValueBoost = sqft * 3;

  // Calculate cost estimate and financing options
  const costEstimate = useMemo(() => calculateCostEstimate(sqft), [sqft]);
  const cashFinancing = useMemo(() => calculateCashFinancing(costEstimate), [costEstimate]);
  const loanFinancing = useMemo(() => calculateLoanFinancing(costEstimate), [costEstimate]);
  const ppaFinancing = useMemo(() => calculatePPAFinancing(costEstimate), [costEstimate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contactName,
          buildingAddress,
          workEmail,
          sqft,
          financingPreference: financingType,
          systemKW: costEstimate.systemKW,
          grossCost: costEstimate.grossCost,
          netCost: costEstimate.netCost,
          annualProduction: costEstimate.annualProduction,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to submit request');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderFinancingDetails = () => {
    switch (financingType) {
      case 'cash':
        return (
          <div className="space-y-3 text-left">
            <div className="flex justify-between">
              <span className="text-zinc-400 text-sm">Net Cost (after ITC)</span>
              <span className="text-white font-bold">{formatCurrency(cashFinancing.netCost)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400 text-sm">30% ITC Savings</span>
              <span className="text-green-400 font-bold">-{formatCurrency(cashFinancing.itcSavings)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400 text-sm">Year 1 MACRS Benefit</span>
              <span className="text-green-400 font-bold">~{formatCurrency(cashFinancing.year1MacrsBenefit)}</span>
            </div>
          </div>
        );
      case 'loan':
        return (
          <div className="space-y-3 text-left">
            <div className="flex justify-between">
              <span className="text-zinc-400 text-sm">Monthly Payment</span>
              <span className="text-white font-bold">{formatCurrency(loanFinancing.monthlyPayment)}/mo</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400 text-sm">Term</span>
              <span className="text-white font-bold">{loanFinancing.termYears} years @ {(loanFinancing.apr * 100).toFixed(1)}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400 text-sm">Total Cost</span>
              <span className="text-white font-bold">{formatCurrency(loanFinancing.totalCost)}</span>
            </div>
          </div>
        );
      case 'ppa':
        return (
          <div className="space-y-3 text-left">
            <div className="flex justify-between">
              <span className="text-zinc-400 text-sm">Upfront Cost</span>
              <span className="text-green-400 font-bold">$0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400 text-sm">Rate</span>
              <span className="text-white font-bold">${ppaFinancing.ratePerKwh.toFixed(3)}/kWh</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400 text-sm">Year 1 Cost</span>
              <span className="text-white font-bold">{formatCurrency(ppaFinancing.year1Cost)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400 text-sm">Annual Escalator</span>
              <span className="text-white font-bold">{(ppaFinancing.annualEscalator * 100).toFixed(0)}%</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="bg-zinc-900 border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-10 md:p-14 space-y-8 bg-black/20">
          <div className="text-left">
            <h3 className="text-3xl font-bold text-white mb-2 italic">2026 ROI Forecast</h3>
            <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">Property Valuation Model</p>
          </div>

          <div className="space-y-6">
             <div className="flex justify-between items-baseline">
                <span className="text-6xl font-black tracking-tighter text-white">{sqft.toLocaleString()}</span>
                <span className="text-xl text-zinc-700 font-bold uppercase tracking-widest text-left">Sq Ft</span>
             </div>
             <input
                type="range" min="10000" max="250000" step="5000" value={sqft}
                onChange={(e) => setSqft(parseInt(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-green-500"
              />
          </div>

          {/* System Cost Card */}
          <div className="p-6 bg-white/5 rounded-3xl border border-white/5 text-left">
            <p className="text-[10px] text-zinc-500 uppercase font-bold mb-3">System Estimate</p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-zinc-400 text-xs">System Size</p>
                <p className="text-xl font-bold text-white">{formatNumber(costEstimate.systemKW, 0)} kW</p>
              </div>
              <div>
                <p className="text-zinc-400 text-xs">Gross Cost</p>
                <p className="text-xl font-bold text-white">{formatCurrency(costEstimate.grossCost)}</p>
              </div>
            </div>
            <div className="flex justify-between items-center pt-3 border-t border-white/10">
              <span className="text-zinc-400 text-sm">Annual Production</span>
              <span className="text-green-400 font-bold">{formatNumber(costEstimate.annualProduction, 0)} kWh</span>
            </div>
          </div>

          {/* Financing Selector */}
          <div className="space-y-4">
            <p className="text-[10px] text-zinc-500 uppercase font-bold">Financing Option</p>
            <div className="grid grid-cols-3 gap-2">
              {(['cash', 'loan', 'ppa'] as FinancingType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => setFinancingType(type)}
                  className={`py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wide transition-all ${
                    financingType === type
                      ? 'bg-green-500 text-black'
                      : 'bg-white/5 text-zinc-400 hover:bg-white/10'
                  }`}
                >
                  {type === 'ppa' ? 'PPA' : type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
            {/* Financing Details Panel */}
            <div className="p-5 bg-black/40 rounded-2xl border border-white/5">
              {renderFinancingDetails()}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-white/5 rounded-3xl border border-white/5 text-left">
              <p className="text-[10px] text-zinc-500 uppercase font-bold mb-1">Estimated Payback</p>
              <p className="text-3xl font-bold text-green-400">{paybackYears} <span className="text-xs">Years*</span></p>
            </div>
            <div className="p-6 bg-white/5 rounded-3xl border border-white/5 text-left">
              <p className="text-[10px] text-zinc-500 uppercase font-bold mb-1 italic">Building Value Increase</p>
              <p className="text-3xl font-bold text-white tracking-tighter">${assetValueBoost.toLocaleString()}</p>
            </div>
          </div>
          <p className="text-[9px] text-zinc-600 italic">*Payback assumes full 30% ITC and MACRS. Individual tax positions may vary.</p>
        </div>

        <div className="p-10 md:p-14 bg-white/5 flex flex-col justify-center border-l border-white/5">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <h4 className="text-xl font-bold text-white tracking-tight">Generate Full Building Audit</h4>
              <p className="text-zinc-400 text-xs leading-relaxed mb-4 text-left">Request a technical roof map and 5-year MACRS schedule for this property.</p>

              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                  {error}
                </div>
              )}

              <input
                required
                type="text"
                placeholder="Contact Name"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                disabled={isSubmitting}
                className="w-full bg-black/40 border border-white/10 p-4 rounded-xl text-sm focus:border-green-500 outline-none text-left disabled:opacity-50"
              />
              <input
                required
                type="text"
                placeholder="Building Address"
                value={buildingAddress}
                onChange={(e) => setBuildingAddress(e.target.value)}
                disabled={isSubmitting}
                className="w-full bg-black/40 border border-white/10 p-4 rounded-xl text-sm focus:border-green-500 outline-none text-left disabled:opacity-50"
              />
              <input
                required
                type="email"
                placeholder="Work Email"
                value={workEmail}
                onChange={(e) => setWorkEmail(e.target.value)}
                disabled={isSubmitting}
                className="w-full bg-black/40 border border-white/10 p-4 rounded-xl text-sm focus:border-green-500 outline-none text-left disabled:opacity-50"
              />

              <div className="p-4 bg-black/40 border border-white/10 rounded-xl">
                <p className="text-zinc-500 text-xs mb-1">Selected Financing</p>
                <p className="text-white font-bold text-sm">
                  {financingType === 'cash' && 'Cash Purchase'}
                  {financingType === 'loan' && `Loan (${loanFinancing.termYears}yr @ ${(loanFinancing.apr * 100).toFixed(1)}%)`}
                  {financingType === 'ppa' && `PPA ($${ppaFinancing.ratePerKwh.toFixed(3)}/kWh)`}
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black font-black py-5 rounded-xl uppercase text-xs tracking-[0.2em] hover:bg-green-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Request Financial Report →'}
              </button>
            </form>
          ) : (
            <div className="text-center py-12 space-y-4">
              <div className="h-16 w-16 bg-green-500 text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto">✓</div>
              <h4 className="text-2xl font-bold text-white italic">Audit Requested.</h4>
              <p className="text-zinc-500 text-sm max-w-xs mx-auto text-left">An Apadana engineer is mapping your roof now. Delivery estimated within 24 hours.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

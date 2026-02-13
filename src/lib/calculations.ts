// Cost calculation utilities for MN Commercial Solar

export interface CostEstimate {
  systemKW: number;
  costPerWatt: number;
  grossCost: number;
  netCost: number; // After 30% ITC
  annualProduction: number; // kWh
}

export interface CashFinancing {
  type: 'cash';
  netCost: number;
  itcSavings: number;
  year1MacrsBenefit: number; // ~20% of gross cost (bonus depreciation)
}

export interface LoanFinancing {
  type: 'loan';
  termYears: number;
  apr: number;
  monthlyPayment: number;
  totalCost: number;
}

export interface PPAFinancing {
  type: 'ppa';
  ratePerKwh: number;
  annualEscalator: number;
  year1Cost: number;
  upfrontCost: number;
}

export type FinancingOption = CashFinancing | LoanFinancing | PPAFinancing;

/**
 * Calculate system size based on square footage
 * 8 watts per sqft usable roof
 */
export function calculateSystemKW(sqft: number): number {
  return sqft * 0.008;
}

/**
 * Calculate cost per watt based on system size
 * Linear scale: $3.50 at 10k sqft → $2.50 at 250k sqft
 */
export function calculateCostPerWatt(sqft: number): number {
  const minSqft = 10000;
  const maxSqft = 250000;
  const maxCost = 3.5; // $/W at 10k sqft
  const minCost = 2.5; // $/W at 250k sqft

  if (sqft <= minSqft) return maxCost;
  if (sqft >= maxSqft) return minCost;

  const percentage = (sqft - minSqft) / (maxSqft - minSqft);
  return maxCost - percentage * (maxCost - minCost);
}

/**
 * Calculate full cost estimate for a given square footage
 */
export function calculateCostEstimate(sqft: number): CostEstimate {
  const systemKW = calculateSystemKW(sqft);
  const costPerWatt = calculateCostPerWatt(sqft);
  const grossCost = systemKW * 1000 * costPerWatt;
  const netCost = grossCost * 0.7; // After 30% ITC
  const annualProduction = systemKW * 1300; // MN average kWh per kW

  return {
    systemKW,
    costPerWatt,
    grossCost,
    netCost,
    annualProduction,
  };
}

/**
 * Calculate cash financing details
 */
export function calculateCashFinancing(estimate: CostEstimate): CashFinancing {
  const itcSavings = estimate.grossCost * 0.3;
  // Year 1 MACRS bonus depreciation ~20% of gross cost at ~35% tax rate
  const year1MacrsBenefit = estimate.grossCost * 0.2 * 0.35;

  return {
    type: 'cash',
    netCost: estimate.netCost,
    itcSavings,
    year1MacrsBenefit,
  };
}

/**
 * Calculate loan financing details
 * 10 year term @ 7.5% APR
 */
export function calculateLoanFinancing(estimate: CostEstimate): LoanFinancing {
  const termYears = 10;
  const apr = 0.075;
  const principal = estimate.netCost; // Financing the net cost after ITC
  const monthlyRate = apr / 12;
  const numPayments = termYears * 12;

  // Standard amortization formula
  const monthlyPayment =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
    (Math.pow(1 + monthlyRate, numPayments) - 1);

  const totalCost = monthlyPayment * numPayments;

  return {
    type: 'loan',
    termYears,
    apr,
    monthlyPayment,
    totalCost,
  };
}

/**
 * Calculate PPA (Power Purchase Agreement) financing details
 * $0.085/kWh, 2% annual escalator
 */
export function calculatePPAFinancing(estimate: CostEstimate): PPAFinancing {
  const ratePerKwh = 0.085;
  const annualEscalator = 0.02;
  const year1Cost = estimate.annualProduction * ratePerKwh;

  return {
    type: 'ppa',
    ratePerKwh,
    annualEscalator,
    year1Cost,
    upfrontCost: 0,
  };
}

/**
 * Format currency for display
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format number with commas
 */
export function formatNumber(num: number, decimals: number = 0): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(num);
}

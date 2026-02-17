import React from 'react';
import IndustryPage from '@/components/IndustryPage';

export const metadata = {
  title: "Office Building Solar Installation Minnesota | Commercial Office Solar ROI",
  description: "Commercial solar for Minnesota office buildings and corporate campuses. Attract tenants with 30% ITC savings. Calculate office solar ROI before July 2026.",
  keywords: "office building solar Minnesota, commercial office solar, corporate campus solar MN, office solar panels, business park solar",
};

export default function OfficeBuildingsPage() {
  return (
    <IndustryPage
      industryName="Office Building"
      industrySlug="office-buildings"
      headline="Solar for Office Buildings & Corporate Campuses."
      subheadline="Class A tenants increasingly demand sustainable buildings. Solar reduces operating costs, achieves LEED and ENERGY STAR points, and positions your property as a premium destination for ESG-conscious corporations."
      heroImage="/images/office-solar-hero.jpg"
      benefits={[
        {
          title: "Tenant Demand",
          description: "Fortune 500 companies require sustainable facilities. Solar-equipped buildings win leases over comparable properties.",
        },
        {
          title: "LEED & ENERGY STAR",
          description: "Solar contributes significant points toward LEED certification and ENERGY STAR scores that drive tenant decisions.",
        },
        {
          title: "Business Hours Alignment",
          description: "Office buildings consume most energy 8am-6pm when solar produces maximum output. Perfect consumption matching.",
        },
        {
          title: "Reduced OpEx",
          description: "Lower operating expenses improve NOI and increase property valuation. Solar savings compound over the system lifespan.",
        },
        {
          title: "Corporate ESG Support",
          description: "Building owners help tenants meet Scope 2 emissions targets, creating sticky lease relationships.",
        },
        {
          title: "Green Lease Structures",
          description: "Modern green leases allow landlords and tenants to share solar benefits, aligning incentives for both parties.",
        },
      ]}
      idealProperties={[
        "Class A and B office buildings with flat roofs",
        "Corporate campuses with multiple buildings",
        "Properties seeking LEED or ENERGY STAR certification",
        "Buildings with significant common area loads",
        "Properties with parking structures (canopy potential)",
        "Owner-occupied corporate headquarters",
      ]}
      caseStudy={{
        title: "Class A Office Building - Golden Valley",
        systemSize: "225 kW",
        annualSavings: "$42,000",
        payback: "3.6 years",
      }}
      faqs={[
        {
          question: "How do office building solar economics work with tenants?",
          answer: "Solar typically offsets base building loads. Green lease structures, reduced CAM charges, or direct tenant billing can share benefits appropriately.",
        },
        {
          question: "Does solar help with LEED certification?",
          answer: "Yes. On-site renewable energy contributes to multiple LEED credits, including Energy & Atmosphere and Innovation categories.",
        },
        {
          question: "Can solar work on a multi-story office building?",
          answer: "Yes, though roof area limits system size. Solar carports over parking add significant capacity for taller buildings.",
        },
        {
          question: "How does solar impact our ENERGY STAR score?",
          answer: "On-site solar reduces source energy consumption, directly improving ENERGY STAR scores and supporting Score 75+ certification.",
        },
        {
          question: "What if our roof has cooling towers and mechanical equipment?",
          answer: "We design around rooftop equipment. Modern racking systems and design software optimize production with existing infrastructure.",
        },
        {
          question: "How do tenants report solar in their ESG disclosures?",
          answer: "Building owners provide documentation for tenant Scope 2 emissions reporting. Green lease provisions formalize this data sharing.",
        },
      ]}
      relatedIndustries={[
        { name: "Multi-Family", slug: "multi-family" },
        { name: "Retail", slug: "retail" },
        { name: "Healthcare", slug: "healthcare" },
        { name: "Manufacturing", slug: "manufacturing" },
      ]}
    />
  );
}

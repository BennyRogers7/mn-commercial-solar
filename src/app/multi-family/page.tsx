import React from 'react';
import IndustryPage from '@/components/IndustryPage';

export const metadata = {
  title: "Multi-Family Solar Installation Minnesota | Apartment Solar ROI",
  description: "Commercial solar for Minnesota apartments and multi-family properties. Increase NOI with 30% ITC. Calculate apartment solar ROI before July 2026 deadline.",
  keywords: "apartment solar Minnesota, multi-family solar, multifamily solar MN, apartment building solar panels, condo solar, housing solar",
};

export default function MultiFamilyPage() {
  return (
    <IndustryPage
      industryName="Multi-Family"
      industrySlug="multi-family"
      headline="Solar for Apartments & Multi-Family Properties."
      subheadline="Multi-family properties benefit uniquely from solar: common area loads provide consistent baseline consumption, and reduced operating expenses directly increase NOI and property valuation at your next refinance or sale."
      heroImage="/images/multi-family-solar-hero.jpg"
      benefits={[
        {
          title: "Direct NOI Impact",
          description: "Every dollar saved on common area electricity flows directly to NOI. At a 7% cap rate, $10K savings = $143K value increase.",
        },
        {
          title: "Common Area Offset",
          description: "Hallways, elevators, parking lights, amenity spaces, and laundry facilities create predictable loads perfect for solar sizing.",
        },
        {
          title: "Master Meter Savings",
          description: "Properties with master-metered utilities see immediate savings across all units, simplifying implementation.",
        },
        {
          title: "Tenant Attraction",
          description: "Sustainability-focused renters—especially younger demographics—actively seek green-certified buildings.",
        },
        {
          title: "Property Tax Exempt",
          description: "Minnesota exempts solar from property tax assessment, so your valuation increase comes without tax penalty.",
        },
        {
          title: "LIHTC Compatibility",
          description: "Solar works with Low-Income Housing Tax Credit properties. Specific structures available for affordable housing.",
        },
      ]}
      idealProperties={[
        "Buildings with 50+ units",
        "Master-metered or significant common area loads",
        "Flat or low-slope roofs with 15+ years remaining life",
        "Properties with central HVAC systems",
        "Buildings with elevator service",
        "Properties planning 10+ year hold period",
      ]}
      caseStudy={{
        title: "120-Unit Apartment Complex - Plymouth",
        systemSize: "95 kW",
        annualSavings: "$18,500",
        payback: "4.1 years",
      }}
      faqs={[
        {
          question: "Can solar work with individually-metered apartments?",
          answer: "Solar typically offsets common area loads. Community solar programs or virtual net metering can extend benefits to individual tenants.",
        },
        {
          question: "How does solar affect my cap rate valuation?",
          answer: "Solar reduces OpEx, increasing NOI. Appraisers increasingly recognize solar as a value-add. Reduced OpEx directly improves cap rate calculations.",
        },
        {
          question: "What if I'm planning to sell the property?",
          answer: "Solar increases property value and marketability. Systems transfer with the property, and buyers value the locked-in energy savings.",
        },
        {
          question: "Does solar work on older apartment buildings?",
          answer: "Yes, if the roof and electrical systems can support it. We assess structural capacity and recommend upgrades if needed.",
        },
        {
          question: "How do affordable housing solar incentives work?",
          answer: "Low-income housing projects may qualify for additional ITC bonuses. Specific LIHTC-compatible structures are available.",
        },
        {
          question: "Can residents benefit directly from solar?",
          answer: "Through community solar subscriptions or reduced CAM charges, residents can share in savings. Marketing solar as an amenity attracts tenants.",
        },
      ]}
      relatedIndustries={[
        { name: "Office Buildings", slug: "office-buildings" },
        { name: "Hospitality", slug: "hospitality" },
        { name: "Retail", slug: "retail" },
        { name: "Healthcare", slug: "healthcare" },
      ]}
    />
  );
}

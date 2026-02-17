import React from 'react';
import IndustryPage from '@/components/IndustryPage';

export const metadata = {
  title: "Warehouse Solar Installation Minnesota | Distribution Center Solar ROI",
  description: "Commercial solar for Minnesota warehouses and distribution centers. Maximize flat roof potential with 30% ITC. Calculate warehouse solar ROI before July 2026 deadline.",
  keywords: "warehouse solar Minnesota, distribution center solar, industrial solar MN, warehouse solar panels, logistics center solar, fulfillment center solar",
};

export default function WarehousesPage() {
  return (
    <IndustryPage
      industryName="Warehouse"
      industrySlug="warehouses"
      headline="Solar for Warehouses & Distribution Centers."
      subheadline="Minnesota warehouses feature the ideal solar profile: massive flat roofs, high daytime energy consumption, and ownership structures that maximize tax benefits. Convert unused roof space into a revenue-generating asset."
      heroImage="/images/warehouse-solar-hero.jpg"
      benefits={[
        {
          title: "Maximum Roof Utilization",
          description: "Warehouse roofs often exceed 100,000 sq ft of unobstructed space. Solar transforms this unused asset into predictable energy production.",
        },
        {
          title: "Peak Load Alignment",
          description: "Warehouse operations—lighting, HVAC, forklifts charging—peak during daylight hours, perfectly matching solar production curves.",
        },
        {
          title: "Accelerated Depreciation",
          description: "MACRS allows 5-year accelerated depreciation on solar assets. Warehouse owners see substantial Year 1 tax benefits.",
        },
        {
          title: "Property Value Increase",
          description: "Solar reduces operating expenses, directly increasing NOI and property valuation at sale or refinance.",
        },
        {
          title: "Tenant Attraction",
          description: "Logistics companies increasingly require sustainable facilities. Solar-equipped warehouses command premium lease rates.",
        },
        {
          title: "Minimal Disruption",
          description: "Flat roof installations don't interrupt warehouse operations. Systems install above the roofline with no interior work required.",
        },
      ]}
      idealProperties={[
        "Flat TPO, EPDM, or metal roofs under 15 years old",
        "50,000+ square feet of unobstructed roof area",
        "Daytime operations with consistent electrical load",
        "Ownership structure that can utilize tax credits",
        "Current Xcel Energy or cooperative utility service",
        "Roof structural capacity for ballasted racking (5-7 PSF)",
      ]}
      caseStudy={{
        title: "Twin Cities Distribution Center",
        systemSize: "850 kW",
        annualSavings: "$142,000",
        payback: "3.1 years",
      }}
      faqs={[
        {
          question: "Will solar installation damage my warehouse roof?",
          answer: "No. We use ballasted racking systems that don't penetrate the roof membrane. The system actually protects the roof from UV degradation, extending roof life.",
        },
        {
          question: "How much of my warehouse electricity can solar offset?",
          answer: "Typically 60-90% depending on roof size and consumption. We model your specific load profile to maximize offset without overproduction.",
        },
        {
          question: "What about snow load on warehouse solar panels?",
          answer: "Our engineering accounts for Minnesota snow loads. Panels are tilted for natural shed, and the structural analysis ensures compliance with local codes.",
        },
        {
          question: "Can I install solar if I lease my warehouse?",
          answer: "Yes, with landlord approval. Many landlords install solar themselves or allow tenant installations with lease modifications. PPAs work well for leased properties.",
        },
        {
          question: "How does solar affect my warehouse property taxes?",
          answer: "Minnesota exempts solar energy systems from property tax assessment. Your warehouse won't see increased property taxes from the solar installation.",
        },
        {
          question: "What's the ROI timeline for warehouse solar?",
          answer: "With the 30% ITC and MACRS depreciation, most warehouse projects achieve payback in 2.5-4 years, with 20-25 year system lifespan.",
        },
      ]}
      relatedIndustries={[
        { name: "Manufacturing", slug: "manufacturing" },
        { name: "Retail", slug: "retail" },
        { name: "Office Buildings", slug: "office-buildings" },
        { name: "Agriculture", slug: "agriculture" },
      ]}
    />
  );
}

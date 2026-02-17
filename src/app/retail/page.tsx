import React from 'react';
import IndustryPage from '@/components/IndustryPage';

export const metadata = {
  title: "Retail Solar Installation Minnesota | Shopping Center Solar ROI",
  description: "Commercial solar for Minnesota retail stores and shopping centers. Reduce overhead with 30% ITC. Calculate retail solar ROI before July 2026 deadline.",
  keywords: "retail solar Minnesota, shopping center solar, strip mall solar MN, store solar panels, commercial retail solar, big box store solar",
};

export default function RetailPage() {
  return (
    <IndustryPage
      industryName="Retail"
      industrySlug="retail"
      headline="Solar for Retail & Shopping Centers."
      subheadline="Retail properties consume maximum electricity during peak daylight hours—exactly when solar produces most. Reduce overhead costs, attract sustainability-focused tenants, and increase property NOI."
      heroImage="/images/retail-solar-hero.jpg"
      benefits={[
        {
          title: "Peak Hour Production",
          description: "Retail peaks 10am-6pm when solar output is highest. This direct alignment maximizes self-consumption and savings.",
        },
        {
          title: "CAM Cost Reduction",
          description: "For multi-tenant properties, solar reduces Common Area Maintenance costs, improving lease competitiveness.",
        },
        {
          title: "Visible Sustainability",
          description: "Roof and parking canopy solar demonstrates environmental commitment to increasingly eco-conscious consumers.",
        },
        {
          title: "EV Charging Integration",
          description: "Solar pairs with EV charging stations to attract customers and create additional revenue streams.",
        },
        {
          title: "Parking Canopy Option",
          description: "Solar carports provide customer shade while generating power—premium experience plus energy production.",
        },
        {
          title: "NNN Lease Benefits",
          description: "In triple-net leases, landlords installing solar can recover costs through CAM while tenants benefit from lower bills.",
        },
      ]}
      idealProperties={[
        "Big-box retail with 50,000+ sq ft flat roofs",
        "Strip centers with multiple tenants",
        "Shopping centers with large parking areas",
        "Grocery stores with high refrigeration loads",
        "Auto dealerships with service centers",
        "Properties with 10+ years remaining useful life",
      ]}
      caseStudy={{
        title: "Suburban Strip Retail Center - Edina",
        systemSize: "185 kW",
        annualSavings: "$32,000",
        payback: "3.8 years",
      }}
      faqs={[
        {
          question: "How does solar work with multiple retail tenants?",
          answer: "Solar typically offsets common area and shared loads. Individual tenant submetering or virtual net metering can allocate savings to tenants.",
        },
        {
          question: "Can solar work on older retail roofs?",
          answer: "Yes, if the roof has 10+ years of remaining life. We coordinate with roofing contractors when re-roofing before solar makes sense.",
        },
        {
          question: "What about rooftop HVAC units blocking solar?",
          answer: "We design around HVAC equipment, skylights, and other obstructions. Modern design software optimizes production with existing equipment.",
        },
        {
          question: "Do solar panels work on flat retail roofs?",
          answer: "Yes. Ballasted racking tilts panels for optimal production on flat roofs without roof penetrations.",
        },
        {
          question: "How do parking lot solar canopies work?",
          answer: "Solar carports mount on steel structures over parking spaces. They provide shade, weather protection, and generate significant power.",
        },
        {
          question: "Can I add solar to a leased retail property?",
          answer: "With landlord approval, yes. PPAs work well for retail tenants—no upfront cost with immediate savings.",
        },
      ]}
      relatedIndustries={[
        { name: "Office Buildings", slug: "office-buildings" },
        { name: "Hospitality", slug: "hospitality" },
        { name: "Warehouses", slug: "warehouses" },
        { name: "Multi-Family", slug: "multi-family" },
      ]}
    />
  );
}

import React from 'react';
import IndustryPage from '@/components/IndustryPage';

export const metadata = {
  title: "Farm Solar Installation Minnesota | Agricultural Solar & USDA REAP Grants",
  description: "Agricultural solar for Minnesota farms, grain operations, and rural businesses. USDA REAP grants cover up to 50%. Calculate farm solar ROI before July 2026.",
  keywords: "farm solar Minnesota, agricultural solar, USDA REAP grant MN, grain bin solar, dairy farm solar, rural business solar, irrigation solar",
};

export default function AgriculturePage() {
  return (
    <IndustryPage
      industryName="Agriculture"
      industrySlug="agriculture"
      headline="Solar for Farms & Agriculture."
      subheadline="Minnesota farms and rural businesses can stack the 30% federal ITC with USDA REAP grants covering up to 50% of project costs. This combination creates the fastest payback in commercial solar—often under 2 years."
      heroImage="/images/agriculture-solar-hero.jpg"
      benefits={[
        {
          title: "USDA REAP Grants",
          description: "The REAP program provides grants covering up to 50% of solar costs for rural businesses. Combined with ITC, total incentives can exceed 80%.",
        },
        {
          title: "Grain Drying Offset",
          description: "Electric grain dryers and bin fans run during harvest season when solar production peaks. Excellent load alignment.",
        },
        {
          title: "Irrigation Pumping",
          description: "Center pivot and irrigation pumps operate during peak sun hours. Solar provides predictable pumping costs regardless of utility rates.",
        },
        {
          title: "Ground Mount Flexibility",
          description: "Farms have land available for ground-mounted systems, avoiding roof limitations and enabling optimal panel orientation.",
        },
        {
          title: "Dairy & Livestock",
          description: "Milking equipment, ventilation, and refrigeration create consistent baseloads that solar offsets effectively.",
        },
        {
          title: "Rural Electric Co-ops",
          description: "Many Minnesota co-ops offer favorable net metering and interconnection for agricultural solar projects.",
        },
      ]}
      idealProperties={[
        "Active farms with $50K+ annual utility costs",
        "Rural businesses in USDA-eligible areas",
        "Grain operations with drying and storage",
        "Dairy and livestock facilities",
        "Irrigated crop operations",
        "Agricultural processing facilities",
      ]}
      caseStudy={{
        title: "Grain & Livestock Operation - Southern MN",
        systemSize: "150 kW",
        annualSavings: "$28,000",
        payback: "1.8 years (with REAP)",
      }}
      faqs={[
        {
          question: "How does the USDA REAP grant work?",
          answer: "REAP provides grants up to 50% of project costs for rural small businesses and agricultural producers. Applications are competitive with multiple funding rounds annually.",
        },
        {
          question: "Can I combine REAP with the federal tax credit?",
          answer: "Yes. REAP grants reduce the project basis for ITC calculation, but the combination still provides exceptional economics—often 2-year payback or less.",
        },
        {
          question: "Do I qualify as an agricultural producer?",
          answer: "Agricultural producers derive 50%+ of gross income from agricultural operations. Most active farms qualify. Rural businesses have separate eligibility criteria.",
        },
        {
          question: "What about seasonal farm energy use?",
          answer: "We model your seasonal load profile. Net metering banks summer production credits for winter use, or we size systems for baseload offset.",
        },
        {
          question: "Can solar power well pumps and irrigation?",
          answer: "Yes. Irrigation loads align perfectly with solar production. Ground-mount systems near pivot points minimize electrical infrastructure costs.",
        },
        {
          question: "How do rural electric co-ops handle solar?",
          answer: "Most Minnesota co-ops offer net metering for solar. Some have specific programs or incentives. We handle interconnection with your co-op.",
        },
      ]}
      relatedIndustries={[
        { name: "Warehouses", slug: "warehouses" },
        { name: "Manufacturing", slug: "manufacturing" },
        { name: "Retail", slug: "retail" },
        { name: "Office Buildings", slug: "office-buildings" },
      ]}
    />
  );
}

import React from 'react';
import IndustryPage from '@/components/IndustryPage';

export const metadata = {
  title: "Manufacturing Solar Installation Minnesota | Industrial Solar ROI",
  description: "Commercial solar for Minnesota manufacturing facilities. Stabilize production costs with 30% ITC. Calculate industrial solar ROI before July 2026 deadline.",
  keywords: "manufacturing solar Minnesota, industrial solar MN, factory solar panels, production facility solar, manufacturing plant solar, industrial energy costs",
};

export default function ManufacturingPage() {
  return (
    <IndustryPage
      industryName="Manufacturing"
      industrySlug="manufacturing"
      headline="Solar for Manufacturing & Industrial Facilities."
      subheadline="Minnesota manufacturers face volatile energy costs that directly impact margins. Solar provides predictable, fixed-cost electricity for 25+ years, stabilizing production economics and strengthening competitive position."
      heroImage="/images/manufacturing-solar-hero.jpg"
      benefits={[
        {
          title: "Energy Cost Stability",
          description: "Lock in electricity costs for 25+ years. Eliminate budget uncertainty from utility rate increases that erode manufacturing margins.",
        },
        {
          title: "High Load Factor Match",
          description: "Manufacturing facilities with consistent daytime operations see the highest solar ROI. Production schedules align with peak generation.",
        },
        {
          title: "ESG & Supply Chain",
          description: "Major OEMs increasingly require sustainable supply chains. Solar helps manufacturers maintain preferred vendor status.",
        },
        {
          title: "Peak Demand Reduction",
          description: "Solar production during peak hours reduces demand charges—often 30-50% of industrial electric bills.",
        },
        {
          title: "Tax Shield Benefits",
          description: "The 30% ITC plus MACRS depreciation creates substantial tax benefits, often recovering 50%+ of system cost in Year 1.",
        },
        {
          title: "Made in USA Bonus",
          description: "Domestic content bonus credits available for systems using American-made components—up to 10% additional ITC.",
        },
      ]}
      idealProperties={[
        "Large flat or low-slope industrial roofs",
        "Consistent daytime production schedules",
        "High electricity consumption (500+ kW demand)",
        "Ownership or long-term lease (10+ years)",
        "Three-phase electrical service",
        "Structural capacity for roof-mounted systems",
      ]}
      caseStudy={{
        title: "Precision Machining Facility - Brooklyn Park",
        systemSize: "425 kW",
        annualSavings: "$78,000",
        payback: "3.4 years",
      }}
      faqs={[
        {
          question: "Will solar installation disrupt our manufacturing operations?",
          answer: "Roof-mounted installations require zero interior work. Ground-mount systems are installed in unused lot areas. Production continues uninterrupted.",
        },
        {
          question: "How does solar work with our three-shift operations?",
          answer: "Solar offsets daytime consumption directly. Net metering credits nighttime usage. We model your 24/7 load profile to optimize system sizing.",
        },
        {
          question: "Can solar handle our peak demand charges?",
          answer: "Yes. Solar production peaks mid-day when demand charges typically apply. Adding battery storage can further reduce demand charges.",
        },
        {
          question: "What about process heat and gas usage?",
          answer: "Solar offsets electrical loads. For facilities with electric process heating, solar provides excellent ROI. Gas processes require separate solutions.",
        },
        {
          question: "How do we handle equipment upgrades that increase load?",
          answer: "We design systems with expansion capacity. Additional panels can be added as your electrical needs grow.",
        },
        {
          question: "Does solar meet ISO 14001 requirements?",
          answer: "Solar supports ISO 14001 environmental management certification and helps document measurable emissions reduction.",
        },
      ]}
      relatedIndustries={[
        { name: "Warehouses", slug: "warehouses" },
        { name: "Office Buildings", slug: "office-buildings" },
        { name: "Agriculture", slug: "agriculture" },
        { name: "Retail", slug: "retail" },
      ]}
    />
  );
}

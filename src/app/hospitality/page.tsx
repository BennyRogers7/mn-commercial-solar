import React from 'react';
import IndustryPage from '@/components/IndustryPage';

export const metadata = {
  title: "Hotel Solar Installation Minnesota | Hospitality Solar ROI",
  description: "Commercial solar for Minnesota hotels, resorts, and event venues. Reduce 24/7 operating costs with 30% ITC. Calculate hospitality solar ROI before July 2026.",
  keywords: "hotel solar Minnesota, hospitality solar, resort solar MN, hotel solar panels, event venue solar, lodging solar",
};

export default function HospitalityPage() {
  return (
    <IndustryPage
      industryName="Hospitality"
      industrySlug="hospitality"
      headline="Solar for Hotels & Hospitality."
      subheadline="Hotels operate around the clock with significant energy demands: HVAC, lighting, laundry, pools, and more. Solar reduces operating costs, appeals to eco-conscious travelers, and provides marketing differentiation."
      heroImage="/images/hospitality-solar-hero.jpg"
      benefits={[
        {
          title: "24/7 Energy Consumption",
          description: "Hotels consume energy continuously. High baseload ensures solar production is fully utilized with minimal export.",
        },
        {
          title: "Eco-Tourism Appeal",
          description: "Sustainability-focused travelers actively choose green-certified hotels. Solar supports eco-certifications that drive bookings.",
        },
        {
          title: "Pool & Spa Offset",
          description: "Heated pools and spas consume substantial electricity. Solar directly offsets these high-demand amenities.",
        },
        {
          title: "Laundry Operations",
          description: "Hotel laundry facilities run during peak solar hours, creating excellent consumption alignment.",
        },
        {
          title: "Brand Standards",
          description: "Major hotel brands increasingly require sustainability initiatives. Solar helps franchisees meet brand ESG standards.",
        },
        {
          title: "Event Venue Marketing",
          description: "Conference centers and event spaces market solar as a differentiator for corporate events with sustainability requirements.",
        },
      ]}
      idealProperties={[
        "Full-service hotels with 100+ rooms",
        "Resorts with pools, spas, and amenities",
        "Conference centers and event venues",
        "Extended-stay properties",
        "Casino and gaming facilities",
        "Properties with large parking areas for canopy solar",
      ]}
      caseStudy={{
        title: "Full-Service Hotel - Bloomington",
        systemSize: "275 kW",
        annualSavings: "$52,000",
        payback: "3.7 years",
      }}
      faqs={[
        {
          question: "How does solar work with fluctuating hotel occupancy?",
          answer: "Hotels maintain high baseloads regardless of occupancy (HVAC, common areas, pools). Solar sizing targets baseload for consistent savings.",
        },
        {
          question: "Can solar help with green hotel certifications?",
          answer: "Yes. Solar contributes to LEED, Green Key, and TripAdvisor GreenLeaders certifications that drive booking decisions.",
        },
        {
          question: "What about rooftop pools and mechanical equipment?",
          answer: "We design around rooftop amenities and equipment. Parking canopies provide additional capacity when roof space is limited.",
        },
        {
          question: "How do hotel franchises handle solar decisions?",
          answer: "Most brands allow or encourage solar as an owner decision. Some brands have preferred solar programs with pre-approved vendors.",
        },
        {
          question: "Can solar power EV charging for hotel guests?",
          answer: "Yes. Solar + EV charging is an excellent combination, providing a premium amenity while generating the power to support it.",
        },
        {
          question: "What's the ROI for resort properties?",
          answer: "Resorts with pools, spas, and extensive amenities often see the fastest payback due to high energy consumption during peak solar hours.",
        },
      ]}
      relatedIndustries={[
        { name: "Retail", slug: "retail" },
        { name: "Multi-Family", slug: "multi-family" },
        { name: "Office Buildings", slug: "office-buildings" },
        { name: "Healthcare", slug: "healthcare" },
      ]}
    />
  );
}

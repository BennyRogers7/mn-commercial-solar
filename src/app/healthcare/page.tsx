import React from 'react';
import IndustryPage from '@/components/IndustryPage';

export const metadata = {
  title: "Healthcare Solar Installation Minnesota | Hospital & Medical Building Solar",
  description: "Commercial solar for Minnesota hospitals, clinics, and medical buildings. Reduce operating costs with 30% ITC. Calculate healthcare solar ROI before July 2026.",
  keywords: "hospital solar Minnesota, medical building solar, healthcare solar MN, clinic solar panels, nursing home solar, medical office solar",
};

export default function HealthcarePage() {
  return (
    <IndustryPage
      industryName="Healthcare"
      industrySlug="healthcare"
      headline="Solar for Healthcare & Medical Facilities."
      subheadline="Healthcare facilities operate 24/7 with substantial energy demands. Solar reduces operating costs, demonstrates community health leadership, and provides predictable energy expenses for long-term facility planning."
      heroImage="/images/healthcare-solar-hero.jpg"
      benefits={[
        {
          title: "High Baseload Consumption",
          description: "Hospitals and clinics run critical systems continuously. This consistent baseload maximizes solar self-consumption.",
        },
        {
          title: "Community Health Leadership",
          description: "Healthcare organizations reducing emissions demonstrate commitment to environmental health that resonates with patients and staff.",
        },
        {
          title: "Budget Predictability",
          description: "Fixed solar costs enable better long-term facility budgeting versus volatile utility rates.",
        },
        {
          title: "Resilience Planning",
          description: "Solar with battery storage provides backup power for critical loads during grid outages—essential for patient care.",
        },
        {
          title: "Nonprofit ITC Options",
          description: "Nonprofit hospitals can access ITC benefits through direct pay provisions or PPA/lease structures.",
        },
        {
          title: "Staff & Patient Satisfaction",
          description: "Sustainability initiatives improve staff recruitment, retention, and patient perception of organizational values.",
        },
      ]}
      idealProperties={[
        "Hospitals with large flat roof areas",
        "Medical office buildings and clinics",
        "Outpatient surgery centers",
        "Nursing homes and assisted living facilities",
        "Rehabilitation centers",
        "Properties with parking structures for canopy solar",
      ]}
      caseStudy={{
        title: "Regional Medical Center - Maple Grove",
        systemSize: "380 kW",
        annualSavings: "$68,000",
        payback: "3.9 years",
      }}
      faqs={[
        {
          question: "How do nonprofit hospitals access solar tax credits?",
          answer: "The IRA allows tax-exempt entities to receive direct pay for ITC value. Alternatively, PPA structures monetize credits through third-party ownership.",
        },
        {
          question: "Can solar provide backup power for critical systems?",
          answer: "Solar alone cannot provide backup, but solar + battery storage systems can power critical loads during outages.",
        },
        {
          question: "Does solar installation disrupt hospital operations?",
          answer: "Roof-mounted solar requires no interior work. We coordinate installation schedules to minimize any impact on facility operations.",
        },
        {
          question: "How does solar work with hospital emergency generators?",
          answer: "Solar and generators serve different purposes. Solar reduces daily costs; generators provide emergency backup. They complement each other.",
        },
        {
          question: "What about medical equipment and electrical sensitivity?",
          answer: "Modern inverters produce clean power that meets all electrical standards. Solar integration doesn't affect sensitive medical equipment.",
        },
        {
          question: "Can senior living facilities benefit from solar?",
          answer: "Yes. Assisted living and nursing homes see excellent ROI from solar, with consistent loads and long facility lifespans.",
        },
      ]}
      relatedIndustries={[
        { name: "Office Buildings", slug: "office-buildings" },
        { name: "Multi-Family", slug: "multi-family" },
        { name: "Hospitality", slug: "hospitality" },
        { name: "Retail", slug: "retail" },
      ]}
    />
  );
}

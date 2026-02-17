import React from 'react';
import LocationPage from '@/components/LocationPage';

export const metadata = {
  title: "Commercial Solar Installation Plymouth MN | Solar ROI Calculator",
  description: "Plymouth MN commercial solar experts. Solar installation for office parks, industrial facilities & retail centers. 30% ITC deadline July 2026. Get your free audit.",
  keywords: "commercial solar Plymouth, Plymouth solar installation, commercial solar panels Plymouth MN, solar for business Plymouth",
};

export default function PlymouthPage() {
  return (
    <LocationPage
      cityName="Plymouth"
      region="West Metro"
      utilityProvider="Xcel Energy"
      averageSunHours={4.5}
      localStats={[
        { value: "4.5", label: "Peak Sun Hours" },
        { value: "$0.11", label: "Avg Commercial Rate" },
        { value: "90+", label: "Commercial Installs" },
        { value: "2.5-4yr", label: "Typical Payback" },
      ]}
      industryFocus={[
        {
          title: "Plymouth Technology Park",
          description: "Tech and corporate campuses in Plymouth benefit from solar to reduce energy costs while meeting corporate sustainability mandates.",
        },
        {
          title: "Highway 55 Industrial",
          description: "Manufacturing and distribution facilities along Highway 55 leverage large roof areas for high-capacity solar installations.",
        },
        {
          title: "Shops at Plymouth Creek",
          description: "Retail centers in Plymouth see excellent ROI from solar production during peak daytime shopping hours.",
        },
        {
          title: "Northwest Business Campus",
          description: "Multi-building office complexes in northwest Plymouth reduce portfolio-wide energy costs with coordinated solar strategies.",
        },
        {
          title: "Medical Alley Properties",
          description: "Plymouth's concentration of medical device companies benefits from solar as part of broader ESG initiatives.",
        },
        {
          title: "West Medicine Lake Industrial",
          description: "Light industrial and flex properties near Medicine Lake offer ideal conditions for commercial solar installation.",
        },
      ]}
      localIncentives={[
        "30% Federal Investment Tax Credit (ITC) - must begin construction by July 3, 2026",
        "5-Year MACRS Accelerated Depreciation",
        "Minnesota Solar Energy Production Incentive",
        "Xcel Energy Net Metering (full retail rate credit)",
        "Hennepin County Green Business Program",
        "MN Property Tax Exemption for Solar Equipment",
        "Commercial PACE Financing through Hennepin County",
      ]}
      nearbyAreas={[
        { name: "Minneapolis", slug: "minneapolis" },
        { name: "Bloomington", slug: "bloomington" },
        { name: "St. Paul", slug: "st-paul" },
        { name: "Eagan", slug: "eagan" },
        { name: "Woodbury", slug: "woodbury" },
      ]}
    />
  );
}

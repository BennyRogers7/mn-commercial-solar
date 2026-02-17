import React from 'react';
import LocationPage from '@/components/LocationPage';

export const metadata = {
  title: "Commercial Solar Installation Bloomington MN | Solar ROI Calculator",
  description: "Bloomington MN commercial solar for retail, hospitality, office & industrial properties near Mall of America. 30% ITC deadline July 2026. Calculate your solar ROI.",
  keywords: "commercial solar Bloomington, Bloomington solar installation, commercial solar panels Bloomington MN, solar for business Bloomington, Mall of America solar",
};

export default function BloomingtonPage() {
  return (
    <LocationPage
      cityName="Bloomington"
      region="South Metro"
      utilityProvider="Xcel Energy"
      averageSunHours={4.6}
      localStats={[
        { value: "4.6", label: "Peak Sun Hours" },
        { value: "$0.12", label: "Avg Commercial Rate" },
        { value: "120+", label: "Commercial Installs" },
        { value: "2-4yr", label: "Typical Payback" },
      ]}
      industryFocus={[
        {
          title: "494 Strip Retail & Hotels",
          description: "Bloomington's hospitality corridor along I-494 benefits from solar to reduce 24/7 hotel operations costs and retail overhead.",
        },
        {
          title: "Airport Area Industrial",
          description: "Warehouses and logistics facilities near MSP Airport leverage large roof areas for maximum solar production capacity.",
        },
        {
          title: "Normandale Office Park",
          description: "Class A office buildings along Normandale Boulevard reduce operating expenses while attracting ESG-conscious corporate tenants.",
        },
        {
          title: "American Boulevard Corridor",
          description: "Mixed-use commercial properties along American Boulevard see strong ROI from daytime solar generation matching business hours.",
        },
        {
          title: "MOA District Properties",
          description: "Commercial buildings in the Mall of America district benefit from solar as part of Bloomington's sustainability initiatives.",
        },
        {
          title: "Old Shakopee Road Industrial",
          description: "Manufacturing and flex space along Old Shakopee Road offer ideal flat-roof conditions for commercial solar installation.",
        },
      ]}
      localIncentives={[
        "30% Federal Investment Tax Credit (ITC) - must begin construction by July 3, 2026",
        "5-Year MACRS Accelerated Depreciation",
        "Minnesota Solar Energy Production Incentive",
        "Xcel Energy Net Metering (full retail rate credit)",
        "Bloomington Sustainability Grant Program",
        "MN Property Tax Exemption for Solar Equipment",
        "Hennepin County PACE Financing",
      ]}
      nearbyAreas={[
        { name: "Minneapolis", slug: "minneapolis" },
        { name: "Eagan", slug: "eagan" },
        { name: "Plymouth", slug: "plymouth" },
        { name: "St. Paul", slug: "st-paul" },
        { name: "Woodbury", slug: "woodbury" },
      ]}
    />
  );
}

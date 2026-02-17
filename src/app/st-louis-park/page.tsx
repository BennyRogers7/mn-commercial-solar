import React from 'react';
import LocationPage from '@/components/LocationPage';

export const metadata = {
  title: "Commercial Solar Installation St. Louis Park MN | Solar ROI Calculator",
  description: "St. Louis Park MN commercial solar for retail, office, industrial & multi-family properties. West End district solar. 30% ITC deadline July 2026.",
  keywords: "commercial solar St. Louis Park, St. Louis Park solar installation, commercial solar panels St. Louis Park MN, West End solar, solar for business SLP",
};

export default function StLouisParkPage() {
  return (
    <LocationPage
      cityName="St. Louis Park"
      region="West Metro"
      utilityProvider="Xcel Energy"
      averageSunHours={4.6}
      localStats={[
        { value: "4.6", label: "Peak Sun Hours" },
        { value: "$0.12", label: "Avg Commercial Rate" },
        { value: "90+", label: "Commercial Installs" },
        { value: "2-4yr", label: "Typical Payback" },
      ]}
      industryFocus={[
        {
          title: "West End District",
          description: "The West End mixed-use development features premium retail and office space benefiting from solar operating cost reductions.",
        },
        {
          title: "Excelsior Boulevard Retail",
          description: "Legacy retail properties along Excelsior Boulevard modernize with solar while maintaining neighborhood character.",
        },
        {
          title: "Highway 7 Commercial",
          description: "High-visibility commercial properties along Highway 7 corridor leverage solar for energy cost stability.",
        },
        {
          title: "Knollwood Area",
          description: "Retail and office properties in the Knollwood area see strong ROI from commercial solar installations.",
        },
        {
          title: "Industrial Park",
          description: "St. Louis Park's industrial areas feature manufacturing and warehouse facilities ideal for large solar systems.",
        },
        {
          title: "Multi-Family Properties",
          description: "The city's substantial apartment inventory benefits from solar to reduce common-area costs and increase NOI.",
        },
      ]}
      localIncentives={[
        "30% Federal Investment Tax Credit (ITC) - must begin construction by July 3, 2026",
        "5-Year MACRS Accelerated Depreciation",
        "Minnesota Solar Energy Production Incentive",
        "Xcel Energy Net Metering (full retail rate credit)",
        "St. Louis Park Climate Action Plan incentives",
        "MN Property Tax Exemption for Solar Equipment",
        "Hennepin County PACE Financing",
      ]}
      nearbyAreas={[
        { name: "Minneapolis", slug: "minneapolis" },
        { name: "Golden Valley", slug: "golden-valley" },
        { name: "Edina", slug: "edina" },
        { name: "Plymouth", slug: "plymouth" },
        { name: "Wayzata", slug: "wayzata" },
      ]}
    />
  );
}

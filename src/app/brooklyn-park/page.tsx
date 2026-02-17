import React from 'react';
import LocationPage from '@/components/LocationPage';

export const metadata = {
  title: "Commercial Solar Installation Brooklyn Park MN | Solar ROI Calculator",
  description: "Brooklyn Park MN commercial solar for warehouses, manufacturing, retail & industrial properties. Target North Campus area. 30% ITC deadline July 2026.",
  keywords: "commercial solar Brooklyn Park, Brooklyn Park solar installation, commercial solar panels Brooklyn Park MN, Target North Campus solar, solar for business Brooklyn Park",
};

export default function BrooklynParkPage() {
  return (
    <LocationPage
      cityName="Brooklyn Park"
      region="Northwest Metro"
      utilityProvider="Xcel Energy / Connexus Energy"
      averageSunHours={4.5}
      localStats={[
        { value: "4.5", label: "Peak Sun Hours" },
        { value: "$0.10", label: "Avg Commercial Rate" },
        { value: "75+", label: "Commercial Installs" },
        { value: "2.5-4yr", label: "Typical Payback" },
      ]}
      industryFocus={[
        {
          title: "Target North Campus",
          description: "The Target corporate campus area anchors a corridor of commercial properties benefiting from solar for operating cost reduction.",
        },
        {
          title: "Highway 610 Industrial",
          description: "Large-scale distribution and manufacturing facilities along Highway 610 feature massive roof areas ideal for megawatt-scale solar.",
        },
        {
          title: "Brooklyn Boulevard Retail",
          description: "Established retail centers along Brooklyn Boulevard modernize with solar to reduce overhead and increase property values.",
        },
        {
          title: "93rd Avenue Business Park",
          description: "Corporate offices and light industrial in the 93rd Avenue area leverage solar for energy cost stability.",
        },
        {
          title: "Zane Avenue Corridor",
          description: "Mixed commercial properties along Zane Avenue benefit from solar as part of corridor revitalization.",
        },
        {
          title: "Edinburgh USA Area",
          description: "Commercial properties near Edinburgh USA Golf Course benefit from the area's premium positioning enhanced by solar.",
        },
      ]}
      localIncentives={[
        "30% Federal Investment Tax Credit (ITC) - must begin construction by July 3, 2026",
        "5-Year MACRS Accelerated Depreciation",
        "Minnesota Solar Energy Production Incentive",
        "Xcel Energy / Connexus Energy Net Metering",
        "Brooklyn Park Economic Development Programs",
        "MN Property Tax Exemption for Solar Equipment",
        "Hennepin County PACE Financing",
      ]}
      nearbyAreas={[
        { name: "Maple Grove", slug: "maple-grove" },
        { name: "Plymouth", slug: "plymouth" },
        { name: "Minneapolis", slug: "minneapolis" },
        { name: "Roseville", slug: "roseville" },
        { name: "Golden Valley", slug: "golden-valley" },
      ]}
    />
  );
}

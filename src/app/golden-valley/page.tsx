import React from 'react';
import LocationPage from '@/components/LocationPage';

export const metadata = {
  title: "Commercial Solar Installation Golden Valley MN | Solar ROI Calculator",
  description: "Golden Valley MN commercial solar for corporate headquarters, office parks, retail & industrial properties. 30% ITC deadline July 2026. Free solar audit.",
  keywords: "commercial solar Golden Valley, Golden Valley solar installation, commercial solar panels Golden Valley MN, General Mills solar, solar for business Golden Valley",
};

export default function GoldenValleyPage() {
  return (
    <LocationPage
      cityName="Golden Valley"
      region="West Metro"
      utilityProvider="Xcel Energy"
      averageSunHours={4.6}
      localStats={[
        { value: "4.6", label: "Peak Sun Hours" },
        { value: "$0.12", label: "Avg Commercial Rate" },
        { value: "65+", label: "Commercial Installs" },
        { value: "2-4yr", label: "Typical Payback" },
      ]}
      industryFocus={[
        {
          title: "Corporate Headquarters",
          description: "Golden Valley is home to major corporate headquarters where solar installations demonstrate environmental leadership and reduce substantial energy costs.",
        },
        {
          title: "Highway 100 Office Corridor",
          description: "Office buildings along Highway 100 benefit from solar to reduce operating costs and attract sustainability-focused tenants.",
        },
        {
          title: "Downtown Golden Valley",
          description: "The revitalized downtown area features mixed-use developments incorporating solar as modern building infrastructure.",
        },
        {
          title: "Xenia Avenue Business",
          description: "Commercial properties along Xenia Avenue leverage solar for energy cost predictability and property value increases.",
        },
        {
          title: "I-394 Corridor",
          description: "High-profile commercial properties along I-394 use solar installations to enhance corporate sustainability profiles.",
        },
        {
          title: "Light Industrial",
          description: "Manufacturing and distribution facilities in Golden Valley's industrial areas optimize large roof areas for solar.",
        },
      ]}
      localIncentives={[
        "30% Federal Investment Tax Credit (ITC) - must begin construction by July 3, 2026",
        "5-Year MACRS Accelerated Depreciation",
        "Minnesota Solar Energy Production Incentive",
        "Xcel Energy Net Metering (full retail rate credit)",
        "Golden Valley Environmental Commission Programs",
        "MN Property Tax Exemption for Solar Equipment",
        "Hennepin County PACE Financing",
      ]}
      nearbyAreas={[
        { name: "Minneapolis", slug: "minneapolis" },
        { name: "St. Louis Park", slug: "st-louis-park" },
        { name: "Plymouth", slug: "plymouth" },
        { name: "Wayzata", slug: "wayzata" },
        { name: "Maple Grove", slug: "maple-grove" },
      ]}
    />
  );
}

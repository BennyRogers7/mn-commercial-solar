import React from 'react';
import LocationPage from '@/components/LocationPage';

export const metadata = {
  title: "Commercial Solar Installation Wayzata MN | Solar ROI Calculator",
  description: "Wayzata MN commercial solar for lakefront properties, retail, office & hospitality. 30% ITC deadline July 2026. Calculate your commercial solar ROI.",
  keywords: "commercial solar Wayzata, Wayzata solar installation, commercial solar panels Wayzata MN, Lake Minnetonka commercial solar",
};

export default function WayzataPage() {
  return (
    <LocationPage
      cityName="Wayzata"
      region="West Metro"
      utilityProvider="Xcel Energy"
      averageSunHours={4.5}
      localStats={[
        { value: "4.5", label: "Peak Sun Hours" },
        { value: "$0.11", label: "Avg Commercial Rate" },
        { value: "40+", label: "Commercial Installs" },
        { value: "2.5-4yr", label: "Typical Payback" },
      ]}
      industryFocus={[
        {
          title: "Downtown Wayzata Retail",
          description: "Boutique retail and dining establishments in downtown Wayzata benefit from solar to reduce overhead while maintaining premium property appeal.",
        },
        {
          title: "Lake Minnetonka Hospitality",
          description: "Hotels, resorts, and event venues near Lake Minnetonka reduce 24/7 operating costs with commercial solar installations.",
        },
        {
          title: "Wayzata Office Properties",
          description: "Professional office buildings in Wayzata attract high-value tenants by demonstrating environmental leadership through solar.",
        },
        {
          title: "Highway 12 Corridor",
          description: "Commercial properties along Highway 12 leverage excellent roof conditions for high-capacity solar systems.",
        },
        {
          title: "Mixed-Use Developments",
          description: "New mixed-use projects in Wayzata incorporate solar as standard, reducing long-term operating expenses.",
        },
        {
          title: "Marina District Commercial",
          description: "Waterfront commercial properties balance aesthetic considerations with solar ROI through modern panel designs.",
        },
      ]}
      localIncentives={[
        "30% Federal Investment Tax Credit (ITC) - must begin construction by July 3, 2026",
        "5-Year MACRS Accelerated Depreciation",
        "Minnesota Solar Energy Production Incentive",
        "Xcel Energy Net Metering (full retail rate credit)",
        "Hennepin County Green Business Program",
        "MN Property Tax Exemption for Solar Equipment",
        "Commercial PACE Financing available",
      ]}
      nearbyAreas={[
        { name: "Plymouth", slug: "plymouth" },
        { name: "Maple Grove", slug: "maple-grove" },
        { name: "Golden Valley", slug: "golden-valley" },
        { name: "Minneapolis", slug: "minneapolis" },
        { name: "St. Louis Park", slug: "st-louis-park" },
      ]}
    />
  );
}

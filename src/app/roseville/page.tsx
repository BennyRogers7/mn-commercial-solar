import React from 'react';
import LocationPage from '@/components/LocationPage';

export const metadata = {
  title: "Commercial Solar Installation Roseville MN | Solar ROI Calculator",
  description: "Roseville MN commercial solar for retail centers, office parks & industrial properties. Rosedale area solar installation. 30% ITC expires July 2026.",
  keywords: "commercial solar Roseville, Roseville solar installation, commercial solar panels Roseville MN, Rosedale solar, solar for business Roseville",
};

export default function RosevillePage() {
  return (
    <LocationPage
      cityName="Roseville"
      region="North Metro"
      utilityProvider="Xcel Energy"
      averageSunHours={4.5}
      localStats={[
        { value: "4.5", label: "Peak Sun Hours" },
        { value: "$0.11", label: "Avg Commercial Rate" },
        { value: "80+", label: "Commercial Installs" },
        { value: "2.5-4yr", label: "Typical Payback" },
      ]}
      industryFocus={[
        {
          title: "Rosedale Center District",
          description: "Major retail properties around Rosedale Center benefit from solar to offset high daytime electricity consumption during shopping hours.",
        },
        {
          title: "Highway 36 Corridor",
          description: "Commercial and light industrial properties along Highway 36 offer ideal flat-roof conditions for large solar installations.",
        },
        {
          title: "Snelling Avenue Commercial",
          description: "Mixed retail and office properties along Snelling Avenue leverage solar for energy cost stability.",
        },
        {
          title: "Har Mar Mall Area",
          description: "Retail centers and surrounding commercial properties in the Har Mar district see strong solar ROI.",
        },
        {
          title: "Twin Lakes Business Park",
          description: "Office and flex space in Twin Lakes Business Park reduce operating costs with commercial solar systems.",
        },
        {
          title: "Larpenteur Corridor",
          description: "Diverse commercial properties along Larpenteur Avenue benefit from solar as part of modernization strategies.",
        },
      ]}
      localIncentives={[
        "30% Federal Investment Tax Credit (ITC) - must begin construction by July 3, 2026",
        "5-Year MACRS Accelerated Depreciation",
        "Minnesota Solar Energy Production Incentive",
        "Xcel Energy Net Metering (full retail rate credit)",
        "Roseville Sustainability Initiative",
        "MN Property Tax Exemption for Solar Equipment",
        "Ramsey County PACE Financing",
      ]}
      nearbyAreas={[
        { name: "St. Paul", slug: "st-paul" },
        { name: "Maplewood", slug: "maplewood" },
        { name: "Minneapolis", slug: "minneapolis" },
        { name: "Brooklyn Park", slug: "brooklyn-park" },
        { name: "Golden Valley", slug: "golden-valley" },
      ]}
    />
  );
}

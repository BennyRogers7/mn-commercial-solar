import React from 'react';
import LocationPage from '@/components/LocationPage';

export const metadata = {
  title: "Commercial Solar Installation Woodbury MN | Solar ROI Calculator",
  description: "Woodbury MN commercial solar for retail centers, office parks & warehouses. Calculate ROI with 30% ITC before July 2026 deadline. Free commercial solar audit.",
  keywords: "commercial solar Woodbury, Woodbury solar installation, commercial solar panels Woodbury MN, solar for business Woodbury",
};

export default function WoodburyPage() {
  return (
    <LocationPage
      cityName="Woodbury"
      region="East Metro"
      utilityProvider="Xcel Energy"
      averageSunHours={4.5}
      localStats={[
        { value: "4.5", label: "Peak Sun Hours" },
        { value: "$0.11", label: "Avg Commercial Rate" },
        { value: "75+", label: "Commercial Installs" },
        { value: "2.5-4yr", label: "Typical Payback" },
      ]}
      industryFocus={[
        {
          title: "Tamarack Village Retail",
          description: "Woodbury's premier retail destinations feature ideal roof conditions for commercial solar, offsetting high daytime electricity consumption.",
        },
        {
          title: "I-94 Corridor Warehouses",
          description: "Distribution centers along the I-94 corridor in Woodbury benefit from massive flat roof areas perfect for solar installation.",
        },
        {
          title: "CityPlace Office Complex",
          description: "Class A office buildings in Woodbury's business districts reduce OpEx while attracting sustainability-focused tenants.",
        },
        {
          title: "Woodbury Lakes Shopping",
          description: "Big-box retail and shopping centers at Woodbury Lakes see strong ROI from solar production during peak shopping hours.",
        },
        {
          title: "Medical Office Buildings",
          description: "Healthcare facilities in Woodbury leverage solar to stabilize operating costs and demonstrate community health commitment.",
        },
        {
          title: "Valley Creek Business Park",
          description: "Light industrial and flex space properties in Valley Creek area are ideal candidates for commercial solar systems.",
        },
      ]}
      localIncentives={[
        "30% Federal Investment Tax Credit (ITC) - must begin construction by July 3, 2026",
        "5-Year MACRS Accelerated Depreciation",
        "Minnesota Solar Energy Production Incentive",
        "Xcel Energy Net Metering (full retail rate credit)",
        "Washington County Solar Incentives",
        "MN Property Tax Exemption for Solar Equipment",
        "Commercial PACE Financing available",
      ]}
      nearbyAreas={[
        { name: "St. Paul", slug: "st-paul" },
        { name: "Eagan", slug: "eagan" },
        { name: "Minneapolis", slug: "minneapolis" },
        { name: "Bloomington", slug: "bloomington" },
        { name: "Plymouth", slug: "plymouth" },
      ]}
    />
  );
}

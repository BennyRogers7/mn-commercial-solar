import React from 'react';
import LocationPage from '@/components/LocationPage';

export const metadata = {
  title: "Commercial Solar Installation Eagan MN | Solar ROI Calculator",
  description: "Eagan MN commercial solar installation for corporate campuses, retail centers & industrial properties. 30% ITC expires July 2026. Free commercial solar audit.",
  keywords: "commercial solar Eagan, Eagan solar installation, commercial solar panels Eagan MN, solar for business Eagan, Eagan corporate solar",
};

export default function EaganPage() {
  return (
    <LocationPage
      cityName="Eagan"
      region="South Metro"
      utilityProvider="Dakota Electric Association / Xcel Energy"
      averageSunHours={4.5}
      localStats={[
        { value: "4.5", label: "Peak Sun Hours" },
        { value: "$0.10", label: "Avg Commercial Rate" },
        { value: "85+", label: "Commercial Installs" },
        { value: "2.5-4yr", label: "Typical Payback" },
      ]}
      industryFocus={[
        {
          title: "Eagan Corporate Campuses",
          description: "Major corporate headquarters in Eagan reduce operating costs and meet sustainability commitments with commercial solar installations.",
        },
        {
          title: "Central Parkway Business",
          description: "Office and flex space along Central Parkway benefit from solar to reduce overhead and increase building valuations.",
        },
        {
          title: "Town Centre Retail",
          description: "Eagan's retail centers see strong ROI from solar production during peak shopping hours, reducing operating expenses.",
        },
        {
          title: "Yankee Doodle Corridor",
          description: "Mixed commercial properties along Yankee Doodle Road leverage solar for energy cost stability and property value increases.",
        },
        {
          title: "Northwest Business Park",
          description: "Light industrial and distribution facilities in northwest Eagan offer ideal large roof conditions for solar installation.",
        },
        {
          title: "Blue Cross Campus Area",
          description: "Professional office buildings near major corporate anchors benefit from coordinated solar strategies across multiple properties.",
        },
      ]}
      localIncentives={[
        "30% Federal Investment Tax Credit (ITC) - must begin construction by July 3, 2026",
        "5-Year MACRS Accelerated Depreciation",
        "Minnesota Solar Energy Production Incentive",
        "Dakota Electric Association Net Metering & Rebates",
        "Xcel Energy Net Metering (where applicable)",
        "MN Property Tax Exemption for Solar Equipment",
        "Dakota County PACE Financing options",
      ]}
      nearbyAreas={[
        { name: "Bloomington", slug: "bloomington" },
        { name: "St. Paul", slug: "st-paul" },
        { name: "Woodbury", slug: "woodbury" },
        { name: "Minneapolis", slug: "minneapolis" },
        { name: "Plymouth", slug: "plymouth" },
      ]}
    />
  );
}

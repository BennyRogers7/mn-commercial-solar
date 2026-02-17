import React from 'react';
import LocationPage from '@/components/LocationPage';

export const metadata = {
  title: "Commercial Solar Installation Maplewood MN | Solar ROI Calculator",
  description: "Maplewood MN commercial solar for 3M campus area, retail, industrial & office properties. 30% ITC deadline July 2026. Get your free commercial solar audit.",
  keywords: "commercial solar Maplewood, Maplewood solar installation, commercial solar panels Maplewood MN, 3M solar, solar for business Maplewood",
};

export default function MaplewoodPage() {
  return (
    <LocationPage
      cityName="Maplewood"
      region="East Metro"
      utilityProvider="Xcel Energy"
      averageSunHours={4.5}
      localStats={[
        { value: "4.5", label: "Peak Sun Hours" },
        { value: "$0.11", label: "Avg Commercial Rate" },
        { value: "70+", label: "Commercial Installs" },
        { value: "2.5-4yr", label: "Typical Payback" },
      ]}
      industryFocus={[
        {
          title: "3M Campus Area",
          description: "Commercial properties near 3M's global headquarters benefit from the area's strong corporate sustainability culture.",
        },
        {
          title: "Maplewood Mall District",
          description: "Retail properties around Maplewood Mall see excellent ROI from solar production during peak shopping hours.",
        },
        {
          title: "Century Avenue Industrial",
          description: "Manufacturing and distribution facilities along Century Avenue leverage large roof areas for maximum solar capacity.",
        },
        {
          title: "White Bear Avenue Retail",
          description: "Strip retail and mixed-use properties along White Bear Avenue reduce operating costs with commercial solar.",
        },
        {
          title: "Beam Avenue Business",
          description: "Office and flex space along Beam Avenue corridor benefit from solar as part of property modernization.",
        },
        {
          title: "I-694 Corridor Properties",
          description: "Commercial properties with easy highway access offer ideal conditions for large-scale solar installations.",
        },
      ]}
      localIncentives={[
        "30% Federal Investment Tax Credit (ITC) - must begin construction by July 3, 2026",
        "5-Year MACRS Accelerated Depreciation",
        "Minnesota Solar Energy Production Incentive",
        "Xcel Energy Net Metering (full retail rate credit)",
        "Maplewood Environmental Programs",
        "MN Property Tax Exemption for Solar Equipment",
        "Ramsey County PACE Financing",
      ]}
      nearbyAreas={[
        { name: "St. Paul", slug: "st-paul" },
        { name: "Woodbury", slug: "woodbury" },
        { name: "Roseville", slug: "roseville" },
        { name: "Minneapolis", slug: "minneapolis" },
        { name: "Eagan", slug: "eagan" },
      ]}
    />
  );
}

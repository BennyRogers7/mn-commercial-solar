import React from 'react';
import LocationPage from '@/components/LocationPage';

export const metadata = {
  title: "Commercial Solar Installation Chaska MN | Solar ROI Calculator",
  description: "Chaska MN commercial solar for manufacturing, retail, office & industrial properties in Carver County. 30% ITC deadline July 2026. Free solar audit.",
  keywords: "commercial solar Chaska, Chaska solar installation, commercial solar panels Chaska MN, Carver County solar, solar for business Chaska",
};

export default function ChaskaPage() {
  return (
    <LocationPage
      cityName="Chaska"
      region="Southwest Metro"
      utilityProvider="Xcel Energy"
      averageSunHours={4.5}
      localStats={[
        { value: "4.5", label: "Peak Sun Hours" },
        { value: "$0.10", label: "Avg Commercial Rate" },
        { value: "45+", label: "Commercial Installs" },
        { value: "2.5-4yr", label: "Typical Payback" },
      ]}
      industryFocus={[
        {
          title: "Chaska Business Park",
          description: "Light manufacturing and distribution facilities in Chaska's business parks offer ideal conditions for commercial solar.",
        },
        {
          title: "Downtown Chaska",
          description: "Historic downtown commercial properties balance solar installation with aesthetic preservation requirements.",
        },
        {
          title: "Highway 212 Corridor",
          description: "Growing commercial development along Highway 212 incorporates solar as part of modern building standards.",
        },
        {
          title: "Hazeltine Area Commercial",
          description: "Commercial properties near Hazeltine National Golf Club benefit from the area's premium property values enhanced by solar.",
        },
        {
          title: "Industrial Boulevard",
          description: "Manufacturing facilities along Industrial Boulevard leverage large flat roofs for maximum solar production.",
        },
        {
          title: "Retail Centers",
          description: "Chaska's retail centers see strong ROI from daytime solar production matching business operating hours.",
        },
      ]}
      localIncentives={[
        "30% Federal Investment Tax Credit (ITC) - must begin construction by July 3, 2026",
        "5-Year MACRS Accelerated Depreciation",
        "Minnesota Solar Energy Production Incentive",
        "Xcel Energy Net Metering (full retail rate credit)",
        "Carver County Business Programs",
        "MN Property Tax Exemption for Solar Equipment",
        "Commercial PACE Financing available",
      ]}
      nearbyAreas={[
        { name: "Shakopee", slug: "shakopee" },
        { name: "Plymouth", slug: "plymouth" },
        { name: "Bloomington", slug: "bloomington" },
        { name: "Minneapolis", slug: "minneapolis" },
        { name: "Wayzata", slug: "wayzata" },
      ]}
    />
  );
}

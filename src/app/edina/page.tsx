import React from 'react';
import LocationPage from '@/components/LocationPage';

export const metadata = {
  title: "Commercial Solar Installation Edina MN | Solar ROI Calculator",
  description: "Edina MN commercial solar for office buildings, retail centers, medical facilities & multi-family properties. 30% ITC deadline July 2026. Free solar audit.",
  keywords: "commercial solar Edina, Edina solar installation, commercial solar panels Edina MN, solar for business Edina, Southdale solar",
};

export default function EdinaPage() {
  return (
    <LocationPage
      cityName="Edina"
      region="Southwest Metro"
      utilityProvider="Xcel Energy"
      averageSunHours={4.6}
      localStats={[
        { value: "4.6", label: "Peak Sun Hours" },
        { value: "$0.12", label: "Avg Commercial Rate" },
        { value: "95+", label: "Commercial Installs" },
        { value: "2-4yr", label: "Typical Payback" },
      ]}
      industryFocus={[
        {
          title: "Southdale Area Retail",
          description: "Edina's premier retail district around Southdale Center features high-value commercial properties ideal for solar ROI optimization.",
        },
        {
          title: "France Avenue Office",
          description: "Class A office buildings along France Avenue reduce operating costs while attracting premium corporate tenants with sustainability credentials.",
        },
        {
          title: "Centennial Lakes Business",
          description: "The Centennial Lakes district's modern office complexes are prime candidates for commercial solar installations.",
        },
        {
          title: "Medical District Properties",
          description: "Edina's concentration of medical offices and clinics benefit from solar to stabilize energy costs and demonstrate healthcare leadership.",
        },
        {
          title: "50th & France Mixed-Use",
          description: "Boutique retail and office properties in the 50th & France district leverage solar for operating cost reduction.",
        },
        {
          title: "Grandview District",
          description: "Redeveloped commercial properties in the Grandview area incorporate solar as part of modern building standards.",
        },
      ]}
      localIncentives={[
        "30% Federal Investment Tax Credit (ITC) - must begin construction by July 3, 2026",
        "5-Year MACRS Accelerated Depreciation",
        "Minnesota Solar Energy Production Incentive",
        "Xcel Energy Net Metering (full retail rate credit)",
        "Edina Green Building Incentive Program",
        "MN Property Tax Exemption for Solar Equipment",
        "Hennepin County PACE Financing",
      ]}
      nearbyAreas={[
        { name: "Bloomington", slug: "bloomington" },
        { name: "St. Louis Park", slug: "st-louis-park" },
        { name: "Minneapolis", slug: "minneapolis" },
        { name: "Golden Valley", slug: "golden-valley" },
        { name: "Plymouth", slug: "plymouth" },
      ]}
    />
  );
}

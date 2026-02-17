import React from 'react';
import LocationPage from '@/components/LocationPage';

export const metadata = {
  title: "Commercial Solar Installation St. Paul MN | Solar ROI Calculator",
  description: "St. Paul commercial solar installation for warehouses, office buildings, retail & industrial properties. 30% ITC deadline July 2026. Calculate your ROI today.",
  keywords: "commercial solar St. Paul, St. Paul solar installation, commercial solar panels St. Paul MN, solar for business St. Paul",
};

export default function StPaulPage() {
  return (
    <LocationPage
      cityName="St. Paul"
      region="East Metro"
      utilityProvider="Xcel Energy"
      averageSunHours={4.6}
      localStats={[
        { value: "4.6", label: "Peak Sun Hours" },
        { value: "$0.11", label: "Avg Commercial Rate" },
        { value: "150+", label: "Commercial Installs" },
        { value: "2-4yr", label: "Typical Payback" },
      ]}
      industryFocus={[
        {
          title: "Midway Industrial District",
          description: "The Midway area between Minneapolis and St. Paul features large industrial roofs perfect for high-capacity commercial solar installations.",
        },
        {
          title: "Downtown St. Paul Office",
          description: "Capital City commercial buildings reduce operating costs while demonstrating environmental leadership to state government tenants.",
        },
        {
          title: "University Avenue Corridor",
          description: "Mixed-use developments along the Green Line benefit from solar to offset retail and common-area electric loads.",
        },
        {
          title: "West Side Manufacturing",
          description: "St. Paul's West Side industrial zone features manufacturing facilities ideal for solar cost stabilization strategies.",
        },
        {
          title: "Highland Park Retail",
          description: "Neighborhood commercial centers in Highland Park see excellent ROI from daytime solar production matching retail hours.",
        },
        {
          title: "East Side Warehouses",
          description: "Distribution and logistics facilities on St. Paul's East Side leverage large roof areas for maximum solar capacity.",
        },
      ]}
      localIncentives={[
        "30% Federal Investment Tax Credit (ITC) - must begin construction by July 3, 2026",
        "5-Year MACRS Accelerated Depreciation",
        "Minnesota Solar Energy Production Incentive",
        "Xcel Energy Net Metering (full retail rate credit)",
        "St. Paul Climate Action Rebate Program",
        "MN Property Tax Exemption for Solar Equipment",
        "Ramsey County PACE Financing",
      ]}
      nearbyAreas={[
        { name: "Minneapolis", slug: "minneapolis" },
        { name: "Woodbury", slug: "woodbury" },
        { name: "Eagan", slug: "eagan" },
        { name: "Bloomington", slug: "bloomington" },
        { name: "Plymouth", slug: "plymouth" },
      ]}
    />
  );
}

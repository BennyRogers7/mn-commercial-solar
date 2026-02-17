import React from 'react';
import LocationPage from '@/components/LocationPage';

export const metadata = {
  title: "Commercial Solar Installation Minneapolis MN | Solar ROI Calculator",
  description: "Minneapolis commercial solar installation experts. Calculate ROI for warehouses, retail, office buildings & multi-family properties. 30% ITC expires July 2026. Get your free audit.",
  keywords: "commercial solar Minneapolis, Minneapolis solar installation, commercial solar panels Minneapolis MN, solar for business Minneapolis",
};

export default function MinneapolisPage() {
  return (
    <LocationPage
      cityName="Minneapolis"
      region="Twin Cities Metro"
      utilityProvider="Xcel Energy"
      averageSunHours={4.6}
      localStats={[
        { value: "4.6", label: "Peak Sun Hours" },
        { value: "$0.12", label: "Avg Commercial Rate" },
        { value: "200+", label: "Commercial Installs" },
        { value: "2-4yr", label: "Typical Payback" },
      ]}
      industryFocus={[
        {
          title: "North Loop Warehouses",
          description: "Large flat roofs in the North Loop and Northeast Minneapolis offer maximum solar capacity. Ideal for distribution centers offsetting high daytime loads.",
        },
        {
          title: "Downtown Office Buildings",
          description: "Minneapolis CBD properties benefit from solar as a hedge against rising Xcel Energy rates. Increase NOI and building valuation simultaneously.",
        },
        {
          title: "Uptown & Lake Street Retail",
          description: "Retail strip centers and mixed-use buildings along Lake Street and Uptown corridors see strong ROI from peak-hour solar production.",
        },
        {
          title: "University District Properties",
          description: "Multi-tenant buildings near the U of M campus reduce common-area electric costs while increasing property desirability.",
        },
        {
          title: "Northeast Industrial",
          description: "Manufacturing facilities in NE Minneapolis leverage solar to stabilize production costs and meet sustainability commitments.",
        },
        {
          title: "South Minneapolis Multi-Family",
          description: "Apartment buildings offset master-metered loads and common area usage, directly increasing Net Operating Income.",
        },
      ]}
      localIncentives={[
        "30% Federal Investment Tax Credit (ITC) - must begin construction by July 3, 2026",
        "5-Year MACRS Accelerated Depreciation",
        "Minnesota Solar Energy Production Incentive",
        "Xcel Energy Net Metering (full retail rate credit)",
        "Minneapolis Green Cost Share Program",
        "MN Property Tax Exemption for Solar Equipment",
        "PACE Financing available for qualifying properties",
      ]}
      nearbyAreas={[
        { name: "St. Paul", slug: "st-paul" },
        { name: "Bloomington", slug: "bloomington" },
        { name: "Plymouth", slug: "plymouth" },
        { name: "Eagan", slug: "eagan" },
        { name: "Woodbury", slug: "woodbury" },
      ]}
    />
  );
}

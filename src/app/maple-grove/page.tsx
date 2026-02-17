import React from 'react';
import LocationPage from '@/components/LocationPage';

export const metadata = {
  title: "Commercial Solar Installation Maple Grove MN | Solar ROI Calculator",
  description: "Maple Grove MN commercial solar for medical facilities, retail centers, office parks & industrial properties. 30% ITC deadline July 2026. Free audit.",
  keywords: "commercial solar Maple Grove, Maple Grove solar installation, commercial solar panels Maple Grove MN, Arbor Lakes solar, solar for business Maple Grove",
};

export default function MapleGrovePage() {
  return (
    <LocationPage
      cityName="Maple Grove"
      region="Northwest Metro"
      utilityProvider="Xcel Energy"
      averageSunHours={4.5}
      localStats={[
        { value: "4.5", label: "Peak Sun Hours" },
        { value: "$0.11", label: "Avg Commercial Rate" },
        { value: "85+", label: "Commercial Installs" },
        { value: "2.5-4yr", label: "Typical Payback" },
      ]}
      industryFocus={[
        {
          title: "Arbor Lakes District",
          description: "The Arbor Lakes retail and entertainment district features high-traffic commercial properties ideal for solar ROI optimization.",
        },
        {
          title: "Medical District",
          description: "Maple Grove's concentration of hospitals and medical offices benefit from solar to stabilize substantial energy costs.",
        },
        {
          title: "I-94 Corridor Industrial",
          description: "Distribution and light manufacturing along I-94 leverage excellent highway access and large roof areas for solar.",
        },
        {
          title: "Main Street Retail",
          description: "The Main Street mixed-use area sees strong ROI from solar production during peak retail hours.",
        },
        {
          title: "Weaver Lake Business Park",
          description: "Corporate offices and flex space in Weaver Lake area reduce operating costs with commercial solar systems.",
        },
        {
          title: "Highway 610 Development",
          description: "Newer commercial developments along Highway 610 incorporate solar as standard building infrastructure.",
        },
      ]}
      localIncentives={[
        "30% Federal Investment Tax Credit (ITC) - must begin construction by July 3, 2026",
        "5-Year MACRS Accelerated Depreciation",
        "Minnesota Solar Energy Production Incentive",
        "Xcel Energy Net Metering (full retail rate credit)",
        "Maple Grove Green Business Initiative",
        "MN Property Tax Exemption for Solar Equipment",
        "Hennepin County PACE Financing",
      ]}
      nearbyAreas={[
        { name: "Plymouth", slug: "plymouth" },
        { name: "Brooklyn Park", slug: "brooklyn-park" },
        { name: "Wayzata", slug: "wayzata" },
        { name: "Minneapolis", slug: "minneapolis" },
        { name: "Golden Valley", slug: "golden-valley" },
      ]}
    />
  );
}

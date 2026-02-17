import React from 'react';
import LocationPage from '@/components/LocationPage';

export const metadata = {
  title: "Commercial Solar Installation Shakopee MN | Solar ROI Calculator",
  description: "Shakopee MN commercial solar for warehouses, data centers, retail & industrial facilities. Canterbury Park area. 30% ITC deadline July 2026.",
  keywords: "commercial solar Shakopee, Shakopee solar installation, commercial solar panels Shakopee MN, Amazon warehouse solar, Canterbury solar",
};

export default function ShakopeePage() {
  return (
    <LocationPage
      cityName="Shakopee"
      region="Southwest Metro"
      utilityProvider="Xcel Energy / Minnesota Valley Electric"
      averageSunHours={4.5}
      localStats={[
        { value: "4.5", label: "Peak Sun Hours" },
        { value: "$0.10", label: "Avg Commercial Rate" },
        { value: "60+", label: "Commercial Installs" },
        { value: "2.5-4yr", label: "Typical Payback" },
      ]}
      industryFocus={[
        {
          title: "Amazon & Fulfillment Centers",
          description: "Shakopee's massive fulfillment and distribution centers feature enormous roof areas perfect for megawatt-scale solar installations.",
        },
        {
          title: "Data Center Corridor",
          description: "The growing data center industry in Shakopee benefits from solar to offset substantial 24/7 power consumption.",
        },
        {
          title: "Canterbury Park District",
          description: "Entertainment and hospitality venues near Canterbury Park reduce operating costs with commercial solar systems.",
        },
        {
          title: "Highway 169 Industrial",
          description: "Manufacturing and logistics facilities along Highway 169 leverage strategic solar installations for cost control.",
        },
        {
          title: "Downtown Shakopee",
          description: "Mixed commercial properties in downtown Shakopee modernize with solar while preserving historic character.",
        },
        {
          title: "Valley Industrial Park",
          description: "Heavy industrial facilities in the Valley Industrial area benefit from solar for energy cost predictability.",
        },
      ]}
      localIncentives={[
        "30% Federal Investment Tax Credit (ITC) - must begin construction by July 3, 2026",
        "5-Year MACRS Accelerated Depreciation",
        "Minnesota Solar Energy Production Incentive",
        "Xcel Energy / MVEC Net Metering programs",
        "Scott County Business Incentives",
        "MN Property Tax Exemption for Solar Equipment",
        "PACE Financing for qualifying properties",
      ]}
      nearbyAreas={[
        { name: "Chaska", slug: "chaska" },
        { name: "Bloomington", slug: "bloomington" },
        { name: "Eagan", slug: "eagan" },
        { name: "Eden Prairie", slug: "eden-prairie" },
        { name: "Minneapolis", slug: "minneapolis" },
      ]}
    />
  );
}

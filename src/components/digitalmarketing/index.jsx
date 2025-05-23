import React from "react";
import { SeoMarketing } from "./SeoMarketing";
import Slider from "./Slider";
import { DigitalMarketingServices } from "./DigitalMarketingServices ";
import { DevNexusMarketingBenefits } from "./DevNexusMarketingBenefits ";

import StatusCard from "../common/Status";
import FaqSection from "../global/FaqSection";

export const DigitalMarketing = () => {
  return (
    <div>
      <StatusCard />
      <SeoMarketing />
      <DigitalMarketingServices />
      <DevNexusMarketingBenefits />
      <Slider />
      <FaqSection />
    </div>
  );
};

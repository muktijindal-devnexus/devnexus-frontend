import React from "react";
import { Banner } from "../global/Banner";
import StatusCard from "../common/Status";
import UIDesignTechnologies from "./Core";
import { MainDevnexus } from "./MainDevnexus";
import DesignProcess from "./DesignProcess";
import Slider from "../digitalmarketing/Slider";
import { WhyUIUX } from "./WhyUIUX";
import FaqSection from "../global/FaqSection";
import BannerImage1 from '../../../public/images/UIUXBanner.png'


export const UIUXComponent = () => {
  return (
    <div>
      <Banner
        image={BannerImage1}
        overlayImage
        heading="Upgrade Your Brand with Exceptional UI UX Design and Development Services"
        description="Elevate user engagement through intuitive design and seamless digital experiences."
      />
      <StatusCard />
      <UIDesignTechnologies />
      <MainDevnexus />
      <DesignProcess />
      <Slider />
      <WhyUIUX />
      <FaqSection />
    </div>
  );
};

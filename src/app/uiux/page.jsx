import { Banner } from '@/components/global/Banner'
import React from 'react'
import BannerImage1 from '../../../public/images/UIUXBanner.png'
import StatusCard from '@/components/global/Status'
import UIDesignTechnologies from '@/components/UIUX/Core'
import WhyDevNexus, { MainDevnexus } from '@/components/UIUX/MainDevnexus'
import Slider from '@/components/digitalmarketing/Slider'
import FaqSection from '@/components/digitalmarketing/FaqSection'
import { WhyUIUX } from '@/components/UIUX/WhyUIUX'
import DesignProcess from '@/components/UIUX/DesignProcess'
const UIUX = () => {
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
   <FaqSection/>
    </div>
  )
}

export default UIUX

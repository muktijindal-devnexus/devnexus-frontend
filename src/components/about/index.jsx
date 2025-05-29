import React from 'react'
import { Banner } from "../global/Banner";
import BannerImage1 from "../../../public/images/BannerImage.jpg";
import FoundersSection from './FounderSection';
import Slider from '../common/Slider';
import WhatWeDo from './WhatWeDo';
import { AboutDevnexus } from './ContentSection';
import OurValues from './OurValues';


export const AboutComponent = () => {
  return (
    <div>
            <Banner
                image={BannerImage1}
                overlayImage
                heading="Trusted Blockchain Development Company  "
                description="Building secure, scalable, and transparent systems for a decentralized future"
              />
              
              <AboutDevnexus />
              <OurValues />
              <FoundersSection />
               <WhatWeDo />
              <Slider />
             
    </div>
  )
}

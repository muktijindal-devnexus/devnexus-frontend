import React from 'react'
import BannerImage1 from "../../../public/images/About/about.png";
import FoundersSection from './FounderSection';
import Slider from '../common/Slider';
import WhatWeDo from './WhatWeDo';
import { AboutDevnexus } from './ContentSection';
import OurValues from './OurValues';
import { Banners } from '../global/NavBanners';


export const AboutComponent = () => {
  return (
    <div>
            <Banners
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

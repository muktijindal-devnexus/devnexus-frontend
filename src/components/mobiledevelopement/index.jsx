import React from 'react'
import FaqSection from '../global/FaqSection'

import WhyChooseUs from '../common/WhyChooseUs'
import Slider from '../common/Slider'
import ExecutionSection from '../common/ExecutionSection'
import StatusCard from '../common/Status'
import { ProcessWeFollow } from '../common/ProcessWeFollow'
import { Banner } from '../global/Banner'


export const MobileDevelopment = () => {
  return (
    <div>
         <Banner
               image='/images/mobile/MobileHero.mp4'
               overlayImage
               heading="Upgrade Your Brand with Exceptional UI UX Design and Development Services"
               description="Elevate user engagement through intuitive design and seamless digital experiences."
             />
    <StatusCard />
       <WhyChooseUs />
       <ExecutionSection />
       <Slider />
       <ProcessWeFollow />
       <FaqSection />
    </div>
  )
}

import React from 'react'
import { MobileBanner } from './MobileBanner'
import FaqSection from '../digitalmarketing/FaqSection'

import WhyChooseUs from './WhyChooseUs'
import Slider from '../digitalmarketing/Slider'
import ExecutionSection from './ExecutionSection'
import { MobileAppProcess } from './MobileAppProcess'
import StatusCard from '../global/Status'


export const MobileDevelopment = () => {
  return (
    <div>
       <MobileBanner />
    <StatusCard />
       <WhyChooseUs />
       <ExecutionSection />
       <Slider />
       <MobileAppProcess />
       <FaqSection />
    </div>
  )
}

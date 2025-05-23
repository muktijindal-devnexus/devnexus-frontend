import React from 'react'
import { MobileBanner } from './MobileBanner'
import FaqSection from '../global/FaqSection'

import WhyChooseUs from '../common/WhyChooseUs'
import Slider from '../digitalmarketing/Slider'
import ExecutionSection from '../common/ExecutionSection'
import { MobileAppProcess } from './MobileAppProcess'
import StatusCard from '../common/Status'


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

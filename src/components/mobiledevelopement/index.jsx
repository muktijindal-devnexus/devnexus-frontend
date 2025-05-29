import React from 'react'
import { MobileBanner } from './MobileBanner'
import FaqSection from '../global/FaqSection'

import WhyChooseUs from '../common/WhyChooseUs'
import Slider from '../common/Slider'
import ExecutionSection from '../common/ExecutionSection'
import StatusCard from '../common/Status'
import { ProcessWeFollow } from '../common/ProcessWeFollow'


export const MobileDevelopment = () => {
  return (
    <div>
       <MobileBanner />
    <StatusCard />
       <WhyChooseUs />
       <ExecutionSection />
       <Slider />
       <ProcessWeFollow />
       <FaqSection />
    </div>
  )
}

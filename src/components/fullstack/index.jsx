
import { Banner } from '@/components/global/Banner'
import StatusCard from '@/components/common/Status'
import WhyChooseUs from '@/components/common/WhyChooseUs'
import ExecutionSection from '@/components/common/ExecutionSection'
import React from 'react'
import { ProcessWeFollow } from '../common/ProcessWeFollow'
import FaqSection from '../global/FaqSection'
import Slider from '../common/Slider'

export const Fullstack = () => {
  return (
    <div>
            <Banner
                 image="/images/fullstack/fullstackHero.mp4"
                    overlayImage
                    heading="Web Design and Development Services That Clicks, Convert and Captivate "
                    description="Creating seamless, high-performing websites that engage users and drive results"
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

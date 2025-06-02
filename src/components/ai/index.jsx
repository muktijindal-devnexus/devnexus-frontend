import React from 'react'
import { Banner } from '../global/Banner'
import StatusCard from '../common/Status'
import AIServiceSection from './AiServices'
import FaqSection from '../global/FaqSection'
import WhyChooseSection from './WhyChooseSection'
import BusinessGrowthSlider from './BusinessGrowthSlider'

export const AiTech = () => {
  return (
    <div>
            <Banner
                     image='/images/ai/ai.mp4'
                     overlayImage
                     heading=" Transform Artificial Intelligence Development Services"
                     description="At DevNexus Solutions, we are accelerating business through strategic Ai software development services."
                   />
                   <StatusCard />
                   <AIServiceSection />
                   <WhyChooseSection />
                   <BusinessGrowthSlider />
                   <FaqSection />
    </div>
  )
}

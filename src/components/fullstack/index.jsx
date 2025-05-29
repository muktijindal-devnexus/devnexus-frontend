import BannerImage1 from '../../../public/images/BannerImage.jpg'
import { Banner } from '@/components/global/Banner'
import StatusCard from '@/components/common/Status'
import WhyChooseUs from '@/components/common/WhyChooseUs'
import ExecutionSection from '@/components/common/ExecutionSection'
import React from 'react'
import { ProcessWeFollow } from '../common/ProcessWeFollow'
import BrandSlider from '../global/BrandSlider'
import FaqSection from '../global/FaqSection'

export const Fullstack = () => {
  return (
    <div>
            <Banner
                    image={BannerImage1}
                    overlayImage
                    heading="Web Design and Development Services That Clicks, Convert and Captivate "
                    description="Creating seamless, high-performing websites that engage users and drive results"
                  />
                   <StatusCard />
                      <WhyChooseUs />
                        <ExecutionSection />
                        <ProcessWeFollow />
                        <BrandSlider />
                        <FaqSection />
    </div>
  )
}

import { Banner } from '@/components/global/Banner'
import React from 'react'
import BannerImage1 from '../../../public/images/BannerImage.jpg'

const Fullstackpage = () => {
  return (
    <div>
        <Banner
                    image={BannerImage1}
                    overlayImage
                    heading="Web Design and Development Services That Clicks, Convert and Captivate "
                    description="Creating seamless, high-performing websites that engage users and drive results"
                  />
    </div>
  )
}

export default Fullstackpage

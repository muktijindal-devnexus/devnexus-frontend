import { DigitalMarketingServices } from '@/components/digitalmarketing/DigitalMarketingServices '
import { Banner } from '@/components/global/Banner'
import React from 'react'
import BannerImage1 from '../../../public/images/BannerImage.jpg'
import { DigitalMarketing } from '@/components/digitalmarketing'

 const DigitalMarketingPage = () => {
  return (
    <div>
            <Banner
                image={BannerImage1}
                overlayImage
                heading="Digital Marketing Services To Boost Your Business Growth "
                description="Transforming ideas into high-performing Android & iOS applicationLet the Right Digital Marketing Company Uplift Your Web Traffic, Generate More Leads and Sales for Your Business.s"
              />
        <DigitalMarketing />
    </div>
  )
}
export default DigitalMarketingPage

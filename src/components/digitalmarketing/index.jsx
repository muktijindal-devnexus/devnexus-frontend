import React from 'react'
import { SeoMarketing } from './SeoMarketing'
import Slider from './Slider'
import { DigitalMarketingServices } from './DigitalMarketingServices '
import { DevNexusMarketingBenefits } from './DevNexusMarketingBenefits '
import FaqSection from './FaqSection'
import StatusCard from '../global/Status'



export const DigitalMarketing = () => {
  return (
    <div>
 <StatusCard />
  <SeoMarketing />
<DigitalMarketingServices />
<DevNexusMarketingBenefits />
    <Slider />
    <FaqSection />
    </div>
    
  )
}

import React from 'react'
import HiringSection from './HiringSection'
import JobOpenings from './JobOpenings'
import { Banner } from '../global/Banner'
import BannerImage1 from '../../../public/images/BannerImage1.jpg'
import OurValues from './OurValues'
import GoodCompanySection from './GoodCompany'


export const Career = () => {
  return (
    <div>
         <Banner
                image={BannerImage1}
                overlayImage
                heading="Mobile App Development Services That Transform Ideas Into Reality"
                description="Transforming ideas into high-performing Android & iOS applications"
              />
      <HiringSection />
      <JobOpenings />
      <OurValues/>
      <GoodCompanySection />
    </div>
  )
}

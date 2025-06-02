import React from 'react'
import HiringSection from './HiringSection'
import JobOpenings from './JobOpenings'
import BannerImage1 from '../../../public/images/career/career.jpeg'
import OurValues from './OurValues'
import GoodCompanySection from './GoodCompany'
import { Banners } from '../global/NavBanners'


export const Career = () => {
  return (
    <div>
         <Banners
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

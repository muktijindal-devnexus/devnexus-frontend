import React from 'react'
import BannerImage1 from '../../../public/images/Portfolio/PortfolioHeroSection.jpeg'
import CaseStudyCard from './CaseStudy'
import { Banners } from '../global/NavBanners'


export const Portfolio = () => {
  return (
    <div>
          <Banners
                        image={BannerImage1}
                        overlayImage
                        heading="Mobile App Development Services That Transform Ideas Into Reality"
                        description="Transforming ideas into high-performing Android & iOS applications"
                      />
                      <CaseStudyCard />
    </div>
  )
}

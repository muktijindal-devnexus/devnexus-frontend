import React from 'react'
import { Banners } from '../global/NavBanners'
import BannerImage1 from "../../../public/images/blogs/BlogsHeroSection.jpeg";
import OurProcess from './Process';
import ServicesSection from './ServicesSection';

export const ServiceComponent = () => {
  return (
    <div>
               <Banners
                                      image={BannerImage1}
                                      overlayImage
                                      heading="Mobile App Development Services That Transform Ideas Into Reality"
                                      description="Transforming ideas into high-performing Android & iOS applications"
                                    />
                                    <ServicesSection />
                                    <OurProcess />

                            
    </div>
  )
}

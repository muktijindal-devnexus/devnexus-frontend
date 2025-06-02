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
                                      heading="Our Services"
                                      description="Welcome to DevNexus Solutions, your premier destination for 
                                      innovative custom software solutions. Our team of custom software development
                                       experts is dedicated to transforming your business ideas into reality with 
                                       precision and excellence. At DevNexus Solutions, we pride ourselves on delivering 
                                       top-notch software tailored to meet your unique needs."
                                    />
                                    <ServicesSection />
                                    <OurProcess />

                            
    </div>
  )
}

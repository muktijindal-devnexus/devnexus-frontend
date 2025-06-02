import React from 'react'
import { Banner } from '../global/Banner'
import BannerImage1 from '../../../public/images/contact/contactherosection.jpeg'
import ContactSection from './ContactSection'
import IndustryExperience from './GlobalSection'


export const ContactComponents = () => {
  return (
    <div>
        <Banner
                image={BannerImage1}
                overlayImage
                heading="Mobile App Development Services That Transform Ideas Into Reality"
                description="Transforming ideas into high-performing Android & iOS applications"
              />
              <ContactSection />
              <IndustryExperience />
    </div>
  )
}

import { Banner } from "@/components/landingpage/Banner";
import { Navbar } from "@/components/global/Navbar";
import React from "react";
import Technologies from "@/components/landingpage/Technologies";
import { OurProcess } from "@/components/landingpage/OurProcess";
import { OfferedServices } from "@/components/landingpage/OfferedServices";
import { Testimonial } from "@/components/landingpage/Testimonial";
import { Contact } from "@/components/landingpage/Contact";
import { KeyFacts } from "@/components/landingpage/KeyFacts";

import BrandSlider from "@/components/landingpage/BrandSlider";
import ServiceGrid from "@/components/landingpage/Innovation";
import { IndustriesWorked } from "@/components/landingpage/IndustriesWorked";
import { Product } from "@/components/landingpage/Product";


const LandingPage = () => {
  return (
    <div>
      <Banner />
      <ServiceGrid />
       <OfferedServices />
        <Technologies />
      <OurProcess />
       <KeyFacts />
      <Contact/>
      <Testimonial />
     <BrandSlider />
      <IndustriesWorked />
     <Product />
    </div>
  );
};

export default LandingPage;

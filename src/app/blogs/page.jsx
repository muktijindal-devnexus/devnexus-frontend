import { Blogs } from '@/components/blogs'
import React from 'react'
import BannerImage1 from "../../../public/images/blogs/BlogsHeroSection.jpeg";
import { Banners } from '@/components/global/NavBanners';


const BlogPage = () => {
  return (
    <div>
         <Banners
                              image={BannerImage1}
                              overlayImage
                              heading="Mobile App Development Services That Transform Ideas Into Reality"
                              description="Transforming ideas into high-performing Android & iOS applications"
                            />
        <Blogs />
    </div>
  )
}

export default BlogPage

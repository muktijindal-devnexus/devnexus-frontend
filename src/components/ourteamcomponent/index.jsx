import DeveloperCarousel from "./DeveloperCarousel";
import BannerImage1 from "../../../public/images/blogs/BlogsHeroSection.jpeg";
import { Banners } from "../global/NavBanners";


export default function OurTeamComponent() {
  return (
    <div>
     <Banners
          image={BannerImage1}
          overlayImage
          heading="Mobile App Development Services That Transform Ideas Into Reality"
          description="Transforming ideas into high-performing Android & iOS applications"
        />
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <DeveloperCarousel />
    </main>
    </div>

  );
}

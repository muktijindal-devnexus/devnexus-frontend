import DeveloperCarousel from "./DeveloperCarousel";
import BannerImage1 from "../../../public/images/team/our team.jpg";
import { Banners } from "../global/NavBanners";


const devData = [
  {
    name: 'Ashish Sharma',
    role: 'Lead Frontend Developer',
    experience: '5+ years',
    skills: ['Bootstrap', 'CSS3', 'HTML5'],
    imgUrl: '/avatar1.png',
  },
  {
    name: 'Ashish Sharma',
    role: 'Lead Frontend Developer',
    experience: '5+ years',
    skills: ['Tailwind CSS', 'HTML5', 'Bootstrap'],
    imgUrl: '/avatar2.png',
  },
  {
    name: 'Ashish Sharma',
    role: 'Lead Backend Developer',
    experience: '5+ years',
    skills: ['HTML5', 'CSS3', 'Tailwind CSS'],
    imgUrl: '/avatar3.png',
  },
];

const FrontendData = [
  {
    name: 'Ashish Sharma',
    role: 'Lead Frontend Developer',
    experience: '5+ years',
    skills: ['Bootstrap', 'CSS3', 'HTML5'],
    imgUrl: '/avatar1.png',
  },
  {
    name: 'Ashish Sharma',
    role: 'Lead Frontend Developer',
    experience: '5+ years',
    skills: ['Tailwind CSS', 'HTML5', 'Bootstrap'],
    imgUrl: '/avatar2.png',
  },
  {
    name: 'Ashish Sharma',
    role: 'Lead Backend Developer',
    experience: '5+ years',
    skills: ['HTML5', 'CSS3', 'Tailwind CSS'],
    imgUrl: '/avatar3.png',
  },
];


export default function OurTeamComponent() {
  return (
    <div>
     <Banners
          image={BannerImage1}
          overlayImage
          heading="The Minds Behind the Success"
          description="At DevNexus Solutios our strength is in our team of experts. We are a passionate team of developers, designers, market strategies and digital marketers who are thrive on all challenges with creative thinking."
        />
    <main className="min-h-screen flex flex-col my-10 gap-12 items-center justify-center bg-gray-50">
   <DeveloperCarousel developers={devData} title="Frontend Developers" cardsToShow={3} />
   <DeveloperCarousel developers={FrontendData} title="Backend Developers" cardsToShow={3} />
   <DeveloperCarousel developers={FrontendData} title="CMS Developers" cardsToShow={3} />

    </main>
    </div>

  );
}

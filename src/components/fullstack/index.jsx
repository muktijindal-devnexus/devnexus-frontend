import { Banner } from "@/components/global/Banner";
import StatusCard from "@/components/common/Status";
import WhyChooseUs from "@/components/common/WhyChooseUs";
import ExecutionSection from "@/components/common/ExecutionSection";
import React from "react";
import { ProcessWeFollow } from "../common/ProcessWeFollow";
import FaqSection from "../global/FaqSection";
import Slider from "../common/Slider";

const faqData = [
  {
    question: "What domains of business does DevNexus cater to?",
    answer:
      "We offer web design and development services to any business that needs a digital presence, including Real Estate, Construction, Services, Food & Beverages, Public sector, Education, Healthcare & Medicine, Travel, Banking & Fintech, and more.",
  },
  {
    question:
      "What tech stacks do you offer your web development services?",
    answer:
      'The team is technology agnostic and can adapt to any modern day web development frameworks including MERN stack (Node, React), Wordpress (& PHP), Python, HTML5/CSS3, jQuery and more. ',
  },
  {
    question:
      "How do you ensure that the developments you make are up to date with today's market demands?",
    answer:
      "We are expert at designing & developing of websites as per latest Web2.0 Standards with W3C compliance for SEO friendliness, high UI/UX interface, cross-browser compatibility, Tableless HTML5/ CSS3, Responsive designing, QA and testing, fresh look & feel and visual appeal etc to enhance your business. ",
  },
  {
    question:
      "What tools do you use for communication and project management?",
    answer:
      "We use Slack Whatsapp Email Phone Discord Google Meet Zoom and other tools to communicate with the client and even internally as required For project management we use modern day tools such as Trello Monday Jira and any tool that the client may prefer.",
  },
  {
    question: "I wish to market my business. How should I get started?",
    answer:
      "Lets connect. Based on your business domain, marketing preferences, target achievement and in hand budget, we will come up with a tailor-made plan. Depending on various cases, some businesses may prefer comprehensive social media strategies, or web UX changes, others may call for a more formal link building, or a reputation management. E-commerce also prefers Paid Ads. Depending on how and how much you would like to enroll will ensure your strategy for getting started with the services.",
  },
  {
    question: "How much does it cost to hire a digital marketing agency?",
    answer:
      'The cost of hiring a "digital marketing service" can vary widely, depending on the services you are looking for, business goals, etc. Our monthly services start from $400  and go up to $5000 (+ Ads fee). Packages can be cheaper upon 3-6 months commitment.',
  },
];

export const Fullstack = () => {
  return (
    <div>
      <Banner
        image="/images/fullstack/fullstackHero.mp4"
        overlayImage
        heading="Web Design and Development Services That Clicks, Convert and Captivate "
        description="Creating seamless, high-performing websites that engage users and drive results"
      />
      <StatusCard />
      <WhyChooseUs />
      <ExecutionSection />
      <Slider />
      <ProcessWeFollow />
      <FaqSection
        faqs={faqData}
        title="  Frequently Asked Questions (FAQs)"
        subtitle=" Answers to Your Most Common Questions Fast, Clear, and Helpful."
      />
    </div>
  );
};

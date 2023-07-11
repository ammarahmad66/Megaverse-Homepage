import Acheivement from "@/components/Acheivement/Acheivement";
import Feedback from "@/components/Feedback/feedback";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/HomePage/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Project from "@/components/Project.tsx/Project";
import Services from "@/components/Services/Services";
import Testimonial from "@/components/Testimonial/Testimonial";
import { DM_Sans } from "next/font/google";

const fontDM_Sans = DM_Sans({
  subsets: ["latin"],
  weight: ["700", "400"],
});

export default function HomePage() {
  return (
    <div className={fontDM_Sans.className}>
      <HeroSection />
      <Project />
      <Acheivement />
      <Services />
      <Feedback />
      <Testimonial />
    </div>
  );
}

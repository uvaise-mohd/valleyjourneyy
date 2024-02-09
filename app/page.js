import About from "@/components/About";
import Hero from "@/components/Hero";
import Image from "next/image";
import "../public/css/custom.css";
import GlobalCommunity from "@/components/GlobalCommunity";
import Accreditation from "@/components/Accreditation";
import Institutes from "@/components/Institutes";
import AreaOfStudies from "@/components/AreaOfStudies";
import Standout from "@/components/Standout";
import StudentStories from "@/components/StudentStories";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <GlobalCommunity/>
      <Accreditation/>
      <Institutes/>
      <AreaOfStudies/>
      <Standout/>
      <StudentStories/>
    </div>
  );
}

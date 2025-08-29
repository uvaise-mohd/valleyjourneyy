import HeroSection from "@/components/AboutUsPage/HeroSection";
import MissionVission from "@/components/AboutUsPage/MissionVission";
import WhatWeOffers from "@/components/AboutUsPage/WhatWeOffers";
import WhyUs from "@/components/AboutUsPage/WhyUs";


export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatWeOffers />
      <WhyUs />
      <MissionVission />
    </>
  );
}

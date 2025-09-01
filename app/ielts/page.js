import ExamModule from "@/components/IELTSPage/ExamModule";
import HeroSection from "@/components/IELTSPage/HeroSection";
import WhatWeOffersIelts from "@/components/IELTSPage/WhatWeOffers";
import WhyIelts from "@/components/IELTSPage/WhyIelts";
import WhyWhatIelts from "@/components/IELTSPage/WhyWhatIelts";


export default function IELTS() {
  return (
    <>
      <HeroSection />
      <WhyWhatIelts />
      <WhyIelts />
      <WhatWeOffersIelts />
      <ExamModule />
    </>
  );
}

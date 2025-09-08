'use client';
import HeroSection from "@/components/AboutUsPage/HeroSection";
import MissionVission from "@/components/AboutUsPage/MissionVission";
import WhatWeOffers from "@/components/AboutUsPage/WhatWeOffers";
import WhyUs from "@/components/AboutUsPage/WhyUs";
import { useGetAboutValleyJourneyQuery } from "@/lib/api/aboutApi";

const AboutUsPage = () => {

    const { data } = useGetAboutValleyJourneyQuery();

    console.log("sui", data);
    return (
        <>
            <HeroSection />
            <WhatWeOffers />
            <WhyUs />
            <MissionVission />
        </>
    )
}

export default AboutUsPage
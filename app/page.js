"use client";
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
import MyNewComponent from "@/components/MyNewComponent";
import NextModal from "@/components/NextModal";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <div>
      <NextUIProvider>
        <Hero />
        {/* <MyNewComponent/> */}
        <About />
        <GlobalCommunity />
        <Accreditation />
        <Institutes />
        <AreaOfStudies />
        <Standout />
        <StudentStories />
        <NextModal/>
      </NextUIProvider>
    </div>
  );
}

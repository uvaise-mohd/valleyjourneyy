import About from "@/components/About";
import Hero from "@/components/Hero";
import Image from "next/image";
import "../public/css/custom.css";
import GlobalCommunity from "@/components/GlobalCommunity";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <GlobalCommunity/>
    </div>
  );
}

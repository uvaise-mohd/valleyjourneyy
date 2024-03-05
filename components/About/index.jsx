"use client";
import React from "react";
import { TiTick } from "react-icons/ti";
import { Aleo, Lora, Libre_Baskerville } from "next/font/google";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import tick from "../../public/others/tick.json";

const libreBaskerville = Libre_Baskerville({
  weight: "700", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal",
  subsets: ["latin"],
});

const aleo = Aleo({
  weight: "700", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal",
  subsets: ["latin"],
});

const lora = Lora({
  weight: "700", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal",
  subsets: ["latin"],
});

const About = () => {
  return (
    <div className=" pt-20 pb-5  bg-[#E9F7DC]">
      <div
        className={`text-[#083C82] text-center font-bold pb-2 lg:text-lg xl:text-xl text-base  ${libreBaskerville.className}  `}
      >
        About Valley Journey
      </div>
      <div
        className={`px-4 lg:text-[14px] xl:text-[16px]  md:justify-center md:pb-5 md:px-36 items-center text-center  ${aleo.className}`}
      >
        Valley Journey is the ultimate destination for overseas education
        aspirants to start their preparation and application process. We are a
        small group of experts offering honest and comprehensive guidance on and
        service for course selection, university admission, university
        scholarships/bursaries, and IELTS training within a modern and serene
        atmosphere.
      </div>
      <div
        className={`md:flex md:flex-row md:justify-between md:px-32 md:gap-5 md:pb-5 ${lora.className} sm: flex-col sm:px-24 sm:pb-3 px-4`}
      >
        <div className="sm:flex sm:flex-row sm:gap-5">
          <div className="flex flex-col gap-2">
            <div>
              <Player autoplay loop src={tick} className="md:h-[100px] md:w-[100px] h-[70px] w-[70px] ">
                <Controls
                  visible={false}
                  buttons={["play", "repeat", "frame", "debug"]}
                />
              </Player>
            </div>
            <div className="lg:text-[14px] xl:text-[16px]  text-center">
              A new institute with modern infrastructure and an experienced
              group of professionals
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div>
              <Player autoplay loop src={tick} className="md:h-[100px] md:w-[100px] h-[70px] w-[70px] ">
                <Controls
                  visible={false}
                  buttons={["play", "repeat", "frame", "debug"]}
                />
              </Player>
            </div>
            <div className="lg:text-[14px] xl:text-[16px]  text-center">
              We offer genuine and up-to-date information on studies in foreign
              countries
            </div>
          </div>
        </div>

        <div className="sm:flex sm:flex-row sm:gap-5 ">
          <div className="flex flex-col gap-2">
            <div>
              <Player autoplay loop src={tick} className="md:h-[100px] md:w-[100px] h-[70px] w-[70px] ">
                <Controls
                  visible={false}
                  buttons={["play", "repeat", "frame", "debug"]}
                />
              </Player>
            </div>
            <div className=" lg:text-[14px] xl:text-[16px]  text-center">
              We Assess the students’ skills and prepare them to pursue their
              studies in their dream country
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div>
              <Player autoplay loop src={tick} className="md:h-[100px] md:w-[100px] h-[70px] w-[70px] ">
                <Controls
                  visible={false}
                  buttons={["play", "repeat", "frame", "debug"]}
                />
              </Player>
            </div>
            <div className=" lg:text-[14px] xl:text-[16px]   text-center">
              Our institute provides a wide range of training sessions and a
              friendly staff who are always at your disposal
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

//bg-[#c3f383]

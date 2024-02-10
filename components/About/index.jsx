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
    <div className=" py-5  bg-green-100">
      <div
        className={`text-[#083C82] lg:text-[25px] text-center font-bold pb-2 sm:text-[22px] ${libreBaskerville.className}`}
      >
        About Valley Journey
      </div>
      <div
        className={`lg:text-[20px] justify-center pb-5 px-24 sm:text-lg ${aleo.className}`}
      >
        Valley Journey is the ultimate destination for overseas education
        aspirants to start their preparation and application process. We are a
        small group of experts offering honest and comprehensive guidance on and
        service for course selection, university admission, university
        scholarships/bursaries, and IELTS training within a modern and serene
        atmosphere.
      </div>
      <div
        className={`flex justify-between px-20 gap-5 pb-5 ${lora.className}`}
      >
        <div className="flex flex-col gap-2">
          <div>
            <Player
              autoplay
              loop
              src={tick}
              style={{ height: "100px", width: "100px" }}
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          </div>
          <div className=" lg:text-lg sm:text-base ">
            A new institute with modern infrastructure and an experienced group
            of professionals
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div>
            <Player
              autoplay
              loop
              src={tick}
              style={{ height: "100px", width: "100px" }}
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          </div>
          <div className=" lg:text-lg sm:text-base">
            We offer genuine and up-to-date information on studies in foreign
            countries
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div>
            <Player
              autoplay
              loop
              src={tick}
              style={{ height: "100px", width: "100px" }}
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          </div>
          <div className=" lg:text-lg sm:text-base">
            We Assess the students’ skills and prepare them to pursue their
            studies in their dream country
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div>
            <Player
              autoplay
              loop
              src={tick}
              style={{ height: "100px", width: "100px" }}
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          </div>
          <div className=" lg:text-lg sm:text-base">
            Our institute provides a wide range of training sessions and a
            friendly staff who are always at your disposal
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

//bg-[#c3f383]

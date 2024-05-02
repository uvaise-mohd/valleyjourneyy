"use client";
import React from "react";
import { TiTick } from "react-icons/ti";
import { Aleo, Lora, Libre_Baskerville } from "next/font/google";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import tick from "../../public/others/tick.json";
import Image from "next/image";
import aboutTick from "../../public/images/svg/aboutTick.svg";
import { motion } from "framer-motion";

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
  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  return (
    <div className="pt-16 pb-7 bg-[#E9F7DC] ">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className={`text-[#083C82] text-center font-bold pb-2 lg:text-[20px] xl:text-[22px] text-base  ${libreBaskerville.className}  `}
      >
        About Valley Journey
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.7 }}
        className={`px-4 lg:text-[16px] xl:text-[18px] text-[15px]  md:justify-center md:pb-5 md:px-[200px]  items-center text-center  ${aleo.className}`}
      >
        {/* md:px-above 48 and below 52 */}
        Valley Journey is the ultimate destination for overseas education
        aspirants to start their preparation and application process. We are a
        small group of experts offering honest and comprehensive guidance on and
        service for course selection, university admission, university
        scholarships/bursaries, and IELTS training within a modern and serene
        atmosphere.
      </motion.div>

      <div
        className={`md:flex md:flex-row md:justify-between md:px-48 md:gap-5 md:pb-5 ${lora.className} sm: flex-col sm:px-24 sm:pb-3 px-4`}
      >
        <div className="sm:flex sm:flex-row sm:gap-5">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <motion.div
              variants={iconVariants(2)}
              initial="initial"
              animate="animate"
            >
              <Image src={aboutTick} className="h-[100px] w-[50px]" />
            </motion.div>
            <div className="lg:text-[14px] xl:text-[16px]  text-center">
              A new institute with modern infrastructure and an experienced
              group of professionals
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col  items-center"
          >
            <motion.div
              variants={iconVariants(6)}
              initial="initial"
              animate="animate"
            >
              <Image src={aboutTick} className="h-[100px] w-[50px]" />
            </motion.div>
            <div className="lg:text-[14px] xl:text-[16px]  text-center">
              We offer genuine and up-to-date information on studies in foreign
              countries
            </div>
          </motion.div>
        </div>

        <div className="sm:flex sm:flex-row sm:gap-5 ">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.1 }}
            className="flex flex-col gap-1 items-center"
          >
            <motion.div
              variants={iconVariants(4)}
              initial="initial"
              animate="animate"
            >
              <Image src={aboutTick} className="h-[100px] w-[50px]" />
            </motion.div>
            <div className=" lg:text-[14px] xl:text-[16px]  text-center">
              We Assess the students’ skills and prepare them to pursue their
              studies in their dream country
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.4 }}
            className="flex flex-col  items-center"
          >
            <motion.div
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
            >
              <Image src={aboutTick} className="h-[100px] w-[50px]" />
            </motion.div>
            <div className=" lg:text-[14px] xl:text-[16px]   text-center">
              Our institute provides a wide range of training sessions and a
              friendly staff who are always at your disposal
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

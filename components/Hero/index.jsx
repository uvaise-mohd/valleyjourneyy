"use client";
import Image from "next/image";
import React from "react";
import hero from "../../public/images/svg/hero3.svg";
import herogif from "../../public/gif/0503-ezgif.com-optimize.gif"
import main from "../../public/images/AreaOfStudies/2.jpg";
import { Aleo, Libre_Baskerville } from "next/font/google";
import { delay, motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
} from "@/public/utilities/animationVariants";


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

const Hero = () => {
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
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });
  return (
    <div>
      <div className="min-h-[65vh] lg:min-h-[30vh]">
        <div className="sm:px-32 px-4">
          <div className="flex lg:flex-row flex-col justify-between pt-3">
            <div className="flex flex-col justify-center">
              <div
                className={`hero-heading1 text-[#083C82]  lg:text-[22px] xl:text-[28px] text-lg  font-bold xl:leading-10 ${libreBaskerville.className}`}
              >
                <motion.div
                  variants={container(0)}
                  initial="hidden"
                  animate="visible"
                >
                  Travel and explore your favourite country as an international
                  student
                </motion.div>
              </div>

              <div
                className={` text-[#2B202A] text-base font-bold ${aleo.className}`}
              >
                <motion.div
                  variants={container(0.5)}
                  initial="hidden"
                  animate="visible"
                >
                  Over fifteen countries across the world to study in! Enjoy a
                  new lease of life through Valley Journey.
                </motion.div>
              </div>
            </div>

            <div className=" mb-[15px]">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                {/* <motion.div
                  variants={iconVariants(2)}
                  initial="initial"
                  animate="animate"
                > */}
                  <Image
                    // src={main}
                    src={herogif}
                    height={1600}
                    width={1400}
                    // height={1400}
                    // width={1200}
                    alt="hero-image"
                  />
                {/* </motion.div> */}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

//className="sticky top-0 z-10" style={{minHeight:'90vh',top:'11vh'}}s

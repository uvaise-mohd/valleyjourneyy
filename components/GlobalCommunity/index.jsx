"use client";
import Image from "next/image";
import React, { createContext, useEffect, useRef, useState } from "react";
import canada from "../../public/images/svg/canada.svg";
import uk from "../../public/images/svg/uk.svg";
import aus from "../../public/images/svg/australia.svg";
import nz from "../../public/images/svg/newzeland.svg";
import ireland from "../../public/images/svg/ireland.svg";
import us from "../../public/images/svg/us.svg";
import france from "../../public/images/svg/france.svg";
import germany from "../../public/images/svg/germany.svg";
import sweden from "../../public/images/svg/sweden.svg";
import austria from "../../public/images/svg/austria.svg";
import netherlands from "../../public/images/svg/netherlands.svg";
import lithuania from "../../public/images/svg/lithuania.svg";
import denmark from "../../public/images/svg/denmark.svg";
import finland from "../../public/images/svg/france.svg";
import singapore from "../../public/images/svg/singapore.svg";
import { Aleo, Libre_Baskerville, Trocchi } from "next/font/google";
import { motion } from "framer-motion";

const libreBaskerville = Libre_Baskerville({
  weight: "700", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal",
  subsets: ["latin"],
});

const aleo = Aleo({
  weight: "400", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal",
  subsets: ["latin"],
});

const trochhi = Trocchi({
  weight: "400", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal",
  subsets: ["latin"],
});

const GlobalCommunity = () => {
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
    <div className=" pb-10 pt-16 " id="Countries">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className={` text-center font-bold md:text-[25px] text-[#083C82] pb-2 lg:text-[20px] xl:text-[22px] text-base ${libreBaskerville.className}`}
        
      >
        Join the global community!
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.7 }}
        className={` text-center lg:text-[20px] xl:text-[22px] text-base text-[#413F4D] pb-5 md:px-44  sm:px-24 px-7 ${aleo.className}`}
      >
        Be it North America, Europe or Asia, we are with you throughout until
        <br />
        you get there and even further
      </motion.div>

      <div
        className={`grid lg:grid-rows-3 lg:grid-cols-5 pb-5 gap-4  md:px-44 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 px-4 ${trochhi.className}`}
      >
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className=""
        >
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
          >
            <Image
              src={canada}
              alt="canada"
              className="border-2 border-solid  divide-black rounded-xl"
            />
            <div className="lg:text-[20px] xl:text-[22px] text-base text-center text-[#083C82] ">
              canada
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
          >
            <Image
              src={uk}
              alt="canada"
              className="border-2 border-solid  divide-black rounded-xl"
            />
            <div className="lg:text-[20px] xl:text-[22px] text-base text-center text-[#083C82]">
              UK
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
          >
            <Image
              src={aus}
              alt="canada"
              className="border-2 border-solid  divide-black rounded-xl"
            />
            <div className="lg:text-[20px] xl:text-[22px] text-base text-center text-[#083C82]">
              Australia
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
          >
            <Image
              src={nz}
              alt="canada"
              className="border-2 border-solid  divide-black rounded-xl"
            />
            <div className="lg:text-[20px] xl:text-[22px] text-base text-center text-[#083C82]">
              New Zealand
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
          >
            <Image
              src={ireland}
              alt="canada"
              className="border-2 border-solid  divide-black rounded-xl"
            />
            <div className="lg:text-[20px] xl:text-[22px] text-base text-center text-[#083C82]">
              Ireland
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
          >
            <Image
              src={us}
              alt="canada"
              className="border-2 border-solid  divide-black rounded-xl"
            />
            <div className="lg:text-[20px] xl:text-[22px] text-base text-center text-[#083C82]">
              US
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
          >
            <Image
              src={france}
              alt="canada"
              className="border-2 border-solid  divide-black rounded-xl"
            />
            <div className="lg:text-[20px] xl:text-[22px] text-base text-center text-[#083C82]">
              France
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
          >
            <Image
              src={germany}
              alt="canada"
              className="border-2 border-solid  divide-black rounded-xl"
            />
            <div className="lg:text-[20px] xl:text-[22px] text-base text-center text-[#083C82]">
              Germany
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
          >
            {" "}
            <Image
              src={sweden}
              alt="canada"
              className="border-2 border-solid  divide-black rounded-xl"
            />
            <div className="lg:text-[20px] xl:text-[22px] text-base text-center text-[#083C82]">
              Sweden
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
          >
            <Image
              src={austria}
              alt="canada"
              className="border-2 border-solid  divide-black rounded-xl"
            />
            <div className="lg:text-[20px] xl:text-[22px] text-base text-center text-[#083C82]">
              Austria
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
          >
            <Image
              src={netherlands}
              alt="canada"
              className="border-2 border-solid  divide-black rounded-xl"
            />
            <div className="lg:text-[20px] xl:text-[22px] text-base text-center text-[#083C82]">
              Netherlands
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
          >
            <Image
              src={lithuania}
              alt="canada"
              className="border-2 border-solid  divide-black rounded-xl"
            />
            <div className="lg:text-[20px] xl:text-[22px] text-base text-center text-[#083C82]">
              Lithuania
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
          >
            <Image
              src={denmark}
              alt="canada"
              className="border-2 border-solid  divide-black rounded-xl"
            />
            <div className="lg:text-[20px] xl:text-[22px] text-base text-center text-[#083C82]">
              Denmark
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
          >
            <Image
              src={finland}
              alt="canada"
              className="border-2 border-solid  divide-black rounded-xl"
            />
            <div className="lg:text-[20px] xl:text-[22px] text-base text-center text-[#083C82]">
              Finland
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
          >
            <Image
              src={singapore}
              alt="canada"
              className="border-2 border-solid  divide-black rounded-xl"
            />
            <div className="lg:text-[20px] xl:text-[22px] text-base text-center text-[#083C82]">
              Singapore
            </div>
          </motion.div>
        </motion.div>
      </div>

    </div>
  );
};

export default GlobalCommunity;

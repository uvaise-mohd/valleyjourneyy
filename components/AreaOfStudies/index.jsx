"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import agriculture from "../../public/images/AreaOfStudiespng/agriculture.png";
import foodandscience from "../../public/images/AreaOfStudiespng/foodscience.png";
import EnvironmentClimate from "../../public/images/AreaOfStudiespng/enviornmentalclimate.png";
import disastermanagment from "../../public/images/AreaOfStudiespng/disastermanagment.png";

import ArchitectureConstruction from  "../../public/images/AreaOfStudiespng/architectureandconstruction.png"
import art from "../../public/images/AreaOfStudiespng/art.png";
import designPhotography from "../../public/images/AreaOfStudiespng/designvideophotography.png";

import it from "../../public/images/AreaOfStudiespng/itandcomputersceince.png";
import journalism from "../../public/images/AreaOfStudiespng/journalismm.png";
import automobiles from "../../public/images/AreaOfStudiespng/automobilee.png";
import eductn from "../../public/images/AreaOfStudiespng/educationn.png";
import bussinss from "../../public/images/AreaOfStudiespng/business.png";
import finance from "../../public/images/AreaOfStudiespng/financebankinginvestment.png";
import health from "../../public/images/AreaOfStudiespng/healthandwelbeing.png";
import animals from "../../public/images/AreaOfStudiespng/animalss.png";
import socialandbehaviouralscience from "../../public/images/AreaOfStudiespng/socialandbehaviouralscience.png";
import travelfashion from "../../public/images/AreaOfStudiespng/traveltourismm.png";
import aviation from "../../public/images/AreaOfStudiespng/aviationn.png";
import pharmacy from "../../public/images/AreaOfStudiespng/pharmacyy.png";
import engineering from "../../public/images/AreaOfStudiespng/engineeringg.png";
import { Libre_Baskerville } from "next/font/google";
import { motion, useAnimation } from "framer-motion";

const libreBaskerville = Libre_Baskerville({
  weight: "700", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal",
  subsets: ["latin"],
});

const AreaOfStudies = () => {
  const listItemMotion = (duration) => ({
    whileInView: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: 100 },
    transition: { duration: duration },
  });
  return (
    <div className="pt-10" id="Courses">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className={`pb-10 ${libreBaskerville.className}`}
      >
        <div className="lg:text-[28px] xl:text-[34px]  text-[20px] text-[#867021] text-center bg-[#E3F5FF] font-bold py-2">
          Areas of Studies
        </div>
      </motion.div>

      <div
        className={`grid lg:grid-rows-5 lg:grid-cols-4 sm:px-20 gap-7 pb-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:px-44 px-4 ${libreBaskerville.className} `}
      >
        <div 
          className=" flex flex-col items-center text-center lg:gap-3 md:gap-2 gap-1 pb-2"
        >
          <motion.div
            // whileInView={{ opacity: 1, y: 0 }}
            // initial={{ opacity: 0, y: 100 }}
            // transition={{ duration: 0.5 }}
            {...listItemMotion(0.8)}
          >
            <Image
              src={agriculture}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </motion.div>
          <motion.div
            {...listItemMotion(0.8)}
            className="flex items-center justify-center text-[#156669] lg:text-xl xl:text-[22px] text-base leading-9 h-[70px] mt-1"
          >
            Agriculture
          </motion.div>
          <div className=" sm:text-[12px] xl:text-[14px]">
            <ul>
              <motion.li  {...listItemMotion(0.8)} type="disc">
                Agricultural Science
              </motion.li>
              <motion.li  {...listItemMotion(0.8)} type="disc">
                Farm Management
              </motion.li>
              <motion.li  {...listItemMotion(0.8)} type="disc">
                Sustainable Agriculture
              </motion.li>
              <motion.li  {...listItemMotion(0.8)} type="disc">
                Viticulture
              </motion.li>
              <motion.li  {...listItemMotion(0.8)} type="disc">
                Horticulture
              </motion.li>
            </ul>
          </div>
        </div>

        <div
          className=" flex flex-col items-center text-center lg:gap-3 md:gap-2 gap-1 pb-2"
        >
          <motion.div
          {...listItemMotion(0.8)}>
            <Image
              src={foodandscience}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </motion.div>
          <motion.div {...listItemMotion(0.8)} className="flex items-center justify-center text-[#156669] lg:text-xl xl:text-[22px] text-base leading-9 h-[70px] mt-1">
            Food Science
          </motion.div>
          <motion.div className="  sm:text-[12px] xl:text-[14px]">
            <ul>
              <motion.li {...listItemMotion(0.8)} type="disc">Food Technology</motion.li>
              <motion.li {...listItemMotion(0.8)} type="disc">Food Science</motion.li>
              <motion.li {...listItemMotion(0.8)} type="disc">Food Science & Biotechnology</motion.li>
              <motion.li {...listItemMotion(0.8)} type="disc">Food Innovation</motion.li>
              <motion.li {...listItemMotion(0.8)} type="disc">Food Science & Agriculturee</motion.li>
              <motion.li {...listItemMotion(0.8)} type="disc">Food Production & Management</motion.li>
              <motion.li {...listItemMotion(0.8)} type="disc">Food Consumer Marketing</motion.li>
            </ul>
          </motion.div>
        </div>

        <div
          className=" flex flex-col items-center text-center lg:gap-3 md:gap-2 gap-1 pb-2"
        >
          <motion.div {...listItemMotion(0.8)}>
            <Image
              src={EnvironmentClimate}
              alt="agriculture"
              className="rounded-full h-[180px] w-[180px]"
            />
          </motion.div>
          <motion.div {...listItemMotion(0.8)} className="flex items-center justify-center text-[#156669] lg:text-xl xl:text-[22px] text-base leading-9 h-[70px] mt-1">
            Environment & Climate
          </motion.div>
          <motion.div className="  sm:text-[12px] xl:text-[14px] flex">
            <ul>
              <motion.li {...listItemMotion(0.8)} type="disc">Environmental Science</motion.li>
              <motion.li {...listItemMotion(0.8)} type="disc">Environmental Engineering</motion.li>
              <motion.li {...listItemMotion(0.8)} type="disc">Wildlife Conservation</motion.li>
              <motion.li {...listItemMotion(0.8)} type="disc">Environmental Managemente</motion.li>
              <motion.li {...listItemMotion(0.8)} type="disc">Climate Change</motion.li>
              <motion.li {...listItemMotion(0.8)} type="disc"> Water Conservation</motion.li>
              <motion.li {...listItemMotion(0.8)} type="disc">Ecology & Conservation</motion.li>
            </ul>
          </motion.div>
        </div>

        <div
          className=" flex flex-col items-center text-center lg:gap-3 md:gap-2 gap-1 pb-2"
        >
          <motion.div {...listItemMotion(0.8)}>
            <Image
              src={disastermanagment}
              alt="agriculture"
              className="rounded-full h-[180px] w-[180px]"
            />
          </motion.div>
          <motion.div {...listItemMotion(0.8)} className="flex items-center justify-center text-[#156669] lg:text-xl xl:text-[22px] text-base leading-9 h-[70px] mt-1">
            Disaster Management
          </motion.div>
          <motion.div className="  sm:text-[12px] xl:text-[14px]">
            <ul>
              <motion.li {...listItemMotion(0.8)}  type="disc">Fire & Safety Engineering</motion.li>
              <motion.li {...listItemMotion(0.8)} type="disc">Crisis & Disaster Management</motion.li>
              <motion.li {...listItemMotion(0.8)} type="disc">Emergency Management</motion.li>
              <motion.li {...listItemMotion(0.8)} type="disc">Earthquake Engineering</motion.li>
              <motion.li {...listItemMotion(0.8)} type="disc">Humanitarian Management</motion.li>
              <motion.li {...listItemMotion(0.8)} type="disc">Occupation Health & Safety</motion.li>
              <motion.li {...listItemMotion(0.8)} type="disc">Occupational Therapy</motion.li>
            </ul>
          </motion.div>
        </div>

        {/* *********************************************** */}

        <div className=" flex flex-col items-center text-center gap-3 pb-2">
          <motion.div {...listItemMotion(0.8)}>
            <Image
              src={ArchitectureConstruction}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </motion.div>
          <motion.div {...listItemMotion(0.8)} className="flex items-center justify-center text-[#156669] lg:text-xl xl:text-[22px] text-base leading-9 h-[70px] mt-1">
            Architecture & Construction
          </motion.div>
          <div className="  sm:text-[12px] xl:text-[14px]">
            <ul>
                <motion.li {...listItemMotion(0.8)}  type="disc">Architecture</motion.li>
                <motion.li {...listItemMotion(0.8)} type="disc">Civil Engineering</motion.li>
                <motion.li {...listItemMotion(0.8)} type="disc">Urban Design & Planning</motion.li>
                <motion.li {...listItemMotion(0.8)} type="disc">Construction Management</motion.li>
                <motion.li {...listItemMotion(0.8)} type="disc">Sustainable Architecture</motion.li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center text-center gap-3 pb-2">
          <motion.div {...listItemMotion(0.8)} >
            <Image
              src={art}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </motion.div>
          <motion.div {...listItemMotion(0.8)}  className="flex items-center justify-center text-[#156669] lg:text-xl xl:text-[22px] text-base leading-9 h-[70px] mt-1">
            Art & Theatre
          </motion.div>
          <div className="  sm:text-[12px] xl:text-[14px]">
            <ul>
              <motion.li {...listItemMotion(0.8)}  type="disc">Acting</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Theatre Arts</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Film Studies</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc"> Media & Film Production </motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Music & Performing Arts</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc"> Screen Writing</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc"> Media Management</motion.li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center text-center gap-3 pb-2">
          <motion.div {...listItemMotion(0.8)} >
            <Image
              src={designPhotography}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </motion.div>
          <motion.div {...listItemMotion(0.8)}  className="flex items-center justify-center text-[#156669] lg:text-xl xl:text-[22px] text-base leading-9 h-[70px] mt-1">
            Design, Video & Photography
          </motion.div>
          <div className="  sm:text-[12px] xl:text-[14px]">
            <ul>
              <motion.li {...listItemMotion(0.8)}  type="disc">Photography</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Video Editing & VFX</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">2D and 3D Animation</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Game Design</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Horticulture</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Digital Design</motion.li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center text-center gap-3 pb-2">
          <motion.div {...listItemMotion(0.8)}  >
            <Image
              src={it}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </motion.div>
          <motion.div {...listItemMotion(0.8)}  className="flex items-center justify-center text-[#156669] lg:text-xl xl:text-[22px] text-base  leading-9 h-[70px] mt-1">
            IT & ComputerScience
          </motion.div>
          <div className="  sm:text-[12px] xl:text-[14px]">
            <ul>
              <motion.li {...listItemMotion(0.8)}  type="disc">IT & Computer Science</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Networking & Cyber Security</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Artificial Intelligence & Robotics</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Data Science</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Software Development</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Digital Forensics </motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc"> Health Informatics</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Computation Mathematics</motion.li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-3 text-center pb-2">
          <motion.div {...listItemMotion(0.8)} >
            <Image
              src={journalism}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </motion.div>
          <motion.div {...listItemMotion(0.8)}  className="flex items-center justify-center text-[#156669] lg:text-xl xl:text-[22px] text-base  leading-9 h-[70px] mt-1">
            Journalism
          </motion.div>
          <div className="  sm:text-[12px] xl:text-[14px]">
            <ul>
              <motion.li {...listItemMotion(0.8)}  type="disc">Journalism</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Media Management</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Creative Writing</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Communication</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Digital Journalism</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Sports Journalism</motion.li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-3 text-center pb-2">
          <motion.div {...listItemMotion(0.8)} >
            <Image
              src={automobiles}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </motion.div>
          <motion.div {...listItemMotion(0.8)}  className="flex items-center justify-center text-[#156669] lg:text-xl xl:text-[22px] text-base  leading-9 h-[70px] mt-1">
            Automobile
          </motion.div>
          <div className="  sm:text-[12px] xl:text-[14px]">
            <ul>
              <motion.li {...listItemMotion(0.8)}  type="disc">Mechanical Engineering</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Electric Vehicle Engineering</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Automotive Engineering</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Engineering Management</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Project Management</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Robotics & Automation</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Racing Engine Systems</motion.li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-3 text-center pb-2 ">
          <motion.div {...listItemMotion(0.8)} >
            <Image
              src={eductn}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </motion.div>
          <motion.div {...listItemMotion(0.8)}  className="flex items-center justify-center text-[#156669] lg:text-xl xl:text-[22px] text-base  leading-9 h-[70px] mt-1">
            Education
          </motion.div>
          <div className="  sm:text-[12px] xl:text-[14px]">
            <ul>
              <motion.li {...listItemMotion(0.8)}  type="disc">Education</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Special Education</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Autism</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Inclusive Education</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Teaching Engmotion.lish (TEFL)</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Physical Education</motion.li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-3 text-center pb-2">
          <motion.div {...listItemMotion(0.8)} >
            <Image
              src={bussinss}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </motion.div>
          <motion.div {...listItemMotion(0.8)}  className="flex items-center justify-center text-[#156669] lg:text-xl xl:text-[22px] text-base  leading-9 h-[70px] mt-1">
            Business
          </motion.div>
          <div className="  sm:text-[12px] xl:text-[14px]">
            <ul>
              <motion.li {...listItemMotion(0.8)}  type="disc">Marketing</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Human Resource</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Digital Marketing</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">International Business</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Business Administration</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc"> Logistics and Supply Chain</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc"> Entrepreneurship</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc"> Business Analytics</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Project, & Engineering Management</motion.li>
            </ul>
          </div>
        </div>
        {/* ***********************2**************** */}
        <div className=" flex flex-col items-center gap-3 text-center pb-2">
          <motion.div {...listItemMotion(0.8)}  >
            <Image
              src={finance}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </motion.div>
          <motion.div {...listItemMotion(0.8)}  className="flex items-center justify-center text-[#156669] lg:text-xl xl:text-[22px] text-base  leading-9 h-[70px] mt-1">
            Finance, Banking & Investment
          </motion.div>
          <div className="  sm:text-[12px] xl:text-[14px]">
            <ul>
              <motion.li {...listItemMotion(0.8)}  type="disc">Accounting & Finance</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Banking</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Investment</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Real Estate Management</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Financial Technology</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Risk Analysis</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Asset Management</motion.li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-3 text-center pb-2">
          <motion.div {...listItemMotion(0.8)} >
            <Image
              src={health}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </motion.div>
          <motion.div {...listItemMotion(0.8)}  className="flex items-center justify-center text-[#156669] lg:text-xl xl:text-[22px] text-base  leading-9 h-[70px] mt-1">
            Health & Welbeing
          </motion.div>
          <div className="  sm:text-[12px] xl:text-[14px]">
            <ul>
              <motion.li {...listItemMotion(0.8)}  type="disc">Nursing</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Public Health</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Nutrition</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Healthcare Management</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Psychology</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Health Informatics</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Biomedical Science</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Microbiology</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Radiology</motion.li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-3 text-center pb-2">
          <motion.div {...listItemMotion(0.8)} >
            <Image
              src={animals}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </motion.div>
          <motion.div {...listItemMotion(0.8)}  className="flex items-center justify-center text-[#156669] lg:text-xl xl:text-[22px] text-base  leading-9 h-[70px] mt-1">
            Animals
          </motion.div>
          <div className="  sm:text-[12px] xl:text-[14px]">
            <ul>
              <motion.li {...listItemMotion(0.8)}  type="disc">Veterinary Science </motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Veterinary Medicine</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Veterinary Assistant</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Animal Audiology</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Animal Behaviour & Wildlife Conservatio</motion.li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-3 text-center pb-2">
          <motion.div {...listItemMotion(0.8)} >
            <Image
              src={socialandbehaviouralscience}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </motion.div>
          <motion.div {...listItemMotion(0.8)}  className="flex items-center justify-center text-[#156669] lg:text-xl xl:text-[22px] text-base  leading-9 h-[70px] mt-1">
            Social & Behavioral Science
          </motion.div>
          <div className="  sm:text-[12px] xl:text-[14px]">
            <ul>
              <motion.li {...listItemMotion(0.8)}  type="disc">Behavioural Science</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Psychology</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Mental Health</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Cognitive Neuroscience</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Autism Spectrum Disorders</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Mind Science, & Counselling</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Peace & Conflict Analysis</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Addiction: Prevention & Treatment</motion.li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-3 text-center pb-2">
          <motion.div {...listItemMotion(0.8)} >
            <Image
              src={travelfashion}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </motion.div>
          <motion.div {...listItemMotion(0.8)}  className="flex items-center justify-center text-[#156669] lg:text-xl xl:text-[22px] text-base  leading-9 h-[70px] mt-1">
            Travel, Tourism, Food, & Fashion
          </motion.div>
          <div className="  sm:text-[12px] xl:text-[14px]">
            <ul>
              <motion.li {...listItemMotion(0.8)}  type="disc">Hospitality Management</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Event Management</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Hotel & Resort Management</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Patisserie</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Aviation Management</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Fashion & Textile Managemetn</motion.li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-3 text-center pb-2">
          <motion.div {...listItemMotion(0.8)} >
            <Image
              src={aviation}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </motion.div>
          <motion.div {...listItemMotion(0.8)}  className="flex items-center justify-center text-[#156669] lg:text-xl xl:text-[22px] text-base  leading-9 h-[70px] mt-1">
            Aviation
          </motion.div>
          <div className="  sm:text-[12px] xl:text-[14px]">
            <ul>
              <motion.li {...listItemMotion(0.8)}  type="disc">Aviation</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Student Pilot License</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Commercial Pilot License</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Aircraft Maintenance Engineering</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Aerospace</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Airline & Airport Management</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Airport Transport Management</motion.li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 text-center pb-2">
          <motion.div {...listItemMotion(0.8)} >
            <Image
              src={pharmacy}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </motion.div>
          <motion.div {...listItemMotion(0.8)}  className="flex items-center justify-center text-[#156669] lg:text-xl xl:text-[22px] text-base  leading-9 h-[70px] mt-1">
            Pharmacy
          </motion.div>
          <div className="  sm:text-[12px] xl:text-[14px]">
            <ul>
              <motion.li {...listItemMotion(0.8)}  type="disc">Pharmacology</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Pharmaceutical Science</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Toxicology</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">OSPAP</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Drug Development</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Cancer Pharmacology</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Cellular Pharmacology</motion.li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-3 text-center pb-2">
          <motion.div {...listItemMotion(0.8)} >
            <Image
              src={engineering}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </motion.div>
          <motion.div {...listItemMotion(0.8)}  className="flex items-center justify-center text-[#156669] lg:text-xl xl:text-[22px] text-base   leading-9 h-[70px] mt-1">
            Engineering
          </motion.div>
          <div className="  sm:text-[12px] xl:text-[14px]">
            <ul>
              <motion.li {...listItemMotion(0.8)}  type="disc">Mining Engineering</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Petroleum Engineering</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Chemical Engineering</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Mechanical Engineering</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Electrical Engineering</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Civil Engineering</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Environmental Engineering</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Computer Science</motion.li>
              <motion.li {...listItemMotion(0.8)}  type="disc">Marine Engineering</motion.li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaOfStudies;

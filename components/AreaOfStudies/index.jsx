import Image from "next/image";
import React from "react";
import agriculture from "../../public/images/svg/AreaOfStudies/agriculture.svg";
import foodandscience from "../../public/images/svg/AreaOfStudies/foodscience.svg";
import EnvironmentClimate from "../../public/images/svg/AreaOfStudies/enviornmentalclimate.svg";
import disastermanagment from "../../public/images/svg/AreaOfStudies/disastermanagment.svg";
import ArchitectureConstruction from "../../public/images/svg/AreaOfStudies/architectureandconstruction.svg";
import art from "../../public/images/svg/AreaOfStudies/art.svg";
import designPhotography from "../../public/images/svg/AreaOfStudies/designvideophotography.svg";

import it from "../../public/images/svg/AreaOfStudies/itandcomputersceince.svg";
import journalism from "../../public/images/svg/AreaOfStudies/journalismm.svg";
import automobiles from "../../public/images/svg/AreaOfStudies/automobilee.svg";
import eductn from "../../public/images/svg/AreaOfStudies/educationn.svg";
import bussinss from "../../public/images/svg/AreaOfStudies/business.svg";
import finance from "../../public/images/svg/AreaOfStudies/financebankinginvestment.svg";
import health from "../../public/images/svg/AreaOfStudies/healthandwelbeing.svg";
import animals from "../../public/images/svg/AreaOfStudies/animalss.svg";
import socialandbehaviouralscience from "../../public/images/svg/AreaOfStudies/socialandbehaviouralscience.svg";
import travelfashion from "../../public/images/svg/AreaOfStudies/traveltourismm.svg";
import aviation from "../../public/images/svg/AreaOfStudies/aviationn.svg";
import pharmacy from "../../public/images/svg/AreaOfStudies/pharmacyy.svg";
import engineering from "../../public/images/svg/AreaOfStudies/engineeringg.svg";
import { Libre_Baskerville } from "next/font/google";

const libreBaskerville = Libre_Baskerville({
  weight: "700", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal",
  subsets: ["latin"],
});

const AreaOfStudies = () => {
  return (
    <div className="pt-10">
      <div className={`pb-10 ${libreBaskerville.className}`}>
        <div className="md:text-[38px] sm:text-[32px] text-[26px] text-[#867021] text-center bg-[#E3F5FF] font-bold">
          Areas of Studies
        </div>
      </div>
      <div
        className={`grid lg:grid-rows-5 lg:grid-cols-4 sm:px-20 gap-7 pb-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:px-32 px-4 ${libreBaskerville.className} `}
      >
        <div className=" flex flex-col items-center text-center lg:gap-3 md:gap-2 gap-1 pb-2">
          <div>
            <Image
              src={agriculture} 
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] lg:text-lg xl:text-xl text-base leading-9 h-[70px] mt-1">
            Agriculture
          </div>
          <div className=" sm:text-[12px] xl:text-[14px]">
            <ul>
              <li type="disc">Agricultural Science</li>
              <li type="disc">Farm Management</li>
              <li type="disc">Sustainable Agriculture</li>
              <li type="disc">Viticulture</li>
              <li type="disc">Horticulture</li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center text-center lg:gap-3 md:gap-2 gap-1 pb-2">
          <div>
            <Image
              src={foodandscience}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] lg:text-lg xl:text-xl text-base leading-9 h-[70px] mt-1">
            Food Science
          </div>
          <div className="  sm:text-[12px] xl:text-[14px]">
            <ul>
              <li type="disc">Food Technology</li>
              <li type="disc">Food Science</li>
              <li type="disc">Food Science & Biotechnology</li>
              <li type="disc">Food Innovation</li>
              <li type="disc">Food Science & Agriculturee</li>
              <li type="disc">Food Production & Management</li>
              <li type="disc">Food Consumer Marketing</li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center text-center lg:gap-3 md:gap-2 gap-1 pb-2">
          <div>
            <Image
              src={EnvironmentClimate}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] lg:text-lg xl:text-xl text-base leading-9 h-[70px] mt-1">
            Environment & Climate
          </div>
          <div className="  sm:text-[12px] xl:text-[14px] flex">
            <ul>
              <li type="disc">Environmental Science</li>
              <li type="disc">Environmental Engineering</li>
              <li type="disc">Wildlife Conservation</li>
              <li type="disc">Environmental Managemente</li>
              <li type="disc">Climate Change</li>
              <li type="disc"> Water Conservation</li>
              <li type="disc">Ecology & Conservation</li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center text-center lg:gap-3 md:gap-2 gap-1 pb-2">
          <div>
            <Image
              src={disastermanagment}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] lg:text-lg xl:text-xl text-base leading-9 h-[70px] mt-1">
            Disaster Managemet
          </div>
          <div className="  sm:text-[12px] xl:text-[14px]">
            <ul>
              <li type="disc">Fire & Safety Engineering</li>
              <li type="disc">Crisis & Disaster Management</li>
              <li type="disc">Emergency Management</li>
              <li type="disc">Earthquake Engineering</li>
              <li type="disc">Humanitarian Management</li>
              <li type="disc">Occupation Health & Safety</li>
              <li type="disc">Occupational Therapy</li>
            </ul>
          </div>
        </div>
        {/* *********************************************** */}
        <div className=" flex flex-col items-center text-center gap-3 pb-2">
          <div>
            <Image
              src={ArchitectureConstruction}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] lg:text-lg xl:text-xl text-base leading-9 h-[70px] mt-1">
            Architecture & Construction
          </div>
          <div className="  sm:text-[12px] xl:text-[14px]">
            <ul>
              <li type="disc">
                Architecture
                <li type="disc">Civil Engineering</li>
                <li type="disc">Urban Design & Planning</li>
                <li type="disc">Construction Management</li>
                <li type="disc">Sustainable Architecture</li>
              </li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center text-center gap-3 pb-2">
          <div>
            <Image
              src={art}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] lg:text-lg xl:text-xl text-base leading-9 h-[70px] mt-1">
            Art & Theatre
          </div>
          <div className="  sm:text-[12px] xl:text-[14px]">
            <ul>
              <li type="disc">Acting</li>
              <li type="disc">Theatre Arts</li>
              <li type="disc">Film Studies</li>
              <li type="disc"> Media & Film Production </li>
              <li type="disc">Music & Performing Arts</li>
              <li type="disc"> Screen Writing</li>
              Media Management
              <li type="disc"> </li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center text-center gap-3 pb-2">
          <div>
            <Image
              src={designPhotography}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] lg:text-lg xl:text-xl text-base leading-9 h-[70px] mt-1">
            Design, Video & Photography
          </div>
          <div className="  sm:text-[12px] xl:text-[14px]">
            <ul>
              <li type="disc">Photography</li>
              <li type="disc">Video Editing & VFX</li>
              <li type="disc">2D and 3D Animation</li>
              <li type="disc">Game Design</li>
              <li type="disc">Horticulture</li>
              <li type="disc">Digital Design</li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center text-center gap-3 pb-2">
          <div>
            <Image
              src={it}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] lg:text-lg xl:text-xl text-base  leading-9 h-[70px] mt-1">
            IT & ComputerScience
          </div>
          <div className="  sm:text-[12px] xl:text-[14px]">
            <ul>
              <li type="disc">IT & Computer Science</li>
              <li type="disc">Networking & Cyber Security</li>
              <li type="disc">Artificial Intelligence & Robotics</li>
              <li type="disc">Data Science</li>
              <li type="disc">Software Development</li>
              <li type="disc">Digital Forensics </li>
              <li type="disc"> Health Informatics</li>
              <li type="disc">Computation Mathematics</li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-3 text-center pb-2">
          <div>
            <Image
              src={journalism}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] lg:text-lg xl:text-xl text-base  leading-9 h-[70px] mt-1">
            Journalism
          </div>
          <div className="  sm:text-[12px] xl:text-[14px]">
            <ul>
              <li type="disc">Journalism</li>
              <li type="disc">Media Management</li>
              <li type="disc">Creative Writing</li>
              <li type="disc">Communication</li>
              <li type="disc">Digital Journalism</li>
              <li type="disc">Sports Journalism</li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-3 text-center pb-2">
          <div>
            <Image
              src={automobiles}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] lg:text-lg xl:text-xl text-base  leading-9 h-[70px] mt-1">
            Automobile
          </div>
          <div className="  sm:text-[12px] xl:text-[14px]">
            <ul>
              <li type="disc">Mechanical Engineering</li>
              <li type="disc">Electric Vehicle Engineering</li>
              <li type="disc">Automotive Engineering</li>
              <li type="disc">Engineering Management</li>
              <li type="disc">Project Management</li>
              <li type="disc">Robotics & Automation</li>
              <li type="disc">Racing Engine Systems</li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-3 text-center pb-2 ">
          <div>
            <Image
              src={eductn}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] lg:text-lg xl:text-xl text-base  leading-9 h-[70px] mt-1">
            Education
          </div>
          <div className="  sm:text-[12px] xl:text-[14px]">
            <ul>
              <li type="disc">Education</li>
              <li type="disc">Special Education</li>
              <li type="disc">Autism</li>
              <li type="disc">Inclusive Education</li>
              <li type="disc">Teaching English (TEFL)</li>
              <li type="disc">Physical Education</li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-3 text-center pb-2">
          <div>
            <Image
              src={bussinss}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] lg:text-lg xl:text-xl text-base  leading-9 h-[70px] mt-1">
            Business
          </div>
          <div className="  sm:text-[12px] xl:text-[14px]">
            <ul>
              <li type="disc">Marketing</li>
              <li type="disc">Human Resource</li>
              <li type="disc">Digital Marketing</li>
              <li type="disc">International Business</li>
              <li type="disc">Business Administration</li>
              <li type="disc"> Logistics and Supply Chain</li>
              <li type="disc"> Entrepreneurship</li>
              <li type="disc"> Business Analytics</li>
              <li type="disc">Project, & Engineering Management</li>
            </ul>
          </div>
        </div>
        {/* ***********************2**************** */}
        <div className=" flex flex-col items-center gap-3 text-center pb-2">
          <div>
            <Image
              src={finance}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] lg:text-lg xl:text-xl text-base  leading-9 h-[70px] mt-1">
            Finance, Banking & Investment
          </div>
          <div className="  sm:text-[12px] xl:text-[14px]">
            <ul>
              <li type="disc">Accounting & Finance</li>
              <li type="disc">Banking</li>
              <li type="disc">Investment</li>
              <li type="disc">Real Estate Management</li>
              <li type="disc">Financial Technology</li>
              <li type="disc">Risk Analysis</li>
              <li type="disc">Asset Management</li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-3 text-center pb-2">
          <div>
            <Image
              src={health}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] lg:text-lg xl:text-xl text-base  leading-9 h-[70px] mt-1">
            Health & Welbeing
          </div>
          <div className="  sm:text-[12px] xl:text-[14px]">
            <ul>
              <li type="disc">Nursing</li>
              <li type="disc">Public Health</li>
              <li type="disc">Nutrition</li>
              <li type="disc">Healthcare Management</li>
              <li type="disc">Psychology</li>
              <li type="disc">Health Informatics</li>
              <li type="disc">Biomedical Science</li>
              <li type="disc">Microbiology</li>
              <li type="disc">Radiology</li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-3 text-center pb-2">
          <div>
            <Image
              src={animals}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] lg:text-lg xl:text-xl text-base  leading-9 h-[70px] mt-1">
            Animals
          </div>
          <div className="  sm:text-[12px] xl:text-[14px]">
            <ul>
              <li type="disc">Veterinary Science n</li>
              <li type="disc">Veterinary Medicine</li>
              <li type="disc">Veterinary Assistant</li>
              <li type="disc">Animal Audiology</li>
              <li type="disc">Animal Behaviour & Wildlife Conservatio</li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-3 text-center pb-2">
          <div>
            <Image
              src={socialandbehaviouralscience}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] lg:text-lg xl:text-xl text-base  leading-9 h-[70px] mt-1">
            Social & Behavioral Science
          </div>
          <div className="  sm:text-[12px] xl:text-[14px]">
            <ul>
              <li type="disc">Behavioural Science</li>
              <li type="disc">Psychology</li>
              <li type="disc">Mental Health</li>
              <li type="disc">Cognitive Neuroscience</li>
              <li type="disc">Autism Spectrum Disorders</li>
              <li type="disc">Mind Science, & Counselling</li>
              <li type="disc">Peace & Conflict Analysis</li>
              <li type="disc">Addiction: Prevention & Treatment</li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-3 text-center pb-2">
          <div>
            <Image
              src={travelfashion}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] lg:text-lg xl:text-xl text-base  leading-9 h-[70px] mt-1">
            Travel, Tourism, Food, & Fashion
          </div>
          <div className="  sm:text-[12px] xl:text-[14px]">
            <ul>
              <li type="disc">Hospitality Management</li>
              <li type="disc">Event Management</li>
              <li type="disc">Hotel & Resort Management</li>
              <li type="disc">Patisserie</li>
              <li type="disc">Aviation Management</li>
              <li type="disc">Fashion & Textile Managemetn</li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-3 text-center pb-2">
          <div>
            <Image
              src={aviation}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] lg:text-lg xl:text-xl text-base  leading-9 h-[70px] mt-1">
            Aviation
          </div>
          <div className="  sm:text-[12px] xl:text-[14px]">
            <ul>
              <li type="disc">Aviation</li>
              <li type="disc">Student Pilot License</li>
              <li type="disc">Commercial Pilot License</li>
              <li type="disc">Aircraft Maintenance Engineering</li>
              <li type="disc">Aerospace</li>
              <li type="disc">Airline & Airport Management</li>
              <li type="disc">Airport Transport Management</li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2 text-center pb-2">
          <div>
            <Image
              src={pharmacy}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] lg:text-lg xl:text-xl text-base  leading-9 h-[70px] mt-1">
            Pharmacy
          </div>
          <div className="  sm:text-[12px] xl:text-[14px]">
            <ul>
              <li type="disc">Pharmacology</li>
              <li type="disc">Pharmaceutical Science</li>
              <li type="disc">Toxicology</li>
              <li type="disc">OSPAP</li>
              <li type="disc">Drug Development</li>
              <li type="disc">Cancer Pharmacology</li>
              <li type="disc">Cellular Pharmacology</li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-3 text-center pb-2">
          <div>
            <Image
              src={engineering}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] lg:text-lg xl:text-xl text-base   leading-9 h-[70px] mt-1">
            Engineering
          </div>
          <div className="  sm:text-[12px] xl:text-[14px]">
            <ul>
              <li type="disc">Mining Engineering</li>
              <li type="disc">Petroleum Engineering</li>
              <li type="disc">Chemical Engineering</li>
              <li type="disc">Mechanical Engineering</li>
              <li type="disc">Electrical Engineering</li>
              <li type="disc">Civil Engineering</li>
              <li type="disc">Environmental Engineering</li>
              <li type="disc">Computer Science</li>
              <li type="disc">Marine Engineering</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaOfStudies;

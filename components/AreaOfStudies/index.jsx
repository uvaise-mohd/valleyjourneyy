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
        <div className="md:text-[38px] sm:text-[32px] text-[26px] text-[#867021] text-center bg-blue-50 font-bold">
          Areas of Studies
        </div>
      </div>
      <div
        className={`grid lg:grid-rows-5 lg:grid-cols-4 sm:px-20 gap-7 pb-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-4 ${libreBaskerville.className} `}
      >
        <div className=" flex flex-col items-center text-center lg:gap-3 md:gap-2 gap-1 pb-2">
          <div>
            <Image
              src={agriculture}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] sm:text-[25px] text-[22px] leading-9 h-[70px] mt-1">
            Agriculture
          </div>
          <div className="  sm:text-[16px] text-[14px]">
            <ul>
              <li>Agricultural Science</li>
              <li>Farm Management</li>
              <li>Sustainable Agriculture</li>
              <li>Viticulture</li>
              <li>Horticulture</li>
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
          <div className="flex items-center justify-center text-[#156669] sm:text-[25px] text-[22px] leading-9 h-[70px] mt-1">
            Food Science
          </div>
          <div className=" sm:text-[16px] text-[14px]">
            <ul>
              <li>Food Technology</li>
              <li>Food Science</li>
              <li>Food Science & Biotechnology</li>
              <li>Food Innovation</li>
              <li>Food Science & Agriculturee</li>
              <li>Food Production & Management</li>
              <li>Food Consumer Marketing</li>
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
          <div className="flex items-center justify-center text-[#156669] sm:text-[25px] text-[22px] leading-9 h-[70px] mt-1">
            Environment & Climate
          </div>
          <div className=" sm:text-[16px] text-[14px] flex">
            <ul>
              <li>Environmental Science</li>
              <li>Environmental Engineering</li>
              <li>Wildlife Conservation</li>
              <li>Environmental Managemente</li>
              <li>Climate Change</li>
              <li> Water Conservation</li>
              <li>Ecology & Conservation</li>
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
          <div className="flex items-center justify-center text-[#156669] sm:text-[25px] text-[22px] leading-9 h-[70px] mt-1">
            Disaster Managemet
          </div>
          <div className=" sm:text-[16px] text-[14px]">
            <ul>
              <li>Fire & Safety Engineering</li>
              <li>Crisis & Disaster Management</li>
              <li>Emergency Management</li>
              <li>Earthquake Engineering</li>
              <li>Humanitarian Management</li>
              <li>Occupation Health & Safety</li>
              <li>Occupational Therapy</li>
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
          <div className="flex items-center justify-center text-[#156669] sm:text-[25px] text-[22px] leading-9 h-[70px] mt-1">
            Architecture & Construction
          </div>
          <div className=" sm:text-[16px] text-[14px]">
            <ul>
              <li>
                Architecture
                <li>Civil Engineering</li>
                <li>Urban Design & Planning</li>
                <li>Construction Management</li>
                <li>Sustainable Architecture</li>
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
          <div className="flex items-center justify-center text-[#156669] sm:text-[25px] text-[22px] leading-9 h-[70px] mt-1">
            Art & Theatre
          </div>
          <div className=" sm:text-[16px] text-[14px]">
            <ul>
              <li>Acting</li>
              <li>Theatre Arts</li>
              <li>Film Studies</li>
              <li> Media & Film Production </li>
              <li>Music & Performing Arts</li>
              <li> Screen Writing</li>
              Media Management
              <li> </li>
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
          <div className="flex items-center justify-center text-[#156669] sm:text-[25px] text-[22px] leading-9 h-[70px] mt-1">
            Design, Video & Photography
          </div>
          <div className=" sm:text-[16px] text-[14px]">
            <ul>
              <li>Photography</li>
              <li>Video Editing & VFX</li>
              <li>2D and 3D Animation</li>
              <li>Game Design</li>
              <li>Horticulture</li>
              <li>Digital Design</li>
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
          <div className="flex items-center justify-center text-[#156669] sm:text-[25px] text-[22px]  leading-9 h-[70px] mt-1">
            IT & ComputerScience
          </div>
          <div className=" sm:text-[16px] text-[14px]">
            <ul>
              <li>IT & Computer Science</li>
              <li>Networking & Cyber Security</li>
              <li>Artificial Intelligence & Robotics</li>
              <li>Data Science</li>
              <li>Software Development</li>
              <li>Digital Forensics </li>
              <li> Health Informatics</li>
              <li>Computation Mathematics</li>
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
          <div className="flex items-center justify-center text-[#156669] sm:text-[25px] text-[22px]  leading-9 h-[70px] mt-1">
            Journalism
          </div>
          <div className=" sm:text-[16px] text-[14px]">
            <ul>
              <li>Journalism</li>
              <li>Media Management</li>
              <li>Creative Writing</li>
              <li>Communication</li>
              <li>Digital Journalism</li>
              <li>Sports Journalism</li>
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
          <div className="flex items-center justify-center text-[#156669] sm:text-[25px] text-[22px]  leading-9 h-[70px] mt-1">
            Automobile
          </div>
          <div className=" sm:text-[16px] text-[14px]">
            <ul>
              <li>Mechanical Engineering</li>
              <li>Electric Vehicle Engineering</li>
              <li>Automotive Engineering</li>
              <li>Engineering Management</li>
              <li>Project Management</li>
              <li>Robotics & Automation</li>
              <li>Racing Engine Systems</li>
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
          <div className="flex items-center justify-center text-[#156669] sm:text-[25px] text-[22px]  leading-9 h-[70px] mt-1">
            Education
          </div>
          <div className=" sm:text-[16px] text-[14px]">
            <ul>
              <li>Education</li>
              <li>Special Education</li>
              <li>Autism</li>
              <li>Inclusive Education</li>
              <li>Teaching English (TEFL)</li>
              <li>Physical Education</li>
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
          <div className="flex items-center justify-center text-[#156669] sm:text-[25px] text-[22px]  leading-9 h-[70px] mt-1">
            Business
          </div>
          <div className=" sm:text-[16px] text-[14px]">
            <ul>
              <li>Marketing</li>
              <li>Human Resource</li>
              <li>Digital Marketing</li>
              <li>International Business</li>
              <li>Business Administration</li>
              <li> Logistics and Supply Chain</li>
              <li> Entrepreneurship</li>
              <li> Business Analytics</li>
              <li>Project, & Engineering Management</li>
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
          <div className="flex items-center justify-center text-[#156669] sm:text-[25px] text-[22px]  leading-9 h-[70px] mt-1">
            Finance, Banking & Investment
          </div>
          <div className=" sm:text-[16px] text-[14px]">
            <ul>
              <li>Accounting & Finance</li>
              <li>Banking</li>
              <li>Investment</li>
              <li>Real Estate Management</li>
              <li>Financial Technology</li>
              <li>Risk Analysis</li>
              <li>Asset Management</li>
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
          <div className="flex items-center justify-center text-[#156669] sm:text-[25px] text-[22px]  leading-9 h-[70px] mt-1">
            Health & Welbeing
          </div>
          <div className=" sm:text-[16px] text-[14px]">
            <ul>
              <li>Nursing</li>
              <li>Public Health</li>
              <li>Nutrition</li>
              <li>Healthcare Management</li>
              <li>Psychology</li>
              <li>Health Informatics</li>
              <li>Biomedical Science</li>
              <li>Microbiology</li>
              <li>Radiology</li>
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
          <div className="flex items-center justify-center text-[#156669] sm:text-[25px] text-[22px]  leading-9 h-[70px] mt-1">
            Animals
          </div>
          <div className=" sm:text-[16px] text-[14px]">
            <ul>
              <li>Veterinary Science n</li>
              <li>Veterinary Medicine</li>
              <li>Veterinary Assistant</li>
              <li>Animal Audiology</li>
              <li>Animal Behaviour & Wildlife Conservatio</li>
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
          <div className="flex items-center justify-center text-[#156669] sm:text-[25px] text-[22px]  leading-9 h-[70px] mt-1">
            Social & Behavioral Science
          </div>
          <div className=" sm:text-[16px] text-[14px]">
            <ul>
              <li>Behavioural Science</li>
              <li>Psychology</li>
              <li>Mental Health</li>
              <li>Cognitive Neuroscience</li>
              <li>Autism Spectrum Disorders</li>
              <li>Mind Science, & Counselling</li>
              <li>Peace & Conflict Analysis</li>
              <li>Addiction: Prevention & Treatment</li>
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
          <div className="flex items-center justify-center text-[#156669] sm:text-[25px] text-[22px]  leading-9 h-[70px] mt-1">
            Travel, Tourism, Food, & Fashion
          </div>
          <div className=" sm:text-[16px] text-[14px]">
            <ul>
              <li>Hospitality Management</li>
              <li>Event Management</li>
              <li>Hotel & Resort Management</li>
              <li>Patisserie</li>
              <li>Aviation Management</li>
              <li>Fashion & Textile Managemetn</li>
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
          <div className="flex items-center justify-center text-[#156669] sm:text-[25px] text-[22px]  leading-9 h-[70px] mt-1">
            Aviation
          </div>
          <div className=" sm:text-[16px] text-[14px]">
            <ul>
              <li>Aviation</li>
              <li>Student Pilot License</li>
              <li>Commercial Pilot License</li>
              <li>Aircraft Maintenance Engineering</li>
              <li>Aerospace</li>
              <li>Airline & Airport Management</li>
              <li>Airport Transport Management</li>
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
          <div className="flex items-center justify-center text-[#156669] sm:text-[25px] text-[22px]  leading-9 h-[70px] mt-1">
            Pharmacy
          </div>
          <div className=" sm:text-[16px] text-[14px]">
            <ul>
              <li>Pharmacology</li>
              <li>Pharmaceutical Science</li>
              <li>Toxicology</li>
              <li>OSPAP</li>
              <li>Drug Development</li>
              <li>Cancer Pharmacology</li>
              <li>Cellular Pharmacology</li>
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
          <div className="flex items-center justify-center text-[#156669] sm:text-[25px] text-[22px]   leading-9 h-[70px] mt-1">
            Engineering
          </div>
          <div className=" sm:text-[16px] text-[14px]">
            <ul>
              <li>Mining Engineering</li>
              <li>Petroleum Engineering</li>
              <li>Chemical Engineering</li>
              <li>Mechanical Engineering</li>
              <li>Electrical Engineering</li>
              <li>Civil Engineering</li>
              <li>Environmental Engineering</li>
              <li>Computer Science</li>
              <li>Marine Engineering</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaOfStudies;

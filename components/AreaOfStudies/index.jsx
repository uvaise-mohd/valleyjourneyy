import Image from "next/image";
import React from "react";
import agriculture from "../../public/images/AreaOfStudies/agriculture.jpg";
import foodandscience from "../../public/images/AreaOfStudies/foodandscience.jpg";
import EnvironmentClimate from "../../public/images/AreaOfStudies/Environment&Climate.jpg";
import disastermanagment from "../../public/images/AreaOfStudies/disastermanagment.jpg";
import ArchitectureConstruction from "../../public/images/AreaOfStudies/ArchitectureConstruction.jpg";
import art from "../../public/images/AreaOfStudies/art.jpg";
import designPhotography from "../../public/images/AreaOfStudies/designPhotography.jpg";
import it from "../../public/images/AreaOfStudies/it.jpg";
import journalism from "../../public/images/AreaOfStudies/journalism.jpg";
import automobiles from "../../public/images/AreaOfStudies/automobiles.jpg";
import eductn from "../../public/images/AreaOfStudies/eductn.jpg";
import bussinss from "../../public/images/AreaOfStudies/bussinss.jpg";
import finance from "../../public/images/AreaOfStudies/finance.jpg";
import health from "../../public/images/AreaOfStudies/health.jpg";
import animals from "../../public/images/AreaOfStudies/animals.jpg";
import socialandbehaviouralscience from "../../public/images/AreaOfStudies/socialandbehaviouralscience.jpg";
import travelfashion from "../../public/images/AreaOfStudies/travelfashion.jpg";
import aviation from "../../public/images/AreaOfStudies/aviation.jpg";
import pharmacy from "../../public/images/AreaOfStudies/pharmacy.jpg";
import engineering from "../../public/images/AreaOfStudies/engineering.jpg";
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
        <div className=" text-[35px] text-[#867021] text-center bg-blue-50">
          Areas of Studies
        </div>
      </div>
      <div
        className={`grid grid-rows-5 grid-cols-4 px-20 gap-7 pb-5  ${libreBaskerville.className} `}
      >
        <div className=" flex flex-col items-center text-center gap-3">
          <div>
            <Image
              src={agriculture}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[25px] leading-9 h-[70px] mt-1">
            Agriculture
          </div>
          <div className=" text-md">
            <ul>
              <li>Agricultural Science</li>
              <li>Farm Management</li>
              <li>Sustainable Agriculture</li>
              <li>Viticulture</li>
              <li>Horticulture</li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center text-center gap-3">
          <div>
            <Image
              src={foodandscience}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[25px] leading-9 h-[70px] mt-1">
            Food Science
          </div>
          <div className="text-md">
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

        <div className=" flex flex-col items-center text-center gap-3">
          <div>
            <Image
              src={EnvironmentClimate}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[25px] leading-9 h-[70px] mt-1">
            Environment & Climate
          </div>
          <div className="text-md flex">
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

        <div className=" flex flex-col items-center text-center gap-3">
          <div>
            <Image
              src={disastermanagment}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[25px] leading-9 h-[70px] mt-1">
            Disaster Managemet
          </div>
          <div className="text-md">
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
        <div className=" flex flex-col items-center text-center gap-3">
          <div>
            <Image
              src={ArchitectureConstruction}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[25px] leading-9 h-[70px] mt-1">
            Architecture & Construction
          </div>
          <div className="text-md">
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

        <div className=" flex flex-col items-center text-center gap-3">
          <div>
            <Image
              src={art}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[25px] leading-9 h-[70px] mt-1">
            Art & Theatre
          </div>
          <div className="text-md">
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

        <div className=" flex flex-col items-center text-center gap-3">
          <div>
            <Image
              src={designPhotography}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[25px] leading-9 h-[70px] mt-1">
            Design, Video & Photography
          </div>
          <div className="text-md">
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

        <div className=" flex flex-col items-center text-center gap-3">
          <div>
            <Image
              src={it}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[25px] leading-9 h-[70px] mt-1">
            IT & ComputerScience
          </div>
          <div className="text-md">
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

        <div className=" flex flex-col items-center gap-3 text-center">
          <div>
            <Image
              src={journalism}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[25px] leading-9 h-[70px] mt-1">
            Journalism
          </div>
          <div className="text-md">
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

        <div className=" flex flex-col items-center gap-3 text-center">
          <div>
            <Image
              src={automobiles}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[25px] leading-9 h-[70px] mt-1">
            Automobile
          </div>
          <div className="text-md">
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

        <div className=" flex flex-col items-center gap-3 text-center">
          <div>
            <Image
              src={eductn}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[25px] leading-9 h-[70px] mt-1">
            Education
          </div>
          <div className="text-md">
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

        <div className=" flex flex-col items-center gap-3 text-center">
          <div>
            <Image
              src={bussinss}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[25px] leading-9 h-[70px] mt-1">
            Business
          </div>
          <div className="text-md">
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
        <div className=" flex flex-col items-center gap-3 text-center">
          <div>
            <Image
              src={finance}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[25px] leading-9 h-[70px] mt-1">
            Finance, Banking & Investment
          </div>
          <div className="text-md">
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

        <div className=" flex flex-col items-center gap-3 text-center">
          <div>
            <Image
              src={health}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[25px] leading-9 h-[70px] mt-1">
            Health & Welbeing
          </div>
          <div className="text-md">
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

        <div className=" flex flex-col items-center gap-3 text-center">
          <div>
            <Image
              src={animals}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[25px] leading-9 h-[70px] mt-1">
            Animals
          </div>
          <div className="text-md">
            <ul>
              <li>Veterinary Science n</li>
              <li>Veterinary Medicine</li>
              <li>Veterinary Assistant</li>
              <li>Animal Audiology</li>
              <li>Animal Behaviour & Wildlife Conservatio</li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-3 text-center">
          <div>
            <Image
              src={socialandbehaviouralscience}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[25px] leading-9 h-[70px] mt-1">
            Social & Behavioral Science
          </div>
          <div className="text-md">
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

        <div className=" flex flex-col items-center gap-3 text-center">
          <div>
            <Image
              src={travelfashion}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[25px] leading-9 h-[70px] mt-1">
            Travel, Tourism, Food, & Fashion
          </div>
          <div className="text-md">
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

        <div className=" flex flex-col items-center gap-3 text-center">
          <div>
            <Image
              src={aviation}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[25px] leading-9 h-[70px] mt-1">
            Aviation
          </div>
          <div className="text-md">
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

        <div className=" flex flex-col items-center gap-2 text-center">
          <div>
            <Image
              src={pharmacy}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[25px] leading-9 h-[70px] mt-1">
            Pharmacy
          </div>
          <div className="text-md">
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

        <div className=" flex flex-col items-center gap-3 text-center">
          <div>
            <Image
              src={engineering}
              alt="agriculture"
              className="rounded-[50%] h-[180px] w-[180px]"
            />
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[25px] leading-9 h-[70px] mt-1">
            Engineering
          </div>
          <div className="text-md">
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

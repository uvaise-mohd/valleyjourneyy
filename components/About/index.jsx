import React from "react";
import { TiTick } from "react-icons/ti";

const About = () => {
    
  return (
    <div className=" py-5  bg-green-100 sticky z-20">
      <div className="text-[#083C82] text-[39px] text-center font-bold">
        About Valley Journey
      </div>
      <div className="text-[26px] justify-center pb-5 px-20">
        Valley Journey is the ultimate destination for overseas education
        aspirants to start their preparation and application process. We are a
        small group of experts offering honest and comprehensive guidance on and
        service for course selection, university admission, university
        scholarships/bursaries, and IELTS training within a modern and serene
        atmosphere.
      </div>
      <div className=" flex justify-between px-20 gap-5 pb-5">
        <div className="flex flex-col gap-2">
          <div>1</div>
          <div className=" text-2xl">
            A new institute with modern infrastructure and an experienced group
            of professionals
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div>2</div>
          <div className=" text-2xl">
            We offer genuine and up-to-date information on studies in foreign
            countries
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div>3</div>
          <div className=" text-2xl">
            We Assess the students’ skills and prepare them to pursue their
            studies in their dream country
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div>4</div>
          <div className=" text-2xl">
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

import React from "react";
import { Libre_Baskerville, Lora } from "next/font/google";

const libreBaskerville = Libre_Baskerville({
  weight: "400", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal",
  subsets: ["latin"],
});

const lora = Lora({
    weight: "400", // if single weight, otherwise you use array like [400, 500, 700],
    style: "normal",
    subsets: ["latin"],
  });

const Institutes = () => {
  return (
    <div className="bg-blue-100 px-20 py-3 ">
      <div className={`text-[40px] text-[#243969] text-center px-14 ${libreBaskerville.className}`}>Universities, Colleges and Polytechniques</div>
      <div className={`text-[30px] text-center leading-[45px] px-10 pb-7 ${lora.className}`}>
        Both university and location can contribute to a student’s academic
        development - We always recommend welcoming and vibrant locations that
        can help students develop their skillsets.
      </div>
      <div className={` text-[30px] text-white grid grid-cols-2 grid-rows-2 gap-1 ${libreBaskerville.className}`}>
        <div className=" bg-[#243969] border-2 border-solid rounded-[90px] text-start  px-14 py-7">Over 500 Institutions to Choose From</div>
        <div className=" bg-[#243969] border-2 border-solid rounded-[90px] text-start  px-14 py-7">Universities Ranked in the Top 100  </div>
        <div className=" bg-[#243969] border-2 border-solid rounded-[90px] text-start  px-14 py-7">Admission to Universities Offering Free Education</div>
        <div className=" bg-[#243969] border-2 border-solid rounded-[90px] text-start  px-14 py-7">Reputed Institutions with Accreditation</div>
      </div>
    </div>
  );
};

export default Institutes;


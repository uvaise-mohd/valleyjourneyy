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
    <div className="bg-[#E2E8F2] py-3 ">
      <div
        className={` lg:text-[21px] xl:text-[29px] text-[19px] px-4  text-[#243969] text-center font-bold ${libreBaskerville.className}`}
      >
        Universities, Colleges and Polytechniques
      </div>
      <div
        className={`lg:text-base text-[15px] text-center md:px-40 px-4 pb-7 ${lora.className}`}
      >
        Both university and location can contribute to a student’s academic
        development - We always recommend welcoming and vibrant locations that
        can help students develop their skillsets.
      </div>
      <div
        className={`xl:text-[24px] lg:text-[22px] md:text-xl sm:text-lg text-base  text-white grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 gap-1 md:px-32 px-4 ${libreBaskerville.className}`}
      >
        <div className="flex justify-center">
          <div className=" bg-[#243969] border-2 border-solid rounded-[90px] text-start items-center px-10 py-4">
            Over 500 Institutions to Choose From
          </div>
        </div>
        {/* lg:text-[20px] xl:text-[28px] text-lg */}
        <div className="flex justify-center ">
          <div className=" bg-[#243969] border-2 border-solid rounded-[90px] text-start items-center px-10 py-4">
            Universities Ranked in the Top 100{" "}
          </div>
        </div>

        <div className="flex justify-center ">
          <div className=" bg-[#243969] border-2 border-solid rounded-[90px] text-start items-center px-10 py-4">
            Admission to Universities Offering Free Education
          </div>
        </div >

        <div className="flex justify-center ">
          <div className=" bg-[#243969] border-2 border-solid rounded-[90px] text-start items-center px-10 py-4">
            Reputed Institutions with Accreditation
          </div>
        </div>
      </div>
    </div>
  );
};

export default Institutes;

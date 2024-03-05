import React from "react";
import { Libre_Baskerville } from "next/font/google";
import Image from "next/image";
import accreditation from "../../public/images/svg/accreditation/accreditationn.svg";

const libreBaskerville = Libre_Baskerville({
  weight: "400", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal",
  subsets: ["latin"], 
});

const Accreditation = () => {
  return (
    <div className=" pb-10">
      <div className={libreBaskerville.className}>
        <div className="flex justify-center md:px-20 px-4">
          <div className=" inline-block font-bold lg:text-[21px] xl:text-[23px] text-xl text-[#083C82] text-center border border-[#0B4715] rounded-[40px] py-3 px-5 mb-4">
            Accreditation - Levels of Education
          </div>
        </div>

        <div className="lg:text-[19px] xl:text-[21px] text-[15px] text-[#083C82] text-center pb-7 md:px-32 px-4 ">
          Whether you just completed your 10th grade or you are working
          professional with a postgraduate degree, we have options for you to
          select the appropriate level of education for your further studies
          abroad
        </div>
      </div>
      <Image src={accreditation} alt="accreditation" className="mx-auto sm:px-20 px-4" />
    </div>
  );
};

export default Accreditation;

//xl:mx-72 lg:mx-52 md:mx-36

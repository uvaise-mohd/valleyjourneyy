import React from "react";
import { Libre_Baskerville } from "next/font/google";
import Image from "next/image";
import accreditation from '../../public/images/Acreditation.png'

const libreBaskerville = Libre_Baskerville({
  weight: "400", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal",
  subsets: ["latin"],
});

const Accreditation = () => {
  return (
    <div className="px-20 py-10">
      <div className={libreBaskerville.className}>
        <div
          className=" text-[41px] text-[#083C82]  text-center border-2 border-solid rounded-[40px] p-2 m-auto mx-44  mb-4 "
          style={{ borderColor: "#Ob4715" }}
        >
          Accreditation - Levels of Education
        </div>
        <div className="text-[30px] text-[#083C82] text-center pb-7 ">
          Whether you just completed your 10th grade or you are working
          professional with a postgraduate degree, we have options for you to
          select the appropriate level of education for your further studies
          abroad
        </div>
      </div>
      <Image src={accreditation} alt="accreditation" className="mx-auto"/>
    </div>
  );
};

export default Accreditation;
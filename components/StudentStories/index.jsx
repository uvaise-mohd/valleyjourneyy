import React from "react";
import { Libre_Baskerville, Lora } from "next/font/google";
import Image from "next/image";
import studystoriess from "../../public/images/svg/studentstories/studystoriess.svg";
import dots from "../../public/images/svg/studentstories/3dots.svg"

const libreBaskerville = Libre_Baskerville({
  weight: "700", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal",
  subsets: ["latin"],
});

const lora = Lora({
  weight: "700", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal",
  subsets: ["latin"],
});

const StudentStories = () => {
  return (
    <div className=" pt-10 bg-[#F6FAFA]">
      <div className="flex justify-center">
        <div
          className={` inline-block lg:text-[22px] xl:text-[28px] text-[16px]  bg-[#184420] text-white py-3 text-center items-center rounded-[30px] uppercase mb-6 sm:px-20 px-4 ${libreBaskerville.className}`}
        >
          Student Stories
        </div>
      </div>

      <div className="flex lg:flex-row flex-col items-center  sm:px-32 px-4 ">
        <div className="mb-6">
          <Image src={studystoriess} alt="studystories" height={70} width={70} />
        </div>

        <div>
          <div
            className={`sm:text-[19px] lg:text-[24px] xl:text-[30px] text-lg font-bold text-[#184420] text-center ${libreBaskerville.className}`}
          >
            Some Good Words from Our Students
          </div>
          <div
            className={`lg:text-lg xl:text-[20px] text-base text-center text-[#184420] pb-5 sm:px-4    ${libreBaskerville.className}`}
          >
            We asked our students whether our support and training sessions were
            as smooth as we had promised.
          </div>
        </div>
      </div>

      <div
        className={`grid lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4  sm:px-20 md:px-32  px-4`}
      >
        <div className="border-2 border-[#E8F6BA] rounded-[45px] px-8 pt-4 text-center">
          <div
            className={`lg:text-[12px] xl:text-[16px] text-xs bg-[#FBF4BB] pb-4 ${lora.className}`}
          >
            “I had the great support and care from Valley Journey, and the best
            things about their support is that they were always available when I
            called them to clarify any doubt or share any concerns
          </div>
          <div className={`text-sm ${libreBaskerville.className}`}>
            University of South Wales SHAFEEL
          </div>
        </div>

        <div className="border-2 border-[#E8F6BA] rounded-[45px] px-8 pt-4 text-center">
          <div
            className={`lg:text-[12px] xl:text-[16px] text-xs bg-[#FBF4BB] pb-4 ${lora.className}`}
          >
            “I had the great support and care from Valley Journey, and the best
            things about their support is that they were always available when I
            called them to clarify any doubt or share any concerns
          </div>
          <div className={`text-sm ${libreBaskerville.className}`}>
            University of South Wales SHAFEEL
          </div>
        </div>

        <div className="border-2 border-[#E8F6BA] rounded-[45px] px-8 pt-4 text-center">
          <div
            className={`lg:text-[12px] xl:text-[16px] text-xs bg-[#FBF4BB] pb-4 ${lora.className}`}
          >
            “I had the great support and care from Valley Journey, and the best
            things about their support is that they were always available when I
            called them to clarify any doubt or share any concerns
          </div>
          <div className={`text-sm ${libreBaskerville.className}`}>
            University of South Wales SHAFEEL
          </div>
        </div>

        <div className="border-2 border-[#E8F6BA] rounded-[45px] px-8 pt-4 text-center">
          <div
            className={`lg:text-[12px] xl:text-[16px] text-xs bg-[#FBF4BB] pb-4 ${lora.className}`}
          >
            “I had the great support and care from Valley Journey, and the best
            things about their support is that they were always available when I
            called them to clarify any doubt or share any concerns
          </div>
          <div className={`text-sm ${libreBaskerville.className}`}>
            University of South Wales SHAFEEL
          </div>
        </div>

        <div className="border-2 border-[#E8F6BA] rounded-[45px] px-8 pt-4 text-center">
          <div
            className={`lg:text-[12px] xl:text-[16px] text-xs bg-[#FBF4BB] pb-4 ${lora.className}`}
          >
            “I had the great support and care from Valley Journey, and the best
            things about their support is that they were always available when I
            called them to clarify any doubt or share any concerns
          </div>
          <div className={`text-sm ${libreBaskerville.className}`}>
            University of South Wales SHAFEEL
          </div>
        </div>

        <div className="border-2 border-[#E8F6BA] rounded-[45px] px-8 pt-4 text-center">
          <div
            className={`lg:text-[12px] xl:text-[16px] text-xs bg-[#FBF4BB] pb-4 ${lora.className}`}
          >
            “I had the great support and care from Valley Journey, and the best
            things about their support is that they were always available when I
            called them to clarify any doubt or share any concerns
          </div>
          <div className={`text-sm ${libreBaskerville.className}`}>
            University of South Wales SHAFEEL
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Image src={dots}  className="w-[150px] "/>
      </div>
      <div className="mb-7">
        <div className=" bg-[#E3F5FF] py-5"></div>
      </div>
    </div>
  );
};

export default StudentStories;

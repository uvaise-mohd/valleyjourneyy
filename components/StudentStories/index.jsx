import React from "react";
import { Libre_Baskerville, Lora } from "next/font/google";

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
    <div className="px-20 py-10">
      <div
        className={`text-[26px] bg-[#184420] text-white py-3 mx-[430px] text-center items-center rounded-[30px] uppercase mb-8 ${libreBaskerville.className}`}
      >
        Student Stories
      </div>
      <div
        className={`text-[28px] font-bold text-[#184420] text-center  ${libreBaskerville.className}`}
      >
        Some Good Words from Our Students
      </div>
      <div
        className={`text-[18px] text-center text-[#184420] pb-5 px-56 ${libreBaskerville.className}`}
      >
        We asked our students whether our support and training sessions were as
        smooth as we had promised.
      </div>

      <div className={`grid grid-cols-3 grid-rows-2 gap-4`}>
        <div className="border-2 border-[#E8F6BA] rounded-[45px] px-8 pt-4 text-center">
          <div className={`text-base bg-[#E8F6BA] pb-4 ${lora.className}`}>
            “I had the great support and care from Valley Journey, and the best
            things about their support is that they were always available when I
            called them to clarify any doubt or share any concerns
          </div>
          <div className={`text-sm ${libreBaskerville.className}`}>
            University of South Wales SHAFEEL
          </div>
        </div>

        <div className="border-2 border-[#E8F6BA] rounded-[45px] px-8 pt-4 text-center">
          <div className={`text-base bg-[#E8F6BA] pb-4 ${lora.className}`}>
            “I had the great support and care from Valley Journey, and the best
            things about their support is that they were always available when I
            called them to clarify any doubt or share any concerns
          </div>
          <div className={`text-sm ${libreBaskerville.className}`}>
            University of South Wales SHAFEEL
          </div>
        </div>

        <div className="border-2 border-[#E8F6BA] rounded-[45px] px-8 pt-4 text-center">
          <div className={`text-base bg-[#E8F6BA] pb-4 ${lora.className}`}>
            “I had the great support and care from Valley Journey, and the best
            things about their support is that they were always available when I
            called them to clarify any doubt or share any concerns
          </div>
          <div className={`text-sm ${libreBaskerville.className}`}>
            University of South Wales SHAFEEL
          </div>
        </div>

        <div className="border-2 border-[#E8F6BA] rounded-[45px] px-8 pt-4 text-center">
          <div className={`text-base bg-[#E8F6BA] pb-4 ${lora.className}`}>
            “I had the great support and care from Valley Journey, and the best
            things about their support is that they were always available when I
            called them to clarify any doubt or share any concerns
          </div>
          <div className={`text-sm ${libreBaskerville.className}`}>
            University of South Wales SHAFEEL
          </div>
        </div>

        <div className="border-2 border-[#E8F6BA] rounded-[45px] px-8 pt-4 text-center">
          <div className={`text-base bg-[#E8F6BA] pb-4 ${lora.className}`}>
            “I had the great support and care from Valley Journey, and the best
            things about their support is that they were always available when I
            called them to clarify any doubt or share any concerns
          </div>
          <div className={`text-sm ${libreBaskerville.className}`}>
            University of South Wales SHAFEEL
          </div>
        </div>

        <div className="border-2 border-[#E8F6BA] rounded-[45px] px-8 pt-4 text-center">
          <div className={`text-base bg-[#E8F6BA] pb-4 ${lora.className}`}>
            “I had the great support and care from Valley Journey, and the best
            things about their support is that they were always available when I
            called them to clarify any doubt or share any concerns
          </div>
          <div className={`text-sm ${libreBaskerville.className}`}>
            University of South Wales SHAFEEL
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentStories;

"use client";
import React from "react";
import { Libre_Baskerville, Lora } from "next/font/google";
import Image from "next/image";
import studystoriess from "../../public/images/svg/studentstories/studystoriess.svg";
import dots from "../../public/images/svg/studentstories/3dots.svg";
import { motion, useScroll, useTransform } from "framer-motion";

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
  const listItemMotion = (duration) => ({
    whileInView: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: 100 },
    transition: { duration: duration },
  });

  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  return (
    <div className=" pt-10 bg-[#F6FAFA]" id="Accommodation">
      <motion.div
        // {...listItemMotion(0.8)}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center"
      >
        <div
          className={` inline-block lg:text-[22px] xl:text-[28px] text-[16px]  bg-[#184420] text-white py-3 text-center items-center rounded-[30px] uppercase mb-6 sm:px-20 px-4 ${libreBaskerville.className}`}
        >
          Student Stories
        </div>
      </motion.div>

      <div className="flex lg:flex-row flex-col items-center relative  ">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.4 }}
          className="mb-8 absolute left-[179px] bottom-[6px] student-stories-hand-image"
        >
          <Image
            src={studystoriess}
            alt="studystories"
            height={80}
            width={80}
          />
        </motion.div>

        <div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.8 }}
            className={`sm:text-[19px] lg:text-[24px] xl:text-[30px] text-lg font-bold text-[#184420] text-center  sm:px-64 px-4 ${libreBaskerville.className}`}
          >
            Some Good Words from Our Students
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.1 }}
            className={`lg:text-lg xl:text-[20px] text-base text-center text-[#184420] pb-5 sm:px-60 px-4${libreBaskerville.className}`}
          >
            We asked our students whether our support and training sessions were
            as smooth as we had promised.
          </motion.div>
        </div>
      </div>

      <div
        className={`grid lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4  sm:px-20 md:px-[150px]   px-4`}
      >
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="border-2 border-[#E8F6BA] rounded-[45px] px-8 pt-4 text-center"
        >
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className={`lg:text-[12px] xl:text-[16px] text-xs bg-[#FBF4BB] pb-4 ${lora.className}`}
          >
            “I had the great support and care from Valley Journey, and the best
            things about their support is that they were always available when I
            called them to clarify any doubt or share any concerns
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className={`text-sm ${libreBaskerville.className}`}
          >
            University of South Wales SHAFEEL
          </motion.div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="border-2 border-[#E8F6BA] rounded-[45px] px-8 pt-4 text-center"
        >
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className={`lg:text-[12px] xl:text-[16px] text-xs bg-[#FBF4BB] pb-4 ${lora.className}`}
          >
            “I had the great support and care from Valley Journey, and the best
            things about their support is that they were always available when I
            called them to clarify any doubt or share any concerns
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className={`text-sm ${libreBaskerville.className}`}
          >
            University of South Wales SHAFEEL
          </motion.div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="border-2 border-[#E8F6BA] rounded-[45px] px-8 pt-4 text-center"
        >
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className={`lg:text-[12px] xl:text-[16px] text-xs bg-[#FBF4BB] pb-4 ${lora.className}`}
          >
            “I had the great support and care from Valley Journey, and the best
            things about their support is that they were always available when I
            called them to clarify any doubt or share any concerns
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className={`text-sm ${libreBaskerville.className}`}
          >
            University of South Wales SHAFEEL
          </motion.div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="border-2 border-[#E8F6BA] rounded-[45px] px-8 pt-4 text-center"
        >
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className={`lg:text-[12px] xl:text-[16px] text-xs bg-[#FBF4BB] pb-4 ${lora.className}`}
          >
            “I had the great support and care from Valley Journey, and the best
            things about their support is that they were always available when I
            called them to clarify any doubt or share any concerns
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className={`text-sm ${libreBaskerville.className}`}
          >
            University of South Wales SHAFEEL
          </motion.div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="border-2 border-[#E8F6BA] rounded-[45px] px-8 pt-4 text-center"
        >
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className={`lg:text-[12px] xl:text-[16px] text-xs bg-[#FBF4BB] pb-4 ${lora.className}`}
          >
            “I had the great support and care from Valley Journey, and the best
            things about their support is that they were always available when I
            called them to clarify any doubt or share any concerns
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className={`text-sm ${libreBaskerville.className}`}
          >
            University of South Wales SHAFEEL
          </motion.div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="border-2 border-[#E8F6BA] rounded-[45px] px-8 pt-4 text-center"
        >
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className={`lg:text-[12px] xl:text-[16px] text-xs bg-[#FBF4BB] pb-4 ${lora.className}`}
          >
            “I had the great support and care from Valley Journey, and the best
            things about their support is that they were always available when I
            called them to clarify any doubt or share any concerns
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className={`text-sm ${libreBaskerville.className}`}
          >
            University of South Wales SHAFEEL
          </motion.div>
        </motion.div>
      </div>
      <div className="flex justify-center">
        <Image alt="dots" src={dots} className="w-[150px] " />
      </div>
      <div className="mb-7">
        <div className=" bg-[#E3F5FF] py-5"></div>
      </div>
    </div>
  );
};

export default StudentStories;

"use client";
import React, { useEffect, useRef, useState } from "react";
import { Libre_Baskerville, Lora } from "next/font/google";
import { motion } from "framer-motion";

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
  const variant = {
    visible: { scale: 1 },
    hidden: { scale: 0 },
    transition: { duration: 5.5 },
  };

  // const [scrollDirection, setScrollDirection] = useState("down");

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;
  //     // console.log(currentScrollY,"currentScrollY");
  //     const prevScrollY = useRef(0);
  //     // console.log(prevScrollY, 'prevScrollY');

  //     if (currentScrollY > prevScrollY.current) {
  //       setScrollDirection("down");
  //     } else {
  //       setScrollDirection("up");
  //     }

  //     prevScrollY.current = currentScrollY;
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className="bg-[#E2E8F2] py-3 ">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        // initial="hidden"
        // animate={scrollDirection === "down" ? { opacity: 1, y: 0 } : {}}
        // transition={{ duration: 0.5 }}
        className={` lg:text-[24px] xl:text-[30px] text-[19px] px-4  text-[#243969] text-center font-extrabold ${libreBaskerville.className}`}
      >
        Universities, Colleges and Polytechniques
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.7 }}
        // initial="hidden"
        // animate={scrollDirection === "down" ? { opacity: 1, y: 0 } : {}}
        // transition={{ duration: 0.5 }}
        className={`lg:text-xl xl:text-[22px] text-[16px] text-center lg:px-64 md:px-80 px-4 pb-7 ${lora.className}`}
      >
        Both university and location can contribute to a student’s academic
        development - We always recommend welcoming and vibrant locations that
        can help students develop their skillsets.
      </motion.div>

      <div
        className={`xl:text-[27px] lg:text-[21px] md:text-[17px] sm:text-lg text-base  text-white grid md:grid-cols-2 grid-cols-1 gap-1 md:px-44 px-4 ${libreBaskerville.className} `}
      >
        <motion.div variants={variant} initial="hidden"
         whileInView="visible"
        // animate={scrollDirection === "down" ? { opacity: 1, y: 0 } : {}}
         >
          <div className="flex justify-center">
            <div className=" bg-[#243969] border-2 border-solid rounded-[90px] text-start items-center flex justify-start px-10 w-[550px] h-[95px]">
              Over 500 Institutions to Choose From
            </div>
          </div>
        </motion.div>

        {/* lg:text-[20px] xl:text-[28px] text-lg */}
        <motion.div variants={variant} initial="hidden" whileInView="visible">
          <div className="flex justify-center ">
            <div
              // whileInView={{ opacity: 1, y: 0 }}
              // initial={{ opacity: 0, y: 100 }}
              // transition={{ duration: 1 }}
              variants={variant}
              initial="hidden"
              whileInView="visible"
              className=" bg-[#243969] border-2 border-solid rounded-[90px] text-start items-center flex justify-start px-10 w-[550px] h-[95px]"
            >
              Universities Ranked in the Top 100{" "}
            </div>
          </div>
        </motion.div>

        <motion.div
          // whileInView={{ opacity: 1, y: 0 }}
          // initial={{ opacity: 0, y: 100 }}
          // transition={{ duration: 1.3 }}
          variants={variant}
          initial="hidden"
          whileInView="visible"
        >
          <div className="flex justify-center ">
            <div
              // whileInView={{ opacity: 1, y: 0 }}
              // initial={{ opacity: 0, y: 100 }}
              // transition={{ duration: 1 }}
              className=" bg-[#243969] border-2 border-solid rounded-[90px] text-start items-center flex justify-start px-10 w-[550px] h-[95px]"
            >
              Admission to Universities Offering Free Education
            </div>
          </div>
        </motion.div>

        <motion.div
          // whileInView={{ opacity: 1, y: 0 }}
          // initial={{ opacity: 0, y: 100 }}
          // transition={{ duration: 1.3 }}
          variants={variant}
          initial="hidden"
          whileInView="visible"
        >
          <div className="flex justify-center ">
            <div
              // whileInView={{ opacity: 1, y: 0 }}
              // initial={{ opacity: 0, y: 100 }}
              // transition={{ duration: 1 }}

              className=" bg-[#243969] border-2 border-solid rounded-[90px] text-start items-center flex justify-start px-10 w-[550px] h-[95px]"
            >
              Reputed Institutions with Accreditation
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Institutes;

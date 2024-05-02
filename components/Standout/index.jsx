"use client";
import React, { useRef } from "react";
import { Aleo, Trocchi } from "next/font/google";
import Image from "next/image";
import standout1 from "../../public/images/svg/standout/standout1.svg";
import standout2 from "../../public/images/svg/standout/standout2.svg";
import standout3 from "../../public/images/svg/standout/standout3.svg";
import standout4 from "../../public/images/svg/standout/standout4.svg";
import standout5 from "../../public/images/svg/standout/standout5.svg";
import standout6 from "../../public/images/svg/standout/standout6.svg";
import DelayfreeProcessing from "../../public/images/svg/standout/DelayfreeProcessing.svg";
import AuthenticInformation from "../../public/images/svg/standout/AuthenticInformation.svg";
import QuickOfferLetter from "../../public/images/svg/standout/QuickOfferLetter.svg";
import AestheticApplicationProces from "../../public/images/svg/standout/AestheticApplicationProces.svg";
import DetailedDocumentAssessment from "../../public/images/svg/standout/DetailedDocumentAssessment.svg";
import TuitionFeeReduction from "../../public/images/svg/standout/TuitionFeeReduction.svg";
import FriendlyExperiencedStaff from "../../public/images/svg/standout/Friendly&ExperiencedStaff.svg";
import postarrivalhelp from "../../public/images/svg/standout/postarrivalhelp.svg";
import { motion, useScroll, useTransform } from "framer-motion";
import { Libre_Baskerville } from "next/font/google";
import Marquee from "react-fast-marquee";

const libreBaskerville = Libre_Baskerville({
  weight: "700", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal",
  subsets: ["latin"],
});

const aleo = Aleo({
  weight: "700", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal",
  subsets: ["latin"],
});

const trocchi = Trocchi({
  weight: "400", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal",
  subsets: ["latin"],
});

const Standout = () => {
  const listItemMotion = (duration) => ({
    whileInView: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: 100 },
    transition: { duration: duration },
  });

  return (
    <div>
      <div className={` bg-[#CCFACF]  ${aleo.className}`}>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className=" lg:text-[28px] xl:text-[34px]  text-[20px] text-center font-bold uppercase text-[#184420] sm:px-36 lg:px-60 xl:px-80 px-4 py-7"
        >
          what makes Valley Journey stand out!
        </motion.div>
        <div className="flex justify-center">
          <Marquee pauseOnHover>
            <div className="flex flex-row flex-nowrap gap-1 px-1">
              <div className="" style={{ margin: "0px 2px" }}>
                <Image
                  src={standout1}
                  alt="office"
                  className="sm:height={600} sm:width={600} "
                  height={300}
                  width={250}
                />
              </div>
              <div className="" style={{ margin: "0px 2px" }}>
                <Image
                  src={standout2}
                  alt="office"
                  className="sm:height={600} sm:width={600} "
                  height={300}
                  width={250}
                />
              </div>
              <div className="" style={{ margin: "0px 2px" }}>
                <Image
                  src={standout3}
                  alt="office"
                  className="sm:height={600} sm:width={600} "
                  height={300}
                  width={250}
                />
              </div>
              <div className="" style={{ margin: "0px 2px" }}>
                <Image
                  src={standout4}
                  alt="office"
                  className="sm:height={600} sm:width={600} "
                  height={300}
                  width={250}
                />
              </div>
              <div className="" style={{ margin: "0px 2px" }}>
                <Image
                  src={standout5}
                  alt="office"
                  className="sm:height={600} sm:width={600} "
                  height={300}
                  width={250}
                />
              </div>
              <div className="" style={{ margin: "0px 2px" }}>
                <Image
                  src={standout6}
                  alt="office"
                  className="sm:height={600} sm:width={600} "
                  height={300}
                  width={250}
                />
              </div>
            </div>
          </Marquee>
        </div>

        <div
          className={`lg:text-xl xl:text-[22px] text-[16px] text-center   md:px-48 xl:px-64 sm:px-24 px-4  py-7  ${trocchi.className}`}
        >
          {/* <Marquee> */}
          “Deep in our hearts, we know that every student and their parents come
          to us with lots of hope and dreams.”
          {/* </Marquee> */}
        </div>
      </div>

      <div className="grid lg:grid-cols-4 lg:grid-rows-2 sm:grid-cols-2   sm:px-20 md:px-[150px]  px-4 font-bold gap-2">
        <div className="flex flex-col gap-1 items-center text-center">
          <motion.div {...listItemMotion(0.8)}>
            <Image
              src={DelayfreeProcessing}
              alt=""
              className="h-[150px] w-[150px]"
            />
          </motion.div>
          <motion.div
            {...listItemMotion(0.8)}
            className={` text-[#2B62A4] text-base lg:text-[16px] xl:text-[18px] text-[15px] h-[50px] font-bold ${libreBaskerville.className}`}
          >
            Delay-free Processing
          </motion.div>
          <motion.div
            {...listItemMotion(0.8)}
            className={` lg:text-[16px] xl:text-[18px] text-[15px]  ${aleo.className}`}
          >
            Our work culture is unique because we offer a quick and efficient
            response to your queries, mail and calls.
          </motion.div>
        </div>

        <div className="flex flex-col gap-1 items-center text-center">
          <motion.div {...listItemMotion(0.8)}>
            <Image
              src={AuthenticInformation}
              alt=""
              className="h-[150px] w-[150px]"
            />
          </motion.div>
          <motion.div
            {...listItemMotion(0.8)}
            className={` text-[#2B62A4] text-base lg:text-[16px] xl:text-[18px] text-[15px] h-[50px] ${libreBaskerville.className} font-bold`}
          >
            Authentic Information
          </motion.div>
          <motion.div
            {...listItemMotion(0.8)}
            className={`  lg:text-[16px] xl:text-[18px] text-[15px]  ${aleo.className}`}
          >
            You can trust every bit of information coming from us. We educate
            you on every positive and negative aspect of studying abroad.
          </motion.div>
        </div>

        <div className="flex flex-col gap-1 items-center text-center">
          <motion.div {...listItemMotion(0.8)}>
            <Image
              src={QuickOfferLetter}
              alt=""
              className="h-[150px] w-[150px]"
            />
          </motion.div>
          <motion.div
            {...listItemMotion(0.8)}
            className={` text-[#2B62A4] text-base lg:text-[16px] xl:text-[18px] text-[15px] h-[50px] ${libreBaskerville.className} font-bold`}
          >
            Quick Offer Letter
          </motion.div>
          <motion.div
            {...listItemMotion(0.8)}
            className={`  lg:text-[16px] xl:text-[18px] text-[15px]    ${aleo.className}`}
          >
            We generally can get Offer Letters in a short period thanks to our
            disciplined working atmosphere.
          </motion.div>
        </div>

        <div className="flex flex-col gap-1 items-center text-center">
          <motion.div {...listItemMotion(0.8)}>
            <Image
              src={AestheticApplicationProces}
              alt=""
              className="h-[150px] w-[150px]"
            />
          </motion.div>
          <motion.div
            {...listItemMotion(0.8)}
            className={` text-[#2B62A4] text-base lg:text-[16px] xl:text-[18px] text-[15px] h-[50px] ${libreBaskerville.className} font-bold`}
          >
            Aesthetic Application Proces
          </motion.div>
          <motion.div
            {...listItemMotion(0.8)}
            className={`  lg:text-[16px] xl:text-[18px] text-[15px]    ${aleo.className}`}
          >
            We enjoy creating beauty in everything we do even in the way we
            submit them at the university.
          </motion.div>
        </div>

        <div className="flex flex-col gap-1 items-center text-center">
          <motion.div {...listItemMotion(0.8)}>
            <Image
              src={DetailedDocumentAssessment}
              alt=""
              className="h-[150px] w-[150px]"
            />
          </motion.div>
          <motion.div
            {...listItemMotion(0.8)}
            className={` text-[#2B62A4] text-base lg:text-[16px] xl:text-[18px] text-[15px] h-[50px] ${libreBaskerville.className} font-bold`}
          >
            Detailed Document Assessment
          </motion.div>
          <motion.div
            {...listItemMotion(0.8)}
            className={` lg:text-[16px] xl:text-[18px] text-[15px]   ${aleo.className}`}
          >
            Even before starting the application process, we will elucidate the
            complete list of documents required beforehand.
          </motion.div>
        </div>

        <div className="flex flex-col gap-1 items-center text-center">
          <motion.div {...listItemMotion(0.8)}>
            <Image
              src={TuitionFeeReduction}
              alt=""
              className="h-[150px] w-[150px]"
            />
          </motion.div>
          <motion.div
            {...listItemMotion(0.8)}
            className={` text-[#2B62A4] text-base lg:text-[16px] xl:text-[18px] text-[15px] h-[50px] ${libreBaskerville.className} font-bold`}
          >
            Tuition Fee Reduction
          </motion.div>
          <motion.div
            {...listItemMotion(0.8)}
            className={` lg:text-[16px] xl:text-[18px] text-[15px]    ${aleo.className}`}
          >
            We conduct additional training sessions to achieve the exclusive
            scholarships offered by universities.
          </motion.div>
        </div>

        <div className="flex flex-col gap-1 items-center text-center">
          <motion.div {...listItemMotion(0.8)}>
            <Image
              src={FriendlyExperiencedStaff}
              alt=""
              className="h-[150px] w-[150px]"
            />
          </motion.div>
          <motion.div
            {...listItemMotion(0.8)}
            className={` text-[#2B62A4] text-base lg:text-[16px] xl:text-[18px] text-[15px] h-[50px] ${libreBaskerville.className} font-bold`}
          >
            Friendly & Experienced Staff
          </motion.div>
          <motion.div
            {...listItemMotion(0.8)}
            className={` lg:text-[16px] xl:text-[18px] text-[15px]    ${aleo.className}`}
          >
            We are always there for you throughout your application process with
            frequent communication and quick response
          </motion.div>
        </div>

        <div className="flex flex-col gap-1 items-center text-center">
          <motion.div {...listItemMotion(0.8)}>
            <Image
              src={postarrivalhelp}
              alt=""
              className="h-[150px] w-[150px]"
            />
          </motion.div>
          <motion.div
            {...listItemMotion(0.8)}
            className={` text-[#2B62A4]  text-base lg:text-[16px] xl:text-[18px] text-[15px]  h-[50px] ${libreBaskerville.className} font-bold`}
          >
            Post-arrival Help
          </motion.div>
          <motion.div
            {...listItemMotion(0.8)}
            className={` lg:text-[16px] xl:text-[18px] text-[15px]  ${aleo.className}`}
          >
            We take away all your worries about your travel and accommodation by
            arranging everything beforehand.
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Standout;

import React from "react";
import { Aleo, Trocchi } from "next/font/google";
import Image from "next/image";
import office1 from "../../public/images/office/office1.jpg";
import office2 from "../../public/images/office/office2.jpg";
import office3 from "../../public/images/office/office3.jpg";
import plane from "../../public/images/plane.png";
import { Libre_Baskerville } from "next/font/google";

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
  return (
    <div>
      <div className={` bg-green-200  ${aleo.className}`}>
        <div className=" text-[30px] text-center uppercase text-[#184420] px-96 py-7">
          what makes Valley Journey stand out!
        </div>
        <div className="grid grid-rows-1 grid-cols-6 gap-1 px-2">
          <div>
            <Image src={office1} alt="office" height={600} width={600} />
          </div>
          <div>
            <Image src={office2} alt="office" height={600} width={600} />
          </div>
          <div>
            <Image src={office3} alt="office" height={600} width={600} />
          </div>
          <div>
            <Image src={office1} alt="office" height={600} width={600} />
          </div>
          <div>
            <Image src={office2} alt="office" height={600} width={600} />
          </div>
          <div>
            <Image src={office3} alt="office" height={600} width={600} />
          </div>
        </div>
        <div
          className={`text-[20px] text-center px-80 py-7  ${trocchi.className}`}
        >
          “Deep in our hearts, we know that every student and their parents come
          to us with lots of hope and dreams.”
        </div>
      </div>

      <div className="grid grid-cols-4 grid-rows-2 px-20">
        <div className="flex flex-col gap-1 items-center text-center">
          <div>
            <Image src={plane} alt="" className="h-[150px] w-[150px]" />
          </div>
          <div
            className={` text-[#2B62A4] text-lg h-[50px] ${libreBaskerville.className}`}
          >
            Delay-free Processing
          </div>
          <div className={` text-base ${aleo.className}`}>
            Our work culture is unique because we offer a quick and efficient
            response to your queries, mail and calls.
          </div>
        </div>

        <div className="flex flex-col gap-1 items-center text-center">
          <div>
            <Image src={plane} alt="" className="h-[150px] w-[150px]" />
          </div>
          <div
            className={` text-[#2B62A4] text-lg h-[50px] ${libreBaskerville.className}`}
          >
            Authentic Information
          </div>
          <div className={` text-base ${aleo.className}`}>
            You can trust every bit of information coming from us. We educate
            you on every positive and negative aspect of studying abroad.
          </div>
        </div>

        <div className="flex flex-col gap-1 items-center text-center">
          <div>
            <Image src={plane} alt="" className="h-[150px] w-[150px]" />
          </div>
          <div
            className={` text-[#2B62A4] text-lg h-[50px] ${libreBaskerville.className}`}
          >
            Quick Offer Letter{" "}
          </div>
          <div className={` text-base  ${aleo.className}`}>
            We generally can get Offer Letters in a short period thanks to our
            disciplined working atmosphere.
          </div>
        </div>

        <div className="flex flex-col gap-1 items-center text-center">
          <div>
            <Image src={plane} alt="" className="h-[150px] w-[150px]" />
          </div>
          <div
            className={` text-[#2B62A4] text-lg h-[50px] ${libreBaskerville.className}`}
          >
            Aesthetic Application Proces
          </div>
          <div className={` text-base  ${aleo.className}`}>
            We enjoy creating beauty in everything we do even in the way we
            submit them at the university.
          </div>
        </div>

        <div className="flex flex-col gap-1 items-center text-center">
          <div>
            <Image src={plane} alt="" className="h-[150px] w-[150px]" />
          </div>
          <div
            className={` text-[#2B62A4] text-lg h-[50px] ${libreBaskerville.className}`}
          >
            Detailed Document Assessment
          </div>
          <div className={` text-base ${aleo.className}`}>
            Even before starting the application process, we will elucidate the
            complete list of documents required beforehand.
          </div>
        </div>

        <div className="flex flex-col gap-1 items-center text-center">
          <div>
            <Image src={plane} alt="" className="h-[150px] w-[150px]" />
          </div>
          <div
            className={` text-[#2B62A4] text-lg h-[50px] ${libreBaskerville.className}`}
          >
            Tuition Fee Reduction
          </div>
          <div className={` text-base  ${aleo.className}`}>
            We conduct additional training sessions to achieve the exclusive
            scholarships offered by universities.
          </div>
        </div>

        <div className="flex flex-col gap-1 items-center text-center">
          <div>
            <Image src={plane} alt="" className="h-[150px] w-[150px]" />
          </div>
          <div
            className={` text-[#2B62A4] text-lg h-[50px] ${libreBaskerville.className}`}
          >
            Friendly & Experienced Staff
          </div>
          <div className={` text-base  ${aleo.className}`}>
            We are always there for you throughout your application process with
            frequent communication and quick response
          </div>
        </div>

        <div className="flex flex-col gap-1 items-center text-center">
          <div>
            <Image src={plane} alt="" className="h-[150px] w-[150px]" />
          </div>
          <div
            className={` text-[#2B62A4] text-lg h-[50px] ${libreBaskerville.className}`}
          >
            Post-arrival Help
          </div>
          <div className={` text-base ${aleo.className}`}>
            We take away all your worries about your travel and accommodation by
            arranging everything beforehand.
          </div>
        </div>

      </div>
    </div>
  );
};

export default Standout;

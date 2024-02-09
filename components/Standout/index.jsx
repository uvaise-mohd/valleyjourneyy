import React from "react";
import { Aleo, Trocchi } from "next/font/google";
import Image from "next/image";
import office1 from "../../public/images/office/office1.jpg";
import office2 from "../../public/images/office/office2.jpg";
import office3 from "../../public/images/office/office3.jpg";
import time from "../../public/images/time.png";
import { Libre_Baskerville } from "next/font/google";


const libreBaskerville = Libre_Baskerville({
  weight: "400", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal",
  subsets: ["latin"],
});

const aleo = Aleo({
  weight: "400", // if single weight, otherwise you use array like [400, 500, 700],
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
        <div className=" text-[50px] text-center uppercase text-[#184420] px-48 py-7">
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
          className={`text-[35px] text-center px-32 py-7  ${trocchi.className}`}
        >
          “Deep in our hearts, we know that every student and their parents come
          to us with lots of hope and dreams.”
        </div>
      </div>

      <div className="grid grid-cols-4 grid-rows-2 px-20">
        <div className="flex flex-col gap-1 items-center text-center">
          <div>
            <Image src={time} alt="" className="h-[150px] w-[150px]" />
          </div>
          <div className={` text-[#2B62A4] text-[24px] ${libreBaskerville.className}`}>Delay-free Processing</div>
          <div className={` text-[22px]  ${aleo.className}`}>
            Our work culture is unique because we offer a quick and efficient
            response to your queries, mail and calls.
          </div>
        </div>

        <div className="flex flex-col gap-1 items-center text-center">
          <div>
            <Image src={time} alt="" className="h-[150px] w-[150px]" />
          </div>
          <div className={` text-[#2B62A4] text-[24px] ${libreBaskerville.className}`}>Delay-free Processing</div>
          <div className={` text-[22px]  ${aleo.className}`}>
            Our work culture is unique because we offer a quick and efficient
            response to your queries, mail and calls.
          </div>
        </div>

        <div className="flex flex-col gap-1 items-center text-center">
          <div>
            <Image src={time} alt="" className="h-[150px] w-[150px]" />
          </div>
          <div className={` text-[#2B62A4] text-[24px] ${libreBaskerville.className}`}>Delay-free Processing</div>
          <div className={` text-[22px]  ${aleo.className}`}>
            Our work culture is unique because we offer a quick and efficient
            response to your queries, mail and calls.
          </div>
        </div>
        <div className="flex flex-col gap-1 items-center text-center">
          <div>
            <Image src={time} alt="" className="h-[150px] w-[150px]" />
          </div>
          <div className={` text-[#2B62A4] text-[24px] ${libreBaskerville.className}`}>Delay-free Processing</div>
          <div className={` text-[22px]  ${aleo.className}`}>
            Our work culture is unique because we offer a quick and efficient
            response to your queries, mail and calls.
          </div>
        </div>

        <div className="flex flex-col gap-1 items-center text-center">
          <div>
            <Image src={time} alt="" className="h-[150px] w-[150px]" />
          </div>
          <div className={` text-[#2B62A4] text-[24px] ${libreBaskerville.className}`}>Delay-free Processing</div>
          <div className={` text-[22px]  ${aleo.className}`}>
            Our work culture is unique because we offer a quick and efficient
            response to your queries, mail and calls.
          </div>
        </div>

        <div className="flex flex-col gap-1 items-center text-center">
          <div>
            <Image src={time} alt="" className="h-[150px] w-[150px]" />
          </div>
          <div className={` text-[#2B62A4] text-[24px] ${libreBaskerville.className}`}>Delay-free Processing</div>
          <div className={` text-[22px]  ${aleo.className}`}>
            Our work culture is unique because we offer a quick and efficient
            response to your queries, mail and calls.
          </div>
        </div>

        <div className="flex flex-col gap-1 items-center text-center">
          <div>
            <Image src={time} alt="" className="h-[150px] w-[150px]" />
          </div>
          <div className={` text-[#2B62A4] text-[24px] ${libreBaskerville.className}`}>Delay-free Processing</div>
          <div className={` text-[22px]  ${aleo.className}`}>
            Our work culture is unique because we offer a quick and efficient
            response to your queries, mail and calls.
          </div>
        </div>

        <div className="flex flex-col gap-1 items-center text-center">
          <div>
            <Image src={time} alt="" className="h-[150px] w-[150px]" />
          </div>
          <div className={` text-[#2B62A4] text-[24px] ${libreBaskerville.className}`}>Delay-free Processing</div>
          <div className={` text-[22px]  ${aleo.className}`}>
            Our work culture is unique because we offer a quick and efficient
            response to your queries, mail and calls.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Standout;

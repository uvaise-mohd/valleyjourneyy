import Image from "next/image";
import React from "react";
import logo from "../../public/images/valleyJourney.png";
import { Belleza, Cardo, Libre_Baskerville } from "next/font/google";
import fb from "../../public/images/socialMedia/fb.png";
import instagram from "../../public/images/socialMedia/instagram.png";
import twitter from "../../public/images/socialMedia/twitter.png";
import youtube from "../../public/images/socialMedia/youtube.png";

const belleza = Belleza({
  weight: "400", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal",
  subsets: ["latin"],
});
const cardo = Cardo({
  weight: "400", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  weight: "400", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal",
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <div className="bg-[#020126] text-white py-3">
      <div className={`flex justify-center text-3xl pb-4 ${belleza.className}`}>
        Please Type
      </div>

      <div
        className={`text-xl flex justify-between pb-8 px-32 ${cardo.className}`}
      >
        <div>Preferred Country</div>
        <div>Preferred Area of Studies</div>
        <div>Contact Number</div>
      </div>

      <div className={` text-base text-center pb-8 ${belleza.className}`}>
        We will call you instantly!
      </div>

      <div className=" flex  justify-center">
        <Image src={logo} alt="logo" height={160} width={160} />
      </div>

      <div
        className={`flex justify-between px-24 text-sm ${libreBaskerville.className}`}
      >
        <div className=" text-start">
          <div>Countries</div>
          <div>Courses</div>
          <div>IELTS</div>
          <div>About Us</div>
          <div>Accommodation</div>
          <div>News & Blog</div>
        </div>

        <div className=" text-center  items-center pl-44 ">
          <div className="pb-5">
            <div>KC Tower, Manjeri Road</div>
            <div>Up Hill, Malappuram </div>
            <div>Kerala - 676505</div>
          </div>

          <div className="pb-3">
            <div>letstalk@valleyjourney.com</div>
            <div> 9645 9678 00 </div>
            <div> 9645 9678 66</div>
          </div>

          <div className="flex flex-row gap-2 justify-between items-center ">
            <div>
              <Image src={fb} alt="fb" height={50} width={50} className=""/>
            </div>
            <div>
              <Image src={instagram}  height={50} width={50} alt="fb" />
            </div>
            <div>
              <Image src={youtube}  height={50} width={50} alt="fb" />
            </div>
            <div>
              <Image src={twitter}  height={50} width={50} alt="fb" />
            </div>
            
          </div>
        </div>

        <div className="text-end">
          <div>Opening Hours</div>
          <div>Monday - Friday: 09.00 am - 06.30 pm</div>
          <div>Saturday: 09.00 am - 03.00 pm</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

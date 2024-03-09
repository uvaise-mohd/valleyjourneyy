import Image from "next/image";
import React from "react";
import logo from "../../public/images/svg/footerlogo.svg";
import { Belleza, Cardo, Libre_Baskerville } from "next/font/google";
import fb from "../../public/images/svg/socialmedia/facebook.svg";
import instagram from "../../public/images/socialMedia/instagram.png";
import twitter from "../../public/images/svg/socialmedia/twitter.svg";
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
    <div className=" ">
      <div className="bg-[#000125] text-white py-3 ">

 
        <div className=" text-center mb-3  ">
          <div
            className={` lg:text-[28px] xl:text-[34px] text-[20px]  inline-block   w-[300px] footer-border  ${belleza.className}` }
          >
            Please Type
          </div>
        </div>

        <div
          className={`lg:text-xl xl:text-[22px] text-base flex sm:flex-row flex-col sm:justify-between text-center justify-center pb-8  sm:px-20 md:px-32  px-4 ${cardo.className}`}
        >
          <div>Preferred Country</div>
          <div>Preferred Area of Studies</div>
          <div>Contact Number</div>
        </div>

        <div
          className={` lg:text-[19px] xl:text-[21px] text-base  text-center pb-8 ${belleza.className}`}
        >
          We will call you instantly!
        </div>

        <div className=" flex  justify-center pb-4 ">
          <Image src={logo} alt="logo" height={180} width={180} />
        </div>

        <div
          className={`grid sm:grid-cols-3 grid-cols-1 gap-4  lg:text-base xl:text-lg text-sm lg:px-28 md:px-20 sm:px-12 ${libreBaskerville.className}`}
        >
          <div className="">
            <div className=" sm:text-start text-center">
              <div>Countries</div>
              <div>Courses</div>
              <div>IELTS</div>
              <div>About Us</div>
              <div>Accommodation</div>
              <div>News & Blog</div>
            </div>
          </div>

          <div className="">
            <div className=" text-center">
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

              <div className="flex flex-row sm:gap-2 gap-1 sm:justify-between justify-center items-center ">
                <div>
                  <Image src={fb} alt="fb" height={45} width={45} />
                </div>
                <div>
                  <Image src={instagram} height={50} width={50} alt="fb" />
                </div>
                <div>
                  <Image src={youtube} height={70} width={70} alt="fb" />
                </div>
                <div>
                  <Image src={twitter} height={40} width={40} alt="fb" />
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className=" sm:text-end text-center">
              <div>Opening Hours</div>
              <div>
                Monday - Friday:
                <br /> 09.00 am - 06.30 pm
              </div>
              <div>
                Saturday: <br /> 09.00 am - 03.00 pm
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${belleza.className} bg-[#3D514D] items-center flex flex-row justify-center gap-2 px-4 py-2 text-white`}
      >
        <div></div>
        <div className=" text-lg text-center ">
          2024 Valley Journey Overseas Education LLP : All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;

"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "../../public/images/svg/headerlogo.svg";
import { Libre_Baskerville } from "next/font/google";
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const libreBaskerville = Libre_Baskerville({
  weight: "400", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal",
  subsets: ["latin"],
});

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [closeIcon, setCloseIcon] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  // const navLinks = document.querySelector('.navlinks')
  // console.log(navLinks);

  const menuIcon = () => {
    setCloseIcon((prevCloseIcon) => !prevCloseIcon);
    // navLinks.classList.toggle('top-[75px]')

    const navLinks = document.querySelector(".navlinks"); // Replace with your actual ID
    if (navLinks) {
      navLinks.classList.toggle("top-[75px]");
    }
  };

  return (
    <nav
      className={`flex justify-between sm:pt-2 pt-6  items-center sticky top-0 z-20 sm:px-32 px-4 bg-white ${libreBaskerville.className}`}
    >
      <div className="flex items-center lg:gap-2 xl:gap-3 2xl:gap-4">
        <div>
          <Image
            src={logo}
            alt="logo"
            className=" w-[165px] h-[54px] main-logo-below365 "
          />
        </div>
        <div>
          <ul className=" navlinks navsetup duration-500 flex  flex-col absolute  top-[-800%] left-0 bg-white w-full widthsetup  gap-6 items-start py-10  text-[12px] xl:text-sm px-4 xl:gap-6 2xl:gap-7 ">
            <Link href={"#"}>Countries</Link>
            <Link href={"#"}>Courses</Link>
            <Link href={"#"}>IELTS</Link>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>News</Link>
            <Link href={"#"}>Accommodation</Link>
          </ul>
        </div>
      </div>

      <div className="flex gap-2 items-center   ">
        {/* <button className="sm:text-lg  text-base talktous-below365 text-[#2A36AC] border-2 border-solid divide-black rounded-xl px-1 sm:px-2 py-1    ">
          Talk To Us
        </button> */}
        <a
          href="https://valleyjourney.com/notify.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="sm:text-lg text-base talktous-below365 text-[#2A36AC] border-2 border-solid divide-black rounded-xl px-1 sm:px-2 py-1">
            Talk To Us
          </button>
        </a>
        <div className="menubar flex items-center" onClick={menuIcon}>
          {closeIcon ? (
            <IoClose className=" text-3xl cursor-pointer" />
          ) : (
            <MdOutlineMenu className=" text-3xl cursor-pointer" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;

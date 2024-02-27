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

    const navLinks = document.querySelector('.navlinks'); // Replace with your actual ID
    if (navLinks) {
      navLinks.classList.toggle("top-[75px]");
    }
  };

  return (
    <nav
      className={`flex justify-between sm:pt-2 pt-6  items-center sticky top-0 z-20 sm:px-20 px-4 bg-white ${libreBaskerville.className}`}
    >
      <div className="">
        <Image
          src={logo}
          alt="logo"
          className=""
          height={130}
          width={130}
        />
      </div>
      <div>
        <ul className=" navlinks navsetup duration-500 flex  flex-col absolute  top-[-800%] left-0 bg-white w-full widthsetup  gap-10 items-start py-10 xl:text-lg lg:text-base text-sm px-4">
          <Link href={"#"}>Countries</Link>
          <Link href={"#"}>Courses</Link>
          <Link href={"#"}>IELTS</Link>
          <Link href={"#"}>About Us</Link>
          <Link href={"#"}>News</Link>
          <Link href={"#"}>Accommodation</Link>
        </ul>
      </div>

      <div className="a flex gap-2 items-center">
        <button className="sm:text-lg xl:text-xl text-base text-[#2A36AC] border-2 border-solid divide-black rounded-xl p-1 lg:p-2  ">
          Talk To Us
        </button>
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

"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import hero from '../../public/images/hero.png'
import { Aleo, Libre_Baskerville } from 'next/font/google'

const libreBaskerville = Libre_Baskerville({
  weight: "700", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal",
  subsets: ["latin"],
});

const aleo  = Aleo({  
weight: '700', // if single weight, otherwise you use array like [400, 500, 700],
style: 'normal' ,
subsets: ['latin'],})


  

const Hero = () => {

  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 1) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []); 
  return (
    <div className="min-h-[90vh]"> 
      <div className="px-20">
        <div className="flex justify-between">
          <div className="flex flex-col justify-center">
            <div className={`text-[#083C82] text-[35px]  font-bold ${libreBaskerville.className}`}>
              Travel and explore your favourite country as an international
              student
            </div>
            <div className={`text-[#2B202A] text-[22px]  block font-bold ${aleo.className}`}>
              <div>Over fifteen countries across the world to study in!</div>
              <div>Enjoy a new lease of life through Valley Journey.</div>
            </div>
          </div>

          <div>
            <Image src={hero} height={1800} width={1600} alt="hero-inage" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;


//className="sticky top-0 z-10" style={{minHeight:'90vh',top:'11vh'}}
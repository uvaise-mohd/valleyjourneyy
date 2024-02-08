import Image from "next/image";
import React from "react";
import hero from '../../public/images/hero.png'

const Hero = () => {
  return (
    <div className="sticky top-0 z-10" style={{minHeight:'90vh',top:'11vh'}}> 
      <div className="px-10 top-0">
        <div className="flex justify-between">
          <div className="flex flex-col justify-center">
            <div className="text-[#083C82] text-[52px] leading-[60px] font-bold">
              Travel and explore your favourite country as an international
              student
            </div>
            <div className="text-[#2B202A] text-[26px] block font-bold">
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

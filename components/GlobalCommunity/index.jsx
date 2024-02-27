import Image from "next/image";
import React from "react";
import canada from '../../public/images/svg/canada.svg'
import uk from '../../public/images/svg/uk.svg'
import aus from '../../public/images/svg/australia.svg'
import nz from '../../public/images/svg/newzeland.svg'
import ireland from '../../public/images/svg/ireland.svg'
import us from '../../public/images/svg/us.svg'
import france from '../../public/images/svg/france.svg'
import germany from '../../public/images/svg/germany.svg'
import sweden from '../../public/images/svg/sweden.svg'
import austria from '../../public/images/svg/austria.svg'
import netherlands from '../../public/images/svg/netherlands.svg'
import lithuania from '../../public/images/svg/lithuania.svg'
import denmark from '../../public/images/svg/denmark.svg'
import finland from '../../public/images/svg/france.svg'
import singapore from '../../public/images/svg/singapore.svg'

import { Aleo, Libre_Baskerville, Trocchi} from 'next/font/google'

const libreBaskerville = Libre_Baskerville({
  weight: "700", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal",
  subsets: ["latin"],
});

const aleo  = Aleo({  
weight: '400', // if single weight, otherwise you use array like [400, 500, 700],
style: 'normal' ,
subsets: ['latin'],})

const trochhi  = Trocchi({  
    weight: '400', // if single weight, otherwise you use array like [400, 500, 700],
    style: 'normal' ,
    subsets: ['latin'],})

const GlobalCommunity = () => {
  return (
    <div className="py-10">
      <div className={` text-center font-bold md:text-[25px] text-[#083C82] pb-1 sm:text-xl  text-lg   ${libreBaskerville.className}`}>Join the global community!</div>
      <div className={` text-center md:text-[20px] text-[#413F4D] pb-5 md:px-48 sm:text-lg sm:px-24 px-7 ${aleo.className}`}>
        Be it North America, Europe or Asia, we are with you throughout until
        you get there and even further
      </div>
      <div className={`grid lg:grid-rows-3 lg:grid-cols-5 pb-5 gap-4 lg:px-20 md:px-20 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 px-4 ${trochhi.className}`} >
        <div>
            <Image src={canada} alt="canada" className="border-2 border-solid  divide-black rounded-xl" />
            <div className="text-center">canada</div>
        </div>
        <div>
            <Image src={uk} alt="canada" className="border-2 border-solid  divide-black rounded-xl" />
            <div className="text-center">UK</div>
        </div>
        <div>
            <Image src={aus} alt="canada" className="border-2 border-solid  divide-black rounded-xl" />
            <div className="text-center">Australia</div>
        </div>
        <div>
            <Image src={nz} alt="canada" className="border-2 border-solid  divide-black rounded-xl" />
            <div className="text-center">New Zealand</div>
        </div>
        <div>
            <Image src={ireland} alt="canada" className="border-2 border-solid  divide-black rounded-xl" />
            <div className="text-center">Ireland</div>
        </div>
        <div>
            <Image src={us} alt="canada" className="border-2 border-solid  divide-black rounded-xl" />
            <div className="text-center">US</div>
        </div>
        <div>
            <Image src={france} alt="canada" className="border-2 border-solid  divide-black rounded-xl" />
            <div className="text-center">France</div>
        </div>
        <div>
            <Image src={germany} alt="canada" className="border-2 border-solid  divide-black rounded-xl" />
            <div className="text-center">Germany</div>
        </div>
        <div>
            <Image src={sweden} alt="canada" className="border-2 border-solid  divide-black rounded-xl" />
            <div className="text-center">Sweden</div>
        </div>
        <div>
            <Image src={austria} alt="canada" className="border-2 border-solid  divide-black rounded-xl" />
            <div className="text-center">Austria</div>
        </div>
        <div>
            <Image src={netherlands} alt="canada" className="border-2 border-solid  divide-black rounded-xl" />
            <div className="text-center">Netherlands</div>
        </div>
        <div>
            <Image src={lithuania} alt="canada" className="border-2 border-solid  divide-black rounded-xl" />
            <div className="text-center">Lithuania</div>
        </div>
        <div>
            <Image src={denmark} alt="canada" className="border-2 border-solid  divide-black rounded-xl" />
            <div className="text-center">Denmark</div>
        </div>
        <div>
            <Image src={finland} alt="canada" className="border-2 border-solid  divide-black rounded-xl" />
            <div className="text-center">Finland</div>
        </div>
        <div>
            <Image src={singapore} alt="canada" className="border-2 border-solid  divide-black rounded-xl" />
            <div className="text-center">Singapore</div>
        </div>
        
     

      </div>
    </div>
  );
};

export default GlobalCommunity;

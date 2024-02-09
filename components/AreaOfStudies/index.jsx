import Image from "next/image";
import React from "react";
import agriculture from "../../public/images/AreaOfStudies/agriculture.jpg";
import foodandscience from '../../public/images/AreaOfStudies/foodandscience.jpg'
import EnvironmentClimate from '../../public/images/AreaOfStudies/Environment&Climate.jpg'
import disastermanagment from '../../public/images/AreaOfStudies/disastermanagment.jpg'
import ArchitectureConstruction from '../../public/images/AreaOfStudies/ArchitectureConstruction.jpg'
import art from '../../public/images/AreaOfStudies/art.jpg'
import designPhotography from '../../public/images/AreaOfStudies/designPhotography.jpg'
import it from '../../public/images/AreaOfStudies/it.jpg'
import journalism from '../../public/images/AreaOfStudies/journalism.jpg'
import automobiles from '../../public/images/AreaOfStudies/automobiles.jpg'
import eductn from '../../public/images/AreaOfStudies/eductn.jpg'
import bussinss from '../../public/images/AreaOfStudies/bussinss.jpg'
import finance from '../../public/images/AreaOfStudies/finance.jpg'
import health from '../../public/images/AreaOfStudies/health.jpg'
import animals from '../../public/images/AreaOfStudies/animals.jpg'
import socialandbehaviouralscience from '../../public/images/AreaOfStudies/socialandbehaviouralscience.jpg'
import travelfashion from '../../public/images/AreaOfStudies/travelfashion.jpg'
import aviation from '../../public/images/AreaOfStudies/aviation.jpg'
import pharmacy from '../../public/images/AreaOfStudies/pharmacy.jpg'
import engineering from '../../public/images/AreaOfStudies/engineering.jpg'
import { Libre_Baskerville } from "next/font/google";


const libreBaskerville = Libre_Baskerville({
  weight: "400", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal",
  subsets: ["latin"],
});

const AreaOfStudies = () => {
  return (
    <div className="py-10">
      <div className={`pb-10 ${libreBaskerville.className}`}>
        <div className=" text-[61px] text-[#867021] text-center bg-blue-50">
          Areas of Studies
        </div>
      </div>
      <div className={`grid grid-rows-5 grid-cols-4 px-20 gap-8  ${libreBaskerville.className} `}>

        <div className=" flex flex-col items-center text-center gap-3">
          <div>
            <Image src={agriculture} alt="agriculture" className="rounded-[50%] h-[200px] w-[200px]"/>
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[35px] leading-9 h-[80px] mt-3">Agriculture</div>
          <div className="text-xl">
            <ul>
              <li>Agricultural Science</li>
              <li>Farm Management</li>
              <li>Sustainable Agriculture</li>
              <li>Viticulture</li>
              <li>Horticulture</li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center text-center gap-3">
          <div >
            <Image src={foodandscience} alt="agriculture" className="rounded-[50%] h-[200px] w-[200px]"/>
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[35px] leading-9 h-[80px] mt-3">Food Science</div>
          <div className="text-xl">
            <ul>
              <li>Food Technology</li>
              <li>Food Science</li>
              <li>Food Science & Biotechnology</li>
              <li>Food Innovation</li>
              <li>Food Science & Agriculturee</li>
              <li>Food Production & Management</li>
              <li>Food Consumer Marketing</li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center text-center gap-3">
          <div >
            <Image src={EnvironmentClimate} alt="agriculture" className="rounded-[50%] h-[200px] w-[200px]"/>
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[35px] leading-9 h-[80px] mt-3">Environment & Climate</div>
          <div className="text-xl flex">
            <ul>
              <li>Environmental Science</li>
              <li>Environmental Engineering</li>
              <li>Wildlife Conservation</li>
              <li>Environmental Managemente</li>
              <li>Climate Change</li>
              <li> Water Conservation</li>
              <li>Ecology & Conservation</li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center text-center gap-3">
          <div >
            <Image src={disastermanagment} alt="agriculture" className="rounded-[50%] h-[200px] w-[200px]"/>
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[35px] leading-9 h-[80px] mt-3">Disaster Managemet</div>
          <div className="text-xl">
            <ul>
              <li>Fire & Safety Engineering</li>
              <li>Crisis & Disaster Management</li>
              <li>Emergency Management</li>
              <li>Earthquake Engineering</li>
              <li>Humanitarian Management</li>
              <li>Occupation Health & Safety</li>
              <li>Occupational Therapy</li>
            </ul>
          </div>
        </div>
{/* *********************************************** */}
        <div className=" flex flex-col items-center text-center gap-3">
          <div >
            <Image src={ArchitectureConstruction} alt="agriculture" className="rounded-[50%] h-[200px] w-[200px]"/>
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[35px] leading-9 h-[80px] mt-3">Architecture & Construction</div>
          <div className="text-xl">
            <ul>
              <li>Agricultural Science</li>
              <li>Farm Management</li>
              <li>Sustainable Agriculture</li>
              <li>Viticulture</li>
              <li>Horticulture</li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center text-center gap-3">
          <div >
            <Image src={art} alt="agriculture" className="rounded-[50%] h-[200px] w-[200px]"/>
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[35px] leading-9 h-[80px] mt-3">Art & Theatre</div>
          <div className="text-xl">
            <ul>
              <li>Agricultural Science</li>
              <li>Farm Management</li>
              <li>Sustainable Agriculture</li>
              <li>Viticulture</li>
              <li>Horticulture</li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center text-center gap-3">
          <div >
            <Image src={designPhotography} alt="agriculture" className="rounded-[50%] h-[200px] w-[200px]"/>
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[35px] leading-9 h-[80px] mt-3">Design, Video & Photography</div>
          <div className="text-xl">
            <ul>
              <li>Agricultural Science</li>
              <li>Farm Management</li>
              <li>Sustainable Agriculture</li>
              <li>Viticulture</li>
              <li>Horticulture</li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center text-center gap-3">
          <div >
            <Image src={it} alt="agriculture" className="rounded-[50%] h-[200px] w-[200px]"/>
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[35px] leading-9 h-[80px] mt-3">IT & ComputerScience</div>
          <div className="text-xl">
            <ul>
              <li>Agricultural Science</li>
              <li>Farm Management</li>
              <li>Sustainable Agriculture</li>
              <li>Viticulture</li>
              <li>Horticulture</li>
            </ul>
          </div>
        </div>

   

        <div className=" flex flex-col items-center gap-3 text-center">
          <div >
            <Image src={journalism} alt="agriculture" className="rounded-[50%] h-[200px] w-[200px]"/>
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[35px] leading-9 h-[80px] mt-3">Journalism</div>
          <div className="text-xl">
            <ul>
              <li>Agricultural Science</li>
              <li>Farm Management</li>
              <li>Sustainable Agriculture</li>
              <li>Viticulture</li>
              <li>Horticulture</li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-3 text-center">
          <div >
            <Image src={automobiles} alt="agriculture" className="rounded-[50%] h-[200px] w-[200px]"/>
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[35px] leading-9 h-[80px] mt-3">Automobile</div>
          <div className="text-xl">
            <ul>
              <li>Agricultural Science</li>
              <li>Farm Management</li>
              <li>Sustainable Agriculture</li>
              <li>Viticulture</li>
              <li>Horticulture</li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-3 text-center">
          <div >
            <Image src={eductn} alt="agriculture" className="rounded-[50%] h-[200px] w-[200px]"/>
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[35px] leading-9 h-[80px] mt-3">Education</div>
          <div className="text-xl" >
            <ul>
              <li>Agricultural Science</li>
              <li>Farm Management</li>
              <li>Sustainable Agriculture</li>
              <li>Viticulture</li>
              <li>Horticulture</li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-3 text-center">
          <div >
            <Image src={bussinss} alt="agriculture" className="rounded-[50%] h-[200px] w-[200px]"/>
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[35px] leading-9 h-[80px] mt-3">Business</div>
          <div className="text-xl">
            <ul>
              <li>Agricultural Science</li>
              <li>Farm Management</li>
              <li>Sustainable Agriculture</li>
              <li>Viticulture</li>
              <li>Horticulture</li>
            </ul>
          </div>
        </div>
{/* ***********************2**************** */}
        <div className=" flex flex-col items-center gap-3 text-center">
          <div >
            <Image src={finance} alt="agriculture" className="rounded-[50%] h-[200px] w-[200px]"/>
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[35px] leading-9 h-[80px] mt-3">Finance, Banking & Investment</div>
          <div className="text-xl">
            <ul>
              <li>Agricultural Science</li>
              <li>Farm Management</li>
              <li>Sustainable Agriculture</li>
              <li>Viticulture</li>
              <li>Horticulture</li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-3 text-center">
          <div >
            <Image src={health} alt="agriculture" className="rounded-[50%] h-[200px] w-[200px]"/>
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[35px] leading-9 h-[80px] mt-3">Health & Welbeing</div>
          <div className="text-xl">
            <ul>
              <li>Agricultural Science</li>
              <li>Farm Management</li>
              <li>Sustainable Agriculture</li>
              <li>Viticulture</li>
              <li>Horticulture</li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-3 text-center">
          <div >
            <Image src={animals} alt="agriculture" className="rounded-[50%] h-[200px] w-[200px]"/>
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[35px] leading-9 h-[80px] mt-3">Animals</div>
          <div className="text-xl">
            <ul>
              <li>Agricultural Science</li>
              <li>Farm Management</li>
              <li>Sustainable Agriculture</li>
              <li>Viticulture</li>
              <li>Horticulture</li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-3 text-center">
          <div >
            <Image src={socialandbehaviouralscience} alt="agriculture" className="rounded-[50%] h-[200px] w-[200px]"/>
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[35px] leading-9 h-[80px] mt-3">Social & Behavioral Science</div>
          <div className="text-xl">
            <ul>
              <li>Agricultural Science</li>
              <li>Farm Management</li>
              <li>Sustainable Agriculture</li>
              <li>Viticulture</li>
              <li>Horticulture</li>
            </ul>
          </div>
        </div>


        <div className=" flex flex-col items-center gap-3 text-center">
          <div >
            <Image src={travelfashion} alt="agriculture" className="rounded-[50%] h-[200px] w-[200px]"/>
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[35px] leading-9 h-[80px] mt-3">Travel, Tourism, Food, & Fashion</div>
          <div className="text-xl">
            <ul>
              <li>Agricultural Science</li>
              <li>Farm Management</li>
              <li>Sustainable Agriculture</li>
              <li>Viticulture</li>
              <li>Horticulture</li>
            </ul>
          </div>
        </div>


        <div className=" flex flex-col items-center gap-3 text-center">
          <div >
            <Image src={aviation} alt="agriculture" className="rounded-[50%] h-[200px] w-[200px]"/>
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[35px] leading-9 h-[80px] mt-3">Aviation</div>
          <div className="text-xl">
            <ul>
              <li>Agricultural Science</li>
              <li>Farm Management</li>
              <li>Sustainable Agriculture</li>
              <li>Viticulture</li>
              <li>Horticulture</li>
            </ul>
          </div>
        </div>


        <div className=" flex flex-col items-center gap-2 text-center">
          <div >
            <Image src={pharmacy} alt="agriculture" className="rounded-[50%] h-[200px] w-[200px]"/>
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[35px] leading-9 h-[80px] mt-3">Pharmacy</div>
          <div className="text-xl">
            <ul>
              <li>Agricultural Science</li>
              <li>Farm Management</li>
              <li>Sustainable Agriculture</li>
              <li>Viticulture</li>
              <li>Horticulture</li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-3 text-center">
          <div >
            <Image src={engineering} alt="agriculture" className="rounded-[50%] h-[200px] w-[200px]"/>
          </div>
          <div className="flex items-center justify-center text-[#156669] text-[35px] leading-9 h-[80px] mt-3">Engineering</div>
          <div className="text-xl">
            <ul>
              <li>Agricultural Science</li>
              <li>Farm Management</li>
              <li>Sustainable Agriculture</li>
              <li>Viticulture</li>
              <li>Horticulture</li>
            </ul>
          </div>
        </div>


        


      </div>
    </div>
  );
};

export default AreaOfStudies;

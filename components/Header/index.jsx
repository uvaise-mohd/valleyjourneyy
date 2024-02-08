
"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import logo from '../../public/images/valleyJourney.png'

const Header = () => {

  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);
  return (
    <nav className={`flex justify-between pt-2  items-center px-10 sticky top-0 z-20 ${isSticky ? 'bg-white' : ''}`}>
        <div>
            <Image src={logo}  alt='logo' height={120} width={120}/>
        </div>
        <ul className='flex gap-10' style={{fontSize:"21px"}}>
            <Link href={"#"}>Countries</Link>
            <Link href={"#"}>Courses</Link>
            <Link href={"#"}>IELTS</Link>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>News</Link>
            <Link href={"#"}>Accommodation</Link>  
        </ul>

        <button className=' text-2xl text-[#2A36AC] border-2 border-solid divide-black rounded-xl p-2 '>
            Talk To Us
        </button>
        
    </nav>
  )
}

export default Header
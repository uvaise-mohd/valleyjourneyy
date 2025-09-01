import Image from 'next/image'
import React from 'react'
import { Aleo, Libre_Baskerville } from "next/font/google";

const libreBaskerville = Libre_Baskerville({
    weight: "700",
    style: "normal",
    subsets: ["latin"],
});

const aleo = Aleo({
    weight: "700",
    style: "normal",
    subsets: ["latin"],
});

const WhyWhatIeltsCard = ({ title, description, image }) => {
    return (
        <>
            <div className='bg-[#e9f7dc] w-full rounded-3xl flex flex-col items-center justify-start text-center p-12 gap-6'>
                <Image src={image} className='w-36 h-auto' alt="Description" />
                <p className={`${libreBaskerville.className} text-[#083c82] text-2xl`}>
                    {title}
                </p>
                <p className={aleo.className}>
                    {description}
                </p>
                <a href="" className={`${libreBaskerville.className} text-lg text-white bg-[#2f5d37] px-20 py-4 rounded-full hover:bg-[#82c28d] transition duration-300`}>
                    Contact Us
                </a>
            </div>
        </>
    )
}

export default WhyWhatIeltsCard
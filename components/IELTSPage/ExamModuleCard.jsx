import React from 'react'
import { Lora } from "next/font/google";
import Image from 'next/image';
import tick from '@/public/icons/tick-mark.png'

const lora = Lora({
    weight: "500",
    style: "normal",
    subsets: ["latin"],
});

const ExamModuleCard = ({ title, description }) => {
    return (
        <>
            <div className="flex flex-col items-center justify-start p-6 gap-4">
                <Image src={tick} className='w-16 h-auto' alt="Description" />
                <p className={`${lora.className} text-[#413f4d] text-xl text-center underline`}>
                    {title}
                </p>
                <p className={`${lora.className} text-lg leading-[1.5] text-center text-[#413f4d]`}>
                    {description}
                </p>
            </div>
        </>
    )
}

export default ExamModuleCard
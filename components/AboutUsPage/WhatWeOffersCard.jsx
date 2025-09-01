import Image from "next/image"
import { Trocchi } from "next/font/google";

const trocchi = Trocchi({
    weight: "400",
    style: "normal",
    subsets: ["latin"],
});

const WhatWeOffersCard = ({ icon, title, description }) => {
    return (
        <>
            <div className="flex flex-col items-center justify-start rounded-[48px] px-4 py-12 gap-4 bg-[#2f5d37]">
                <Image className="h-36 w-auto" src={icon} alt={title} />
                <h3 className={`${trocchi.className} text-2xl font-bold text-white underline`}>
                    {title}
                </h3>
                <p className={`${trocchi.className} text-2xl text-center text-white`}>
                    {description}
                </p>
            </div>
        </>
    )
}

export default WhatWeOffersCard
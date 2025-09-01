import Icon1 from "@/public/icons/graduated.svg"
import Icon2 from "@/public/icons/phone.svg"
import { Aleo, Libre_Baskerville } from "next/font/google";
import WhatWeOffersCard from "../AboutUsPage/WhatWeOffersCard"

const libreBaskerville = Libre_Baskerville({
    weight: "700",
    style: "normal",
    subsets: ["latin"],
});

const aleo = Aleo({
    weight: "400",
    style: "normal",
    subsets: ["latin"],
});

const WhatWeOffersIelts = () => {

    const offers = [
        {
            icon: Icon1,
            title: "IELTS Regular Course",
            description: "A complete program covering all four modules with practice tests and feedback."
        },
        {
            icon: Icon1,
            title: "IELTS Crash Course",
            description: "Fast-track training for last-minute preparation and strategy building."
        },
        {
            icon: Icon1,
            title: "One-to-One Coaching",
            description: "Personalized sessions for students who need focused attention on specific areas."
        },
        {
            icon: Icon1,
            title: "IELTS Mock Test",
            description: "Real-time test environment with band score prediction and feedback."
        },
        {
            icon: Icon1,
            title: "Online IELTS Classes",
            description: "Flexible, interactive online sessions with recorded lectures for revision."
        },
        {
            icon: Icon2,
            title: "Contact Us To Join",
            description: "Personalized support for admissions, visas, and beyond ,connect with us to know more"
        }
    ];

    return (
        <>
            <div className="flex flex-col items-center justify-start p-32 bg-[#eaf8dd]">
                <h2 className={`${libreBaskerville.className} text-[36px] text-[#083c82] font-bold mb-8`}>
                    What We Offer
                </h2>
                <p className={`${aleo.className} text-[28px] text-center text-[#413f4d] mb-12`}>
                    Our IELTS training programs are carefully designed to suit every learner, combining expert guidance, practical strategies, and personalized support to help students master Listening, Reading, Writing, and Speaking with confidence and achieve their desired band score
                </p>
                <div className="grid grid-cols-3 gap-12">
                    {offers.map(offer => <WhatWeOffersCard {...offer} key={offer.title} />)}
                </div>
            </div>
        </>
    )
}

export default WhatWeOffersIelts

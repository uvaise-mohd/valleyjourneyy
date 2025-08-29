import WhatWeOffersCard from "./WhatWeOffersCard";
import Icon1 from "@/public/icons/icon1.svg"
import Icon2 from "@/public/icons/icon2.svg"
import Icon3 from "@/public/icons/icon3.svg"
import Icon4 from "@/public/icons/icon4.svg"
import Icon5 from "@/public/icons/icon5.svg"
import Icon6 from "@/public/icons/icon6.svg"
import { Aleo, Libre_Baskerville } from "next/font/google";

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

const WhatWeOffers = () => {

    const offers = [
        {
            icon: Icon1,
            title: "Personalized Training",
            description: "Tailored lessons based on each student’s strengths and weaknesses"
        },
        {
            icon: Icon2,
            title: "Flexible Learning Options",
            description: "Online and classroom sessions for individual and group learning."
        },
        {
            icon: Icon3,
            title: "Updated Study Materials",
            description: "Latest practice tests, mock exams, and resources aligned with IELTS standards"
        },
        {
            icon: Icon4,
            title: "Regular Assessments",
            description: "Continuous evaluation to track progress and improve weak areas"
        },
        {
            icon: Icon5,
            title: "Speaking Practice Sessions",
            description: "One-on-one mock interviews to build fluency and accuracy"
        },
        {
            icon: Icon6,
            title: "Test Strategies & Tips",
            description: "Proven methods to manage time effectively and maximize scores"
        }
    ];

    return (
        <>
            <div className="flex flex-col items-center justify-start p-32 bg-[#eaf8dd]">
                <h2 className={`${libreBaskerville.className} text-[36px] text-[#083c82] font-bold mb-8`}>
                    What We Offer
                </h2>
                <p className={`${aleo.className} text-[28px] text-center text-[#413f4d] mb-12`}>
                    We are a team of certified trainers and language experts with years of experience in preparing candidates for the IELTS exam. Our approach focuses on not just teaching English but building the confidence and strategies needed to excel in Listening, Reading, Writing, and Speaking.
                </p>
                <div className="grid grid-cols-3 gap-12">
                    {offers.map(offer => <WhatWeOffersCard {...offer} key={offer.title} />)}
                </div>
            </div>
        </>
    )
}

export default WhatWeOffers

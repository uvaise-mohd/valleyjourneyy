import Bg from '@/public/images/why-us-bg.png'
import { Aleo, Libre_Baskerville } from "next/font/google";
import WhyUsCard from '../AboutUsPage/WhyUsCard';

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

const WhyIelts = () => {

    const whyUs = [
        {
            text: "Certified and experienced IELTS trainers"
        },
        {
            text: "Customized study plans based on individual strengths and weaknesses."
        },
        {
            text: "Small batch sizes for personalized attention"
        },
        {
            text: "Updated study materials, mock tests, and practice sessions"
        },
        {
            text: "Special focus on Speaking & Writing – the most challenging modules"
        },
        {
            text: "Proven track record of high band achievers"
        }
    ];

    return (
        <>
            <div className="flex flex-col items-center justify-start px-64 py-32 bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${Bg.src})` }}>
                <h2 className={`${libreBaskerville.className} text-[26px] text-[#083c82] font-bold mb-8`}>
                    Why Choose Our IELTS Coaching
                </h2>
                <p className={`${aleo.className} text-[18px] text-center text-[#413f4d] mb-12 px-44`}>
                    We don’t just prepare you for the test — we prepare you for success. With proven strategies and personalized training, your dream score is within reach.
                </p>
                <div
                    className="text-white grid md:grid-cols-2 grid-cols-1 gap-1 md:px-28 px-4"
                >
                    {whyUs.map(item => <WhyUsCard key={item.text} text={item.text} />)}
                </div>
            </div>
        </>
    )
}

export default WhyIelts

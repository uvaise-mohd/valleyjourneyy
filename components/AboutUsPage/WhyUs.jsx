import Bg from '@/public/images/why-us-bg.png'
import WhyUsCard from './WhyUsCard';
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

const WhyUs = () => {

    const whyUs = [
        {
            text: "Certified and experienced IELTS trainers"
        },
        {
            text: "Small batch sizes for focused learning"
        },
        {
            text: "Affordable fees with flexible batch timings"
        },
        {
            text: "Support beyond the classroom "
        },
    ];

    return (
        <>
            <div className="flex flex-col items-center justify-start px-64 py-32 bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${Bg.src})` }}>
                <h2 className={`${libreBaskerville.className} text-[26px] text-[#083c82] font-bold mb-8`}>
                    Why Choose Us?
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

export default WhyUs

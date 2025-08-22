import Image from "next/image"
import Globe from "@/public/images/globe.png"
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

const HeroSection = () => {
    return (
        <>
            <div className="h-screen w-full flex items-center justify-between bg-[#f7fbff] p-32 mt-[-50px]">
                <div className="text-start p-8 w-[42%]">
                    <h1 className={`${libreBaskerville.className} text-4xl font-bold mb-4 text-[#083c82]`}>About Us</h1>
                    <p className={`${aleo.className} text-lg text-gray-700`}>
                        At Valley Journey, we are committed to helping students and professionals achieve their dream IELTS scores and open doors to international opportunities in education, career, and migration.
                    </p>
                </div>
                <div>
                    <Image
                        src={Globe}
                        alt="About Us Hero"
                        className="w-auto h-96 scale-125 -translate-x-8"
                    />
                </div>
            </div>
        </>
    )
}

export default HeroSection

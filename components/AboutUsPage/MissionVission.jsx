import Image from 'next/image'
import Mission from "@/public/images/mission.png"
import Vision from "@/public/images/vision.png"
import { Lora } from "next/font/google"

export const lora = Lora({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
})

const MissionVission = () => {
    return (
        <>
            <div className="bg-[#f6fafa] flex flex-col items-center justify-start w-full gap-32 py-20">
                <div className="flex w-full items-center justify-center gap-8">
                    <Image src={Mission} alt="mission" className='w-[30%] h-auto' />
                    <div className="flex flex-col items-center text-center justify-start gap-4 w-1/2">
                        <h3 className="text-6xl text-[#243969] font-bold">
                            Our mission
                        </h3>
                        <p className={`${lora.className} text-3xl text-gray-600`}>
                            To equip every student with the language skills, confidence, and proven strategies required to achieve their target IELTS band score, while fostering a supportive learning environment that builds fluency, enhances test-taking techniques, and prepares them for real-world academic and professional success abroad
                        </p>
                    </div>
                </div>
                <div className="flex w-full items-center justify-center gap-8">
                    <div className="flex flex-col items-center text-center justify-start gap-4 w-1/2">
                        <h3 className="text-6xl text-[#243969] font-bold">
                            Our vision
                        </h3>
                        <p className={`${lora.className} text-3xl text-gray-600`}>
                            To be a trusted partner for individuals aspiring to study, work, or settle abroad by delivering world-class IELTS coaching that not only transforms dreams into reality but also empowers students with lifelong communication skills, global confidence, and the ability to thrive in any international environment
                        </p>
                    </div>
                    <Image src={Vision} alt="vision" className='w-[30%] h-auto' />
                </div>
            </div>
        </>
    )
}

export default MissionVission
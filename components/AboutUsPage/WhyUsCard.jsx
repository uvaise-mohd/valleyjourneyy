"use client"
import { motion } from "framer-motion";
import { Libre_Baskerville } from "next/font/google";

const libreBaskerville = Libre_Baskerville({
    weight: "400",
    style: "normal",
    subsets: ["latin"],
});

const WhyUsCard = ({ text }) => {

    const variant = {
        visible: { scale: 1 },
        hidden: { scale: 0 },
        transition: { duration: 5.5 },
    };

    return (
        <>
            <motion.div variants={variant} initial="hidden"
                whileInView="visible" className={`${libreBaskerville.className} flex items-center justify-center text-center text-xl bg-[#243969] border-2 border-solid rounded-[90px] px-8 py-6`}>
                {text}
            </motion.div>
        </>
    )
}

export default WhyUsCard
import React from 'react'
import WhyWhatIeltsCard from './WhyWhatIeltsCard'
import badge from '@/public/icons/badge.svg'
import scholars from '@/public/icons/scholars.svg'

const WhyWhatIelts = () => {

    const data = [
        {
            id: 1,
            title: "What is IELTS?",
            description: "IELTS is a globally recognized English language proficiency test, accepted by 10,000+ institutions in over 140 countries. It assesses your ability in Listening, Reading, Writing, and Speaking, and is often a requirement for university admissions, work visas, and migration.",
            image: badge,
        },
        {
            id: 2,
            title: "Why IELTS Matters?",
            description: "IELTS is one of the world’s most trusted English language tests, recognized by more than 10,000 institutions across 140+ countries. It evaluates your skills in Listening, Reading, Writing, and Speaking, and is a key requirement for university admissions, international employment, and immigration processes.",
            image: scholars,
        },
    ];

    return (
        <>
            <div className="flex flex-col md:flex-row w-full md:items-center md:justify-center p-8 md:p-48 gap-8 md:gap-20">
                {data.map(item => (
                    <WhyWhatIeltsCard key={item.id} title={item.title} description={item.description} image={item.image} />
                ))}
            </div>
        </>
    )
}

export default WhyWhatIelts
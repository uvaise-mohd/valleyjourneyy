import React from 'react'
import { Aleo, Libre_Baskerville } from "next/font/google";
import ExamModuleCard from './ExamModuleCard';

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

const ExamModule = () => {

    const examModules = [
        {
            title: "Listening",
            description: "Strategies to understand accents and manage time effectively"
        },
        {
            title: "Reading",
            description: "Techniques to scan, skim, and identify key details quickly"
        },
        {
            title: "Writing",
            description: "Task 1 (Reports/Graphs) & Task 2 (Essay Writing) with structured templates"
        },
        {
            title: "Speaking",
            description: "One-on-one mock interviews to improve fluency and confidence."
        }
    ];

    return (
        <>
            <div className="flex flex-col items-center justify-start bg-[#eaf8dd] p-32 gap-6">
                <h2 className={`${libreBaskerville.className} text-[36px] text-[#083c82] font-bold`}>
                    Exam Modules We Cover
                </h2>
                <p className={`${aleo.className} text-2xl leading-[2] text-center text-[#413f4d]`}>
                    Our IELTS training covers all four modules of the exam — Listening, Reading, Writing, and Speaking — with focused lessons, practice tests, and proven strategies. We ensure that students not only understand the exam format but also build the skills and confidence needed to perform at their best in each section.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-8">
                    {examModules.map((module, index) => (
                        <ExamModuleCard key={index} title={module.title} description={module.description} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ExamModule
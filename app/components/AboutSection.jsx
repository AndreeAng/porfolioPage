"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Java</li>
                <li>Python</li>
                <li>JavaScript</li>
                <li>Node</li>
                <li>C</li>
                <li>SQL</li>
                <li>MQL</li>
                <li>Assemlby: ARM Cortex</li>
                <li>Scheme</li>
                <li>React</li>
                <li>HTML and CSS</li>
                <li>Proficient in English (C2)</li>
                <li>Intermediate French (B1)</li>
                <li>Elementary Mandarin (A2)</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2 font-bold'>
                <li><h1>The American International School of Bolivia</h1></li>
                    <ul className='list-disc pl-2 font-normal'>
                        <li>Triple Diploma:</li>
                        <ul className='list-disc pl-2 font-normal'>
                            Bolivian Diploma <br />
                            American Diploma <br />
                            Bilingual International Baccalaureate
                        </ul>
                    </ul>
                <li>Marquette University</li>
                    <ul className='list-disc pl-2 font-normal'>
                        Milwaukee, Wisconsin, USA <br />
                        Bachelor of Science in Computer Science
                    </ul>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2 font-bold'>
                <li>Experto en Ciencia de Datos con Python</li>
                <ul className='list-disc pl-2 font-normal'>
                        Universidad Privada Boliviana <br />
                        Cochabamba, BO
                    </ul>
            </ul>
        )
    },
]

const AboutSection = () => {

    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src="" width={500} height={500}/>
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>
                        About Me
                    </h2>
                    <p className='text-base lg:text-lg'>
                        Exercitation eiusmod sit cillum ullamco. 
                        Est elit voluptate minim occaecat officia ad dolore id mollit est. 
                        Pariatur labore ullamco nisi deserunt officia magna culpa exercitation laboris quis ipsum velit.
                        Irure et non do tempor tempor. 
                        Proident esse eiusmod ea Lorem sunt ex eu id veniam nulla. 
                        Irure cupidatat duis et nisi do do do laborum non pariatur. 
                        Aliquip labore exercitation ex magna. 
                        Laboris amet ad velit ut labore et esse sit Lorem culpa ullamco pariatur. 
                        Culpa qui exercitation quis fugiat sunt dolore sint amet exercitation aute et cupidatat quis.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton 
                            selectTab={() => handleTabChange("skills")} 
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("education")} 
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("certifications")} 
                            active={tab === "certifications"}
                        >
                            {" "}
                            Certifications{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
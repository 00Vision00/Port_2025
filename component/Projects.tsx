import React from 'react'
import { projects } from './utils/data';

interface ModelProps {
    setActiveMenu: (index: number | null) => void;
}

export default function Projects({ setActiveMenu }: ModelProps) {
    return (
        <div className='relative mix-blend-difference z-10 text-white h-screen w-full'>
            <ul onMouseLeave={() => setActiveMenu(null)} className='border-b'>
                {
                    projects.map((project, i) => (
                        <li
                            onMouseOver={() => setActiveMenu(i)}
                            key={project.title}
                            className='text-[4vw] p-5 border-t'
                        >
                            <p>{project.title}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

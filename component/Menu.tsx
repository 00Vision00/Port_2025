'use client'

import { useState } from "react";
import HoverImage from "./HoverImage";


const menuList = [
    { title: 'Maria', image: '/sample01.jpg' },
    { title: 'Maria', image: '/Fluids.jpeg' },
    { title: 'Maria', image: '/sample01.jpg' }
]

export default function Menu() {

    const [hoverImage, sethoverImage] = useState<string | null>(null);
    return (
        <nav className="flexed">
            {menuList.map((item, index) => (
                <div
                    key={index}
                    onMouseMove={() => sethoverImage((item.image))}
                    onMouseLeave={() => sethoverImage((null))}
                >
                    <span>{item.title}</span>
                </div>
            ))}
            <HoverImage image={hoverImage} />
        </nav>
    );
}
'use client'

import Base from "@/component/Hover/Base";
import Projects from "@/component/Hover/Projects";
import { useState } from 'react'

export default function Page() {

    const [activeMenu, setActiveMenu] = useState<number | null>(null);

    return (
        <div>

            <Base activeMenu={activeMenu} />
            <Projects setActiveMenu={setActiveMenu} />

        </div>
    );
}
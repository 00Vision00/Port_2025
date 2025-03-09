'use client'

import Base from "@/component/Hover/Base";
import Head from "@/component/Head";
import Projects from "@/component/Hover/Projects";
import { useState } from 'react'

export default function Page() {

    const [activeMenu, setActiveMenu] = useState<number | null>(null);

    return (
        <div>
            <Head />
            {/* <Button_index /> */}
            {/* <Menu /> */}
            {/* <Scene /> */}
            <Base activeMenu={activeMenu} />
            <Projects setActiveMenu={setActiveMenu} />
            
        </div>
    );
}
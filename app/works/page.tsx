'use client'

import Base from "@/component/Base";
import Button_index from "@/component/Button_index";
import Head from "@/component/Head";
import Menu from "@/component/Menu";
import Projects from "@/component/Projects";
import Scene from "@/component/Scene";
import { useState } from 'react'

export default function page() {

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
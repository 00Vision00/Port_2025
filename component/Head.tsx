"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Button_index from "./Button_index";

export default function Head() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const links = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/works", label: "Works" },
    ];

    return (
        // <div className="relative h-screen flex items-center justify-center bg-gray-900">
        //     {/* メニュー開閉ボタン */}
        //     <button
        //         onClick={() => setMenuOpen((prev) => !prev)}
        //         className="absolute top-4 right-4 p-3 bg-gray-700 text-white rounded-full shadow-lg w-12 h-12 flex items-center justify-center"
        //     >
        //         {isMenuOpen ? (
        //             <Image src="/10572685.png" alt="Close Menu" width={24} height={24} />
        //         ) : (
        //             <Image src="/10635349.png" alt="Open Menu" width={24} height={24} />
        //         )}
        //     </button>

        //     {/* メニュー背景 & リスト */}
        //     <AnimatePresence>
        //         {isMenuOpen && (
        //             <motion.div
        //                 className="fixed inset-0 bg-gray-800 flex items-center justify-center"
        //                 initial={{ opacity: 0 }}
        //                 animate={{ opacity: 1 }}
        //                 exit={{ opacity: 0, transition: { duration: 0.2 } }}
        //             >
        //                 <ul className="space-y-6 text-center">
        //                     {links.map((link, index) => (
        //                         <motion.li
        //                             key={link.href}
        //                             initial={{ y: 50, opacity: 0 }}
        //                             animate={{ y: 0, opacity: 1 }}
        //                             exit={{ y: -50, opacity: 0 }}
        //                             transition={{
        //                                 duration: 0.4,
        //                                 delay: index * 0.1,
        //                             }}
        //                         >
        //                             <Link href={link.href} className="text-white text-3xl font-semibold hover:underline">
        //                                 {link.label}
        //                             </Link>
        //                         </motion.li>
        //                     ))}
        //                 </ul>
        //             </motion.div>
        //         )}
        //     </AnimatePresence>
        // </div>
        <Button_index />
    );
}

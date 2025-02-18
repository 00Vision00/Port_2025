'use client';

import { motion } from 'framer-motion'

export default function Contact() {
    return (
        <></>
        // <motion.div
        //     initial={{ opacity: '0', y: '2vw' }}
        //     animate={{ opacity: '1', y: '0' }}
        //     transition={{ duration: '2' }}
        //     style={footer}>
        //     <div>

        //         <footer>
        //             <motion.h4
        //                 initial={{ opacity: '0', y: '15px' }}
        //                 animate={{ opacity: '1', y: '0' }}
        //                 transition={{ duration: '2.2' }}
        //             >お問合せ</motion.h4>
        //             <motion.p
        //                 initial={{ opacity: '0', y: '15px' }}
        //                 animate={{ opacity: '1', y: '0' }}
        //                 transition={{ duration: '2.2' }}
        //             >ホームページ / PR支援など様々なご依頼お待ちしております。</motion.p>
        //         </footer>

        //     </div>
        // </motion.div>
    );
}

const footer: React.CSSProperties = {
    textAlign: 'center',
    backgroundColor: 'rgb(191 194 203)',
    height: '30vh',
    width: '100vw'
}
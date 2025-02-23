'use client';
import Head from '@/component/Head';
import { motion } from 'framer-motion';

export default function page() {
    return (
        <div>
            <Head />
            <motion.h2 style={about_h2}
                initial={{ opacity: 0, y: '30px' }}
                animate={{ opacity: 1, y: '0px' }}
                transition={{ duration: 1.7, delay: 0.03 }}
            >
                WHATWEDO
            </motion.h2>

            <section style={about_content}>

                <div style={about_a}>
                    <motion.h3
                        initial={{ opacity: 0, y: '30px' }}
                        animate={{ opacity: 1, y: '0px' }}
                        transition={{ duration: 1.4 }}
                    >
                        NAME
                        <span style={about_a_0}></span>
                    </motion.h3>

                    <ul style={about_a_1}>
                        {/* <motion.li
                            initial={{ opacity: 0, y: '30px' }}
                            animate={{ opacity: 1, y: '0px' }}
                            transition={{ duration: 1.8 }}
                            className='about_a_1'
                        >
                            Kawatani Kenta <br />
                            (Sales)
                        </motion.li> */}
                        <motion.li
                            initial={{ opacity: 0, y: '30px' }}
                            animate={{ opacity: 1, y: '0px' }}
                            transition={{ duration: 1.8 }}
                            className='about_a_1'
                        >
                            Yamamoto Daisuke     <br />
                            (山本大介)                </motion.li>

                    </ul>
                </div>

                <div style={about_a}>
                    <motion.h3
                        initial={{ opacity: 0, y: '30px' }}
                        animate={{ opacity: 1, y: '0px' }}
                        transition={{ duration: 1.4 }}
                    >
                        SKILL
                        <span style={about_a_0}></span>
                    </motion.h3>

                    <ul style={about_a_1}>
                        <motion.li
                            initial={{ opacity: 0, y: '30px' }}
                            animate={{ opacity: 1, y: '0px' }}
                            transition={{ duration: 1.8 }}
                            className='about_a_1'
                        >
                            Photoshop / Illustrator / XD
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, y: '30px' }}
                            animate={{ opacity: 1, y: '0px' }}
                            transition={{ duration: 1.8 }}
                            className='about_a_1'
                        >
                            HTML/css/JavaScript/React.js/Next.js/Typescript/Node.js/Git.hub/vercel
                        </motion.li>
                    </ul>
                </div>
                <div style={about_a}>
                    <motion.h3
                        initial={{ opacity: 0, y: '30px' }}
                        animate={{ opacity: 1, y: '0px' }}
                        transition={{ duration: 1.4 }}
                    >
                        DESIGN
                        <span style={about_a_0}></span>
                    </motion.h3>

                    <ul style={about_a_1}>
                        <motion.li
                            initial={{ opacity: 0, y: '30px' }}
                            animate={{ opacity: 1, y: '0px' }}
                            transition={{ duration: 1.8 }}
                            className='about_a_1'
                        >
                            UX/UIデザイン
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, y: '30px' }}
                            animate={{ opacity: 1, y: '0px' }}
                            transition={{ duration: 1.8 }}
                            className='about_a_1'
                        >
                            アニメーション
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, y: '30px' }}
                            animate={{ opacity: 1, y: '0px' }}
                            transition={{ duration: 1.8 }}
                            className='about_a_1'
                        >
                            グラフィックデザイン
                        </motion.li>
                    </ul>
                </div>

                <div style={about_b}>
                    <motion.h3
                        initial={{ opacity: 0, y: '30px' }}
                        animate={{ opacity: 1, y: '0px' }}
                        transition={{ duration: 1.4 }}
                    >
                        DEVELOP
                    </motion.h3>

                    <ul style={about_b_1}>
                        <motion.li
                            initial={{ opacity: 0, y: '30px' }}
                            animate={{ opacity: 1, y: '0px' }}
                            transition={{ duration: 1.8 }}
                            className='about_a_1'
                        >
                            フロントエンド開発
                        </motion.li>
                        {/* <motion.li
                            initial={{ opacity: 0, y: '30px' }}
                            animate={{ opacity: 1, y: '0px' }}
                            transition={{ duration: 1.8 }}
                            className='about_a_1'
                        >
                            webGL
                        </motion.li> */}

                        <motion.li
                            initial={{ opacity: 0, y: '30px' }}
                            animate={{ opacity: 1, y: '0px' }}
                            transition={{ duration: 1.8 }}
                            className='about_a_1'
                        >
                            WordPress
                        </motion.li>
                    </ul>
                </div>

            </section>
        </div>
    );
}

const about_h2: React.CSSProperties = {
    textAlign: 'center',
    fontSize: '15rem',
    fontFamily: 'math',
    fontWeight: 'bold'
};

const about_content: React.CSSProperties = {
    textAlign: 'center',
    fontSize: '3rem',
    fontFamily: 'math',
    fontWeight: 'bold'
};

const about_a: React.CSSProperties = {
    textAlign: 'center',
    fontSize: '1.25rem',
    fontFamily: 'math',
    fontWeight: 'bold',
    display: 'flex',
    margin: '0 auto',
    width: '50%',
    marginTop: '5rem'
};

const about_a_0: React.CSSProperties = {};

const about_a_1: React.CSSProperties = {
    textAlign: 'left',
    fontSize: '1.05rem',
    fontFamily: 'math',
    margin: '0 auto',
    width: '470px'
};

const about_b: React.CSSProperties = {
    textAlign: 'center',
    fontSize: '1.25rem',
    fontFamily: 'math',
    fontWeight: 'bold',
    display: 'flex',
    margin: '0 auto',
    width: '50%',
    marginTop: '5rem',
    marginBottom: '5rem'
};

const about_b_1: React.CSSProperties = {
    textAlign: 'left',
    fontSize: '1.05rem',
    fontFamily: 'math',
    margin: '0 auto',
    width: '470px'
};

'use client'

import { motion } from 'framer-motion';
import Base from '@/component/Hover/Base';
import Projects from '@/component/Hover/Projects';
import { useState } from 'react';
import TextParalax from '@/component/TextParalax'
import About from '@/component/About'
import Mask from '@/component/Mask'


export default function Home() {
  const letters = ['2', '0', '2', '5'];
  const [activeMenu, setActiveMenu] = useState<number | null>(null)

  return (
    <div>
      <main style={mainStyle}>
        {/* <Head /> */}
        <div style={h1Wrapper} className='h1'>
          {letters.map((letter, index) => (
            <motion.p
              key={index}
              style={letterStyle}
              initial={{ opacity: 0, y: '10px' }}
              animate={{ opacity: 1, y: '0px' }}
              transition={{
                duration: 1.5,
                delay: index * 0.36, // 各文字に遅延を追加
              }}
            >
              {letter}
            </motion.p>
          ))}
        </div>

        <Mask />

        <motion.div
          initial={{ opacity: 0, y: '1px' }}
          animate={{ opacity: 1, y: '0px' }}
          transition={{
            duration: 1.5,
            delay: 0.36,
          }}
        >
          <TextParalax />
        </motion.div>
        <Base activeMenu={activeMenu} />
        <Projects setActiveMenu={setActiveMenu} />

        <About />

        <Base activeMenu={activeMenu} />
        <Projects setActiveMenu={setActiveMenu} />
      </main>
    </div>
  );
}

// スタイリング
const mainStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  // height: '100vh', // ビューポート全体の高さ
  margin: 0,
  padding: 0,
  flexDirection: 'column',
  overflowX: 'hidden'
};

const h1Wrapper: React.CSSProperties = {
  display: 'flex',
  gap: '0.2em', // 文字間のスペース
  fontFamily: "Lilita One",
  fontWeight: '400',
  fontStyle: 'normal',
  marginBottom: '15vw',
  marginTop: '5vw'
};

const letterStyle: React.CSSProperties = {
  textAlign: 'center',
  fontSize: '45vw',
  fontWeight: 'bold',
  margin: 0,
  lineHeight: 1,
};

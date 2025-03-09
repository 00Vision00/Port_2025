'use client'

import { motion } from 'framer-motion';
import Base from '@/component/Hover/Base';
import Projects from '@/component/Hover/Projects';
import { useState } from 'react';
import TextParalax from '@/component/TextParalax'
import About from '@/component/About'
import Mask from '@/component/Mask'
import Contact from '@/component/Contact'
import Cursor from '@/component/Cursor'

export default function Home() {
  const letters = ['S', 'E', 'I', 'K', 'E', 'I', '.co'];
  const [activeMenu, setActiveMenu] = useState<number | null>(null)
  const [isActive, setIsActive] = useState(false);


  return (
    <div>
      <Cursor isActive={isActive} />
      <main style={mainStyle}>
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
        <Contact />
      </main>
    </div>
  );
}

// スタイリング
const mainStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 0,
  padding: 0,
  flexDirection: 'column',
  overflowX: 'hidden'
};

const h1Wrapper: React.CSSProperties = {
  display: 'flex',
  gap: '0.2em', // 文字間のスペース
  // fontFamily: "Lilita One",
  fontWeight: '400',
  fontStyle: 'normal',
  marginBottom: '5vw',
  marginTop: '5vw',
  width: '80%',
};

const letterStyle: React.CSSProperties = {
  textAlign: 'left',
  fontSize: '2rem',
  fontWeight: 'bold',
  margin: 0,
  lineHeight: 1,
};

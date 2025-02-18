'use client'

import { motion } from 'framer-motion';
import Contact from "@/component/Contact";
import Head from "@/component/Head";

export default function Home() {
  const letters = ['2', '0', '2', '5', 'Y', 'D'];

  return (
    <div>
      <main style={mainStyle}>
        <Head />
        <div style={h1Wrapper}>
          {letters.map((letter, index) => (
            <motion.span
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
            </motion.span>
          ))}
        </div>
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
  height: '100vh', // ビューポート全体の高さ
  margin: 0,
  padding: 0,
  flexDirection: 'column',
};

const h1Wrapper: React.CSSProperties = {
  display: 'flex',
  gap: '0.2em', // 文字間のスペース
};

const letterStyle: React.CSSProperties = {
  textAlign: 'center',
  fontSize: '15rem',
  fontFamily: 'math',
  fontWeight: 'bold',
  margin: 0,
  lineHeight: 1,
};

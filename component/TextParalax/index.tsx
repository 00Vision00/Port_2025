'use client'

import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import Lenis from 'lenis';
import { useEffect, useRef } from 'react';

// ✅ 画像パスを修正（`public` フォルダの画像はルートパスで指定）
const Picture1 = '/1.webp';
const Picture2 = '/1.webp';
const Picture3 = '/1.webp';

export default function Home() {
    const container = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    });

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        const animationFrame = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <main className="overflow-hidden">
            <div className='h-[100vh]' />
            <div ref={container}>
                <Slide src={Picture1} direction={'left'} left="-40%" progress={scrollYProgress} />
                <Slide src={Picture2} direction={'right'} left="-25%" progress={scrollYProgress} />
                <Slide src={Picture3} direction={'left'} left="-35%" progress={scrollYProgress} />
                <Slide src={Picture3} direction={'right'} left="-5%" progress={scrollYProgress} />
            </div>
            <div className='h-[100vh]' />
        </main>
    );
}

interface SlideProps {
    src: string;
    direction: 'left' | 'right';
    left: string;
    progress: any;
}

const Slide: React.FC<SlideProps> = ({ src, direction, left, progress }) => {
    const translateX = useTransform(progress, [0, 1], [150 * (direction === 'left' ? -1 : 1), -150 * (direction === 'left' ? -1 : 1)]);

    return (
        <motion.div style={{ x: translateX, left }} className="relative flex whitespace-nowrap">
            <Phrase src={src} />
            <Phrase src={src} />
            <Phrase src={src} />
        </motion.div>
    );
}

interface PhraseProps {
    src: string;
}

const Phrase: React.FC<PhraseProps> = ({ src }) => {
    return (
        <div className="px-5 flex gap-5 items-center">
            <p className="text-[7.5vw] font-['Lilita_One']">Hello World</p> {/* 'Lilita One' フォントを指定 */}
            <p className="text-[7.5vw] font-['Lilita_One']">Front-End</p> {/* 'Lilita One' フォントを指定 */}
            <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
                <Image
                    src={src}
                    alt="image"
                    width={200}
                    height={100}
                    className="object-cover"
                />
            </span>
        </div>
    );
}

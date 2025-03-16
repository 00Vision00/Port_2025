'use client'

import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import Lenis from 'lenis';
import { useEffect, useRef } from 'react';

const Picture1 = '/1.webp';
const Picture2 = '/animal01.jpeg';
const Picture3 = '/animal02.jpeg';
const Picture4 = '/008.jpg';

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
                <Slide src={Picture2} direction={'right'} left="-95%" progress={scrollYProgress} />
                <Slide src={Picture3} direction={'left'} left="-35%" progress={scrollYProgress} />
                <Slide src={Picture4} direction={'right'} left="-250%" progress={scrollYProgress} />
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
    // X軸の移動アニメーション
    const translateX = useTransform(progress, [0, 1], [150 * (direction === 'left' ? -1 : 1), -150 * (direction === 'left' ? -1 : 1)]);

    // // フェードイン（透明度）
    // const opacity = useTransform(progress, [0, 0.3], [0, 1]);

    // // ふわっと登場する拡大アニメーション
    // const scale = useTransform(progress, [0, 0.3], [0.8, 1]);

    return (
        <motion.div
            style={{ x: translateX, left }}
            className="relative flex whitespace-nowrap"
        >
            <Phrase src={src} />
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
            <p className="text-[7.5vw] font-['Lilita_One']">Hello</p>
            <p className="text-[7.5vw] font-['Lilita_One']">Front-End</p>
            <p className="text-[7.5vw] font-['Lilita_One']">World</p>
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

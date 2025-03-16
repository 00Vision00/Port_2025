'use client'
import styles from './pages.module.css'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const textGroups = [
    ["It is a long established fact", "that a reader will be distracted", "by the readable content of a page", "when looking at its layout."],
    ["The quick brown fox", "jumps over the lazy dog", "and runs away", "into the forest."],
    ["A journey of a thousand miles", "begins with a single step", "take that step today", "and keep moving forward."],
    ["Innovation distinguishes", "between a leader", "and a follower", "be bold, take risks."]
]

export default function Home() {
    return (
        <div className={styles.container}>
            {textGroups.map((phrases, index) => (
                <MaskText key={index} phrases={phrases} />
            ))}
        </div>
    )
}

export function MaskText({ phrases }: { phrases: string[] }) {
    const { ref, inView } = useInView({
        threshold: 0.2, // 画面の 30% で発火
        triggerOnce: false
    });

    const parentVariants = {
        initial: {},
        enter: {
            transition: {
                staggerChildren: 0.1, // 子要素ごとに遅延
            }
        }
    }

    const textVariants = {
        initial: { y: "1em", opacity: 0 }, // テキスト高さ分の移動
        enter:
            { y: "0em", opacity: 1, transition: { duration: 0.75, ease: [0.33, 1, 0.98, 1] } }
    }

    return (
        <motion.div ref={ref} className={styles.body} variants={parentVariants} initial="initial"
            animate={inView ? "enter" : ""}>
            {phrases.map((phrase, index) => (
                <div key={index} className={styles.lineMask}>
                    <motion.p variants={textVariants}>{phrase}</motion.p>
                </div>
            ))}
        </motion.div>
    )
}

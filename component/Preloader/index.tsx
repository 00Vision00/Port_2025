'use client'
import { useRef } from 'react';
import styles from './page.module.css'

export default function Home() {

    const container = useRef(null);
    const stickyMask = useRef(null);

    return (
        <main className={styles.main}>
            <div ref={container} className={styles.container}>
                <div ref={stickyMask} className={styles.stickyMask}>
                    <video autoPlay muted loop>
                        <source src="/medias/nature.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </main>
    )
}
import { motion } from 'framer-motion'
import styles from "./pages.module.css"; // CSS モジュールのインポート

const text = ['Contact']

export default function Home() {

    return (
        <div className={styles.body}>
            {text.map((letters, index) => (
                <motion.p
                    key={index}
                    className='text_p'
                >
                    {letters}
                </motion.p>
            ))}
        </div>
    );
}
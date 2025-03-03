
"use client"; // Next.js の App Router でクライアントコンポーネントとして明示する

import styles from "./pages.module.css"; // CSS モジュールのインポート
import { motion } from "framer-motion"; // framer-motion のアニメーション用コンポーネントをインポート
import { useInView } from "react-intersection-observer"; // 要素がビューポート内に入ったかを検出するフック

const phrase = ["初めましてやまもとだいすけと申します。"]; // 表示するテキストの配列
const Secondphrase = ["普段webサイト制作を行っております。"]; // 表示するテキストの配列
const Thrdphrase = ["Next.jsベースのSSRの特性を活かしたサイト制作が好きです。"]; // 表示するテキストの配列

export default function Home() {
    return (
        <>
            <MaskText /> {/* 1つ目の MaskText コンポーネント */}
            <SecoundMaskText /> {/* 2つ目の MaskText コンポーネント */}
            <ThrddMaskText /> {/* 3つ目の MaskText コンポーネント */}
        </>
    );
}

export function MaskText() {
    // 要素がビューポート内に 75% 以上入ったら `inView` が true になる
    const { ref, inView } = useInView({
        threshold: 0.75, // 75% の範囲が表示されたらトリガー
        triggerOnce: true, // 1回のみ実行し、スクロールしてもリセットしない
    });

    const animation = {
        initial: { y: "100%" }, // 初期状態: Y軸方向に100%（画面外下）に配置
        enter: (i: number) => ({
            y: "0", // Y軸方向に 0 に移動（通常の位置）
            transition: {
                duration: 0.75, // アニメーション時間 0.75秒
                ease: [0.33, 1, 0.68, 1], // スムーズなイージングカーブ
                delay: 0.055 * i, // 各テキストが順番に表示されるように遅延を設定
            },
        }),
    };

    return (
        <motion.div ref={ref} className={styles.body}> {/* ref を設定し、この要素の表示状態を監視 */}
            {phrase.map((text, index) => ( // phrase 配列をループし、テキストを表示
                <div key={index} className={styles.lineMask}> {/* 各テキストの親コンテナ */}
                    <motion.p
                        custom={index} // アニメーションの delay に index を利用するため
                        variants={animation} // アニメーション設定を適用
                        initial="initial" // 初期状態を "initial" に設定（y: "100%"）
                        animate={inView ? "enter" : "initial"} // ビューポートに入ったら "enter" にアニメーション
                    >
                        {text} {/* テキストの表示 */}
                    </motion.p>
                </div>
            ))}
        </motion.div>
    );
}


export function SecoundMaskText() {
    // 要素がビューポート内に 75% 以上入ったら `inView` が true になる
    const { ref, inView } = useInView({
        threshold: 0.65, // 75% の範囲が表示されたらトリガー
        triggerOnce: true, // 1回のみ実行し、スクロールしてもリセットしない
    });

    const animation = {
        initial: { y: "100%" }, // 初期状態: Y軸方向に100%（画面外下）に配置
        enter: (i: number) => ({
            y: "0", // Y軸方向に 0 に移動（通常の位置）
            transition: {
                duration: 0.75, // アニメーション時間 0.75秒
                ease: [0.33, 1, 0.68, 1], // スムーズなイージングカーブ
                delay: 0.055 * i, // 各テキストが順番に表示されるように遅延を設定
            },
        }),
    };

    return (
        <motion.div ref={ref} className={styles.body}> {/* ref を設定し、この要素の表示状態を監視 */}
            {Secondphrase.map((text, index) => ( // phrase 配列をループし、テキストを表示
                <div key={index} className={styles.lineMask}> {/* 各テキストの親コンテナ */}
                    <motion.p
                        custom={index} // アニメーションの delay に index を利用するため
                        variants={animation} // アニメーション設定を適用
                        initial="initial" // 初期状態を "initial" に設定（y: "100%"）
                        animate={inView ? "enter" : "initial"} // ビューポートに入ったら "enter" にアニメーション
                    >
                        {text} {/* テキストの表示 */}
                    </motion.p>
                </div>
            ))}
        </motion.div>
    );
}


export function ThrddMaskText() {
    // 要素がビューポート内に 75% 以上入ったら `inView` が true になる
    const { ref, inView } = useInView({
        threshold: 0.95, // 75% の範囲が表示されたらトリガー
        triggerOnce: true, // 1回のみ実行し、スクロールしてもリセットしない
    });

    const animation = {
        initial: { y: "100%" }, // 初期状態: Y軸方向に100%（画面外下）に配置
        enter: (i: number) => ({
            y: "0", // Y軸方向に 0 に移動（通常の位置）
            transition: {
                duration: 0.75, // アニメーション時間 0.75秒
                ease: [0.33, 1, 0.68, 1], // スムーズなイージングカーブ
                delay: 0.055 * i, // 各テキストが順番に表示されるように遅延を設定
            },
        }),
    };

    return (
        <motion.div ref={ref} className={styles.body}> {/* ref を設定し、この要素の表示状態を監視 */}
            {Thrdphrase.map((text, index) => ( // phrase 配列をループし、テキストを表示
                <div key={index} className={styles.lineMask}> {/* 各テキストの親コンテナ */}
                    <motion.p
                        custom={index} // アニメーションの delay に index を利用するため
                        variants={animation} // アニメーション設定を適用
                        initial="initial" // 初期状態を "initial" に設定（y: "100%"）
                        animate={inView ? "enter" : "initial"} // ビューポートに入ったら "enter" にアニメーション
                    >
                        {text} {/* テキストの表示 */}
                    </motion.p>
                </div>
            ))}
        </motion.div>
    );
}
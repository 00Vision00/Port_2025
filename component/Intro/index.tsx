'use client'
import Styles from './page.module.css'


export default function Home() {
    return (
        <>
            <div className={Styles.body}>
                <h2>Yamamoto Daisuke</h2>
                <div className={Styles.text}>
                    <p>熊本県生まれ。高校時代に趣味でWeb制作に興味を持つ</p>
                    <p>大学では経済を専攻し、広告運用・Webデザイン・プロモーションなどのノウハウを幅広く学習</p>
                    <p>大学在学中に広告代理店でデザイン制作のアルバイトをした後に、新卒で印刷会社のグラフィックデザイナーとして勤務。</p>
                    <p>その後Webデザイナーへ転身し、現在はWebサイトのデザイン制作を中心として、撮影のディレクションや、</p>
                    <p>ロゴ・名刺・チラシ・パンフレットなどの制作まで幅広く対応している。趣味は旅行・写真撮影・バイク・コーヒー・散歩・作字。</p>
                </div>
            </div>
        </>
    );
}
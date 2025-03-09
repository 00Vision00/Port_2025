import { motion } from 'framer-motion'

export default function index() {

    const Text = ['?? Who I Am ??'];
    const Name = ['name: Yamamoto Daisuke'];
    const Skill = ['skill: React/Next.js/Vue.js/Three.js/Git.Hub/vercel'];
    const enviroment = ['code:Vscode'];
    const Live = ['city: Kumamoto'];
    const camera = ['camera: panasonic_GH5_mark3'];

    return (
        <div>
            <h3>
                {Text.map((title, index) => (
                    <motion.p
                        key={index}
                        style={titleStyle}
                        initial={{ opacity: 0, y: '10px' }}
                        animate={{ opacity: 1, y: '10px' }}
                    >
                        {title}
                    </motion.p>
                ))}
            </h3>

            <div>
                {Name.map((title, index) => (
                    <motion.p
                        key={index}
                        style={nameStyle}
                        initial={{ opacity: 0, y: '10px' }}
                        animate={{ opacity: 1, y: '0px' }}
                    >
                        {title}
                    </motion.p>
                ))}
            </div>

            <div>
                {Skill.map((title, index) => (
                    <motion.p
                        key={index}
                        style={skillStyle}
                        initial={{ opacity: 0, y: '10px' }}
                        animate={{ opacity: 1, y: '0px' }}

                    >
                        {title}

                    </motion.p>
                ))}
            </div>
            <div>
                {enviroment.map((title, index) => (
                    <motion.p
                        key={index}
                        style={skillStyle}
                        initial={{ opacity: 0, y: '10px' }}
                        animate={{ opacity: 1, y: '0px' }}

                    >
                        {title}

                    </motion.p>
                ))}
            </div>
            <div>
                {Live.map((title, index) => (
                    <motion.p
                        key={index}
                        style={skillStyle}
                        initial={{ opacity: 0, y: '10px' }}
                        animate={{ opacity: 1, y: '0px' }}

                    >
                        {title}

                    </motion.p>
                ))}
            </div>
            <div>
                {camera.map((title, index) => (
                    <motion.p
                        key={index}
                        style={skillStyle}
                        initial={{ opacity: 0, y: '10px' }}
                        animate={{ opacity: 1, y: '0px' }}

                    >
                        {title}

                    </motion.p>
                ))}
            </div>
        </div>
    );
}

const titleStyle: React.CSSProperties = {
    display: 'flex',
    gap: '0.2em', // 文字間のスペース
    fontFamily: "Lilita One",
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: '10vw'
}

const nameStyle: React.CSSProperties = {
    display: 'flex',
    gap: '0.2em', // 文字間のスペース
    fontFamily: "Lilita One",
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: '4vw'
}

const skillStyle: React.CSSProperties = {
    display: 'flex',
    gap: '0.2em', // 文字間のスペース
    fontFamily: "Lilita One",
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: '4vw'
}
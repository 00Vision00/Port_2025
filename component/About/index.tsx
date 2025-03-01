import { motion } from 'framer-motion'

export default function index() {

    const Text = ['?? Who I Am ??'];
    const Name = ['Yamamoto Daisuke'];

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
    fontSize: '10vw'
}
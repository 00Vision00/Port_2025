import { motion } from 'framer-motion'

export default function index() {

    const Text = ['?? Who I Am ??'];

    return (
        <div>
            <h2>
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
            </h2>

            <h3></h3>
        </div>
    );
}

const titleStyle: React.CSSProperties = {
    display: 'flex',
    gap: '0.2em', // 文字間のスペース
    fontFamily: "Lilita One",
    fontWeight: '400',
    fontStyle: 'normal',
}
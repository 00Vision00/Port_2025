
export const opacity = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 0.75,
        transition: { duration: 1, delay: 0.2 }
    },
}

export const slideUp = {

    initial: {
        top: 0
    },
    exit: {
        top: '100vh',
        transition: { duration: 1.8, ease: [0.75, 0, 0.56, 1], delay: 0.2 }
    }
}
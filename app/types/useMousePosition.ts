import { useEffect, useRef, useState } from "react";


const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

export const useMousePosition = (lerpFactor: number = 0.1): { x: number; y: number } => {
    const [mouse, setMouse] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const smoothMouseRef = useRef<{ x: number, y: number }>({ x: 0, y: 0 });


    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMouse({ x: event.clientX, y: event.clientY });
        };


        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {

        let animationFrameId: number;

        const updatePosition = () => {
            smoothMouseRef.current = {
                x: lerp(smoothMouseRef.current.x, mouse.x, lerpFactor),
                y: lerp(smoothMouseRef.current.y, mouse.y, lerpFactor),
            };
            animationFrameId = requestAnimationFrame(updatePosition);
        };

        updatePosition();
        return () => cancelAnimationFrame(animationFrameId);
    }, [mouse, lerpFactor]);

    return smoothMouseRef.current;
};
'use client'

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface HoverImageProps {
    image: string | null;
}

export default function HoverImage({ image }: HoverImageProps) {
    const imgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!imgRef.current) return;

        if (image) {
            // 画像をフェードインしながら表示
            gsap.to(imgRef.current, {
                opacity: 1,
                scale: 1,
                duration: 1.3,
                ease: "power2.out",
            });
        } else {
            // 画像をフェードアウト
            gsap.to(imgRef.current, {
                opacity: 0,
                scale: 1,
                duration: 1.3,
                ease: "power2.in",
            });
        }
    }, [image]);

    return (
        <div
            ref={imgRef}
            className="fixed top-0 left-0 pointer-events-none transition-transform"
            style={{
                opacity: 0,
                transform: "translate(-50%, -50%) scale(0.9)",
                backgroundImage: image ? `url(${image})` : "none",
                backgroundSize: "cover",
                width: "400px",
                height: "200px",
            }}
        />
    );
}

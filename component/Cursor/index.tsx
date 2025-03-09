'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Home({ isActive }: { isActive: boolean }) {
    const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
    const delayedMouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
    const rafId = useRef<number | null>(null);
    const circle = useRef<HTMLDivElement | null>(null);

    // サイズ・ぼかしの設定
    const size = isActive ? 400 : 30;
    const blur = isActive ? 30 : 0;

    // lerp (線形補間) 関数
    const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

    // マウスの動きに合わせて位置を更新
    const manageMouseMove = (e: MouseEvent) => {
        mouse.current = { x: e.clientX, y: e.clientY };
    };

    // アニメーション
    const animate = () => {
        delayedMouse.current = {
            x: lerp(delayedMouse.current.x, mouse.current.x, 0.1), // 補間値を微調整
            y: lerp(delayedMouse.current.y, mouse.current.y, 0.1)
        };

        moveCircle(delayedMouse.current.x, delayedMouse.current.y);
        rafId.current = requestAnimationFrame(animate);
    };

    // カーソルの位置を更新
    const moveCircle = (x: number, y: number) => {
        if (circle.current) {
            gsap.to(circle.current, {
                x, y, xPercent: -50, yPercent: -50, duration: 0.15 // アニメーションのdurationを調整
            });
        }
    };

    // マウス移動を監視しアニメーション開始
    useEffect(() => {
        animate();
        window.addEventListener('mousemove', manageMouseMove);

        return () => {
            window.removeEventListener('mousemove', manageMouseMove);
            if (rafId.current !== null) {
                cancelAnimationFrame(rafId.current);
            }
        };
    }, []);

    // `isActive`が変更された時にサイズとぼかしをアニメーション
    useEffect(() => {
        if (circle.current) {
            gsap.to(circle.current, {
                width: size,
                height: size,
                duration: 1.3,
                ease: "power2.out",
                onUpdate: () => {
                    if (circle.current) {
                        circle.current.style.filter = `blur(${blur}px)`;
                    }
                }
            });
        }
    }, [isActive]);

    return (
        <div className="relative h-screen">
            <div
                ref={circle}
                className="top-0 left-0 fixed rounded-full pointer-events-none"
                style={{
                    backgroundColor: '#BCE4F2',
                    position: 'fixed',
                    mixBlendMode: 'difference',
                    willChange: 'filter, transform',
                    borderRadius: '15px',
                }}
            />
        </div>
    );
}

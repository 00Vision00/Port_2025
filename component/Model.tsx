'use client'

import React, { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { motion } from "framer-motion-3d"
import { animate, useMotionValue, useTransform } from 'framer-motion'
import { vertex, fragment } from './utils/shader'
import { useTexture, useAspect } from '@react-three/drei';
import * as THREE from 'three';
import useMouse from './UseMouse';
import useDimension from './UseDimention';
import { projects } from './utils/data';

interface ModelProps {
    activeMenu: number | null;
}

export default function Model({ activeMenu }: ModelProps) {

    const plane = useRef<THREE.Mesh | null>(null);
    const { viewport } = useThree();
    const dimension = useDimension();
    const mouse = useMouse();
    const opacity = useMotionValue(0);

    // useTexture をループ内で直接使用せず、配列にまとめる
    const textures = projects.map(project => useTexture(project.src));

    // 初期化時のエラー防止
    const { width, height } = textures[0]?.image ?? { width: 1, height: 1 };

    const lerp = (x: number, y: number, a: number): number => x * (1 - a) + y * a;

    const scale = useAspect(width, height, 0.225);

    const smoothMouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    };

    useEffect(() => {
        if (activeMenu !== null && plane.current) {
            const material = plane.current.material as THREE.ShaderMaterial;
            material.uniforms.uTexture.value = textures[activeMenu];

            animate(opacity, 1, {
                duration: 0.5,
                onUpdate: (latest: number) => {
                    material.uniforms.uAlpha.value = latest;
                }
            });
        } else if (plane.current) {
            const material = plane.current.material as THREE.ShaderMaterial;
            animate(opacity, 0, {
                duration: 0.25,
                onUpdate: (latest: number) => {
                    material.uniforms.uAlpha.value = latest;
                }
            });
        }
    }, [activeMenu, opacity, textures]);

    const uniforms = useRef({
        uDelta: { value: { x: 0, y: 0 } },
        uAmplitude: { value: 0.0025 },
        uTexture: { value: textures[0] },
        uAlpha: { value: 0 }
    });

    useFrame(() => {
        const { x, y } = mouse;
        const smoothX = smoothMouse.x.get();
        const smoothY = smoothMouse.y.get();

        if (Math.abs(x - smoothX) > 1) {
            smoothMouse.x.set(lerp(smoothX, x, 0.1));
            smoothMouse.y.set(lerp(smoothY, y, 0.1));

            if (plane.current) {
                const material = plane.current.material as THREE.ShaderMaterial;
                material.uniforms.uDelta.value = {
                    x: x - smoothX,
                    y: -1 * (y - smoothY)
                };
            }
        }
    });

    // Three.js の座標系に合わせた変換
    const yOffset = scale[1] / 2; // 画像サイズの半分をオフセット
    const x = useTransform(smoothMouse.x, [0, dimension.width], [-viewport.width / 2, viewport.width / 2]);
    const y = useTransform(smoothMouse.y, [0, dimension.height], [viewport.height / 2 - yOffset, -viewport.height / 2 - yOffset]);


    return (
        <motion.mesh
            position-x={x}
            position-y={useTransform(y, value => value + scale[1] / 2)} // 画像を中央に合わせる
            ref={plane}
            scale={scale}
        >
            <planeGeometry args={[1, 1, 15, 15]} />
            <shaderMaterial
                vertexShader={vertex}
                fragmentShader={fragment}
                uniforms={uniforms.current}
                transparent={true}
            />
        </motion.mesh>
    );
}

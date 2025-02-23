'use client';

import { useEffect, useRef, useState } from "react";
import Figure from './Figure';
import Wind from './Wind';
import * as THREE from "three";

const perspective = 800;

export default function Scene() {
    const containerRef = useRef<HTMLCanvasElement | null>(null);
    const windRef = useRef<Wind | null>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const worldRef = useRef<any>(null);
    const [isSceneReady, setIsSceneReady] = useState(false);

    useEffect(() => {
        let renderer: THREE.WebGLRenderer;
        let camera: THREE.PerspectiveCamera;

        const initScene = async () => {
            const { World } = await import("cannon-es");
            const world = new World();
            world.gravity.set(0, -9.82, 0);
            worldRef.current = world;

            if (!containerRef.current) return;

            const scene = new THREE.Scene();
            sceneRef.current = scene;

            renderer = new THREE.WebGLRenderer({
                canvas: containerRef.current,
                alpha: true
            });

            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(window.devicePixelRatio);

            const fov = (180 * (2 * Math.atan(window.innerHeight / 2 / perspective))) / Math.PI;
            camera = new THREE.PerspectiveCamera(
                fov,
                window.innerWidth / window.innerHeight,
                1,
                5000
            );
            camera.position.set(0, 0, perspective);

            const ambientLight = new THREE.AmbientLight(0xffffff, 2);
            scene.add(ambientLight);

            setIsSceneReady(true); // シーン準備完了を通知

            const update = () => {
                requestAnimationFrame(update);
                windRef.current?.update();
                world.step(1 / 60);
                renderer.render(scene, camera);
            };

            update();
        };

        initScene().catch((error) => {
            console.error("Scene initialization error:", error);
        });

        return () => {
            if (renderer) {
                renderer.dispose();
            }
        };
    }, []);

    return (
        <>
            <canvas ref={containerRef} id="stage" />
            {isSceneReady && sceneRef.current && worldRef.current && (
                <Figure scene={sceneRef.current} world={worldRef.current} />
            )}
        </>
    );
}

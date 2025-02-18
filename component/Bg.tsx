'use client';

import { useEffect, useRef } from "react";
import * as THREE from "three";

// GLSL シェーダーのインポート
import vertexShader from './shader/vertexShader';
import fragmentShader from './shader/fragmentShader';

const Bg: React.FC = () => {
    const canvasRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        // シーン、カメラ、レンダラーの設定
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 1;

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        canvasRef.current.appendChild(renderer.domElement);

        // マウス座標
        const mouse = new THREE.Vector2(0, 0);
        window.addEventListener("mousemove", (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        });

        // ジオメトリとマテリアル
        const geometry = new THREE.PlaneGeometry(2, 2, 100);
        const uniforms = {
            uTime: { value: 0 },
            uResolution: {
                value: new THREE.Vector2(window.innerWidth, window.innerHeight),
            },
            uMouse: { value: new THREE.Vector2(0, 0) },
        };

        const material = new THREE.ShaderMaterial({
            uniforms,
            vertexShader,
            fragmentShader,
        });

        const plane = new THREE.Mesh(geometry, material);
        scene.add(plane);

        // アニメーションループ
        const animate = () => {
            uniforms.uTime.value += 0.02;
            uniforms.uMouse.value.set(mouse.x, mouse.y);
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();

        // リサイズ対応
        const onResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
        };
        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
            renderer.dispose();
        };
    }, []);

    return <div className="bg" ref={canvasRef} />;
};

export default Bg;

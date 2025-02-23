'use client';

import * as THREE from "three";
import { useEffect, useRef } from "react";
import { World, Body, Vec3, DistanceConstraint } from "cannon-es";
import Image from "next/image";

const size = 8; // メッシュのサイズ
const mass = 1; // ボディの質量

export default function Figure({ scene, world }: { scene: THREE.Scene; world: World }) {
    const imageRef = useRef<HTMLImageElement | null>(null);
    const meshRef = useRef<THREE.Mesh | null>(null);
    const stitchesRef = useRef<Body[]>([]);
    const geometryRef = useRef<THREE.PlaneGeometry | null>(null);
    const materialRef = useRef<THREE.MeshBasicMaterial | null>(null);

    useEffect(() => {
        if (!imageRef.current) return;

        const loader = new THREE.TextureLoader();

        // 画像のロード
        loader.load(imageRef.current.src, (texture) => {
            const sizes = new THREE.Vector2();
            const offset = new THREE.Vector2();
            getSizes(sizes, offset);

            createMesh(texture, sizes, offset);
            createStitches(sizes);
        });

        // サイズ取得関数
        function getSizes(sizes: THREE.Vector2, offset: THREE.Vector2) {
            if (!imageRef.current) return;
            const { width, height, top, left } = imageRef.current.getBoundingClientRect();
            sizes.set(width, height);
            offset.set(
                left - window.innerWidth / 2 + width / 2,
                -top + window.innerHeight / 2 - height / 2
            );
        }

        // メッシュ作成関数
        function createMesh(texture: THREE.Texture, sizes: THREE.Vector2, offset: THREE.Vector2) {
            geometryRef.current = new THREE.PlaneGeometry(1, 1, size, size);
            materialRef.current = new THREE.MeshBasicMaterial({ map: texture });

            const mesh = new THREE.Mesh(geometryRef.current, materialRef.current);
            mesh.position.set(offset.x, offset.y, 0);
            mesh.scale.set(sizes.x, sizes.y, 1);

            scene.add(mesh);
            meshRef.current = mesh;
        }

        // ステッチ作成関数
        function createStitches(sizes: THREE.Vector2) {
            if (!geometryRef.current) return;

            const stitches: Body[] = [];

            for (let i = 0; i < geometryRef.current.attributes.position.count; i++) {
                const row = Math.floor(i / (size + 1));
                const pos = new Vec3(
                    geometryRef.current.attributes.position.getX(i) * sizes.x,
                    geometryRef.current.attributes.position.getY(i) * sizes.y,
                    0 // Z座標は0に設定
                );

                const stitch = new Body({
                    mass: row === 0 ? 0 : mass / geometryRef.current.attributes.position.count,
                    position: pos,
                });

                stitches.push(stitch);
                world.addBody(stitch);
            }

            // ステッチ接続
            for (let i = 0; i < stitches.length; i++) {
                const col = i % (size + 1);
                const row = Math.floor(i / (size + 1));

                if (col < size) connect(stitches, i, i + 1); // 横接続
                if (row < size) connect(stitches, i, i + size + 1); // 縦接続
            }

            stitchesRef.current = stitches;
        }

        // ステッチ接続関数
        function connect(stitches: Body[], i: number, j: number) {
            if (stitches[i] && stitches[j]) {
                const constraint = new DistanceConstraint(stitches[i], stitches[j]);
                world.addConstraint(constraint);
            }
        }

        return () => {
            // クリーンアップ処理
            if (meshRef.current) {
                scene.remove(meshRef.current);
            }
        };
    }, [scene, world]);

    return (
        <figure className="tile__figure">
            <Image
                ref={imageRef}
                src="/window.avif"
                width={500}
                height={300}
                alt="説明"
                priority
                style={{ display: "none" }} // 画像は非表示にしておく
            />
        </figure>
    );
}

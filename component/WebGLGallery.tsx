"use client";

import { useEffect, useRef, useState } from "react";
import { Renderer, Camera, Transform, Texture, Program, Mesh, Plane } from "ogl";

const vertexShader = `
  attribute vec2 uv;
  attribute vec3 position;
  varying vec2 vUv;
  void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;
  uniform sampler2D tMap;
  varying vec2 vUv;
  void main() {
      vec4 color = texture2D(tMap, vUv);
      gl_FragColor = color;
  }
`;

const images = ["/Fluids.jpeg", "/sample01.jpg", "/Fluids.jpeg", "/Fluids.jpeg"];

const WebGLGallery: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        if (!canvasRef.current) return;

        const renderer = new Renderer({ canvas: canvasRef.current });
        const gl = renderer.gl;

        const camera = new Camera(gl);
        camera.position.z = 5;
        const scene = new Transform();

        const meshes: Mesh[] = [];

        // Create and load textures for images
        images.forEach((src, i) => {
            const texture = new Texture(gl);
            texture.wrapS = texture.wrapT = gl.CLAMP_TO_EDGE;

            const img = new Image();
            img.src = src;
            img.onload = () => {
                texture.image = img;
                renderer.render({ scene, camera });
            };

            const geometry = new Plane(gl, { width: 1.5, height: 1.5 });
            const program = new Program(gl, {
                vertex: vertexShader,
                fragment: fragmentShader,
                uniforms: { tMap: { value: texture } },
            });

            const mesh = new Mesh(gl, { geometry, program });
            mesh.position.x = i * 2.0 - (images.length - 1);
            mesh.setParent(scene);
            meshes.push(mesh);
        });

        const handleResize = () => {
            const { width, height } = canvasRef.current?.getBoundingClientRect() || { width: window.innerWidth, height: window.innerHeight };
            renderer.setSize(width, height);
            camera.perspective({ aspect: width / height });
        };

        // Handle scroll for rotation
        const handleScroll = (event: WheelEvent) => {
            setRotation((prevRotation) => prevRotation + event.deltaY * 0.002);
        };

        window.addEventListener("wheel", handleScroll);
        window.addEventListener("resize", handleResize);
        handleResize();  // Adjust canvas size on initial load

        const animate = () => {
            scene.rotation.z = rotation;
            renderer.render({ scene, camera });
            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("wheel", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, [rotation]);

    return <canvas ref={canvasRef} className="webgl-canvas w-full h-screen"></canvas>;
};

export default WebGLGallery;

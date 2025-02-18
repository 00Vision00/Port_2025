// "use client"

// import { useFrame } from "@react-three/fiber"
// import { useRef } from "react"
// import * as THREE from "three"
// import { WaveMaterial } from "./utils/WaveMaterial"

// const WaveMesh = () => {
//     const materialRef = useRef<THREE.ShaderMaterial & { uniforms: any }>(null)

//     useFrame(({ clock, size, pointer }) => {
//         if (materialRef.current) {
//             materialRef.current.uniforms.time.value = clock.getElapsedTime()
//             materialRef.current.uniforms.resolution.value.set(size.width, size.height)
//             materialRef.current.uniforms.pointer.value.set(pointer.x, pointer.y)
//         }
//     })

//     return (
//         <mesh>
//             <planeGeometry args={[2, 2]} />
//             {/* ✅ JSX で waveMaterial を使う */}
//             <WaveMaterial ref={materialRef} attach="material" />
//         </mesh>
//     )
// }

// export default WaveMesh
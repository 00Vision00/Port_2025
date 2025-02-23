// types.ts
import * as THREE from 'three';

export type ShaderMaterialWithUniforms = THREE.ShaderMaterial & {
    uniforms: {
        uTexture: { value: THREE.Texture };
        uAlpha: { value: number };
        uDelta: { value: { x: number; y: number } };
        uAmplitude: { value: number };
    };
};

// types/three-text-geometry.d.ts
declare module 'three/examples/jsm/geometries/TextGeometry' {
    import { Geometry } from 'three';
    export class TextGeometry extends Geometry {
        constructor(text: string, parameters: TextGeometryParameters);
    }

    export interface TextGeometryParameters {
        font: any;
        size?: number;
        height?: number;
        curveSegments?: number;
        bevelEnabled?: boolean;
        bevelThickness?: number;
        bevelSize?: number;
        bevelSegments?: number;
    }
}

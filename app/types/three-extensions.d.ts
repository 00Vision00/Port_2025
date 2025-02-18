// types/three-extensions.d.ts
declare module 'three/examples/jsm/loaders/FontLoader' {
    import { Loader } from 'three';
    export class FontLoader extends Loader {
        load(
            url: string,
            onLoad: (font: any) => void,
            onProgress?: (event: ProgressEvent) => void,
            onError?: (event: ErrorEvent) => void
        ): void;
    }
}

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

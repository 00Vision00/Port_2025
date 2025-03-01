const fragmentShader = `
    precision highp float;

    uniform float uTime;        // 時間
    uniform vec2 uResolution;  // 画面サイズ
    uniform vec2 uMouse;       // マウス座標

    varying vec2 vUv;          // UV座標

    // ノイズ生成（フラクタルベース）
    float noise(vec2 p) {
        return sin(p.x) * cos(p.y);
    }

    // 流体の拡散エフェクト
    vec2 fluid(vec2 uv, vec2 mouse) {
        vec2 flow = vec2(
            sin(uTime * 1.5 + uv.x * 16.0),
            cos(uTime * 0.5 - uv.x * 4.0)
        );

        float dist = length(uv - mouse); // 距離計算
        float strength = 0.030 / (dist + 0.1); // マウス影響の強度

        return uv + flow * strength;
    }

    // カラーパレット関数
    vec3 palette(float t) {
        return mix(
            vec3(0.1, 0.1, 0.0), // 青
            vec3(0.1, 0.2, 1.0), // 赤
            smoothstep(0.2, 1.8, t)
        );
    }

    void main() {
        vec2 uv = vUv * 1.0 - 1.0;

        // マウスの影響を正規化して適用
        vec2 mouseNorm = uMouse / uResolution; // マウス座標を正規化
        vec2 flow = fluid(uv, mouseNorm);

        // カラー設定
        float intensity = length(flow - uv); // 流体の強さ
        vec3 color = palette(intensity * 10.0); // カラーパレットに影響

        gl_FragColor = vec4(color, 1.0); // 色を出力
    }
`;

export default fragmentShader;

// Wind.ts
import { createNoise3D } from "simplex-noise"; // named import
import { Clock, Vector3 } from "three";
import gsap from "gsap";

const noise = createNoise3D(); // 3Dノイズのインスタンスを作成
const baseForce = 2000;
const off = 0.05;

export default class Wind {
    private figure: any; // Figure型に置き換えることを検討
    private force: number;
    private clock: Clock;
    private direction: Vector3;
    public flowfield: Vector3[];

    constructor(figure: any) { // Figure型に置き換えることを検討
        const { count } = figure.geometry.attributes.position;
        this.figure = figure;
        this.force = baseForce / count;
        this.clock = new Clock();
        this.direction = new Vector3(0.5, 0, -1);
        this.flowfield = new Array(count);
        this.update();
        this.bindEvents();
    }

    private bindEvents() {
        window.addEventListener("mousemove", this.onMouseMove.bind(this));
    }

    private onMouseMove({ clientX: x, clientY: y }: MouseEvent) {
        const { innerWidth: W, innerHeight: H } = window;

        gsap.to(this.direction, {
            duration: 0.8,
            x: x / W - 0.5,
            y: -(y / H) + 0.5,
        });
    }

    public update() {
        const time = this.clock.getElapsedTime();
        const { position } = this.figure.geometry.attributes;
        const size = this.figure.geometry.parameters.widthSegments;

        for (let i = 0; i < position.count; i++) {
            const col = i % (size + 1);
            const row = Math.floor(i / (size + 1));
            const force =
                (noise(row * off, col * off, time) * 1.5 + 0.5) * this.force; // ここも修正

            this.flowfield[i] = this.direction.clone().multiplyScalar(force);
        }
    }
}

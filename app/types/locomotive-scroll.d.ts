declare module 'locomotive-scroll' {
    export default class LocomotiveScroll {
        constructor(options?: {
            el?: HTMLElement | null;
            smooth?: boolean;
            getDirection?: boolean;
            smartphone?: { smooth?: boolean };
            tablet?: { smooth?: boolean };
        });

        on(event: 'scroll' | 'call' | 'tick', callback: (args?: { scroll: { x: number; y: number } }) => void): void;
        update(): void;
        destroy(): void;
        scrollTo(target: string | number | HTMLElement, options?: { offset?: number; duration?: number }): void;
    }
}

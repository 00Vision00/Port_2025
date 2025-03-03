declare module 'locomotive-scroll' {
    export default class LocomotiveScroll {
        constructor(options?: {
            el?: HTMLElement | null;
            smooth?: boolean;
            getDirection?: boolean;
            smartphone?: { smooth?: boolean };
            tablet?: { smooth?: boolean };
        });

        on(event: string, callback: (args?: any) => void): void;
        update(): void;
        destroy(): void;
        scrollTo(target: string | number | HTMLElement, options?: any): void;
    }
}

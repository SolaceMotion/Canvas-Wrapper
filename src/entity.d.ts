declare namespace Rewrap {
    class Entity {
        protected x: number;
        protected y: number;
        protected radius: number;
        protected startAngle: number;
        protected endAngle: number;
        protected endX: number;
        protected endY: number;
        protected canvas: HTMLCanvasElement;
        protected ctx: CanvasRenderingContext2D;
        constructor();
        draw(): void;
    }
}

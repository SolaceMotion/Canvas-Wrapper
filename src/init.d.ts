declare namespace Rewrap {
    class Init {
        canvas: HTMLCanvasElement;
        ctx: CanvasRenderingContext2D;
        constructor({ element, width, height, }: {
            element?: string;
            width: number;
            height: number;
        });
    }
}
export default Rewrap;

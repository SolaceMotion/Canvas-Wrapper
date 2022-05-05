/// <reference path="entity.d.ts" />
declare namespace Rewrap {
    class Arc extends Entity {
        constructor(x: number, y: number, radius: number, startAngle: number, endAngle: number);
        draw(): void;
    }
    class Line extends Entity {
        constructor({ x, y, endX, endY, ...rest }: {
            x: number;
            y: number;
            endX: number;
            endY: number;
        });
        draw(): void;
    }
}

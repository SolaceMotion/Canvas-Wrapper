/// <reference path="./entity.ts"/>

namespace Rewrap {
  export class Arc extends Entity {
    constructor(
      x: number,
      y: number,
      radius: number,
      startAngle: number,
      endAngle: number
    ) {
      super();
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.startAngle = startAngle;
      this.endAngle = endAngle;
    }
    public draw(): void {
      this.ctx.beginPath();
      this.ctx.arc(20, 20, 100, this.startAngle, this.endAngle);
      this.ctx.stroke();
      this.ctx.closePath();
    }
  }
  export class Line extends Entity {
    constructor({
      x,
      y,
      endX,
      endY,
      ...rest
    }: {
      x: number;
      y: number;
      endX: number;
      endY: number;
    }) {
      super();
      this.x = x;
      this.y = y;
      this.endX = endX;
      this.endY = endY;
    }
    public draw(): void {
      this.ctx.beginPath();
      this.ctx.moveTo(this.x, this.y);
      this.ctx.lineTo(this.endX, this.endY);
      this.ctx.stroke();
      this.ctx.closePath();
    }
  }
}

export default Rewrap;

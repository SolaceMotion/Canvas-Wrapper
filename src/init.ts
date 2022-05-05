namespace Rewrap {
  export class Init {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    constructor({
      element = "body",
      width,
      height,
    }: {
      element?: string;
      width: number;
      height: number;
    }) {
      this.canvas = document.createElement("canvas");
      this.ctx = this.canvas.getContext("2d");
      this.canvas.width = width;
      this.canvas.height = height;
      /* if (element !== "body") {
        document.querySelector(element).append(this.canvas);
      } else {
        document[element].append(this.canvas);
      } */
      document.querySelector(element).append(this.canvas);
      /* const htmlDoc = document.documentElement.innerHTML;
      if (htmlDoc.includes(element)) {
        console.log("TRUE");
      }
      console.log(htmlDoc); */
    }
  }
}

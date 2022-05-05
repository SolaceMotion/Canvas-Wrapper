/// <reference path="./src/init.ts"/>
import Rewrap from "./src/init"

const main = new Rewrap.Init({
  width: 500,
  height: 500,
  element: "body",
})

const FPS = 60

/* setInterval(main.update, 1000 / FPS) */

/* let arc = new Arc(50, 50, 50, 0, 2 * Math.PI) */
/* arc.draw() */

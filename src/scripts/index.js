import * as P5 from 'p5';

const CANVAS_HEIGHT = 600;
const CANVAS_WIDTH = 600;

let draw = (p5) => {
  p5.setup = () => {
    p5.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    p5.colorMode(p5.HSB, 100);
    p5.frameRate(5);

    p5.background(10);

    p5.textSize(46);
    p5.fill(90);
    p5.text('Hello (Info)World!', 120, 280);
  };

  /*
   * For animations, draw each frame using the function below.
   * Try uncommenting the `draw` function below to see how it works.
   */
  // p5.draw = () => {
  //   /*
  //    * The `draw` method adds to the canvas, so if you want
  //    * to remove an element, you need to remove all elements
  //    * using `clear` and draw everything again.
  //    */
  //   // p5.clear();
  //   // p5.background(10);

  //   p5.textSize(46);
  //   p5.fill(
  //     Math.random() * 100,
  //     Math.random() * 100,
  //     Math.random() * 100
  //   );
  //   p5.text('Hello (Info)World!',
  //     Math.random() * CANVAS_WIDTH,
  //     Math.random() * CANVAS_HEIGHT);
  // };
};

new P5(draw);

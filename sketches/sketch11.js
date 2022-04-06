let sketch11 = function (p) {
  function startRunning() {
    p.loop();
  }

  function stopRunning() {
    p.noLoop();
  }

  p.setup = function () {
    let canvas = p.createCanvas(400, 400);
    p.textAlign(p.CENTER, p.CENTER);
    p.angleMode(p.DEGREES);

    canvas.mouseOver(startRunning);
    canvas.mouseOut(stopRunning);
    p.noLoop();
  };

  p.draw = function () {
    p.background(0, 128, 255, 10);

    p.translate(p.width / 2, p.height / 2);
    p.textSize(250);

    p.push();
    // rotate(frameCount)
    // rotate(0.04*millis());
    p.shearX(p.frameCount);
    p.shearY(p.frameCount);
    // scale(frameCount);
    p.fill(255, 0, 0, 200);
    p.text("A", 0, 0);
    p.pop();
  };
};

new p5(sketch11, "p5-container-11");

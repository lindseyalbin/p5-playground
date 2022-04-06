let sketch14 = function (p) {
  function startRunning() {
    p.loop();
  }

  function stopRunning() {
    p.noLoop();
  }

  p.setup = function () {
    let canvas = p.createCanvas(400, 400, p.WEBGL);
    p.angleMode(p.DEGREES);

    canvas.mouseOver(startRunning);
    canvas.mouseOut(stopRunning);
    p.noLoop();
  };

  p.draw = function () {
    p.background(10);
    p.stroke("green");
    p.rotateX(p.mouseX);
    p.fill("blue");
    p.circle(0, 0, 150);
    // circle(50, 50, 100);
    // circle(-50, -50, 100);
    p.rotateY(p.mouseY);
    p.fill("red");
    p.stroke("green");
    p.circle(0, 0, 150);
    // circle(50, 50, 100);
    // circle(-50, -50, 100);
  };
};

new p5(sketch14, "p5-container-14");

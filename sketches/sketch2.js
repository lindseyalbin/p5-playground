let sketch2 = function (p) {
  function startRunning() {
    p.loop();
  }

  function stopRunning() {
    p.noLoop();
  }

  p.setup = function () {
    let canvas = p.createCanvas(400, 400);
    p.background(0);

    canvas.mouseOver(startRunning);
    canvas.mouseOut(stopRunning);
    p.noLoop();

    //define gradient colors
    let c1 = p.color(66, 135, 245);
    let c2 = p.color(233, 166, 255);
    let c3 = p.color(255, 235, 133);

    //set gradients to background
    setGradient(0, 0, p.width, p.height / 2, c1, c2);
    setGradient(0, p.height / 2, p.width, p.height / 2, c2, c3);
  };

  //creates a vertical gradient
  function setGradient(x, y, w, h, c1, c2) {
    for (let i = y; i <= y + h; i++) {
      let interpolate = p.map(i, y, y + h, 0, 1);
      let gradient = p.lerpColor(c1, c2, interpolate);
      p.stroke(gradient);
      p.line(x, i, x + w, i);
    }
  }

  p.draw = function () {};

  p.mouseDragged = function () {
    p.noStroke();
    let brushColor = p.color(0);

    //create airbrush look
    p.fill(brushColor);
    p.ellipse(p.mouseX, p.mouseY, 8, 8);
    brushColor.setAlpha(100);
    p.fill(brushColor);
    p.ellipse(p.mouseX, p.mouseY, 12, 12);
    brushColor.setAlpha(50);
    p.fill(brushColor);
    p.ellipse(p.mouseX, p.mouseY, 16, 16);
    brushColor.setAlpha(25);
    p.fill(brushColor);
    p.ellipse(p.mouseX, p.mouseY, 23, 23);
  };
};

new p5(sketch2, "p5-container-2");

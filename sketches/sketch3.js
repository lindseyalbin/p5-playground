let sketch3 = function (p) {
  function startRunning() {
    p.loop();
  }

  function stopRunning() {
    p.noLoop();
  }

  let fontSize = 32;
  let x = 200;
  let y = 200;

  p.setup = function () {
    let canvas = p.createCanvas(400, 400);
    // background(220);
    canvas.mouseOver(startRunning);
    canvas.mouseOut(stopRunning);
    p.noLoop();
  };
  p.draw = function () {
    p.background(252, 157, 209);
    x = p.mouseX;
    y = p.mouseY;
    p.textSize(fontSize);
    p.textAlign(p.CENTER);
    p.fill("red");
    p.text("Hello, world.", x, y);

    // fontSize++;
  };
};

new p5(sketch3, "p5-container-3");

let sketch8 = function (p) {
  function startRunning() {
    p.loop();
  }

  function stopRunning() {
    p.noLoop();
  }

  let col = 20;
  let row = 20;
  let rectW;
  let rectH;

  p.setup = function () {
    let canvas = p.createCanvas(400, 400);
    rectW = p.width / col;
    rectH = p.height / row;
    p.frameRate(3);

    canvas.mouseOver(startRunning);
    canvas.mouseOut(stopRunning);
    p.noLoop();
  };

  p.draw = function () {
    p.background(220);
    // randomSeed(1)
    for (let i = 0; i < col; i++) {
      for (let j = 0; j < row; j++) {
        p.fill(p.random(255));
        p.rect(i * rectW, j * rectH, rectW, rectH);
      }
    }
  };
};

new p5(sketch8, "p5-container-8");

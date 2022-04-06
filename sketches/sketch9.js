let sketch9 = function (p) {
  function startRunning() {
    p.loop();
  }

  function stopRunning() {
    p.noLoop();
  }

  let col = 40;
  let row = 40;
  let rectW;
  let rectH;
  let img;

  p.preload = function () {
    img = p.loadImage("sketches/cow.jpg");
  };

  p.setup = function () {
    let canvas = p.createCanvas(400, 400);
    rectW = p.width / col;
    rectH = p.height / row;
    img.resize(p.width, p.height);

    canvas.mouseOver(startRunning);
    canvas.mouseOut(stopRunning);
    p.noLoop();
  };

  p.draw = function () {
    p.background(220);
    p.image(img, 0, 0);

    rectW = p.width / col + p.frameCount * 0.1;
    rectH = p.height / row + p.frameCount * 0.1;

    // if (rectW == 20) {
    //   rectW = p.width / col;
    //   rectH = p.height / row;
    // }

    // let color = get(mouseX, mouseY);
    // fill(color);
    // rect(width / 2, height / 2, 100, 100);

    let color;
    for (let i = 0; i < col; i++) {
      for (let j = 0; j < row; j++) {
        color = img.get(i * rectW, j * rectH);
        p.fill(color);
        p.noStroke();
        p.rect(i * rectW, j * rectH, rectW, rectH);
      }
    }
  };
};

new p5(sketch9, "p5-container-9");

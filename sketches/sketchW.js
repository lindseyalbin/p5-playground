let sketchW = function (p) {
  function startRunning() {
    p.loop();
  }

  function stopRunning() {
    p.noLoop();
  }

  let webcam;
  let columns = 10;
  let rows = 10;
  let rectW;
  let rectH;

  p.setup = function () {
    let canvas = p.createCanvas(400, 400);
    webcam = p.createCapture(p.VIDEO);
    webcam.hide();
    webcam.size(400, 400);
    rectW = p.width / columns;
    rectH = p.height / rows;
    p.frameRate(5);
    p.pixelDensity(1);

    canvas.mouseOver(startRunning);
    canvas.mouseOut(stopRunning);
    p.noLoop();
  };

  p.draw = function () {
    p.background(220);
    // image(webcam,0,0)
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        if (webcam.loadedmetadata) {
          let color = webcam.get(i * rectW, j * rectH);
          p.fill(color);
          p.noStroke();
          p.rect(i * rectW, j * rectH, rectW, rectH);
        }
      }
    }
  };
};

// new p5(sketchW, "p5-container-10");

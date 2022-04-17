let sketch6 = function (p) {
  function startRunning() {
    p.loop();
  }

  function stopRunning() {
    p.noLoop();
  }

  let myImgs = [];
  let index = 0;

  p.preload = function () {
    let img1 = p.loadImage("sketches/strawberry.png");
    let img2 = p.loadImage("sketches/banana.png");
    myImgs.push(img1);
    myImgs.push(img2);
  };

  p.setup = function () {
    let canvas = p.createCanvas(425, 425);
    myImgs[0].resize(60, 50);
    myImgs[1].resize(60, 50);
    p.background(10);

    canvas.mouseOver(startRunning);
    canvas.mouseOut(stopRunning);
    p.noLoop();
  };

  p.draw = function () {
    // circle(width/2, height/2, 250);
    // if (dist(mouseX, mouseY, width/2, height/2) > 125)
    //   console.log('too far');
    // else
    //   image(myImg, mouseX, mouseY);

    if (p.mouseIsPressed) {
      p.image(myImgs[index], p.mouseX, p.mouseY);
    }
  };
};

new p5(sketch6, "p5-container-6");

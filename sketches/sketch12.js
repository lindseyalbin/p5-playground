let sketch12 = function (p) {
  function startRunning() {
    p.loop();
  }

  function stopRunning() {
    p.noLoop();
  }

  let word = "GOOD FRIEND";
  let margin = 30;

  p.setup = function () {
    let canvas = p.createCanvas(400, 400);
    p.textSize(30);
    p.textAlign(p.CENTER, p.CENTER);
    p.angleMode(p.DEGREES);

    canvas.mouseOver(startRunning);
    canvas.mouseOut(stopRunning);
    p.noLoop();
  };

  p.draw = function () {
    p.background(220);

    for (let i = 0; i < word.length; i++) {
      let x = p.map(i, 0, word.length - 1, margin, p.width - margin);
      let rotationValue = p.map(i, 0, word.length - 1, 90, -90);

      p.push();
      p.translate(x, p.height / 2);
      p.rotate(rotationValue * p.frameCount * 0.05);
      p.text(word[i], 0, 0);
      p.pop();
    }
  };
};

new p5(sketch12, "p5-container-12");

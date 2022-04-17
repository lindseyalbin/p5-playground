let sketch10 = function (p) {
  function startRunning() {
    p.loop();
  }

  function stopRunning() {
    p.noLoop();
  }

  // let word = "HELLO MOM + DAD";
  let word = "DAD + MOM OLLEH";
  let margin = 30;

  p.setup = function () {
    let canvas = p.createCanvas(425, 425);
    p.textSize(15);
    p.textAlign(p.CENTER, p.CENTER);
    p.angleMode(p.DEGREES);

    canvas.mouseOver(startRunning);
    canvas.mouseOut(stopRunning);
    p.noLoop();

    p.background(10);
  };

  p.draw = function () {
    p.background(10, 40);

    for (let i = 0; i < word.length; i++) {
      let rotationValue = p.map(i, 0, word.length - 1, 0, 315);

      p.push();
      p.translate(p.mouseX, p.mouseY);
      p.rotate(rotationValue + p.frameCount);
      // line(0, 0, 0, 100);
      p.fill(220);
      p.text(word[i], 0, 50);
      p.pop();
    }
  };
};

new p5(sketch10, "p5-container-10");

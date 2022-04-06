let sketch13 = function (p) {
  function startRunning() {
    p.loop();
  }

  function stopRunning() {
    p.noLoop();
  }

  // let word = "OATMEAL+BANANAS+";
  let word = "+SANANAB+LAEMTAO";
  let margin = 20;

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
    p.translate(p.width / 2, p.height / 2);

    let offset = p.mouseX;
    let color = 0;
    for (let y = 100; y < 300; y += 50) {
      for (let i = 0; i < word.length; i++) {
        let rotationValue = p.map(i, 0, word.length, 0, 360);

        p.push();
        p.rotate(rotationValue + offset);
        p.fill(color);
        p.text(word[i], 0, y);
        p.pop();
      }

      offset = offset + p.mouseX;
      color = color + 70;
    }
  };
};

new p5(sketch13, "p5-container-13");

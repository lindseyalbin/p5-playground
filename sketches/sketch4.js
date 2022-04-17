let sketch4 = function (p) {
  function startRunning() {
    p.loop();
  }

  function stopRunning() {
    p.noLoop();
  }

  let myList;
  let index = 0;

  p.preload = function () {
    myList = p.loadStrings("sketches/animals.txt");
  };

  p.setup = function () {
    let canvas = p.createCanvas(425, 425);
    p.background(207, 255, 64);
    // console.log(myList);

    canvas.mouseOver(startRunning);
    canvas.mouseOut(stopRunning);
    p.noLoop();
  };

  p.draw = function () {
    // background(220);

    p.textSize(15);
    p.text(myList[index], p.mouseX, p.mouseY);

    if (p.mouseIsPressed) {
      index++;
      if (index == myList.length - 1) index = 0;
    }
  };
};

new p5(sketch4, "p5-container-4");

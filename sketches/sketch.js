let sketch = function (p) {
  function startRunning() {
    p.loop();
  }

  function stopRunning() {
    p.noLoop();
  }

  //   let location_x = 0;
  //   let translate = 2;

  p.setup = function () {
    // let element = document.getElementById("p5-container-1");
    // let boxWidth = element.clientWidth;
    // let boxHeight = element.clientHeight;
    // let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    let canvas = p.createCanvas(425, 425);
    p.background("blue");

    canvas.mouseOver(startRunning);
    canvas.mouseOut(stopRunning);
    p.noLoop();
  };

  // p.windowResized = function () {
  //   p.resizeCanvas(p.windowWidth, p.windowHeight);
  // };

  p.draw = function () {
    // background('blue');

    let r = p.random(0, 255);
    let g = p.random(0, 255);
    let b = p.random(0, 255);

    //   // draw circle
    //   fill('red');
    //   strokeWeight(2);
    //   stroke('yellow');
    //   circle(location_x, 200, 100);

    //   // movement of circle
    //   if (location_x > 400 || location_x < 0)
    //    translate = -translate;
    //   location_x = location_x + translate;

    // draw square
    p.fill(r, g, b);
    p.strokeWeight(2);
    p.stroke("red");
    p.rect(p.mouseX, p.mouseY, 50, 50);
  };
};

new p5(sketch, "p5-container-1");

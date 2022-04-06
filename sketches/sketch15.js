let sketch15 = function (p) {
  function startRunning() {
    p.loop();
  }

  function stopRunning() {
    p.noLoop();
  }

  var inc = 0.03;
  var scl = 6;
  var cols, rows;

  var zoff = 0;

  var fr;

  p.setup = function () {
    let canvas = p.createCanvas(400, 400);
    p.pixelDensity(1);

    cols = p.floor(p.width / scl);
    rows = p.floor(p.height / scl);
    fr = p.createP("");

    canvas.mouseOver(startRunning);
    canvas.mouseOut(stopRunning);
    p.noLoop();

    // createLoop({duration:6, gif:true})
  };

  p.draw = function () {
    var yoff = 0;
    p.background(0);

    for (var y = 0; y < rows; y++) {
      var xoff = 0;
      for (var x = 0; x < cols; x++) {
        var index = (x + y * p.width) * 4;
        var angle = p.noise(xoff, yoff, zoff) * p.TWO_PI;
        var v = p5.Vector.fromAngle(angle);
        xoff += inc;

        p.stroke(200);
        p.strokeWeight(1);

        p.push();
        p.translate(x * scl, y * scl);
        p.rotate(v.heading());
        p.line(0, 0, scl, 0);
        p.pop();
      }
      yoff += inc;
    }
    zoff += 0.01;

    // fr.html(floor(frameRate()))
  };
};

new p5(sketch15, "p5-container-15");

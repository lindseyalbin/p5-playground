let sketch16 = function (p) {
  function startRunning() {
    p.loop();
  }

  function stopRunning() {
    p.noLoop();
  }

  class Particle {
    constructor() {
      this.pos = p.createVector(10, 10);
    }

    draw() {
      let target = p.createVector(p.mouseX, p.mouseY);

      let diff = target.sub(this.pos);
      diff.setMag(0.025 * diff.mag());

      // update x position based off of the difference
      this.pos = this.pos.add(diff);
      p.image(imgC, this.pos.x, this.pos.y);
      //   p.circle(this.pos.x, this.pos.y, 50);
    }
  }

  let particle;
  let imgC;
  let imgM;
  let imgG;

  p.preload = function () {
    imgC = p.loadImage("sketches/cat.png");
    imgM = p.loadImage("sketches/mouse.png");
    imgG = p.loadImage("sketches/grass.jpeg");
  };

  p.setup = function () {
    let canvas = p.createCanvas(400, 400);
    p.imageMode(p.CENTER);
    p.noCursor();
    imgC.resize(110, 100);
    imgM.resize(50, 40);
    imgG.resize(500, 400);
    particle = new Particle();

    canvas.mouseOver(startRunning);
    canvas.mouseOut(stopRunning);
    p.noLoop();
  };

  p.draw = function () {
    p.background(220);

    p.image(imgG, p.width / 2, p.height / 2);
    p.image(imgM, p.mouseX, p.mouseY);
    particle.draw();
  };
};

new p5(sketch16, "p5-container-16");

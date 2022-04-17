let sketch7 = function (p) {
  function startRunning() {
    p.loop();
  }

  function stopRunning() {
    p.noLoop();
  }

  let tiles = [];

  p.setup = function () {
    let canvas = p.createCanvas(425, 425);

    canvas.mouseOver(startRunning);
    canvas.mouseOut(stopRunning);
    p.noLoop();

    let x = p.width / 10 / 2;
    let y = p.width / 10 / 2;
    let s = p.width / 10;
    for (let i = p.width / 10 / 2; i < p.width; i += p.width / 10) {
      for (let j = p.width / 10 / 2; j < p.height; j += p.height / 10) {
        let t = new Tile(i, j, s);
        tiles.push(t);
      }
    }
  };

  p.draw = function () {
    p.background(10);
    for (let i = 0; i < tiles.length; i++) {
      tiles[i].show();
    }
  };

  p.mousePressed = function () {
    for (let i = 0; i < tiles.length; i++) {
      tiles[i].clicked(p.mouseX, p.mouseY);
    }
  };

  class Tile {
    constructor(x, y, s) {
      this.x = x;
      this.y = y;
      this.s = s;
      this.c = 10;
      this.bool = false;
    }

    show() {
      p.stroke(230);
      p.fill(this.c);
      p.rectMode(p.CENTER);
      p.square(this.x, this.y, this.s);
    }

    clicked(mX, mY) {
      let d = p.dist(mX, mY, this.x, this.y);
      if (d < this.s / 2) {
        if (this.bool == false) {
          this.c = 230;
          this.bool = true;
        } else {
          this.c = 10;
          this.bool = false;
        }
      }
    }
  }
};

new p5(sketch7, "p5-container-7");

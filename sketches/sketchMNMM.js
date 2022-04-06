let sketchM = function (p) {
  function startRunning() {
    p.loop();
  }

  function stopRunning() {
    p.noLoop();
  }

  var api = "https://api.giphy.com/v1/gifs/search";
  var apiKey = "?api_key=VtjdvD1AuoaBe1EongTaOdNZtHSr6Bnc";
  var queryM = "&q=mothers+day&limit=100&offset=0&rating=g&lang=en";
  var queryC = "&q=baby+cow&limit=100&offset=0&rating=g&lang=en";

  let imgsC = [];
  let imgsM = [];
  let tiles = [];

  p.preload = function () {
    var urlC = api + apiKey + queryC;
    p.loadJSON(urlC, gotDataC);

    var urlM = api + apiKey + queryM;
    p.loadJSON(urlM, gotDataM);
  };

  p.setup = function () {
    let canvas = p.createCanvas(400, 400);
    p.noCursor();

    canvas.mouseOver(startRunning);
    canvas.mouseOut(stopRunning);
    p.noLoop();

    let s = width / 5;
    let index = 0;
    for (let i = s / 2; i < width; i += s) {
      for (let j = s / 2; j < height; j += s) {
        let t = new Tile(index, i, j, s);
        tiles.push(t);
        index++;
      }
    }
  };

  function gotDataC(giphy) {
    for (let i = 0; i < giphy.data.length; i++) {
      let img = p.loadImage(giphy.data[i].images.original.url);
      imgsC.push(img);
    }
  }

  function gotDataM(giphy) {
    for (let i = 0; i < giphy.data.length; i++) {
      let img = p.loadImage(giphy.data[i].images.original.url);
      imgsM.push(img);
    }
  }

  p.draw = function () {
    p.background(10);
    for (let i = 0; i < tiles.length; i += 2) {
      tiles[i].show(0, p.mouseX, p.mouseY);
    }

    for (let i = 1; i < tiles.length; i += 2) {
      tiles[i].show(1, p.mouseX, p.mouseY);
    }

    p.rectMode(p.CENTER);
    p.noStroke();
    p.fill(5);
    p.square(p.width / 2, p.height / 2, p.width / 5);

    p.fill(255);
    p.textAlign(p.CENTER);
    p.text("MOTHERS\nNOT\nMILK MACHINES\n<3", p.width / 2, p.height / 2 - 10);

    p.noStroke();
    p.fill("red");
    p.strokeWeight(8);
    heart(p.mouseX, p.mouseY, 60);
  };

  function heart(x, y, size) {
    p.beginShape();
    p.vertex(x, y);
    p.bezierVertex(
      x - size / 2,
      y - size / 2,
      x - size,
      y + size / 3,
      x,
      y + size
    );
    p.bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
    p.endShape(p.CLOSE);
  }

  p.mousePressed = function () {
    for (let i = 0; i < tiles.length; i++) {
      tiles[i].clicked(p.mouseX, p.mouseY);
    }
  };

  class Tile {
    constructor(i, x, y, s) {
      this.i = i;
      this.x = x;
      this.y = y;
      this.s = s;
    }

    show(id, mX, mY) {
      if (id == 0)
        p.image(
          imgsM[this.i],
          this.x - this.s / 2,
          this.y - this.s / 2,
          this.s,
          this.s
        );
      else if (id == 1)
        p.image(
          imgsC[this.i],
          this.x - this.s / 2,
          this.y - this.s / 2,
          this.s,
          this.s
        );
      p.rectMode(p.CENTER);
      let d = p.dist(mX, mY, this.x, this.y);
      let c = p.color(255, 102, 179);
      c.setAlpha(150);
      if (d < this.s / 2) {
        p.noStroke();
        p.fill(c);
        p.square(this.x, this.y, this.s);
      }
      p.noFill();
      p.stroke(5);
      p.strokeWeight(5);
      p.square(this.x, this.y, this.s);
    }

    clicked(mX, mY) {
      let d = p.dist(mX, mY, this.x, this.y);
      if (d < this.s / 2) {
        this.i = int(random(50));
      }
    }
  }
};

// new p5(sketch8, "p5-container-8");

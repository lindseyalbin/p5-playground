let sketch5 = function (p) {
  function startRunning() {
    p.loop();
  }

  function stopRunning() {
    p.noLoop();
  }

  let myBook;
  let joinedBook;
  let splitBook;
  let splitBook2 = [];
  let index = 0;

  p.preload = function () {
    myBook = p.loadStrings("sketches/book.txt");
  };

  p.setup = function () {
    let canvas = p.createCanvas(400, 400);
    p.background(220);

    canvas.mouseOver(startRunning);
    canvas.mouseOut(stopRunning);
    p.noLoop();

    joinedBook = p.join(myBook, " ");
    splitBook = p.split(joinedBook, "?");

    for (let i = 0; i < myBook.length; i++) {
      let tempArray = p.split(myBook[i], " ");
      for (let j = 0; j < tempArray.length; j++) {
        splitBook2.push(tempArray[j]);
      }
    }
  };

  p.draw = function () {
    // background(220);

    p.textSize(5);
    p.text(splitBook[index], p.mouseX, p.mouseY);

    if (p.mouseIsPressed) {
      index++;
      if (index == splitBook.length - 1) index = 0;
    }
  };
};

new p5(sketch5, "p5-container-5");

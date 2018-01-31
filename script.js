function setup() {
  createCanvas(screen.width - 10, screen.height - 150);
  frameRate(12);
  textFont('monospace');
  background(0, 0, 0);

}

var table = [];

function draw() {
  background(0, 0, 0);
  for (let i = 0; i < table.length; i++) {
    table[i].appear();
  }

  var randoma = Math.floor(random(15, 35));
  var y = Math.floor(random(-250, 600));
  var first = new Numb(10 * Math.floor(random(1, screen.width / 10)), y, Math.floor(random(5, 45)), randoma);
  table.push(first);

}
class Numb {
  constructor(x, y, s, l) {
    this.length = l;
    this.X = x;
    this.Y = y;
    this.size = s;
    this.space = s - s / 4;
    this.table = [];

  }

  appear() {

    textSize(this.size);

    if (this.length > 0) {
      let rand = Math.floor(random(0, 10));
      this.table.push([rand, this.Y]);
      this.Y += this.space;
      this.length--;
    } else {
      this.table.shift();
    }
    for (let y = 0; y < this.table.length; y++) {
      if (y == this.table.length - 1) {
        fill(220, 250, 240)
      } else {
        fill(0, 170, 0);
      }
      text(this.table[y][0], this.X, this.table[y][1]);
    }

  }
}

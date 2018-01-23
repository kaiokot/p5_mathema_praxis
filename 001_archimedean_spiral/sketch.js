// https://en.wikipedia.org/wiki/Archimedean_spiral

let theta = 0;
let a = 1;
let b = 2;

function setup() {
  createCanvas(screen.width, screen.height);
  background(0);
}

function draw() {
  translate(width / 2, height / 2)

  let x = a + (b * theta) * cos(theta);
  let y = a + (b * theta) * sin(theta);

  noStroke();
  ellipse(x, y, 3, 3);
  fill(255, 255, 255);

  theta += 0.05;
}
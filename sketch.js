//Word is Mellow 

let circles = [];

function setup() {
  createCanvas(800, 800);
  noStroke();

  for (let i = 0; i < 40; i++) {
    /*
    let x = random(width);
    let y = random(height);
    let s = random(30, 120);
    */
    circles.push(new Bubbles());

  }
}

function draw() {
  // put background once per frame
  background(10, 10, 25, 20);

  // update + display all bubbles
  for (let i = 0; i < circles.length; i++) {
    circles[i].update();
    circles[i].display();
  }
}

// you can also use mousePressed() – you used doubleClicked() so I kept it
function doubleClicked() {

  // loop backwards so removing is safe
  for (let i = circles.length - 1; i >= 0; i--) {

    if (circles[i].contains(mouseX, mouseY)) {
      //circles.splice(i, 1); // remove this bubble
      //circles[i] = new Bubbles(); //replace with new bubble 
      circles[i].state = "popping"; // Trigger popping state
      break; // stop after popping one
    }
  }
}


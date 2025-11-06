/*
Word is "redacted"

colorfull night lights that change slowly transitioning into different colors 
something that changes overtime

Must include: 
• heavy use of variables custom functions passing variables as parameter
• loops
• control structures
• math or random
• some use of interaction or change over time
• movement, change, variety
• arrays
• conditionals
• OOP - with methods + passing parameters

*/
// let circles = [];

// function setup() {
//   createCanvas(800, 800);
//   noStroke();
//   x = width / 2;
//   y = height / 2;

//   // Create a bunch of circles with random properties
//   // as long as i is less than 100 create a new Particle and add it to the circles array
//   for (let i = 0; i < 40; i++) {
//     // 40 places in my array technically 39
//     let x = random(width); //x value is a random canvas width number
//     let y = random(height); //y value is a random canvas height number
//     let s = random(30, 120); //size is randomly between 30 120
//     circles.push(new Bubbles(x,y,s)); // Particles() creates new Particle object circles.push pushes it into the end of the array
//   }

//   // remove objects from my array (idk if this would go on setup it may go on draw loop)
// }

// function draw() {
//   //background has less transparency to leave a faither trail
//   for (let i = 0; i < circles.length; i++) {
//     //goes through every object in the circles array and displays it
//     circles[i].update();
//     circles[i].display();
//     background(10, 10, 25, 20); //background has less transparency to leave a fainter trail
//     //circles[i].update();
//   }
// }

// function mousePresserd(){
//   for (let i = circles.length - 1; i>=0; i--){
//     if (circles[i].contains(mouseX,mouseY)){
//       circles.splice(i,1);
//       break; 
//     }
//   }
// }



let circles = [];

function setup() {
  createCanvas(800, 800);
  noStroke();

  for (let i = 0; i < 40; i++) {
    let x = random(width);
    let y = random(height);
    let s = random(30, 120);
    circles.push(new Bubbles(x, y, s));
  }
}

function draw() {
  // put background once per frame
  background(10, 10, 25, 20);

  // update + display all bubbles
  for (let i = 0; i < circles.length; i++) {
    circles[i].update();
    //circles[i].fade();
    circles[i].display();
  }
}

// you can also use mousePressed() – you used doubleClicked() so I kept it
function doubleClicked() {
  // loop backwards so removing is safe
  for (let i = circles.length - 1; i >= 0; i--) {
    if (circles[i].contains(mouseX, mouseY)) {
      circles.splice(i, 1); // remove this bubble
      break; // stop after popping one
    }
  }
}
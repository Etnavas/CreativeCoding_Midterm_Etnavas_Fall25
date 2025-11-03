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
let circles = [];

function setup() {
  createCanvas(800, 800);
  noStroke();
  x = width / 2;
  y = height / 2;

  // Create a bunch of circles with random properties
  // as long as i is less than 100 create a new Particle and add it to the circles array
  for (let i = 0; i < 200; i++) {  // 100 places in my array technically 99
    circles.push(new Particles()); // Particles() creates new Particle object circles.push pushes it into the end of the array
    
  }

}

function draw() {

  //background has less transparency to leave a faither trail 

  for (let i = 0; i < circles.length; i++) { //goes through every object in the circles array and displays it
  
    circles[i].display();
    background(10, 10, 25, 20);//background has less transparency to leave a faither trail
    circles[i].update();
     
  }

}


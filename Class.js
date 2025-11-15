class Bubbles {

  constructor() {
    /*
    this.x = random(width);
    this.y = random(height);
    this.size = random(30, 120);
    this.color = color(random(100, 255), random(100, 255), random(200, 255));
    this.startTime = millis() + random(5000);
    this.speed = 3500;
    this.alpha = 0;
    this.state = "appearing";  
    */
    this.respawn(); //intial parameters stuff 
    //this.state = "appearingAtStart"; //bubbles fade in at the beginning
  }

  respawn() { //create new bubble with new random properties

    this.x = random(width);  //x value is a random canvas width number 
    this.y = random(height); //y value is a random canvas height number 
    this.size = random(30, 120); //size is randomly between 30 120
    this.color = color(random(100, 255), random(100, 255), random(200, 255)); // blue value (higher range = more blue/purple) 
    this.startTime = millis() + random(5000); // random delay before each circle starts fading
    this.alpha = 0; // Transparency (start invicible)
    this.state = "appearing";  //different bubble states  
    this.popSize = 0;  // extra size during popping face
    //floating velocity
    this.dx = random(-0.1, 0.1);
    this.dy = random(-0.1, 0.1);


  }
  
  update () {
      
   //bubble movement
   this.x += this.dx;
   this.y += this.dy;

   let s = this.size/2 //radius of bubble

    // bounce off edges
    if (this.x < s || this.x > width - s) {
      this.dx *= -1;
    }

    if (this.y < s || this.y > height - s) {
      this.dy *= -1;
    } 
     
    //appearing state
    if (this.state === "appearing") {
      this.alpha += 3;          // fade-in speed
      if (this.alpha >= 255) {
        this.alpha = 255;
        this.state = "visible"; //bubble stays visible
      }
    }
         
    // popping state
    if (this.state === "popping") {
      this.alpha -= 8;          //fade-out speed
      this.popSize += 2;        // bigger size for pop
      if (this.alpha <= 0) {     
        this.alpha = 0;
        this.popSize = 0;
        this.respawn();      //when fully faded make new one
      }
    }
          
  }
  
  display() {
    fill(red(this.color), green(this.color), blue(this.color), this.alpha);
    ellipse(this.x, this.y, this.size + this.popSize);
  }

  // <-- fixed name + fixed radius math
  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    // this.size is diameter, so radius is this.size / 2
    return d < this.size / 2;
  }
}

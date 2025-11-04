

class Bubbles {

    constructor(parameters) {
        this.x = random(width); //x value is a random canvas width number 
        this.y = random(height); //y value is a random canvas height number 
        this.size = random(30, 120); //size is randomly between 30 120
        this.color = color(random(100,255), random(100,255), random(200,255)); // blue value (higher range = more blue/purple) 
        this.startTime = millis() + random (5000); // random delay before each circle starts fading
        this.speed = 3500; //how fast it fades and out
        this.alpha = 0; // Transparency (start invicible)
    }
    

     //Update function
    update () {
      
        // time passed / how long is it been active? 
      let tPassed = millis() - this.startTime;

      //cycle - fade in + fade out
      let cycle = this.speed * 3; 

      let r = tPassed % cycle; // "r" will always reset to 0 after a full cycle

      //repetition 

      
      //fade in is only works when the sketch is first running FIX THAT 

      //fade in
      if ( tPassed < this.speed) {
        this.alpha = map (r, 0, this.speed, 0, 255 ) // the value of r is mapped into a range between 0 & 255


      } 
      //fade out
      else {
        this.alpha = map (r, this.speed, cycle, 255, 0 ); // the value of r is mapped into a range between 255 & 0

      }

    }

    //Maybe bubbles could slowly move around the screen before fading 
    // I would need each bubble to start at a random point and slowly change each of the x and y values of each object in my array
    // I could use random() and give each one a small range for their movement but I would need to find a way for each to have their own range based of their initial possition 
    

    display () {
        
        fill(red(this.color), green(this.color), blue(this.color), this.alpha);
        ellipse(this.x, this.y, this.size);
    }
    
   /*

    //maybe this can be under update? 
    function pop () {

      // if circles are pressed then they will pop like bubbles 
      let value = 0 
  
      function doubleClicked() {
        // how can I specify which object and apply that to each object in my array? 
  
      }
    
    }
   
   */


   
}


class Particles {

    constructor(parameters) {
        this.x = random(width); //x value is a random canvas width number 
        this.y = random(height); //y value is a random canvas height number 
        this.size = random(30, 120); //size is randomly between 30 120
        //this.startTime ()
        this.speed = random(3000,7000); 
    
        //this.alpha = 

        this.color = color(random(100,255), random(100,255), random(200,255)); // didn't want colors to be too dark
        
    }
    

     //Update function
    update () {
      //let t = millis() - this.startTime;


    }

    
    display () {
        

         //add variables 
        fill(red(this.color), green(this.color), blue(this.color), this.alpha);
        ellipse(this.x, this.y, this.size);
    }
    
    
   


   
}

//how can I incorporate millis? 


class Particles {

    constructor(parameters) {
        this.x = random(width); //x value is a random canvas width number 
        this.y = random(height); //y value is a random canvas height number 
        this.size = random(30, 120); //size is randomly between 30 120
        //this.offset(1000);
        //this.speed = random(range in millisecons?) 
        //something to offset the start time of the circles here --->   
        //this.offset(1000);

        this.color = color(random(100,255), random(100,255), random(200,255)); // didn't want colors to be too dark
        
    }

    
    display () {
        let t = millis();
        //let alpha = ...

         //add variables 
        fill(red(this.color), green(this.color), blue(this.color), alpha);
        ellipse(this.x, this.y, this.size);
    }
    
    //maybe I should use an update function?
    //fadding overtime?
    //how can I incorporate millis? 

   
}
class Hammer { 
    /*
    constructor() {
        this.x;
        this.y;
        var options = {
            'restitution' : 0.5,
            'friction' : 1,
            'density' : 2
        }
        this.Hammer = Bodies.rectangle(this.x, this.y, 100, 20, options);
        World.add(world, this.Hammer);
    }
    display() {
        this.x = mouseX;
        this.y = mouseY;
        fill("red");
        rect(this.x, this.y, 100, 20);
    } */


    
    constructor(x,y)
    {
        var option={
            'restitution' : 0.8,
            'friction': 0.3,
            'density': 1
        }
        this.x = x;
        this.y = y;
        this.Hammer=Bodies.rectangle(this.x, this.y, 100, 20, option);
        World.add(world,this.Hammer);
        
        this.width=width;
        this.height=height;
    }

    display()
    {
        var pos=this.Hammer.position;
        var angle=this.Hammer.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(mouseX,mouseY,100,20);
        pop();    
    }
}
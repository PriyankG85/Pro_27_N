class Stone {
    constructor(x,y)
    {
        var option={
            'restitution' : 0.8,
            'friction': 0.3,
            'density': 1
        }
        this.body=Bodies.rectangle(x,y,80,80,option);
        World.add(world,this.body);
        
        this.width=width;
        this.height=height;
    }

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("black");
        rect(0,0,80,80);
        pop();     
    }
}
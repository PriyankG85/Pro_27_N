class Rubber { 

    constructor(x, y, r) {
        this.x=x;
        this.y=y;
        this.r=r;

        var options= {
            'restitution': 0.3,
            'friction': 5,
            'density': 1
        }

        this.Rubber = Bodies.circle(this.x, this.y, (this.r - 40), options);
        World.add(world, this.Rubber);
    }

    display() {
        var pos=this.Rubber.position;
        var angle=this.Rubber.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill('blue');
        // circle(0, 0, (this.r - 20) / 2);
        circle(0, 0, this.r);
        pop();
    }
}
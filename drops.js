class Drops{
    constructor(x,y,radius){
       var options={
           isStatic:false,
           restitution:0.2,
           friction:0.8
       }
       this.body = Matter.Bodies.circle(x,y,radius, options);
       this.x=x;
       this.y=y;
       this.radius=radius;
       World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var radius = this.body.radius;
        fill("BLUE");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, 10);   
    }
}
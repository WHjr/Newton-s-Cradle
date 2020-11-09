class Bob{
    constructor(x,y,radius){
        this.radius = radius;
        var options = {
            restitution : 1,
            density : 0.8,
            friction : 0.5
        }
        this.body = Bodies.circle(x,y,radius,options)
        World.add(world,this.body)
    }

    display(){
        stroke(255)
        var pos = this.body.position
        circle(pos.x,pos.y,2*this.radius)
    }
}

class BoxZ {
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.8
        }
        this.body=Bodies.rectangle(x,y,35,35,options)
        this.width=35;
        this.height=35;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle) ; 
        rectMode(CENTER);
        fill("blue");
        strokeWeight(4);
        stroke("yellow")
        rect(0,0,this.width,this.height);
        pop();
        
        }
    
}
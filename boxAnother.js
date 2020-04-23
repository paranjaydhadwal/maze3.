class BoxAno {
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.body=Bodies.rectangle(x,y,35,35,options)
        this.width=35;
        this.height=35;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        // push()
        // translate(pos.x,pos.y);
        // rotate(angle) ; 
        // rectMode(CENTER);
        // fill("orange");
        // strokeWeight(4);
        // stroke("brown");
        // rect(0,0,this.width,this.height);
        // pop();
        // }
        if(this.body.speed<3){
             
            push()
            translate(pos.x,pos.y);
            rotate(angle) ; 
            rectMode(CENTER);
            // fill("red");
            // strokeWeight(4);
            // stroke("yellow");
            fill("orange");
        strokeWeight(4);
        stroke("brown");
            this.visibility=this.visibilty-5
            tint(255,this.visibility);
            rect(0,0,this.width,this.height);
            pop();
        
               // rect(0,0,this.width,this.height);
                }
                else{
                  World.remove(world,this.body);
                  push();
                  this.visibility=this.visibilty-5
                  tint(255,this.visibility);
                  rect(0,0,this.width,this.height);
                  pop();
                }
            }
        }
    

class Bob {
    constructor (x,y,r){
        var options={
            istatic:false,
            restitution:0.3
           
        }
        this.body=Bodies.circle(x,y,r/2,options);
        this.x=x;
        this.y=y;
        this.r=r;
        World.add(world,this.body)
    }
    display() {
        var paperp=this.body.position;
        push ()
        translate (paperp.x,paperp.y);
        strokeWeight(3)
      
    
        
        fill("white")
        circle(0,0,this.r)
        pop ();
    }
    }
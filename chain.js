class rope{
    constructor(body1,body2,offsetX,offsetY) {
        this.offsetX=offsetX;
        this.offsetY=offsetY
        var options={
        bodyA:body1,
        bodyB:body2,
       pointB:{x:this.offsetX,y:this.offsetY}
        
        }
    this.sling=Con.create(options);
    
    World.add(world,this.sling);
    }
     
    display() {
       
        line (this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.bodyB.position.x,this.sling.bodyB.position.y)
       }
    }
    
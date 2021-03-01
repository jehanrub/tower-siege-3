class Slingshot{
    constructor(bodyA, pointB){       

        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.005,
            length:0.5
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null
    }

    attach(body){
        this.sling.bodyA = body
    }
        
    

    display(){
        if(this.sling.bodyA){
            var poiA = this.sling.bodyA.position;
            var poiB = this.pointB
    
            strokeWeight(3);
            stroke(0)
            line(poiA.x, poiA.y, poiB.x, poiB.y);
        }
    }
}
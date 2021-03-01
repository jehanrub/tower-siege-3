class Polygon{

    constructor(x,y,r){

      var options ={
        restitution:0,
        friction:1,
        density:1
      }
        this.body = Bodies.circle(50,200,20,options)
        this.r = 20
        this.image = loadImage('polygon.png')
        World.add(world,this.body)
      

    }
  
    display(){
      var pos = this.body.position
      push()
      translate(pos.x, pos.y);
      imageMode(CENTER)
      image(this.image,0,0,40,40)
      pop()
    }
}
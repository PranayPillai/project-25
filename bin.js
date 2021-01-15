class Bin{
    constructor(x,y,width,height){
      var options = {
          isStatic : true
      }
      this.x = x;
      this.y = y;
      this.height = 200;
      this.width = 200;
      this.wallThickness = 20;
      //this.body = Bodies.rectangle(x,y,width,height,options);
      this.image = loadImage("sprites/dustbingreen.png");

      this.bottomwall = Bodies.rectangle(x,y,this.width,this.wallThickness,options);
      this.leftwall = Bodies.rectangle(x - this.width/2,y - this.height/2,this.wallThickness,this.height,options);
      this.rightwall = Bodies.rectangle(x + this.width/2,y - this.height/2,this.wallThickness,this.height,options);

      World.add(world,this.bottomwall);
      World.add(world,this.leftwall);
      World.add(world,this.rightwall);

    }
    display(){

      imageMode(CENTER);
      image(this.image,this.x,this.y - this.height/2,this.width,this.height);

    }
}
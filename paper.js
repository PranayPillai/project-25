class Paper{
constructor(x,y,r){
    var options = {
        
        friction : 0.5,
        density : 0.197
    }
    this.x = x;
    this.y = y;
    this.r = r;
    this.image = loadImage("sprites/paper.png");
    this.body = Bodies.circle(this.x,this.y,1,options);
    
    

    World.add(world,this.body)
}
    display(){
        
        var pos = this.body.position;
        image
        push();
        translate(pos.x,pos.y);
        fill("blue")
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}


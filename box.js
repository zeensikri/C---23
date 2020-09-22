
class Box {
  constructor(x, y ) {
    var options = {
        'restitution':0.3,
        'friction':0.4,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, 85, 85, options);
    this.width = 85;
    this.height = 85;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(255);
    rect(0,0, this.width, this.height);
    pop();
  }
};

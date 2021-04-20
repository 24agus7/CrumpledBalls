class Paper {
    constructor(x, y, width, height,angle) {
      var options = {
        isStatic:false,
        'density':1.0,
        'friction': 0,
        'restitution':0.3
      };
      this.body = Bodies.rectangle(x, y, width,height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("paper.png");
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('blue')
      fill('red')
      imageMode(CENTER)
      image(this.image,50, 10, 40, 40);
      pop();
    };
  };

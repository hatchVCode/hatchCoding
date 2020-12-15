let balls = []; // Declare object 
function setup() {
  createCanvas(400, 400);
  // Create object
    for(var i = 0; i < balls.length; i++){
     balls[i] = new ball();
    }
}

function draw() {
  background(50, 89, 100);
  for(var j = 0; j < balls.length; j++){
    balls[j].move();
    balls[j].display();
  }
}

function mouseClicked() {
     balls.push(new ball());
}

class ball {
  constructor() {
    this.x = random(0, 400);
    this.y = random(0, 400);
    this.size = 10;
    this.xSpeed = 5;
    this.ySpeed = 5;
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if(this.x < 0 || this.x > 400){
      this.xSpeed = -this.xSpeed;
    }
    if(this.y < 0 || this.y > 400){
      this.ySpeed = -this.ySpeed;
    }
  }

  display() {
    fill(0);
    ellipse(this.x, this.y, this.size, this.size);
  }
}

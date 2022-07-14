class Snake { 
  


  constructor() {
  	this.body = [];
    this.body[0] = createVector(floor(w/2), floor(h/2));
    this.xdir = 0;
    this.ydir = 0;
    this.len = 0;
    this.foodx = 0;
    this.foody = 0;
    this.falsething = 0;
    var start;
    end;    
    this.astarendx = 0;
    this.astarendy = 0;

  }
  
  setDir(x, y) {
  	this.xdir = x;
    this.ydir = y;
  }
  
  update() {
    fill(0, 255, 0);
  	let head = this.body[this.body.length-1].copy();
    this.body.shift();
    head.x += this.xdir;
    head.y += this.ydir;
    this.body.push(head);

    try{
    start = grid[head.x][head.y]
    }catch{
    }

    console.log('head position', head.x, head.y);

    try{
    console.log ('grid pos of head', grid[head.x][head.y]);
    }catch{
    }

    
    

    console.log('body length', this.body.length)
  }
  
  grow() {
    openSet.push(start)
    console.log('start', start)
  	let head = this.body[this.body.length-1].copy();
    this.len++;
    this.body.push(head);
  }
  
  endGame() {
  	let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    if(x > w-1 || x < 0 || y > h-1 || y < 0) {
       return true;
    }
    for(let i = 0; i < this.body.length-1; i++) {
    	let part = this.body[i];
      if(part.x == x && part.y == y) {
      	return true;
      }
    }
    return false;
  }
  
  eat(pos) {
  	let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    console.log('food position', pos.x , pos.y)
    this.astarendx = pos.x;
    this.astarendy = pos.y;

    
    if(x == pos.x && y == pos.y) {
      this.grow();
      return true;
      ;
    }
    return false;
  }
  
  show() {
  	for(let i = 0; i < this.body.length; i++) {
    	fill(180, 218, 85);
      noStroke();
      rect(this.body[i].x, this.body[i].y, 1, 1)
    }
  
  }



  randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }



  foodcheck() {

    this.falsething = 0;
    
    while(this.falsething = 0); {

    this.foodx = Math.round(this.randomNumber(0, 19));
    this.foody = Math.round(this.randomNumber(0, 19));

    console.log("random numbers", this.foodx, this.foody)
    let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;


    for(let i = 0; i < this.body.length-1; i++) {
      let part = this.body[i]
      if(this.foodx == part.x && this.foody == part.y) {
        this.falsething = 0;
      } else
      this.falsething = 1;
    }
    }

    }

  wingame() {
    if(this.body.length == 400) {
      return true;
      ;
    }
    return false;
  }

  

}
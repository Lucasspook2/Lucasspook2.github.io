// Daniel Shiffman
// http://youtube.com/thecodingtrain
// http://codingtra.in

// Coding Challenge #115: Snake Game Redux
// https://youtu.be/OMoVcohRgZA

function removeFromArray(arr, elt) {
  for (var i = arr.length-1; i>=0; i--){
    if (arr[i] == elt) {
      arr.splice(i, 1); 
    }
  }
}





let snake;
let rez = 20;
let food;
var w;
var h;
var cols = 20;
var rows = 20;
var grid = new Array(cols);
var start;
var end;
var frame = 0;
var path = []; 

var pathdone = 0;

var openSet = [];
var closedSet = [];




function Spot(i,j) {
  this.i = i; //this is just another way of saying x and y 
  this.j = j; // i = x cood j = y cood 
  this.f = 0;
  this.g = 0;
  this.h = 0;
  this.neighbours = [];
  //this.show = function() {
    //fill(137, 207, 240);
     //stroke(0);
  //rect(this.x*w/2, this.y*h/2, w/20, h/20);

  //}

  this.addNeighbours = function(grid){
    var i = this.i;
    var j = this.j; 
  if (i < cols-1){
    this.neighbours.push(grid[i + 1][j])
   }
   if (i > 0){
    this.neighbours.push(grid[i - 1][j])
   }
    if (j < rows-1){
    this.neighbours.push(grid[i][j + 1])
   }
    if (j > 0){
    this.neighbours.push(grid[i][j - 1])
  }
  }
}

this.addEnd = function(grid){
  var i = this.i;
  var j = this.j;

}

function setup() {
  createCanvas(400, 400);

  
  //defining the what font to use (the one imported in function preload()
  //what text size to use (trial and error to fit on canvas)

 

  
 //console.log('A*')

 w = width / cols;
 h = height / rows;


  for (var i = 0; i < cols; i++){
  grid[i] = new Array(rows);
  }

  for (var i = 0; i < cols; i++){
    for (var j = 0; j < rows; j++){
  grid[i][j] = new Spot(i,j);
  }
}

for (var i = 0; i < cols; i++){
    for (var j = 0; j < rows; j++){
  grid[i][j].addNeighbours(grid);
  }
}
 


 // console.log(grid);

  createCanvas(400,400)
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(1);
  snake = new Snake();
  foodLocation();

pause = 0;

}

function foodLocation() {


  snake.foodcheck()


  food = createVector(snake.foodx, snake.foody);
  end = grid[snake.foodx, snake.foody];
  //console.log("end = ", end)


  

  //console.log('FOOD GENERATED (foodLocation)')
  //various console.log's to aid in debugging
  //shows what parts of the program is running 
  //also records data such as head position 
}







 



function keyPressed() {

 // console.log('keyPressed')

  if (key === 'a'){
    snake.setDir(-1, 0);//left
  } else if (key === 'd') {
    snake.setDir(1, 0);//right
  } else if (key === 's') {
    snake.setDir(0, 1);//down
  } else if (key === 'w') {
    snake.setDir(0, -1);//up
  } else if (key == ' ') {
    snake.grow();
  }

}




function draw() {
 // console.log('draw')
  scale(rez);
  background(137, 207, 240);

  textAlign(CENTER)

  //calls on function drawWords to write the title 

 // console.log("food location should be ", snake.foodx, snake.foody)

  snake.foodcheck()

  


  
  

 // console.log('frame:', frame)

 //for(var i = 0; i < cols; i++) {
   //for(var j = 0; j< rows; j++ ){
     //grid[i][j].show();
    //}
  // }



  if (snake.eat(food)) {
    foodLocation();
    

}
  snake.update();
  snake.show();


  if (snake.endGame()) {
    print("END GAME");
    background(244, 32, 105);
    drawWords()
    noLoop();
  }

  if (snake.wingame()) {
    print("congrats");
    background(180, 218, 85);
    drawWords();
    noLoop();

  }

  noStroke();
 
  fill(244, 32, 105);
  rect(food.x, food.y, 1, 1);
  end = [food.x][food.y];

  frame++

}

  
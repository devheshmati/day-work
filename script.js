var frame = document.getElementById('frame');
var blockSize = 25;
var cols = 21;
var rows = 21;
var ctx;
var velocityX = 0;
var velocityY = 0;
var food = {
  x: 0,
  y: 0,
};
var snake = {
  x: 0,
  y: 0,
  body: [],
}

window.onload = function() {
  ctx = frame.getContext('2d');
  // resize frame
  frame.width = cols * blockSize;
  frame.height = rows * blockSize;

  // food and snake spawn positions generated
  placeRandom(food);
  placeRandom(snake);

  // key action
  document.addEventListener('keyup', moveHandler);

  setInterval(update, 1000/10);
}

function update() {
  // black screen
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, frame.width, frame.height);

  // food spawn rendered
  ctx.fillStyle = 'red';
  ctx.fillRect(food.x, food.y, blockSize, blockSize);

  // snake growing

  // snake spawn rendered
  ctx.fillStyle = 'green';
  snake.x += velocityX * blockSize;
  snake.y += velocityY * blockSize;
  ctx.fillRect(snake.x, snake.y, blockSize, blockSize);

  // snake eating food
  if(snake.x == food.x && snake.y == food.y){
    placeRandom(food);
    snake.body.push([food.x, food.y])
    console.log(snake.body);
  }

  // snake crash head with wall
  if(snake.x < 0 || snake.y < 0 || snake.x >= cols * blockSize || snake.y >= rows * blockSize) {
    gameOver('You lose, Snake head crash happend!');
  }

  // snake crash head with body
}

function placeRandom(obj) {
 obj.x = Math.floor(Math.random() * cols) * blockSize;
 obj.y = Math.floor(Math.random() * rows) * blockSize;
}

function moveHandler(e) {
  if(e.code == 'ArrowLeft') {
    velocityX = -1;
    velocityY = 0;
  } else if(e.code == 'ArrowRight') {
    velocityX = 1;
    velocityY = 0;
  } else if(e.code == 'ArrowUp') {
    velocityX = 0;
    velocityY = -1;
  } else if(e.code == 'ArrowDown') {
    velocityX = 0;
    velocityY = 1;
  }
}

function gameOver(str) {
  alert(str);
  return;
}

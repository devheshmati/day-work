var frame;
var ctx;
var cols = 21;
var rows = 21;
var blockSize = 25;
var velocityX = 0;
var velocityY = 0; 
var snake = {
  pos: {
    x: 0,
    y: 0,
  },
  body: [],
}
var food = {
  pos: {
    x: 0,
    y: 0,
  }
}

window.onload = function() {
  // frame created
  frame = document.getElementById('frame');
  ctx = frame.getContext('2d');
  frame.width = cols * blockSize;
  frame.height = rows * blockSize;

  // spawn position of food and snake
  placeRandom(food);
  placeRandom(snake);
  
  document.addEventListener('keyup', moveHandler);

  setInterval(update, 1000 / 10);
}

function update() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, frame.width, frame.height);

  // snake eating food
  if(snake.pos.x == food.pos.x && snake.pos.y == food.pos.y) {
    snake.body.push([food.pos.x, food.pos.y]);
    placeRandom(food);
  }

  // body follow head 
  for(let i = snake.body.length - 1; i > 0; i--) {
    snake.body[i] = snake.body[i-1];
  }

  if(snake.body.length) {
    snake.body[0] = [snake.pos.x, snake.pos.y];
  } 

  // render foods
  ctx.fillStyle = 'red';
  ctx.fillRect(food.pos.x, food.pos.y, blockSize, blockSize);

  // render snake
  ctx.fillStyle = 'green';
  snake.pos.x += velocityX * blockSize;
  snake.pos.y += velocityY * blockSize;
  ctx.fillRect(snake.pos.x, snake.pos.y, blockSize, blockSize);
  // render snake body
  for(let i = 0; i < snake.body.length; i++) {
    ctx.fillRect(snake.body[i][0], snake.body[i][1], blockSize, blockSize);
  }

  // how get lose
  // head crash
  if(snake.pos.x < 0 || snake.pos.y < 0 || snake.pos.x >= cols * blockSize || snake.pos.y >= rows * blockSize) {
    gameOver('You lose, Snake head crash happend!');
  }

  // body crash 
  for(let i = 0; i < snake.body.length; i++) {
    if(snake.pos.x == snake.body[i][0] && snake.pos.y == snake.body[i][1]) {
      gameOver('You lose, Snake body crash happend!')
    }
  }
}

function placeRandom(obj) {
  obj.pos.x = Math.floor(Math.random() * cols) * blockSize;
  obj.pos.y = Math.floor(Math.random() * rows) * blockSize;
}

function moveHandler(e) {
  let code = e.code;
  if(code == 'ArrowUp') {
    velocityX = 0;
    velocityY = -1;
  } else if(code == 'ArrowDown') {
    velocityX = 0;
    velocityY = 1;
  } else if(code == 'ArrowLeft') {
    velocityX = -1;
    velocityY = 0;
  } else if(code == 'ArrowRight') {
    velocityX = 1;
    velocityY = 0;
  }
}

function gameOver(str) {
  alert(str);
  return;
}

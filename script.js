var frame = document.getElementById('frame');
var blockSize = 25;
var cols = 21;
var rows = 21;
var ctx;
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

  setInterval(update, 1000/10);
}

function update() {
  // black screen
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, frame.width, frame.height);

  // food spawn rendered
  ctx.fillStyle = 'red';
  ctx.fillRect(food.x, food.y, blockSize, blockSize);

  // snake spawn rendered
  ctx.fillStyle = 'green';
  ctx.fillRect(snake.x, snake.y, blockSize, blockSize);
}

function placeRandom(obj) {
 obj.x = Math.floor(Math.random() * cols) * blockSize;
 obj.y = Math.floor(Math.random() * rows) * blockSize;
}

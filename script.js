let frame, ctx, blockSize, cols, rows, velocityX, velocityY, snake, food;

window.onload = () => {
  frame = document.getElementById("frame");
  ctx = frame.getContext('2d');
  blockSize = 25;
  cols = 21;
  rows = 21;
  velocityX = 0;
  velocityY = 0;
  snake = {
    name: 'snake',
    head: {
      pos: {
        x: 0,
        y: 0,
      },
    },
    body: [],
  };
  food = {
    name: 'food',
    pos: {
      x: 0,
      y: 0,
    },
  };

  // set frame size
   frame.width = cols * blockSize;
   frame.height = rows * blockSize;
  
  // render blackScren
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, cols * blockSize, rows * blockSize);
  
  // spawn food
  randomPlace(food);
  ctx.fillStyle = 'red';
  ctx.fillRect(food.pos.x, food.pos.y, blockSize, blockSize);

  // spawn snake 
  randomPlace(snake);
  ctx.fillStyle = 'lime';
  ctx.fillRect(snake.head.pos.x, snake.head.pos.y, blockSize, blockSize);

  setInterval(update, 1000 / 10);
};

function update() {
  //create background frame
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, cols * blockSize, rows * blockSize);

  // food render
  ctx.fillStyle = 'red';
  ctx.fillRect(food.pos.x, food.pos.y, blockSize, blockSize);

  // snake render
  ctx.fillStyle = 'lime';
  ctx.fillRect(snake.head.pos.x, snake.head.pos.y, blockSize, blockSize);
}

function randomPlace(obj) {
  if(obj.name === 'food') {
    obj.pos.x = Math.floor(Math.random() * cols) * blockSize;
    obj.pos.y = Math.floor(Math.random() * rows) * blockSize;
  } else if (obj.name === 'snake') {
    obj.head.pos.x = Math.floor(Math.random() * cols) * blockSize;
    obj.head.pos.y = Math.floor(Math.random() * rows) * blockSize;
  }
}

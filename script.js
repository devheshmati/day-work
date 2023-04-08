let frame, ctx, blockSize, cols, rows, velocityX, velocityY, snake, food;

window.onload = () => {
  frame = document.getElementById("frame");
  ctx = frame.getContext("2d");
  blockSize = 25;
  cols = 21;
  rows = 21;
  velocityX = 0;
  velocityY = 0;
  snake = {
    name: "snake",
    head: {
      pos: {
        x: 0,
        y: 0,
      },
    },
    body: [],
  };
  food = {
    name: "food",
    pos: {
      x: 0,
      y: 0,
    },
  };

  // set frame size
  frame.width = cols * blockSize;
  frame.height = rows * blockSize;

  // render blackScren
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cols * blockSize, rows * blockSize);

  // spawn food
  randomPlace(food);
  ctx.fillStyle = "red";
  ctx.fillRect(food.pos.x, food.pos.y, blockSize, blockSize);

  // spawn snake
  randomPlace(snake);
  ctx.fillStyle = "lime";
  ctx.fillRect(snake.head.pos.x, snake.head.pos.y, blockSize, blockSize);

  // arrow key handler
  window.addEventListener("keyup", arrowKeyHandler);

  setInterval(update, 1000 / 10);
};

function update() {
  //create background frame
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cols * blockSize, rows * blockSize);

  // body follow the head
  for (let i = snake.body.length - 1; i > 0; i--) {
    snake.body[i] = snake.body[i - 1];
  }

  if (snake.body.length > 0) {
    snake.body[0] = { x: snake.head.pos.x, y: snake.head.pos.y };
  }

  // eating food
  if (snake.head.pos.x === food.pos.x && snake.head.pos.y === food.pos.y) {
    eating(snake, food);
  }
  // food render
  ctx.fillStyle = "red";
  ctx.fillRect(food.pos.x, food.pos.y, blockSize, blockSize);

  // snake render
  snake.head.pos.x += velocityX * blockSize;
  snake.head.pos.y += velocityY * blockSize;
  ctx.fillStyle = "lime";
  ctx.fillRect(snake.head.pos.x, snake.head.pos.y, blockSize, blockSize);

  // snake body
  if (snake.body.length > 0) {
    for (let i = 0; i < snake.body.length; i++) {
      ctx.fillStyle = "green";
      ctx.fillRect(snake.body[i].x, snake.body[i].y, blockSize, blockSize);
    }
  }
  // conditions
  if (
    snake.head.pos.x < 0 ||
    snake.head.pos.y < 0 ||
    snake.head.pos.x >= cols * blockSize ||
    snake.head.pos.y >= rows * blockSize
  ) {
    crash("Head");
  }

  if (snake.body.length > 0) {
    for (let i = 0; i < snake.body.length; i++) {
      if (
        snake.head.pos.x === snake.body[i].x &&
        snake.head.pos.y === snake.body[i].y
      ) {
        crash("Body");
      }
    }
  }
}

function randomPlace(obj) {
  if (obj.name === "food") {
    obj.pos.x = Math.floor(Math.random() * cols) * blockSize;
    obj.pos.y = Math.floor(Math.random() * rows) * blockSize;
  } else if (obj.name === "snake") {
    obj.head.pos.x = Math.floor(Math.random() * cols) * blockSize;
    obj.head.pos.y = Math.floor(Math.random() * rows) * blockSize;
  }
}

function arrowKeyHandler(e) {
  if (e.key === "ArrowUp") {
    velocityX = 0;
    velocityY = -1;
  } else if (e.key === "ArrowDown") {
    velocityX = 0;
    velocityY = 1;
  } else if (e.key === "ArrowLeft") {
    velocityX = -1;
    velocityY = 0;
  } else if (e.key === "ArrowRight") {
    velocityX = 1;
    velocityY = 0;
  }
}

function eating(objSnake, objFood) {
  objSnake.body.push({ x: food.pos.x, y: food.pos.y });
  randomPlace(objFood);
}

function crash(str) {
  alert(str + " crash happend!");
  return;
}

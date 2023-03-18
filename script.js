var frame;
var ctx;
var cols = 21;
var rows = 21;
var blockSize = 25;

window.onload = function() {
  // frame created
  frame = document.getElementById('frame');
  ctx = frame.getContext('2d');
  frame.width = cols * blockSize;
  frame.height = rows * blockSize;

  setInterval(update, 1000/10);
}

function update() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, frame.width, frame.height);
}

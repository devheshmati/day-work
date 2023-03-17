var frame = document.getElementById('frame');
var blockSize = 25;
var cols = 21;
var rows = 21;
var ctx;

window.onload = function() {
  ctx = frame.getContext('2d');
  // resize frame
  frame.width = cols * blockSize;
  frame.height = rows * blockSize;

  // black screen
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, frame.width, frame.height);
}

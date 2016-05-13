
var xPosition = 0
var base_image;
window.addEventListener("keydown", keyboard, false);
window.addEventListener("keypress", keyboard, false);
window.addEventListener("keyup", keyboard, false);

function keyboard(e) {
  console.log(e.keyCode)
  if (e.keyCode === 37) {
    xPosition-=5;
    console.log(xPosition);
    clear();
    drawTyler();

  }

   if (e.keyCode === 39) {
    xPosition+=5;
    console.log(xPosition)
    clear();
    drawTyler();

  }
}

var canvas = document.getElementById('viewport'),
context = canvas.getContext('2d');
drawTyler();

function clear() {
  context.clearRect(0, 0, 500, 500);
}

function drawTyler()
{
  base_image = new Image();
  base_image.src = 'tyler_small.png';
  base_image.onload = function(){
  context.drawImage(base_image, xPosition, 0);
  }
}

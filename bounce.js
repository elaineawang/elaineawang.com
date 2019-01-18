$(window).ready(function() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  var x = canvas.width / 2;
  var y = canvas.height / 2;
  var ballRadius = 8;
  var dx = 2;
  var dy = -2;

  var color = getRandomColor();

  function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();

    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
      color = getRandomColor();
      dx = -dx;
    }
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
      color = getRandomColor();
      dy = -dy;
    }
  }

  function convertToColor(num) {
    return "#" + num.toString(16);
  }

  function getRandomColor() {
    number = Math.floor(Math.random() * 16777215);
    color = convertToColor(number);
    return color;
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
  }
  setInterval(draw, 4);
});

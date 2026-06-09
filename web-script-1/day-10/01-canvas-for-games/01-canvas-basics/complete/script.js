// =====================================
// Demo 1: Canvas Basics
// =====================================

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const playerStart = {
  x: 40,
  y: 80,
  width: 40,
  height: 40,
  speed: 20,
  color: "#2563eb"
};

const player = {
  x: playerStart.x,
  y: playerStart.y,
  width: playerStart.width,
  height: playerStart.height,
  speed: playerStart.speed,
  color: playerStart.color
};

function drawScene() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#e2e8f0";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw the grid.
  // This first loop draws vertical lines.
  // It starts at x = 0 and increases x by 40 each time.
  // That means the loop draws a line at x = 0, 40, 80, 120, and so on.
  // For each x value, we draw one line from the top of the canvas to the bottom.
  ctx.strokeStyle = "#94a3b8";
  ctx.lineWidth = 1;

  for (let x = 0; x <= canvas.width; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }

  // This second loop draws horizontal lines.
  // It starts at y = 0 and increases y by 40 each time.
  // That means the loop draws a line at y = 0, 40, 80, 120, and so on.
  // For each y value, we draw one line from the left side to the right side.
  // Together, the two loops create a full grid.
  for (let y = 0; y <= canvas.height; y += 40) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }

  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);

  ctx.fillStyle = "#0f172a";
  ctx.font = "14px Arial";
  ctx.fillText(`x: ${player.x}, y: ${player.y}`, 12, 22);
  ctx.fillText("Canvas origin is the top-left corner (0, 0)", 12, canvas.height - 12);
}

function movePlayer(dx, dy) {
  player.x += dx * player.speed;
  player.y += dy * player.speed;

  if (player.x < 0) player.x = 0;
  if (player.y < 0) player.y = 0;
  if (player.x > canvas.width - player.width) player.x = canvas.width - player.width;
  if (player.y > canvas.height - player.height) player.y = canvas.height - player.height;

  drawScene();
}

function resetPlayer() {
  player.x = playerStart.x;
  player.y = playerStart.y;
  drawScene();
}

document.getElementById("upBtn").addEventListener("click", function () {
  movePlayer(0, -1);
});

document.getElementById("downBtn").addEventListener("click", function () {
  movePlayer(0, 1);
});

document.getElementById("leftBtn").addEventListener("click", function () {
  movePlayer(-1, 0);
});

document.getElementById("rightBtn").addEventListener("click", function () {
  movePlayer(1, 0);
});

document.getElementById("resetBtn").addEventListener("click", resetPlayer);

drawScene();

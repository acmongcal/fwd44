// =====================================
// Demo 1 Starter: Canvas Basics
// Fill in the TODO sections.
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
  // TODO 1: clear the canvas

  // TODO 2: draw the background rectangle

  // TODO 3: use a loop to draw vertical grid lines every 40 pixels

  // TODO 4: use another loop to draw horizontal grid lines every 40 pixels

  // TODO 5: draw the player rectangle

  // TODO 6: draw the coordinate text
}

function movePlayer(dx, dy) {
  // TODO 7: update player.x and player.y using speed

  // TODO 8: keep the rectangle inside the canvas bounds

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

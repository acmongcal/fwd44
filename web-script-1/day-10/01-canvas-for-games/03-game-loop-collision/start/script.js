// =====================================
// Demo 3 Starter: Game Loop + Collision Detection
// Fill in the TODO sections.
// =====================================

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const statusText = document.getElementById("statusText");
const scoreText = document.getElementById("scoreText");

const heroStart = {
  x: 40,
  y: 120,
  width: 36,
  height: 36,
  speed: 220,
  color: "#16a34a"
};

let hero = {
  x: heroStart.x,
  y: heroStart.y,
  width: heroStart.width,
  height: heroStart.height,
  speed: heroStart.speed,
  color: heroStart.color
};

let enemies = [];
let keys = {};
let animationId = null;
let lastTime = 0;
let spawnTimer = 0;
let score = 0;
let running = false;
let gameOver = false;

function updateStatus() {
  // TODO 1: show current status and score
}

function drawGame() {
  // TODO 2: clear and draw the background
  // TODO 3: draw the hero rectangle
  // TODO 4: use a loop to draw each enemy in the enemies array
  // TODO 5: draw helper text and optional game over message
}

function rectanglesOverlap(rect1, rect2) {
  // TODO 6: return true when the rectangles overlap
  // Hint: compare the left, right, top, and bottom edges.
}

function updateGame(deltaTime) {
  // TODO 7: move the hero with the arrow keys
  // TODO 8: keep the hero inside the canvas
  // TODO 9: spawn a new enemy every 1 second
  // TODO 10: move enemies left
  // TODO 11: remove enemies that move off screen
  // TODO 12: check collisions with rectanglesOverlap()
}

function gameLoop(timestamp) {
  // TODO 13: calculate deltaTime
  // TODO 14: call updateGame and drawGame
  // TODO 15: request the next frame if running
}

function startGame() {
  // TODO 16: start the loop
}

function pauseGame() {
  // TODO 17: pause the loop
}

function resetGame() {
  // TODO 18: restore the full starting state
}

document.getElementById("startBtn").addEventListener("click", startGame);
document.getElementById("pauseBtn").addEventListener("click", pauseGame);
document.getElementById("resetBtn").addEventListener("click", resetGame);

document.addEventListener("keydown", function (event) {
  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
    event.preventDefault();
    keys[event.key] = true;
  }
});

document.addEventListener("keyup", function (event) {
  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
    event.preventDefault();
    keys[event.key] = false;
  }
});

drawGame();

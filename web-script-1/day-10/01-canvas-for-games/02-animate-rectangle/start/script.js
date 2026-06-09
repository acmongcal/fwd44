// =====================================
// Demo 2 Starter: Animate a Rectangle
// Fill in the TODO sections.
// =====================================

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const statusText = document.getElementById("statusText");
const directionText = document.getElementById("directionText");

const boxStart = {
  x: 40,
  y: 100,
  width: 60,
  height: 40,
  speedX: 180,
  color: "#7c3aed"
};

let box = {
  x: boxStart.x,
  y: boxStart.y,
  width: boxStart.width,
  height: boxStart.height,
  speedX: boxStart.speedX,
  color: boxStart.color
};

let animationId = null;
let lastTime = 0;
let running = false;

function updateStatus() {
  // TODO 1: show running or press start
  // TODO 2: show current direction based on speedX
}

function drawScene() {
  // TODO 3: clear the canvas
  // TODO 4: draw the background
  // TODO 5: draw the box
  // TODO 6: draw helper text
}

function updateBox(deltaTime) {
  // TODO 7: move the box using speedX * deltaTime
  // Why delta time instead of +2 pixels per frame?
  // Because different computers may run different numbers of frames each second.
  // Time-based movement is more consistent.

  // TODO 8: bounce at the right edge
  // TODO 9: bounce at the left edge
}

function animate(timestamp) {
  // TODO 10: set lastTime on the first frame
  // TODO 11: calculate deltaTime in seconds
  // TODO 12: call updateBox, updateStatus, drawScene
  // TODO 13: request the next frame if running is true
}

function startAnimation() {
  // TODO 14: start the loop
}

function pauseAnimation() {
  // TODO 15: pause the loop
}

function resetAnimation() {
  // TODO 16: reset everything to the starting state
}

document.getElementById("startBtn").addEventListener("click", startAnimation);
document.getElementById("pauseBtn").addEventListener("click", pauseAnimation);
document.getElementById("resetBtn").addEventListener("click", resetAnimation);

drawScene();

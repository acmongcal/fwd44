// =====================================
// Demo 2: Animate a Rectangle
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
  statusText.textContent = running ? "Status: Running" : "Status: Press Start";
  directionText.textContent = box.speedX > 0 ? "Direction: Right" : "Direction: Left";
}

function drawScene() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ede9fe";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = box.color;
  ctx.fillRect(box.x, box.y, box.width, box.height);
  ctx.fillStyle = "#0f172a";
  ctx.font = "14px Arial";
  ctx.fillText("The rectangle moves automatically in the loop.", 12, 22);
  ctx.fillText("When it hits an edge, it bounces back.", 12, 42);
}

function updateBox(deltaTime) {
  // Why use delta time?
  // deltaTime tells us how much real time passed since the last frame.
  // If one computer runs at 60 frames per second and another runs at 120,
  // moving by a fixed amount like +2 pixels every frame would make the box
  // move at different speeds on different computers.
  // By multiplying speed by deltaTime, movement is based on time instead of frame count.
  // That makes the animation more consistent.
  box.x += box.speedX * deltaTime;

  if (box.x + box.width >= canvas.width) {
    box.x = canvas.width - box.width;
    box.speedX *= -1;
  }

  if (box.x <= 0) {
    box.x = 0;
    box.speedX *= -1;
  }
}

function animate(timestamp) {
  if (!lastTime) {
    lastTime = timestamp;
  }

  // timestamp is in milliseconds.
  // deltaTime converts the time gap between frames into seconds.
  const deltaTime = (timestamp - lastTime) / 1000;
  lastTime = timestamp;

  updateBox(deltaTime);
  updateStatus();
  drawScene();

  if (running) {
    animationId = requestAnimationFrame(animate);
  }
}

function startAnimation() {
  if (running) return;
  running = true;
  lastTime = 0;
  updateStatus();
  animationId = requestAnimationFrame(animate);
}

function pauseAnimation() {
  if (!running) return;
  running = false;
  cancelAnimationFrame(animationId);
  animationId = null;
  statusText.textContent = "Status: Paused";
}

function resetAnimation() {
  running = false;
  cancelAnimationFrame(animationId);
  animationId = null;
  lastTime = 0;

  box = {
    x: boxStart.x,
    y: boxStart.y,
    width: boxStart.width,
    height: boxStart.height,
    speedX: boxStart.speedX,
    color: boxStart.color
  };

  updateStatus();
  drawScene();
}

document.getElementById("startBtn").addEventListener("click", startAnimation);
document.getElementById("pauseBtn").addEventListener("click", pauseAnimation);
document.getElementById("resetBtn").addEventListener("click", resetAnimation);

updateStatus();
drawScene();

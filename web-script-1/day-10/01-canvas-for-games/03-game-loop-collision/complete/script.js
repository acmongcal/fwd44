// =====================================
// Demo 3: Game Loop + Collision Detection
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
  let status = "Press Start";
  if (running) status = "Running";
  else if (gameOver) status = "Game Over";

  statusText.textContent = `Status: ${status}`;
  scoreText.textContent = `Score: ${score}`;
}

function drawGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#eff6ff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#cbd5e1";
  for (let x = 0; x < canvas.width; x += 40) {
    ctx.fillRect(x, 0, 2, canvas.height);
  }

  ctx.fillStyle = hero.color;
  ctx.fillRect(hero.x, hero.y, hero.width, hero.height);

  for (let i = 0; i < enemies.length; i++) {
    const enemy = enemies[i];
    ctx.fillStyle = enemy.color;
    ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
  }

  ctx.fillStyle = "#0f172a";
  ctx.font = "14px Arial";
  ctx.fillText(`Score: ${score}`, 12, 20);
  ctx.fillText("Use arrow keys to move the hero", 12, canvas.height - 12);

  if (gameOver) {
    ctx.fillStyle = "rgba(15, 23, 42, 0.7)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.font = "bold 30px Arial";
    ctx.fillText("Collision!", 170, 120);
    ctx.font = "16px Arial";
    ctx.fillText("Press Reset to try again.", 160, 150);
  }
}

function rectanglesOverlap(rect1, rect2) {
  // A collision happens only if the rectangles overlap on both axes.
  // Horizontal checks:
  // 1. rect1.x < rect2.x + rect2.width
  //    rect1's left side must be left of rect2's right side.
  // 2. rect1.x + rect1.width > rect2.x
  //    rect1's right side must be right of rect2's left side.
  // Vertical checks:
  // 3. rect1.y < rect2.y + rect2.height
  //    rect1's top must be above rect2's bottom.
  // 4. rect1.y + rect1.height > rect2.y
  //    rect1's bottom must be below rect2's top.
  // If all four are true at the same time, the rectangles overlap.
  return (
    rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y
  );
}

function updateGame(deltaTime) {
  if (keys.ArrowUp) hero.y -= hero.speed * deltaTime;
  if (keys.ArrowDown) hero.y += hero.speed * deltaTime;
  if (keys.ArrowLeft) hero.x -= hero.speed * deltaTime;
  if (keys.ArrowRight) hero.x += hero.speed * deltaTime;

  if (hero.x < 0) hero.x = 0;
  if (hero.y < 0) hero.y = 0;
  if (hero.x > canvas.width - hero.width) hero.x = canvas.width - hero.width;
  if (hero.y > canvas.height - hero.height) hero.y = canvas.height - hero.height;

  spawnTimer += deltaTime;
  if (spawnTimer >= 1) {
    spawnTimer = 0;

    const enemyHeight = 28 + Math.random() * 28;
    const enemy = {
      x: canvas.width + 10,
      y: Math.random() * (canvas.height - enemyHeight),
      width: 28 + Math.random() * 24,
      height: enemyHeight,
      speed: 110 + Math.random() * 110,
      color: "#dc2626"
    };

    enemies.push(enemy);
    score++;
    updateStatus();
  }

  for (let i = 0; i < enemies.length; i++) {
    enemies[i].x -= enemies[i].speed * deltaTime;
  }

  enemies = enemies.filter(function (enemy) {
    return enemy.x + enemy.width > 0;
  });

  for (let i = 0; i < enemies.length; i++) {
    if (rectanglesOverlap(hero, enemies[i])) {
      gameOver = true;
      running = false;
      cancelAnimationFrame(animationId);
      animationId = null;
      updateStatus();
      return;
    }
  }
}

function gameLoop(timestamp) {
  if (!lastTime) lastTime = timestamp;
  const deltaTime = (timestamp - lastTime) / 1000;
  lastTime = timestamp;

  updateGame(deltaTime);
  drawGame();

  if (running && !gameOver) {
    animationId = requestAnimationFrame(gameLoop);
  }
}

function startGame() {
  if (running || gameOver) return;
  running = true;
  lastTime = 0;
  updateStatus();
  animationId = requestAnimationFrame(gameLoop);
}

function pauseGame() {
  if (!running) return;
  running = false;
  cancelAnimationFrame(animationId);
  animationId = null;
  statusText.textContent = "Status: Paused";
}

function resetGame() {
  running = false;
  gameOver = false;
  cancelAnimationFrame(animationId);
  animationId = null;

  hero = {
    x: heroStart.x,
    y: heroStart.y,
    width: heroStart.width,
    height: heroStart.height,
    speed: heroStart.speed,
    color: heroStart.color
  };

  enemies = [];
  keys = {};
  lastTime = 0;
  spawnTimer = 0;
  score = 0;

  updateStatus();
  drawGame();
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

updateStatus();
drawGame();

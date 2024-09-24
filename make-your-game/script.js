import EnemyChar from "./EnemyCntrl.js";
import Spacehip from "./Spaceship.js";
<<<<<<< HEAD

const canvas = document.getElementById("game-area");
const ctx = canvas.getContext("2d");
canvas.width = 1100;
canvas.height = 1000;
=======
>>>>>>> basmas

// const spaceshipImage = new Image();
// spaceshipImage.src = "/imgs/spaceship.png";

<<<<<<< HEAD
// // Initial spaceship position
// let spaceshipX = canvas.width / 2;
// const spaceshipY = 420;
// const spaceshipWidth = 80;
// const spaceshipHeight = 80;
const step = 10; // Movement step size

// Instantiate EnemyChar instead of a single enemy
const enemies = new EnemyChar(canvas);
const spaceship = new Spaceship(canvas)

function game() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the grid of enemies
  enemies.draw(ctx);

  spaceship.draw(ctx)

  // ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY, spaceshipWidth, spaceshipHeight);

  // Continue the game loop
=======
const enemies = new EnemyChar();
const spaceship= new Spacehip();

// Initial spaceship position
const spaceshipY = 420;
const spaceshipWidth = 80;
const spaceshipHeight = 80;
const step = 10; // Movement step size


function game() {
  enemies.updateEnemyPositions()
>>>>>>> basmas
  requestAnimationFrame(game);
}

// Handle spaceship movement using the arrow keys
<<<<<<< HEAD
=======
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    spaceship.moveLeft();   // Move the spaceship left
  } else if (event.key === "ArrowRight") {
    spaceship.moveRight();  // Move the spaceship right
  }
});

requestAnimationFrame(game);

// Spaceship movement left and right (no change needed here)
>>>>>>> basmas
// document.addEventListener("keydown", function (event) {
//   // Move spaceship left
//   if (event.key == "ArrowLeft") {
//     if (spaceship.x - step >= 0) {
//       spaceship.x -= step;
//     }
//   }
//   // Move spaceship right
//   else if (event.key == "ArrowRight") {
//     if (spaceship.x + spaceship.width + step <= canvas.width) {
//       spaceship.x += step;
//     }
//   }
// });

requestAnimationFrame(game);

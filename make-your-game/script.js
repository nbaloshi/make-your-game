import EnemyChar from "./EnemyCntrl.js";
import Spacehip from "./Spaceship.js";

const canvas = document.getElementById("game-area");
const ctx = canvas.getContext("2d");
canvas.width = 1100;
canvas.height = 1000;

// const spaceshipImage = new Image();
// spaceshipImage.src = "/imgs/spaceship.png";

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
  requestAnimationFrame(game);
}

// Handle spaceship movement using the arrow keys
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

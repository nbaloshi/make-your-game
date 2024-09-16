import EnemyChar from "./EnemyChar.js"; // Import the EnemyChar class

const canvas = document.getElementById("game-area");
const ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 1000;

const spaceshipImage = new Image();
spaceshipImage.src = "/imgs/spaceship.png";

// Initial spaceship position
let spaceshipX = canvas.width / 2;
const spaceshipY = 420;
const spaceshipWidth = 80;
const spaceshipHeight = 80;
const step = 10; // Movement step size

// Instantiate EnemyChar instead of a single enemy
const enemies = new EnemyChar(canvas);

function game() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the grid of enemies
  enemies.draw(ctx);

  ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY, spaceshipWidth, spaceshipHeight);

  // Continue the game loop
  requestAnimationFrame(game);
}

// Handle spaceship movement using the arrow keys
document.addEventListener("keydown", function (event) {
  // Move spaceship left
  if (event.key == "ArrowLeft") {
    if (spaceshipX - step >= 0) {
      spaceshipX -= step;
    }
  }
  // Move spaceship right
  else if (event.key == "ArrowRight") {
    if (spaceshipX + spaceshipWidth + step <= canvas.width) {
      spaceshipX += step;
    }
  }
});

requestAnimationFrame(game);

// Spaceship movement left and right (no change needed here)
// document.addEventListener("keydown", function (event) {
//   const spaceship = document.getElementById("spaceship");
//   const step = 10; 
//   const gameArea = window.innerWidth;

//   let spaceshipLeft = parseInt(
//     window.getComputedStyle(spaceship).getPropertyValue("left")
//   );

//   if (event.key == "ArrowLeft") {
//     if (spaceshipLeft - spaceship.offsetWidth > 0) {
//       spaceship.style.left = spaceshipLeft - step + "px";
//     }
//   } else if (event.key == "ArrowRight") {
//     if (spaceshipLeft + spaceship.offsetWidth < gameArea) {
//       spaceship.style.left = spaceshipLeft + step + "px";
//     }
//   }
// });

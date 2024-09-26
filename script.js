import EnemyChar from "./EnemyCntrl.js";
import Spacehip from "./Spaceship.js";

// const spaceshipImage = new Image();
// spaceshipImage.src = "/imgs/spaceship.png";

const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector(".result");
const width = 15;

for (let i=0; i<width*width; i++) {
  const gridElement = document.createElement("div");
  // gridElement.classList.add("grid-element");
  grid.appendChild(gridElement);
}

const enemies = new EnemyChar();
const spaceship= new Spacehip();

// Initial spaceship position
const spaceshipY = 420;
const spaceshipWidth = 80;
const spaceshipHeight = 80;
const step = 10; // Movement step size


function game() {
  enemies.updateEnemyPositions()
  requestAnimationFrame(game);
}

// Handle spaceship movement using the arrow keys
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    spaceship.moveLeft();   // Move the spaceship left
  } else if (event.key === "ArrowRight") {
    spaceship.moveRight();  // Move the spaceship right
  }
});

requestAnimationFrame(game);

// Spaceship movement left and right (no change needed here)
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

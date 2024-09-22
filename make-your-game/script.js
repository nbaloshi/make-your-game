import EnemyChar from "./EnemyChar.js";
import Spacehip from "./Spaceship.js";

const spaceshipImage = new Image();
spaceshipImage.src = "/imgs/spaceship.png";

const enemies = new EnemyChar();
const spaceship= new Spacehip();

// Initial spaceship position
const spaceshipY = 420;
const spaceshipWidth = 80;
const spaceshipHeight = 80;
const step = 10; // Movement step size


function game() {

  enemies.createEnemies()
  // Continue the game loop
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

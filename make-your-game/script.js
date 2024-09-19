import EnemyChar from "./EnemyChar.js"; // Import the EnemyChar class

const spaceshipImage = new Image();
spaceshipImage.src = "/imgs/spaceship.png";

const enemies = new EnemyChar();

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
  
});

requestAnimationFrame(game);

// Spaceship movement left and right (no change needed here)
document.addEventListener("keydown", function (event) {
  const spaceship = document.getElementById("spaceship");
  const step = 10; 
  const gameArea = window.innerWidth;

  let spaceshipLeft = parseInt(
    window.getComputedStyle(spaceship).getPropertyValue("left")
  );

  if (event.key == "ArrowLeft") {
    if (spaceshipLeft - spaceship.offsetWidth > 0) {
      spaceship.style.left = spaceshipLeft - step + "px";
    }
  } else if (event.key == "ArrowRight") {
    if (spaceshipLeft + spaceship.offsetWidth < gameArea) {
      spaceship.style.left = spaceshipLeft + step + "px";
    }
  }
});

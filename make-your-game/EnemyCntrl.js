<<<<<<< HEAD
import Enemy from './Enemy.js';  // Assuming your Enemy class is in a file called Enemy.js
export default class EnemyCntrl {
// Function to create a grid of enemies
createEnemies() {
    const rows = 4;   // Number of rows
    const columns = 8; // Number of columns
    const spacingX = 50;  // Horizontal spacing between enemies
    const spacingY = 50;  // Vertical spacing between enemies
    const startX = 80;   // Initial X position for the first enemy
    const startY = 80;    // Initial Y position for the first enemy

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            // Calculate the position for each enemy based on its row and column
            const x = startX + col * spacingX;
            const y = startY + row * spacingY;

            // Create a new enemy at the calculated position
            const enemy = new Enemy(x, y);
            enemy.draw();  // Draw the enemy on the page
        }
    }
}

=======
import Enemy from "./Enemy.js";

export default class EnemyCntrl {
  constructor() {
    this.enemies = []; // Store the enemy instances
    this.movingRight = true; //This checks the current movement direction
    this.xVelocity = 2; // Speed of horizontal movement
    this.yVelocity = 30; // Distance moved down after hitting a boundary
    this.screenWidth = window.innerWidth; // Get the screen width
    this.bottomLimit = window.innerHeight - 100; // Define the bottom limit for the enemies

    this.createEnemies()
  }

  // Function to create a grid of enemies
  createEnemies() {
    const rows = 4; // Number of rows
    const columns = 8; // Number of columns
    const spacingX = 50; // Horizontal spacing between enemies
    const spacingY = 50; // Vertical spacing between enemies
    const startX = 80; // Initial X position for the first enemy
    const startY = 80; // Initial Y position for the first enemy

    for (let row = 0; row < rows; row++) {
      this.enemies[row] = []; // Initialize row in the enemies array
      for (let col = 0; col < columns; col++) {
        const x = startX + col * spacingX;
        const y = startY + row * spacingY;
        const enemy = new Enemy(x, y); // Create a new enemy instance
        this.enemies[row].push(enemy); // Store enemy in the array
      }
    }

    // Start moving the enemies once they are created
    this.updateEnemyPositions(); // Start the animation loop
  }

  // Function to update enemy positions on each frame
  updateEnemyPositions() {
    this.enemies.flat().forEach((enemy) => { //This would make nested arrays into one array
      // Check if enemies are hitting the boundaries
      if (this.movingRight && enemy.x + enemy.width >= this.screenWidth) {
        this.movingRight = false; // Change direction to left
        this.moveDown(); // Move down after hitting right boundary
      } else if (!this.movingRight && enemy.x <= 0) {
        this.movingRight = true; // Change direction to right
        this.moveDown(); // Move down after hitting left boundary
      }

      // Move enemies horizontally based on the direction
      enemy.x += this.movingRight ? this.xVelocity : -this.xVelocity;
      enemy.updatePosition(); // Update position in the DOM
    });

    // Continue updating on the next animation frame (already doing that in main)
    // requestAnimationFrame(() => this.updateEnemyPositions());
  }

  // Function to move enemies down
  moveDown() {
    this.enemies.flat().forEach((enemy) => {
      enemy.y += this.yVelocity; // Move enemies down by yVelocity
      enemy.updatePosition(); // Update their position in the DOM

      // Stop movement if enemies reach the bottom limit
      if (enemy.y >= this.bottomLimit) {
        // Stop the movement or handle end game logic here
        console.log("Enemies reached the bottom limit");

        //call game over func here
      }
    });
  }
>>>>>>> basmas
}

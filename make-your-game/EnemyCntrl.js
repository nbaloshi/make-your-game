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

    // this.moveEnemies()
}

// moveEnemies() {
//     const screenWidth =  window.innerWidth
//     const 
// }

}

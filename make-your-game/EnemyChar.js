import Enemy from "./Enemy.js";
export default class EnemyChar {
  constructor(canvas) {
    this.canvas = canvas;
    this.createEnemies();
  }

  draw(ctx) {
    this.drawEnemies(ctx);
  }

  drawEnemies(ctx) {
    this.enemyRows.flat().forEach((enemy) => {
      enemy.draw(ctx);
    });
  }

  enemyRows = [];

  createEnemies() {
    const rows = 6; // Define number of rows
    const cols = 10; // Define number of columns

    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
        this.enemyRows[rowIndex] = []; // Initialize the row in enemyRows
        for (let colIndex = 0; colIndex < cols; colIndex++) {
            // Push new enemy with calculated x and y positions
            this.enemyRows[rowIndex].push(
                new Enemy(colIndex * 50, rowIndex * 35)
            );
        }
    }
}

  // createEnemies() {
  //   this.enemyMap.forEach((row, rowIndex) => {
  //     this.enemyRows[rowIndex] = [];
  //     row.forEach((enemyIndex) => {
  //       this.enemyRows[rowIndex].push(
  //         new Enemy(enemyIndex * 50, rowIndex * 35)
  //       );
  //     });
  //   });
  // }

  //   createEnemies() {
  //     for (let row = 0; row < rows; row++) {
  //       this.enemyRows= []; // Initialize the row in enemyRows
  //       for (let col = 0; col < cols; col++) {
  //         // Draw the enemy at the calculated position
  //         this.enemyRows[row].push(new Enemy(col * 50, row * 35));
  //       }
  //     }
  //   }
}

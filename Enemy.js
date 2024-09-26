export default class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 60;
    this.height = 33;
    this.image = new Image();
    this.image.src = "../imgs/enemy.png";

    this.enemyElement = document.createElement("img");
    this.enemyElement.src = this.image.src;
    this.enemyElement.style.position = "absolute";  // Use absolute positioning for movement
    this.enemyElement.style.width = this.width + "px";
    this.enemyElement.style.height = this.height + "px";
    this.updatePosition(); // Set the initial position
    document.body.appendChild(this.enemyElement);  // Append to the document
  }


  // Function to update the enemy's position on the screen
  updatePosition() {
    this.enemyElement.style.left = this.x + "px";
    this.enemyElement.style.top = this.y + "px";
  }

}

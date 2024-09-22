export default class Enemy {
    constructor(x, y) {
        this.x = x;  // Position X (column)
        this.y = y;  // Position Y (row)
        this.width = 60;
        this.height = 33;
        this.image = new Image();
        this.image.src = "/imgs/enemy.png";
    }

    // Method to create and position the enemy image element
    draw() {
        const enemy = document.createElement("img");
        enemy.src = this.image.src;
        enemy.style.position = "absolute";  // Make sure the enemies can be positioned freely
        enemy.style.left = `${this.x}px`;   // Position horizontally based on x //this.x+ "px"
        enemy.style.top = `${this.y}px`;    // Position vertically based on y
        enemy.style.width = `${this.width}px`;
        enemy.style.height = `${this.height}px`;

        document.body.appendChild(enemy);  // Add the enemy to the page
    }
}

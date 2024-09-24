<<<<<<< HEAD
export default class Spaceship {
  constructor(canvas) {
    this.canvas = canvas;
    this.x = canvas.width / 2;
    this.y = 420;
    this.width = 80;
    this.height = 80;
    this.step = 10; // Movement step size
    this.image = new Image();
    this.image.src = "/imgs/spaceship.png";
    
    // Bind the event listener to the spaceship
    document.addEventListener("keydown", this.move.bind(this));
=======
// Spaceship.js
export default class Spaceship {
  constructor() {
    this.spaceship = document.getElementById("spaceship");
    this.step = 10;
>>>>>>> basmas
  }

  moveLeft() {
    let spaceshipLeft = parseInt(
      window.getComputedStyle(this.spaceship).getPropertyValue("left")
    );
    if (spaceshipLeft - this.step - this.spaceship.offsetWidth> 0) {
      this.spaceship.style.left = spaceshipLeft - this.step + "px";
    }
<<<<<<< HEAD
    // Move spaceship right
    else if (event.key === "ArrowRight") {
      if (this.x + this.width + this.step <= this.canvas.width) {
        this.x += this.step;
      }
=======
  }

  moveRight() {
    let spaceshipLeft = parseInt(
      window.getComputedStyle(this.spaceship).getPropertyValue("left")
    );
    const gameAreaWidth = window.innerWidth;
    if (
      spaceshipLeft + this.spaceship.offsetWidth + this.step <
      gameAreaWidth
    ) {
      this.spaceship.style.left = spaceshipLeft + this.step + "px";
>>>>>>> basmas
    }
  }
}

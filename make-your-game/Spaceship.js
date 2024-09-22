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
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  move(event) {
    // Move spaceship left
    if (event.key === "ArrowLeft") {
      if (this.x - this.step >= 0) {
        this.x -= this.step;
      }
    }
    // Move spaceship right
    else if (event.key === "ArrowRight") {
      if (this.x + this.width + this.step <= this.canvas.width) {
        this.x += this.step;
      }
    }
  }
}

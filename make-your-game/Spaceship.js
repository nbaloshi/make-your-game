// Spaceship.js
export default class Spaceship {
    constructor() {
      this.spaceship = document.getElementById("spaceship");
      this.step = 10;
    }
  
    moveLeft() {
      let spaceshipLeft = parseInt(window.getComputedStyle(this.spaceship).getPropertyValue("left"));
      if (spaceshipLeft - this.step > 0) {
        this.spaceship.style.left = spaceshipLeft - this.step + "px";
      }
    }
  
    moveRight() {
      let spaceshipLeft = parseInt(window.getComputedStyle(this.spaceship).getPropertyValue("left"));
      const gameAreaWidth = window.innerWidth;
      if (spaceshipLeft + this.spaceship.offsetWidth + this.step < gameAreaWidth) {
        this.spaceship.style.left = spaceshipLeft + this.step + "px";
      }
    }
  }
  
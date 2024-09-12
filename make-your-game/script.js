//Spaceship movement left and right
document.addEventListener("keydown", function (event) {
  const spaceship = document.getElementById("spaceship");
  const step = 10; //Number of pixels moved each time arrow key is pressed
  const gameArea = window.innerWidth; //Width of browser window to set movement limit

  //Gets the current left position of the spaceship and convert it to integer
  let spaceshipLeft = parseInt(
    window.getComputedStyle(spaceship).getPropertyValue("left")
  );

  if (event.key == "ArrowLeft") {
    if (spaceshipLeft - spaceship.offsetWidth > 0) { //Makes sure it does't go outside the window browser display from left
      spaceship.style.left = spaceshipLeft - step + "px"; //Deducting px will move it to the left
    }
  } else if (event.key == "ArrowRight") {
    if (spaceshipLeft + spaceship.offsetWidth < gameArea) { //Makes sure it does't go outside the window browser display from right
      spaceship.style.left = spaceshipLeft + step + "px"; //Adding px will move it to the right
    }
  }
});



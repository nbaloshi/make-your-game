document.addEventListener("keydown", function (event) {
  const spaceship = document.getElementById("spaceship");
  const step = 10; //Number of pixels moved each time arrow key is pressed
  const gameArea = window.innerWidth; //Width of browser window to set movement limit

  //Get the current left position of the spaceship
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

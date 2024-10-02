// Query selector will get the first element it finds with the class grid
const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector(".results");
const width = 15;
const aliensRemoved=[] //invadors that have been shot
let currentShooterIndex = 202

let isGameOver = false; // New flag to track if the game has ended

// let invadersID
let isGoingRight = true
let direction = 1
let results = 0

let lastMoveTime = 0;
const moveInterval = 600;

// Menu Related
let isPaused = false;
let gameRequestId; // To store the requestAnimationFrame ID

const menu = document.getElementById("menu");
const resumeButton = document.getElementById("resumeButton");
const restartButton = document.getElementById("restartButton");

// Timer Related 
let timer;
let secondsElapsed = 0;
const timerDisplay = document.getElementById("timer");

// Lives Related
let lives = 3; // Initial number of lives
const livesDisplay = document.getElementById("lives");

// Lives Related

// Function to update the lives display
function updateLives() {
  livesDisplay.innerHTML = lives;
}

// Start by displaying the initial lives count
updateLives();

// Timer Related 
function startTimer() {
  timer = setInterval(() => {
    secondsElapsed++;
    timerDisplay.innerHTML = secondsElapsed;
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  secondsElapsed = 0;
  timerDisplay.innerHTML = secondsElapsed;
}

// Menu Related 
resumeButton.addEventListener("click", () => {
  menu.classList.add("hidden");
  isPaused = false;
  requestAnimationFrame(gameLoop); // Resume the game loop
  startTimer(); // Start/resume the timer
});

restartButton.addEventListener("click", () => {
  restartGame();
  resetTimer(); // Reset the timer when restarting the game
  startTimer(); // Start the timer again
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    // Toggle pause and show/hide menu
    if (isPaused) {
      menu.classList.add("hidden");
      isPaused = false;
      requestAnimationFrame(gameLoop); // Resume the game
      startTimer(); // Resume the timer
    } else {
      menu.classList.remove("hidden");
      isPaused = true;
      stopTimer(); // Pause the timer
    }
  }
});

// Only move the invaders if enough time has passed
function gameLoop(timestamp) {
  if (isPaused) return; // Stop the game loop if paused

  // Check if enough time has passed since the last move
  if (timestamp - lastMoveTime > moveInterval) {
    // If true update the position of the aliens
    moveInvaders();
    lastMoveTime = timestamp;
  }

  if (timestamp - lastMoveTime > moveInterval) {
    moveInvaders();
    lastMoveTime = timestamp;
  }

  // Request the next frame
  gameRequestId = requestAnimationFrame(gameLoop);  
}

// Restart the game
function restartGame() {
  // Reset all game-related variables and UI elements
  aliensRemoved.length = 0;
  currentShooterIndex = 202;
  results = 0;
  resultDisplay.innerHTML = results;
  isGoingRight = true;
  direction = 1;
  lives = 3; // Reset lives to 3
  updateLives(); // Update lives display

  // Reset the alien positions to their initial starting positions
  alienInvaders.length = 0; // Clear the array
  alienInvaders.push(
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39
  );

  // Clear aliens and shooter from the grid
  squares.forEach((square) => {
    square.classList.remove("invader", "shooter", "laser", "boom");
  }); 

  draw();

  squares[currentShooterIndex].classList.add("shooter");

  // Hide menu and start the game loop again
  menu.classList.add("hidden");
  isPaused = false;
  resetTimer();
  startTimer();
  requestAnimationFrame(gameLoop);
}

startTimer();

// Start the game loop
requestAnimationFrame(gameLoop);

// Create the grid and add the squares
for (let i=0; i<width*width; i++) {
  const square = document.createElement("div");
  square.id = i;
  grid.appendChild(square);
}

// All the squares in an array
const squares = Array.from(document.querySelectorAll('.grid div'))

const alienInvaders = [
  0,1,2,3,4,5,6,7,8,9,
  15,16,17,18,19,20,21,22,23,24,
  30,31,32,33,34,35,36,37,38,39
]

function draw(){
  for (let i=0; i<alienInvaders.length; i++) {
    if (!aliensRemoved.includes(i)){
      squares[alienInvaders[i]].classList.add("invader");
    }
  }
}

draw();

// Add the shooter/player
squares[currentShooterIndex].classList.add("shooter");

// Loop through the array and move the aliens
function remove(){
  for (let i=0; i<alienInvaders.length; i++) {
    squares[alienInvaders[i]].classList.remove("invader");
  } 
}

function moveShooter(e){
  if (isGameOver) return; // Stop the game loop if the game is over
  squares[currentShooterIndex].classList.remove("shooter")
  switch(e.key){
    case 'ArrowLeft':
      if (currentShooterIndex % width !== 0){
        currentShooterIndex -= 1;
      }
      break;
    case "ArrowRight":
      if (currentShooterIndex % width !== width-1){
        currentShooterIndex += 1;
      }
      break;
  }
  console.log(currentShooterIndex);
  squares[currentShooterIndex].classList.add("shooter");
}

document.addEventListener("keydown", moveShooter);

function moveInvaders(){
  if (isGameOver) return; // Stop the game loop if the game is over
  const leftEdge = alienInvaders[0] % width == 0;
  const rightEdge = alienInvaders[alienInvaders.length-1] % width === width-1;

  remove()

  // Change direction if the aliens are at the edge so that they dont 
  // split and move the aliens in the opposite direction
  if (rightEdge && isGoingRight){
    // Update the array to populate the aliens new location
    for (let i=0; i<alienInvaders.length; i++) {
      alienInvaders[i] += width + 1; //instead of 1 we added width + 1 to move down
      direction = -1;
      isGoingRight = false;
    }
  }

  // When they keep going left, they hit the left edge
  // Dont cut them off, but instead move them down
  // and change direction
  if (leftEdge && !isGoingRight){
    // Update the array to populate the aliens new location
    for (let i=0; i<alienInvaders.length; i++) {
      alienInvaders[i] += width - 1; //instead of 1 we added width - 1 to move down
      direction = 1;
      isGoingRight = true;
    }
  }

  for (let i=0; i<alienInvaders.length; i++) {
    // if (!aliensRemoved.includes(i)){
      alienInvaders[i] += direction;
    // }
  }
  // Draw the aliens again
  draw();

  // Check if the shooter and invader are on top of each other
  if (squares[currentShooterIndex].classList.contains("invader")){
    lives--; // Decrease lives by 1
    updateLives(); // Update lives display

    if (lives === 0) {
    resultDisplay.innerHTML = 'GAME OVER';
    stopTimer();
    isGameOver = true;
    removeListeners();
    // clearInterval(invadersID);
    // Remove the shooter
    return
    }
  }

  if (aliensRemoved.length === alienInvaders.length){
    console.log("You win!");
    resultDisplay.innerHTML = 'YOU WIN';
    stopTimer();
    isGameOver = true;
    removeListeners();
    // clearInterval(invadersID);
    return
  }
}

function removeEventListeners() {
  document.removeEventListener("keydown", moveShooter);
  document.removeEventListener("keydown", shoot);
}

// Start by displaying the initial lives count
updateLives();

// set an interval to move the aliens every 600ms
// invadersID = setInterval(moveInvaders, 600);

function shoot(e){

  if (isGameOver) return; // Stop the game loop if the game is over

  let laserId
  let currentLaserIndex = currentShooterIndex

  function moveLaser(){
    // Remove the laser
    squares[currentLaserIndex].classList.remove("laser");
    // Move the laser
    currentLaserIndex -= width;
    // Stop if the laser goes out of bounds
    if (currentLaserIndex < 0) return;
    // Add the laser
    squares[currentLaserIndex].classList.add("laser");

    if (squares[currentLaserIndex].classList.contains("invader")){
      // Remove the invader
      squares[currentLaserIndex].classList.remove("laser");
      squares[currentLaserIndex].classList.remove("invader");
      // Add boom to exploded alien
      squares[currentLaserIndex].classList.add("boom")
      // aliensRemoved.push(currentLaserIndex);

      // Remove everything within 3ms
      setTimeout(()=> squares[currentLaserIndex].classList.remove("boom"), 300)
      clearInterval(laserId)

      // Check if the current index laser exists in the list of alien invaders 
      const alienRemoved = alienInvaders.indexOf(currentLaserIndex)
      aliensRemoved.push(alienRemoved)
      results++
      resultDisplay.innerHTML = results

      return
      // console.log(aliensRemoved)
    }
    // Continue moving the laser in the next frame
    requestAnimationFrame(moveLaser);
  }

  if (e.key == 'ArrowUp') {
    // Assign and clear so that the laser should be removed after being shot 
    // laserId = setInterval(moveLaser, 100);
    requestAnimationFrame(moveLaser);
  }
}

document.addEventListener("keydown", moveShooter);
document.addEventListener("keydown", shoot);

// Function to start alien shooting
function startAlienShooting() {
  setInterval(() => {
    if (isPaused || isGameOver) return; // Stop shooting if paused or game over

    const shootingAlienIndex = alienInvaders[Math.floor(Math.random() * alienInvaders.length)];
    if (!aliensRemoved.includes(alienInvaders.indexOf(shootingAlienIndex))) {
      alienShoot(shootingAlienIndex);
    }
  }, 1000); // Aliens will try to shoot every second
}

function alienShoot(startIndex) {
  let currentLaserIndex = startIndex;

  function moveLaser() {
    // Remove the laser from the current position
    squares[currentLaserIndex].classList.remove("alien-laser");
    // Move the laser down
    currentLaserIndex += width;

    // Stop if the laser goes out of bounds
    if (currentLaserIndex >= width * width) return;

    // Add the laser to the new position
    squares[currentLaserIndex].classList.add("alien-laser");

    // Check if the laser hits the shooter
    if (squares[currentLaserIndex].classList.contains("shooter")) {
      squares[currentLaserIndex].classList.remove("alien-laser");
      lives--; // Decrease lives by 1
      updateLives(); // Update lives display

      if (lives === 0) {
        resultDisplay.innerHTML = 'GAME OVER';
        stopTimer();
        isGameOver = true; // Set the game over flag
        removeEventListeners(); // Remove event listeners
      }
      return;
    }

    // Continue moving the laser if the game is not over
    if (!isGameOver) {
      requestAnimationFrame(moveLaser);
    }
  }

  // Start moving the alien laser
  requestAnimationFrame(moveLaser);
}

// Start alien shooting after starting the game loop
startAlienShooting();
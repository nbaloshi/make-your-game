// Query selector will get the first element it finds with the class grid
const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector(".results");
const width = 15;
const aliensRemoved=[] //invadors that have been shot
let currentShooterIndex = 202
let invadersID
let isGoingRight = true
let direction = 1
let results = 0

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
  squares[currentShooterIndex].classList.remove("shooter")
  switch(e.key){
    case 'ArrowLeft':
      if (currentShooterIndex % width !== 0){
        // console.log("left");
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
    console.log("You lose!");
    resultDisplay.innerHTML = 'GAME OVER';
    clearInterval(invadersID);
    // Remove the shooter
  }

  if (aliensRemoved.length === alienInvaders.length){
    console.log("You win!");
    resultDisplay.innerHTML = 'YOU WIN';
    clearInterval(invadersID);
  }

}

// set an interval to move the aliens every 600ms
invadersID = setInterval(moveInvaders, 600);

// 
function shoot(e){
  let laserId
  let currentLaserIndex = currentShooterIndex

  function moveLaser(){
    // Remove the laser
    squares[currentLaserIndex].classList.remove("laser");
    // Move the laser
    currentLaserIndex -= width;
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
      console.log(aliensRemoved)
    }
  }

  if (e.key == 'ArrowUp') {
    // Assign and clear so that the laser should be removed after being shot 
    laserId = setInterval(moveLaser, 100);
  }
}

document.addEventListener("keydown", shoot);
// Query selector will get the first element it finds with the class grid
const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector(".result");
const width = 15;
const aliensRemoved=[] //invadors that have been shot
let currentShooterIndex = 202

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

function moveShooter(e){
  squares[currentShooterIndex].classList.remove("shooter")
  switch(e.key){
    case 'ArrowLeft':
      if (currentShooterIndex % width !== 0){
        console.log("left");
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
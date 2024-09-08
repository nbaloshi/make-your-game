let background = document.querySelector('.background');
let positionX = 0;

function moveBackground() {
    positionX -= 1;  // Adjust the speed by changing the decrement
    background.style.backgroundPosition = positionX + 'px 0';
    requestAnimationFrame(moveBackground);  // Ensures smooth animation
}

moveBackground();

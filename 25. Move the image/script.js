// Get the reference to the image element
const image = document.getElementById('myImage');

// Set the initial position of the image
let positionX = 0;
let positionY = 0;

// Define the amount of pixels to move the image
const moveAmount = 10;

// Function to handle arrow key events
function handleKeyPress(event) {
  // Move the image based on the arrow key pressed
  switch (event.key) {
    case 'ArrowUp':
      positionY -= moveAmount;
      break;
    case 'ArrowDown':
      positionY += moveAmount;
      break;
    case 'ArrowLeft':
      positionX -= moveAmount;
      break;
    case 'ArrowRight':
      positionX += moveAmount;
      break;
  }

  // Update the position of the image
  image.style.transform = `translate(${positionX}px, ${positionY}px)`;
}

// Attach the keydown event listener to the window
window.addEventListener('keydown', handleKeyPress);

let grid_container = document.querySelector('#grid-container');
let gridSize = 16;
let currentLayer;
let width = window.innerWidth
createGrid(gridSize);

  // Create Squared Divs
function createDiv(size) {
    const div = document.createElement('div');
    div.classList.add('box');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
  
    return div;
  }

function newParent(itteration) {
    const div = document.createElement('div');
    div.classList.add(`layer${itteration}`);
    div.classList.add('layers');
    currentLayer = div;
    return div;
}

  function createGrid (size) {
      for(let i = 0; i <= size; i++) {
        grid_container.appendChild(newParent(i));
          for(let j = 0; j <= size; j++) {
            width = window.innerWidth;
            currentLayer.appendChild(createDiv(width / gridSize));
          }
      }
  }
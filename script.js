let grid_container = document.querySelector('#grid-container');
let gridSize;
let currentLayer;
let width;
const resetBtn = document.querySelector('.resetButton');

promptGridSize();

function promptGridSize() {
  let inputValue = Math.round(prompt('Enter desired grid size'));
  if(inputValue > 0 && inputValue <= 100) {
    createGrid(inputValue);
  } else {
    alert('Please enter a number between 1 and 100');
    promptGridSize();
  }
}



function createDiv(size) {
    const div = document.createElement('div');
    div.classList.add('box');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.addEventListener('mouseover', function(event){
      event.target.style.backgroundColor = 'black';
  })
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
      width = window.innerHeight;
      currentLayer.appendChild(createDiv(500 / size));
    }
  }
}


resetBtn.addEventListener('click', function(event){
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
    box.remove();
  });
  promptGridSize();
})

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
const boxesRef = document.getElementById('boxes');
const inputRef = document.querySelector('input[type="number"]');
boxesRef.setAttribute('data-size', '20');
let boxWidth = Number(boxesRef.dataset.size);
let boxHeight = Number(boxesRef.dataset.size);
const createBoxes = amount => {
  amount = inputRef.value;
  let boxArray = [];
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement('div');
    const red = getRandomInt(255);
    const green = getRandomInt(255);
    const blue = getRandomInt(255);
    box.style.backgroundColor = `rgb(${red},${green},${blue})`;
    box.style.marginBottom = '10px';
    box.style.width = `${(boxWidth += 10)}px`;
    box.style.height = `${(boxHeight += 10)}px`;
    boxArray.push(box);
  }
  boxesRef.append(...boxArray);
};

const destroyBoxes = () => {
  const allBoxes = boxesRef.querySelectorAll('div');
  allBoxes.forEach(box => {
    boxesRef.removeChild(box);
    boxWidth = Number(boxesRef.dataset.size);
    boxHeight = Number(boxesRef.dataset.size);
    inputRef.value = '';
  });
};
const btnRenderRef = document.querySelector('button[data-action="render"]');
const btnDestroyRef = document.querySelector('button[data-action="destroy"]');
btnRenderRef.addEventListener('click', createBoxes);
btnDestroyRef.addEventListener('click', destroyBoxes);

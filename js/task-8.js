const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
const red = getRandomInt(255);
const green = getRandomInt(255);
const blue = getRandomInt(255);
const boxesRef = document.getElementById('boxes');
const inputRef = document.querySelector('input[type="number"]');

const createBoxes = amount => {
  amount = inputRef.value;
  let boxArray = [];
  let boxWidth = Number(boxesRef.dataset.size);
  let boxHeight = Number(boxesRef.dataset.size);
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement('div');
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
  });
};
const btnRenderRef = document.querySelector('button[data-action="render"]');
const btnDestroyRef = document.querySelector('button[data-action="destroy"]');
btnRenderRef.addEventListener('click', createBoxes);
btnDestroyRef.addEventListener('click', destroyBoxes);

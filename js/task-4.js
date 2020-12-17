const btnDecrementRef = document.querySelector(
  'button[data-action="decrement"]',
);
const btnIncrementRef = document.querySelector(
  'button[data-action="increment"]',
);
const valueRef = document.getElementById('value');
let counterValue = Number(valueRef.textContent);
const increment = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};
const decrement = () => {
  if (counterValue === 0) {
    valueRef.textContent = 0;
    return;
  }
  counterValue -= 1;
  valueRef.textContent = counterValue;
};

btnDecrementRef.addEventListener('click', decrement);
btnIncrementRef.addEventListener('click', increment);

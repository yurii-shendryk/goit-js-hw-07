const inputRangeRef = document.querySelector('input[type="range"]');
const textRef = document.getElementById('text');

inputRangeRef.addEventListener('input', event => {
  textRef.style.fontSize = `${event.target.value}px`;
});

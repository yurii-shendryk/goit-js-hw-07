const inputNameRef = document.getElementById('name-input');
const nameOutputref = document.getElementById('name-output');
const defaultName = nameOutputref.textContent;
inputNameRef.addEventListener('input', event => {
  nameOutputref.textContent = !event.target.value
    ? defaultName
    : event.target.value;
});

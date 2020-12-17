const userInputRef = document.getElementById('validation-input');

userInputRef.addEventListener('change', () => {
  if (event.target.value.length < userInputRef.dataset.length) {
    userInputRef.classList.add('invalid');
  } else if (userInputRef.classList.contains('invalid')) {
    userInputRef.classList.replace('invalid', 'valid');
  } else {
    userInputRef.classList.add('valid');
  }
});

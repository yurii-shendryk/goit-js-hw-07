const userInputRef = document.getElementById('validation-input');

userInputRef.addEventListener('change', () => {
  if (
    event.target.value.length === Number(userInputRef.dataset.length) &&
    !userInputRef.classList.contains('invalid') &&
    !userInputRef.classList.contains('valid')
  ) {
    userInputRef.classList.add('valid');
  } else if (
    event.target.value.length === Number(userInputRef.dataset.length) &&
    userInputRef.classList.contains('invalid')
  ) {
    userInputRef.classList.replace('invalid', 'valid');
  } else if (
    event.target.value.length !== Number(userInputRef.dataset.length) &&
    userInputRef.classList.contains('valid')
  ) {
    userInputRef.classList.replace('valid', 'invalid');
  } else {
    userInputRef.classList.add('invalid');
  }
});

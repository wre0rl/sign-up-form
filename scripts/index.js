const handleInvalidEvent = (event) => {
  event.preventDefault();

  const input = document.querySelector(`#${event.target.id}`);
  const error = document.createElement('span');

  if (input.classList.contains('form__input--state-danger')) input.nextElementSibling.remove();

  input.classList.add('form__input--state-danger');
  error.classList.add('class', 'error--state-danger');
  error.textContent = event.target.validationMessage;
  input.after(error);
};

document.addEventListener('invalid', handleInvalidEvent, true);
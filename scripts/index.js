const handleInvalidEvent = (event) => {
  if (!event.target.checkValidity()) {
    // Prevent the form from submitting
    event.preventDefault();

    const inputs = event.target.querySelectorAll('input');
    inputs.forEach((input) => {
      // Remove previous error message if any
      if (input.classList.contains('form__input--state-danger')) {
        input.classList.remove('form__input--state-danger');
        input.nextElementSibling.remove();
      }
      // Add new error message
      if (!input.validity.valid) {
        input.classList.add('form__input--state-danger');
        input.insertAdjacentHTML('afterend', `<p class="error--state-danger">${input.validationMessage}</p>`);
      }
    });
  }
};

// Handle event during the capture phase
document.addEventListener('submit', handleInvalidEvent, true);
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

      // Password requirement
      if (input.id === 'password') {
        const password = input;
        if (password.value.length < 8) {
          input.setCustomValidity('Password must be 8 characters long');
        } else {
          input.setCustomValidity('');
        }
      }

      // Password matching validation
      if (input.id === 'confirm-password') {
        const password = event.target.querySelector('#password');
        const confirmPassword = input;
        if (password.value !== confirmPassword.value) {
          input.setCustomValidity('Confirm Password doesn\'t match Password');
        } else {
          input.setCustomValidity('');
        }
      }

      // Add new error message
      if (!input.validity.valid) {
        input.classList.add('form__input--state-danger');
        input.insertAdjacentHTML('afterend', `<span class="error--state-danger">${input.validationMessage}</span>`);
      }
    });
  }
};

// Handle event during the capture phase
document.addEventListener('submit', handleInvalidEvent, true);
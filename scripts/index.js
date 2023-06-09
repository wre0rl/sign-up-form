const handleFormSubmit = (event) => {
  const form = event.target;

  if (!form.checkValidity()) {
    event.preventDefault();
    handleInvalidInputs(form);
  }
};

const handleInvalidInputs = (form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    // Remove previous error message if any
    clearErrorState(input);

    // Phone number requirement
    if (input.id === 'phone-number') {
      checkPhoneNumberFormat(input);
    }

    // Password requirement
    if (input.id === 'password') {
      checkPasswordLength(input);
    }

    // Password matching validation
    if (input.id === 'confirm-password') {
      checkPasswordsMatch(input, form.querySelector('#password'));
    }

    // Handle invalid input
    if (!input.validity.valid) {
      input.classList.add('form__input--state-danger');
      input.insertAdjacentHTML('afterend', `<span class="error--state-danger">${input.validationMessage}</span>`);
    }
  });
};

const clearErrorState = (input) => {
  if (input.classList.contains('form__input--state-danger')) {
    input.classList.remove('form__input--state-danger');
    input.nextElementSibling.remove();
  }
};

const checkPhoneNumberFormat = (input) => {
  phoneNumberFormatError = 'Phone number isn\'t valid';
  input.setCustomValidity(!input.value.match('^[0-9]+$') ? phoneNumberFormatError : '');
}

const checkPasswordLength = (input) => {
  const passwordLengthError = 'Password must be 8 chars long';
  input.setCustomValidity(input.value.length < 8 ? passwordLengthError : '');
};

const checkPasswordsMatch = (input, passwordInput) => {
  const confirmPasswordError = 'Passwords doesn\'t match';
  input.setCustomValidity(passwordInput.value !== input.value ? confirmPasswordError : '');
}

// Handle event during the capture phase
document.addEventListener('submit', handleFormSubmit, true);
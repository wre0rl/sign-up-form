const handleInvalidEvent = (event) => {
  event.preventDefault();
  console.log(event);
};

document.addEventListener('invalid', handleInvalidEvent, true);
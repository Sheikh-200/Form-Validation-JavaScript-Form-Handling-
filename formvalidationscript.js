// Get form and input elements
const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const messageInput = document.getElementById('message');

// Email regex pattern
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Show error message
function showError(input, message) {
  const formGroup = input.parentElement;
  const errorElement = formGroup.querySelector('.error');
  errorElement.textContent = message;
}

// Clear error message
function clearError(input) {
  const formGroup = input.parentElement;
  const errorElement = formGroup.querySelector('.error');
  errorElement.textContent = '';
}

// Validate form
form.addEventListener('submit', function(e) {
  e.preventDefault();
  let isValid = true;

  // Name validation
  if (nameInput.value.trim() === '') {
    showError(nameInput, 'Name is required');
    isValid = false;
  } else {
    clearError(nameInput);
  }

  // Email validation
  if (emailInput.value.trim() === '') {
    showError(emailInput, 'Email is required');
    isValid = false;
  } else if (!emailPattern.test(emailInput.value.trim())) {
    showError(emailInput, 'Invalid email format');
    isValid = false;
  } else {
    clearError(emailInput);
  }

  // Password validation
  if (passwordInput.value.trim() === '') {
    showError(passwordInput, 'Password is required');
    isValid = false;
  } else {
    clearError(passwordInput);
  }

  // Confirm password validation
  if (confirmPasswordInput.value.trim() === '') {
    showError(confirmPasswordInput, 'Please confirm your password');
    isValid = false;
  } else if (confirmPasswordInput.value !== passwordInput.value) {
    showError(confirmPasswordInput, 'Passwords do not match');
    isValid = false;
  } else {
    clearError(confirmPasswordInput);
  }

  // Message validation
  if (messageInput.value.trim() === '') {
    showError(messageInput, 'Message is required');
    isValid = false;
  } else {
    clearError(messageInput);
  }

  // If all validations pass
  if (isValid) {
    alert('Form submitted successfully!');
    form.reset();
  }
});

// Run only after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Select form and feedback division
  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('form-feedback');

  // Submit listener with client-side validation
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // stop real submission

    // Retrieve and trim user inputs
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validation flags/messages
    let isValid = true;
    const messages = [];

    // Username: at least 3 characters
    if (username.length < 3) {
      isValid = false;
      messages.push('Username must be at least 3 characters.');
    }

    // Email: must include "@" and "."
    if (!(email.includes('@') && email.includes('.'))) {
      isValid = false;
      messages.push('Please enter a valid email address that includes "@" and "."');
    }

    // Password: at least 8 characters
    if (password.length < 8) {
      isValid = false;
      messages.push('Password must be at least 8 characters.');
    }

    // Display feedback
    feedbackDiv.style.display = 'block';

    if (isValid) {
      feedbackDiv.textContent = 'Registration successful!';
      feedbackDiv.style.color = '#28a745';          // green text
      feedbackDiv.style.backgroundColor = '#d4edda'; // soft green bg for success
      // (Optional) Clear fields after success
      form.reset();
    } else {
      feedbackDiv.innerHTML = messages.join('<br>');
      feedbackDiv.style.color = '#dc3545';            // red text
      feedbackDiv.style.backgroundColor = '#ffbaba';  // red-ish bg for errors
    }
  });
});

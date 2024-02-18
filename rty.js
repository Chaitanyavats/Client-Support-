// script.js

document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('loginForm');
    var errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        // Perform basic client-side validation
        if (!email || !password) {
            errorMessage.textContent = 'Please enter both email and password.';
            return;
        }

        // If validation passes, submit the form
        this.submit();
    });
});

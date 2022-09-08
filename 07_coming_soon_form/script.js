let form = document.querySelector('form');
let emailBox = document.querySelector('.email-box');
let email = document.querySelector('.email');

document.querySelector('button').addEventListener('click', () => validate(email.value))

function validate(input) {
    event.preventDefault();
    const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    input.match(format)? verified() : showError();
}

function verified() {
    email.classList.add('verified');
    email.classList.remove('error');
    document.querySelector('.error-message')? document.querySelector('.error-message').remove() : null;
}

function showError() {
    email.classList.add('error')
    errorDiv = document.createElement('div');
    errorDiv.classList.add('error-message')
    errorDiv.textContent = 'Please provide a valid email address';
    emailBox.appendChild(errorDiv);
}
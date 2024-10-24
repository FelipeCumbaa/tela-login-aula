const form = document.getElementById('form');
const email_input = document.getElementById('email-input');
const passoword_input = document.getElementById('passoword-input');
const error_message = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    alert(email_input.value);
    error_message.innerText = passoword_input.value;
});
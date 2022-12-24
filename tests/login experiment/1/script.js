/*
const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = form.elements.email.value;
    const password = form.elements.password.value;

    // Send a request to the server to check the email and password
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/login');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = () => {
    if (xhr.status === 200) {
        // If the login is successful, redirect the user to the home page
        window.location.replace('/home');
      } else {
        // If the login fails, display an error message
        errorMessage.textContent = 'Email or password is incorrect';
      }
    };
    xhr.send(`email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);
    });
*/

const email = 'user@example.com';
const password = 'password';

const xhr = new XMLHttpRequest();
xhr.open('POST', '/login');
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.onload = () => {
    if (xhr.status === 200) {
    // If the login is successful, redirect the user to the home page
    window.location.replace('/home');
    } else {
    // If the login fails, display an error message
    errorMessage.textContent = 'Email or password is incorrect';
    }
};
xhr.send(`email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);
    
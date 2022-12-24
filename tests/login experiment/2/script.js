function login() {
    // Get the username and password values from the form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if the username and password are valid
    if (username == "admin" && password == "password") {
        // If the username and password are correct, redirect the user to the home page
        window.location.replace = "home.html";
    } else {
        // If the username and password are incorrect, display an error message
        document.getElementById("message").innerHTML = "Invalid username or password";
        // Clear the form fields
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }
  }
  
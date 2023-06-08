const loginEmail = $(".login-email-field").val();
loginEmail.value = loginEmail.toLowerCase();
loginEmail.value = loginEmail?.trim();

const loginPassword = $(".login-password-field").val();
loginPassword.value = loginPassword?.trim();

const loginSubmitBtn = document.querySelectorAll(".login-submit-button")[0];
const loginBtn = document.querySelectorAll(".login-button")[0];

const signUpUsername = $(".sign-up-username-field").val();
signUpUsername.value = signUpUsername?.trim();

const signUpEmail = $(".sign-up-email-field").val();
signUpEmail.value = signUpEmail.toLowerCase();
signUpEmail.value = signUpEmail?.trim();

const signUpPassword = $(".sign-up-password-field").val();
signUpPassword.value = signUpPassword?.trim();


const signUpButton = document.querySelectorAll(".sign-up-button")[0];
const signUpTile = document.querySelectorAll("#signUpTile")[0];
const signUpSubmitBtn = document.querySelectorAll(".sign-up-submit-button")[0];
signUpTile.style.display = "hidden";


const closeSignUpPopup = document.querySelectorAll(".close-sign-up-popup")[0];
const loginTile = document.querySelectorAll("#login-input-tile")[0];
const closeLoginPopup = document.querySelectorAll(".close-login-popup")[0];
loginTile.style.display = "hidden";


loginBtn.addEventListener("click", function () {
    loginTile.style.display = "block";
});

signUpButton.addEventListener("click", function () {
  signUpTile.style.display = "block";
});

closeSignUpPopup.onclick = function () {
  signUpTile.style.display = "none";
};

closeLoginPopup.onclick = function () {
    loginTile.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == loginTile) {
    loginTile.style.display = "none";
  }
};


const attemptLogin = async () => {

    if (loginEmail && loginPassword) {
        const loginResponse = await fetch("/api/users/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },
        });

        if (loginResponse.ok) {

            console.log("login successful");
            document.location.reload();
        } else {
            alert("sign in failed, please try again");
        }
    }
};

const attemptSignUp = async () => {
    const usernameInput = document.querySelector('.sign-up-username-field');
    const emailInput = document.querySelector('.sign-up-email-field');
    const passwordInput = document.querySelector('.sign-up-password-field');
  
    emailInput.value = emailInput.value.trim();
    emailInput.value = emailInput.value.toLowerCase();
    passwordInput.value = passwordInput.value.trim();
  
  
    // Create a data object with the input values
    const userData = {
      user_name: usernameInput.value,
      email: emailInput.value,
      password: passwordInput.value
    };
    // Dan's validity checks
    if (usernameInput.value === "" || emailInput.value === "" || passwordInput.value === "") {
      return;
    } else if (emailInput.value.indexOf('@') < 1 || emailInput.value.indexOf('.') < 1 || emailInput.value.lastIndexOf('.') < emailInput.value.indexOf('@')) {
      alert("Please enter a valid email 🔱");
      return;
    } else if
      (passwordInput.value.length < 6) {
      alert("Please use at least 6 characters for your password")
      return;
    };
    try {
        // Send the POST request to your server endpoint
        const response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        if (!response.ok) {
            alert("Sorry, that email is already in use")
        } else if (response.ok) { alert("Sign up successful! Please sign in!") };
        // Handle the response as needed
        const responseData = await response.json();
        console.log(responseData);
    } catch (error) {
        console.error(error);
    }
    // would be nice if I could slip a location.reload() in here
};


const logout = async () => {
    const response = await fetch("/api/users/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
        document.location.replace("/");
    } else {
        alert("You aren't currently logged in.");
    }
};



loginSubmitBtn.addEventListener("click", function () {
    // stops process and does nothing if nothing is entered for either field
    if (loginEmail === "" || loginPassword === "") {
        return;
    } else {
        // else tries to login the user
        attemptLogin(loginEmail, loginPassword);
    }
});


$('.login-password-field').keydown(function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Trigger the button element with a click
        loginSubmitBtn.click();
    }
});


document.querySelector('.login-button').addEventListener("click", attemptLogin);
document.querySelector('.sign-up-button').addEventListener("click", attemptSignUp);
document.querySelector('.logoutBtn').addEventListener("click", logout);

// Closes sign-up modal with Escape key if in password field specifically
$('.sign-up-password-field').keydown(function (event) {
    if (event.key === 'Escape') {
        signUpTile.style.display = "none";
    }
});
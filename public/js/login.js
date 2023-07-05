const loginSubmitBtn = document.querySelectorAll(".login-submit-button")[0];
const loginBtn = document.querySelectorAll(".login-button")[0];

const signUpButton = document.querySelectorAll(".sign-up-button")[0];
const signUpTile = document.querySelectorAll("#signUpTile")[0];
const signUpSubmitBtn = document.querySelectorAll(".sign-up-submit-button")[0];
signUpTile.style.display = "none";


const closeSignUpPopup = document.querySelectorAll(".close-sign-up-popup")[0];
const loginTile = document.querySelectorAll(".login-input-tile")[0];
const closeLoginPopup = document.querySelectorAll(".close-login-popup")[0];
loginTile.style.display = "none";


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





const attemptLogin = async () => {

    let email = $(".login-email-field").val();
    email.value = email.toLowerCase();
    email.value = email?.trim();

    const password = $(".login-password-field").val();
    password.value = password?.trim();

    if (email && password) {
        const loginResponse = await fetch("/api/user/login", {
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

    const signUpUsername = document.querySelector('.sign-up-username-field');
    const signUpEmail = document.querySelector('.sign-up-email-field');
    const signUpPassword = document.querySelector('.sign-up-password-field');

    signUpEmail.value = signUpEmail.value.trim();
    signUpEmail.value = signUpEmail.value.toLowerCase();
    signUpPassword.value = signUpPassword.value.trim();


    // Create a data object with the input values
    const userData = {
        username: signUpUsername.value,
        email: signUpEmail.value,
        password: signUpPassword.value
    };

    console.log(userData + " is userData for attemptSignUp");
    // some validity checks
    if (signUpUsername.value === "" || signUpEmail.value === "" || signUpPassword.value === "") {
        return;
    } else if (signUpEmail.value.indexOf('@') < 1 || signUpEmail.value.indexOf('.') < 1 || signUpEmail.value.lastIndexOf('.') < signUpEmail.value.indexOf('@')) {
        alert("Please enter a valid email 🔱");
        return;
    } else if
        (signUpPassword.value.length < 6) {
        alert("Please use at least 6 characters for your password")
        return;
    };
    try {
        // Send the POST request to your server endpoint
        const response = await fetch('/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        if (!response.ok) {
            alert("Sorry, that email is already in use");
        } else if (response.ok) { alert("Sign up successful! Please sign in!") };
        // Handle the response as needed
        const responseData = await response.json();
        console.log(responseData);
    } catch (error) {
        console.error("error is" + error);
    }
    // would be nice if I could slip a location.reload() in here
};


const logout = async () => {
    const response = await fetch("/api/user/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert("You aren't currently logged in.");
    }
};


loginSubmitBtn.addEventListener("click", function () {
    let email = $(".login-email-field").val();
    email.value = email.toLowerCase();
    email.value = email?.trim();

    const password = $(".login-password-field").val();
    password.value = password?.trim();
    // stops process and does nothing if nothing is entered for either field
    if (email === "" || password === "") {
        console.log("field missing");
        return;
    } else {
        console.log("login submit button clicked")
        // else tries to login the user
        attemptLogin(email, password);
    }
});


const loginPWField = document.getElementsByClassName('login-password-field')[0];

document.querySelector('.login-password-field').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        loginSubmitBtn.click();
    }
});


document.querySelector('.sign-up-password-field').addEventListener('keydown', function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Trigger the button element with a click
        signUpSubmitBtn.click();
    }
});

// Closes sign-up modal with Escape key if in password field specifically
document.querySelector('.sign-up-password-field').addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        signUpTile.style.display = "none";
    }
});

document.querySelector('.login-submit-button').addEventListener("click", attemptLogin);
document.querySelector('.sign-up-submit-button').addEventListener("click", attemptSignUp);




document.querySelector('.logoutBtn').addEventListener("click", logout);

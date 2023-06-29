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


document.querySelector('.login-password-field').keydown(function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Trigger the button element with a click
        loginSubmitBtn.click();
    }
});

$('.sign-up-password-field').keydown(function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Trigger the button element with a click
        signUpSubmitBtn.click();
    }
});


document.querySelector('.login-submit-button').addEventListener("click", attemptLogin);
document.querySelector('.sign-up-submit-button').addEventListener("click", attemptSignUp);

// Closes sign-up modal with Escape key if in password field specifically
$('.sign-up-password-field').keydown(function (event) {
    if (event.key === 'Escape') {
        signUpTile.style.display = "none";
    }
});


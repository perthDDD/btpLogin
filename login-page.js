const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "perthBTP5_0" && password === "sealHeb81012") {
        alert("You have successfully logged in.");
        window.open("https://funky-wave-252.notion.site/BTP5-ba4a0591ac434f6c9569f53e843c3a8f?pvs=4");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

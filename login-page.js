const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "perthBTP5_0" && password === "sealHeb81012") {
        alert("You have successfully logged in.");
        window.location.href = "https://funky-wave-252.notion.site/TGW-Education-eb3b662e83444e56a9a3ca05cb287870?pvs=4";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

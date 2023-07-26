const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "perthBTP5_0" && password === "sealHeb81012") {
        alert("You have successfully logged in.");
        window.location.href = "https://funky-wave-252.notion.site/BTP5-998cf1475e264d76b23c6913bf531411?pvs=4";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

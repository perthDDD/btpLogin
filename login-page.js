const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "ljYRLsRKEY" && password === "WKsSmEl4vz") {
        alert("You have successfully logged in.");
        window.open("https://funky-wave-252.notion.site/BTP6-ee6a9fb79ce34f018267a70a35d76838?pvs=4");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

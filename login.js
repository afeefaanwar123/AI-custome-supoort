const authService = new AuthService();
const loginButton = document.querySelector(".login button");
loginButton.addEventListener("click", handleLogin);

function handleLogin() {
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (email === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    authService.login(email, password);
}

const authService = new AuthService();
const signupButton = document.querySelector(".signup button");
signupButton.addEventListener("click", handleSignup);

function handleSignup() {
    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const role = document.getElementById("role").value;

    if (
        name === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === ""
    ) {
        alert("Please fill all fields");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    const result = authService.signup(name, email, password, role);

    if (result === false) {
        alert("Email already registered!");
        return;
    }

    alert("Signup successful!");
    window.location.href = "index.html";
}

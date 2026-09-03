const authService = new AuthService();

const signupButton = document.querySelector(".signup button");

signupButton.addEventListener("click", handleSignup);

function handleSignup() {

    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const role = document.getElementById("role").value;

    if (
        name === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === ""
    ) {
        console.log("Please fill all fields");
        return;
    }

    if (password !== confirmPassword) {
        console.log("Passwords do not match");
        return;
    }

    const result = authService.signup(
        name,
        email,
        password,
        role
    );

    if (result === false) {
        alert("Email already registered!");
        return;
    }

    alert("Signup successful!");

    window.location.href = "login.html";
}

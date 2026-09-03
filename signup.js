const authService = new AuthService();

const signupButton = document.querySelector(".signup button");

signupButton.addEventListener("click", handleSignup);

signup(name, email, password, role) {

    const newUser = new User(
        name,
        email,
        password,
        role
    );

    const users =
        JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(
        user => user.email === email
    );

    if (existingUser) {

        alert("Email already registered");

        return;
    }

    users.push(newUser);

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

    alert("Signup successful!");

    window.location.href = "login.html";
}

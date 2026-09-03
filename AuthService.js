class AuthService {

    signup(name, email, password, role) {

        const newUser = new User(
            name,
            email,
            password,
            role
        );

        console.log(newUser);

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const existingUser = users.find(user => user.email === email);

        if (existingUser) {
            console.log("Email already registered");
            return;
        }

        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));
    }


  login(email, password) {

    const users = JSON.parse(localStorage.getItem("users")) || [];

    console.log("Users:", users);
    console.log("Entered email:", email);
    console.log("Entered password:", password);

    const user = users.find(
        user => user.email === email && user.password === password
    );

    console.log("Found user:", user);

    if (!user) {
        console.log("Invalid email or password");
        return;
    }

    console.log("Login successful");

    localStorage.setItem("currentUser", JSON.stringify(user));

    window.location.href = "index.html";
}

}

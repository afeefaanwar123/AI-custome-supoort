class AuthService {
    signup(name, email, password, role) {
        const newUser = new User(name, email, password, role);
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const existingUser = users.find(
            user => user.email.toLowerCase() === email.toLowerCase()
        );

        if (existingUser) {
            return false;
        }

        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        return true;
    }

    login(email, password) {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(
            user =>
                user.email.toLowerCase() === email.toLowerCase() &&
                user.password === password
        );

        if (!user) {
            alert("Invalid email or password");
            return false;
        }

        localStorage.setItem("currentUser", JSON.stringify(user));
        window.location.href = "dashboard.html";
        return true;
    }
}

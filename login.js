const authService = new AuthService();
const loginButton = document.querySelector(".login button");
loginButton.addEventListener("click", handleLogin);
function handleLogin(){
        const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    if(email==="" || password===""){
          console.log("Please fill all fields");
        return;

    }
    authService.login(email,password);

   
}
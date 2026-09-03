const authService = new AuthService();

const signupButton = document.querySelector(".signup button");

signupButton.addEventListener("click", handleSignup);

function handleSignup() {

    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const role = document.getElementById("role").value;

   
 if(name=="" || email=="" || password=="" || confirmPassword=="" ){
        console.log("Show an error")
        return;
    }
    if(password!==confirmPassword){

    console.log("passwords are not match");
    return;
   }
   authService.signup(name, email, password, role);

   
 

  

   

    // console.log(name);
    // console.log(email);
    // console.log(password);
    // console.log(confirmPassword);
    // console.log(role);
    
}

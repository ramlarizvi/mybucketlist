function cancelSignUp() {
 
  alert("Sign up canceled");
}

function registerUser() {
  
  var email = document.getElementById("email").value;
  var password = document.getElementById("psw").value;
  var confirmPassword = document.getElementById("psw-repeat").value;

  
  if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
  }


  alert("User registered!\nEmail: " + email);
}


document.getElementById("cancelButton").addEventListener("click", cancelSignUp);
document.getElementById("signupButton").addEventListener("click", registerUser);


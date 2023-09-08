
const button = document.getElementById("Submit");

button.addEventListener("click" , passwordvalidator = () => {

   
   const password = document.getElementById("pass").value;
   const cpassword = document.getElementById("pass1").value;
   
   const message = document.getElementById("valid");


   if (password != cpassword) {
      message.innerText = "Password didn't matched";
   } else {
     message.innerText = "Password  match";
   }
});
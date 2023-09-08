function validation() {
    const email = document.getElementById("mail").value;
    const password = document.getElementById("pass").value;

    if (email.includes("@") && password.length >= 8 ) {
        document.getElementById("message").textContent = "Valid email and password!";
        document.getElementById("message").style.color = "green";

    }else {
        document.getElementById("message").textContent = "Invalid email and password!";
        document.getElementById("message").style.color = "red";
    }
}
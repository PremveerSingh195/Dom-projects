function change(){
   var text = document.getElementById("text").textContent ; 

    if ( text == "The most affordable learning platform") {
        document.getElementById("text").textContent = "PW Skills"
    } else {
        document.getElementById("text").textContent = "The most affordable learning platform"
    }
}
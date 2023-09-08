const colors = [ "green" , "yellow" , "orange" , "white" , "blue" , "pink" , "white" , "violet"];


const button = document.getElementById("color");

function cathnewcolor() {
     
     const randomcolor = colors[Math.floor(Math.random()*colors.length)]

     document.body.style.backgroundColor = randomcolor ;

}
     
button.addEventListener("click" , cathnewcolor);
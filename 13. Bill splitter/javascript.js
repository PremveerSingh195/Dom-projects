function calculation() {
    const costofdish1 = parseFloat(document.getElementById("cod1").value);
    const costofdish2 = parseFloat(document.getElementById("cod2").value);
    const costofdish3 = parseFloat(document.getElementById("cod3").value);
    const costofdish4 = parseFloat(document.getElementById("cod4").value);
    const costofdish5 = parseFloat(document.getElementById("cod5").value);
    const numberofpeople = parseFloat(document.getElementById("nop").value);


     var totalcostofdishes = [costofdish1 , costofdish2 , costofdish3 , costofdish4 , costofdish5]
     let sum = 0;

    for (let i = 0; i < totalcostofdishes.length; i++) {
         sum += totalcostofdishes[i]  ;   
    }
     
     let ppp = sum / numberofpeople;

     document.getElementById("result").textContent = "{" + sum + ":" + ppp + "}";
}
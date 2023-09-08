function converttofahrenheit() {
    const input = document.getElementById("temp").value;
     
    let newtemp = ( input * 9/5 ) + 32 ;  

    // console.log(newtemp);

    document.getElementById("result").textContent= newtemp + "degree fahrenheit"
}


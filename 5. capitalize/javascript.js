function Capitalletter() {

    var input = document.getElementById("capital").value;
  
    var capitalword = input.length > 0 ? input[0].toUpperCase() + input.slice(1) : "" ;
    
    document.getElementById("capital").value = capitalword;

}


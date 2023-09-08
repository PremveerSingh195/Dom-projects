function calculation() {
    
const num1 = parseFloat(document.getElementById("number1").value);
const num2 = parseFloat(document.getElementById("number2").value);
const operator = document.getElementById("operator").value;
var result = 0;

   switch (operator) {
    case "+":
        var result = num1 + num2 ;
        break;

    case "-":
        var result = num1 - num2 ;
        break;    
    
    case "*":
        var result = num1 * num2 ;
        break;

    case "/":
        var result = num1 / num2 ;
        break;    

    default:
        document.getElementById("response").textContent = "invalid operatior" ;
        return;
   }

   document.getElementById("reponse").textContent = "Result:" + result;

}





const button = document.getElementById("calculate");

button.addEventListener("click" , calculation = () => {

     const origninalprice = parseFloat(document.getElementById("org").value);
     const discountedprice = parseFloat(document.getElementById("dis").value);

     let result = (discountedprice * 100) / origninalprice;

     let result1 = 100-result;

     document.getElementById("Percentage").textContent= parseFloat(result1.toFixed(2)) + " % OFF"
} );
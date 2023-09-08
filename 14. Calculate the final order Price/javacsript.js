const button = document.getElementById("calculate");

button.addEventListener("click" , result = () => {
    const itemno1 = parseFloat(document.getElementById("item1").value);
    const itemno2 = parseFloat(document.getElementById("item2").value);
    const itemno3 = parseFloat(document.getElementById("item3").value);
    const itemno4 = parseFloat(document.getElementById("item4").value);
    const itemno5 = parseFloat(document.getElementById("item5").value);

    const itemquan1 = parseFloat(document.getElementById("quan1").value);
    const itemquan2 = parseFloat(document.getElementById("quan2").value);
    const itemquan3 = parseFloat(document.getElementById("quan3").value);
    const itemquan4 = parseFloat(document.getElementById("quan4").value);
    const itemquan5 = parseFloat(document.getElementById("quan5").value);

    let price1 = itemno1 *itemquan1;
    let price2 = itemno2 *itemquan2;
    let price3 = itemno3 *itemquan3;
    let price4 = itemno4 *itemquan4;
    let price5 = itemno5 *itemquan5;

          let cart = [price1, price2, price3 , price4 , price5];
          let sum = 0;

          for (let i = 0; i < cart.length; i++) {
              sum += cart[i];  
          }

        //   console.log(sum);

        document.getElementById("totalprice").textContent = "Total price : " + sum ;
});
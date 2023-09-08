function cartmaking() {
    const item1 = document.getElementById("itemno1").value;
    const item2 = document.getElementById("itemno2").value;
    const item3 = document.getElementById("itemno3").value;
    const item4 = document.getElementById("itemno4").value;
    const item5 = document.getElementById("itemno5").value;

    let array = [item1 , item2 ,item3, item4 ,item5];
    let cart = [... new Set(array)];

    document.getElementById("cart").textContent = "Cart items : " + cart;
}
function calculate() {
    const carinput = document.getElementById("category").value;
    const numberofdays = document.getElementById("numberofdays").value;
    var price;
    if (carinput === "Economy") {
        var price = numberofdays * 4000;
    } else if (carinput === "Midsize"){
        var price = numberofdays *10000;
    } else if (carinput === "Luxury"){
        var price = numberofdays * 20000;
    } else{
        return "invalid car input"
    }

    document.getElementById("result").textContent = " Total Rent in INR : " + price

}
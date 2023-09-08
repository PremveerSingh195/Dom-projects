const person = {
    name : "rajiv",
    balance : 1000,
    deposit : function (amount) {
        this.balance += amount;
    },

    withdraw : function (amount) {
        if (amount > this.balance) {
            console.log("isuffiecient fund");
        } else{
            this.balance -= amount;
        }
    }
}


person.deposit(1000);

// console.log(person.balance);

person.withdraw(1000);
console.log(person.balance);Node
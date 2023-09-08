function doubletheitems(array) {
    for (let i = 0; i < array.length; i++) {
        const items = array[i];

        let correctquantity = items*2
        console.log(correctquantity);
    }
}

const cartquantity = [2,4,3,9,6,7];

doubletheitems(cartquantity);
function divisiblebythree(array) {
    for (let i = 0; i < array.length; i++) {
        const number = array[i];
        
        if (number % 3 !== 0 || number % 2 === 0) {
            continue
        }

        console.log(number);
    }
}

    let numbers = [2, 8 , 54 , 87 , 36 , 88 , 21 , 78 , 60 ];

   divisiblebythree(numbers);
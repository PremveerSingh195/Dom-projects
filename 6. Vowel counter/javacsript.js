function vowelcounter() {
    let input = document.getElementById("name").value;
    let numberofvowels = input.match(/[aeiou]/gi);
    
    document.getElementById("vowelnumber").textContent =" Number of vowels "+numberofvowels.length;

}
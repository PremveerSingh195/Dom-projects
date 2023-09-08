function traingle() {
    const input = parseFloat(document.getElementById("integer").value);
    const patterncontainer = document.getElementById("image");
    patterncontainer.innerHTML = "";


    for (let row = input ; row  >= 1; row--) {
        let pattern = "";  
        
    for (let asterisk = 0; asterisk < row; asterisk++) {
        pattern += "*";
    }
    for (let space = 0; space < input - row; space++) {
           pattern += " ";
        }
    let newpattern = document.createElement("div");
    newpattern.classList.add("pattern");
    newpattern.textContent=pattern;
    patterncontainer.appendChild(newpattern);
  
    }
}


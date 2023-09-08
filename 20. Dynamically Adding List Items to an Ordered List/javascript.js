const listitems = ["item0" , "item1" , "item2" , "item3" , "item4"];
var currentindex = 0;

function addnewitems() {

    const addbutton = document.getElementById("addlist");
    const unlist1 = document.getElementById("unlist");

     if (currentindex < listitems.length) {
        
        let newitem = document.createElement("li");
        newitem.textContent = listitems[currentindex];

        unlist1.appendChild(newitem);

        currentindex++;
         } else{
            addbutton.disabled = true;
            alert("All items have been added.")
         }

}

const addbutton = document.getElementById("addlist");
addbutton.addEventListener("click" , addnewitems);
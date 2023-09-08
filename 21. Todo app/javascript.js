

function  addtask() {

    const input = document.getElementById("input").value;
    const list = document.getElementById("list")

    let newtask = document.createElement("li");
    newtask.textContent = input;

     list.appendChild(newtask) ;

     document.getElementById("input").value ="";
}

// function addtask() {
//     var input = document.getElementById("input").value = ""
// }

const submittask = document.getElementById("submittask")
submittask.addEventListener("click" , addtask)
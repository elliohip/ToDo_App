

function check_box() {

    let checkbox = {
        root : document.createElement("div"),
        box : document.createElement("div"),
        body : document.createElement("p"),
        completed: false,

    }


    checkbox.root.classList.add("checkbox")
    checkbox.box.classList.add("checkbox-box")

    checkbox.root.appendChild(checkbox.box)

    

    
    
    checkbox.body.innerHTML = "todo"

    checkbox.root.appendChild(checkbox.body)

    checkbox.root.addEventListener("click", function() {
        if (checkbox.completed = true){
            checkbox.completed = false
            checkbox.box.style.backgroundColor = "white"
            checkbox.body.innerHTML = "todo"
        } else {
            checkbox.completed = true
            checkbox.box.style.backgroundColor = "white"
        }
    });
    

    return checkbox
}




export {check_box}
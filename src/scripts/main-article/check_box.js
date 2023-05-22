

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
    

    return checkbox
}




export {check_box}
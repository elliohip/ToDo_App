import TodoItem from "./TodoItem";
import Date from "../Date";

export default class BlankTodoItem {

    constructor() {

        this.root = document.createElement("div")

        this.input = document.createElement("div")
        this.title = document.createElement("input")
        this.description = document.createElement("input")
        this.priority = document.createElement("select")

        this.date = document.createElement("div")

        this.title.type = "text"
        this.description.type = "text"

        let high_priority = document.createElement("option")
        let medium_priority = document.createElement("option")
        let low_priority = document.createElement("option")

        high_priority.innerHTML = "high"
        medium_priority.innerHTML = "medium"
        low_priority.innerHTML = "low"



        this.priority.appendChild(low_priority)
        this.priority.appendChild(medium_priority)
        this.priority.appendChild(high_priority)
        
        this.add_button = document.createElement("div")

        this.user_input = {

            title : this.title.value, 
            description : this.description.value,
            date : undefined,
            priority : ""

        }

        this.root.appendChild(this.title)
        this.root.appendChild(this.description)
        this.root.appendChild(this.priority)
        // this.root.appendChild(this.main)


        this.root.appendChild(this.add_button)

    }

    to_todo_item() {
        
    }
}
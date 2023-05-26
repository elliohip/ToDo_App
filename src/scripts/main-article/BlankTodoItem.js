import TodoItem from "./TodoItem";
import Date from "../Date";
import item_base from "../base_objects/item";

import ItemBase from "../base_objects/item";
import index from "../../index"



export default class BlankTodoItem {

    constructor(list_na) {
        this.list_name = list_na

        this.root = document.createElement("div")

        this.user_input = {
            title : "",
            description : "",
            date : "",
            priority : "",
        }

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
        
        this.add_button = document.createElement("button");

        this.add_button.innerHTML = "add Item"

        

        this.root.appendChild(this.title)
        this.root.appendChild(this.description)
        this.root.appendChild(this.priority)
        // this.root.appendChild(this.main)

        
        this.root.appendChild(this.add_button)

        this.root.classList.add("Blank-Todo-Item")
    };

    to_todo_item() {

        let item = ItemBase(this.user_input.title, this.user_input.description, this.user_input.priority, this.user_input.date, this.list_name)

        this.update_user_input()

        
        console.log(item);

        return new TodoItem(item)

    };

    update_user_input() {
        this.user_input.title = this.title.value
        this.user_input.description = this.description.value
        this.user_input.date = this.date.value
        this.user_input.priority = this.priority.value;
    };
}
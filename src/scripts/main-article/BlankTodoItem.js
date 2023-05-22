import TodoItem from "./TodoItem";
import Date from "../Date";

export default class BlankTodoItem {

    constructor() {

        this.root = document.createElement("div")

        

        this.user_input = {

            title : "", 
            description : "",
            date : undefined,
            priority : ""

        }

        this.input = document.createElement("div")
        this.title = document.createElement("input")
        this.description = document.createElement("input")
        this.priority = document.createElement("")

        this.title.type = "text"
        this.description.type = "text"
        


        
        this.add_button = document.createElement("div")

        
    }

    to_todo_item() {
        
    }
}
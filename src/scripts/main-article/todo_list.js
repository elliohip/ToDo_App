import BlankTodoItem from "./BlankTodoItem";
import TodoItem from "./TodoItem";

export default class TodoList {

    /**
     * 
     * @param {String} t Title of list
     */
    constructor(t){

        this.items = []
        this.header = document.createElement("div");
        this.root = document.createElement("div");
        this.main = document.createElement("div");

        this.root.classList.add("Todo-List")
        this.main.classList.add("Todo-List-Content")
        this.header.classList.add("Todo-List-Header")

        this.blank_item = new BlankTodoItem();

        this.next_item = undefined

        this.items.push(this.blank_item)

        this.blank_item.add_button.addEventListener("click", () => {this.add_button_listener(this.blank_item.to_todo_item())})

        console.log("made blank")

        
        this.main.appendChild(this.blank_item.root)

        if (t != null) {
            this.header.innerHTML = t
        }

        this.main.classList.add("TodoList-main");
        this.root.classList.add("TodoList");
        this.header.classList.add("TodoList-header");


        this.root.appendChild(this.header);
        this.root.appendChild(this.main);
    }

    /**
     * 
     * @param {TodoItem} it 
     */
    add_item(it) {

        let remove_element = this.items.pop()

        this.main.removeChild(remove_element.root)
        this.items.push(it)
        this.main.appendChild(it.root)
    }

    
    /**
     * 
     * 
     */
    add_button_listener(list) {

        

        this.add_item(this.blank_item.to_todo_item())

        this.blank_item = new BlankTodoItem()

        this.blank_item.add_button.addEventListener("click", () => {this.add_button_listener(this.blank_item.to_todo_item())})

        this.items.push(this.blank_item)
        this.main.appendChild(this.blank_item.root)

        
    }

    remove_selected_items() {

        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] instanceof TodoItem && this.items[i].rm == true) {
                this.items[i].root.parentElement.removeChild(this.items[i].root)
                delete this.items[i]
            }
        }

        this.items.filter(item => item != null)

        
        
        
        

    }




}
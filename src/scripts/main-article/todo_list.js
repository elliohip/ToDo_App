import ItemBase from "../base_objects/item";
import ListBase from "../base_objects/list";
import BlankTodoItem from "./BlankTodoItem";
import TodoItem from "./TodoItem";

export default class TodoList {

    /**
     * 
     * @param {String} t Title of list
     * @param {String} p Name of Project
     */
    constructor(t, p){

        this.base = this.to_base_list()

        this.title = t;

        this.project_name = p;

        this.items = []
        this.header = document.createElement("div");
        this.root = document.createElement("div");

        if (t != null) {
            this.header.innerHTML = t
        }

        this.main = document.createElement("div");

        this.root.classList.add("Todo-List")
        this.main.classList.add("Todo-List-Content")
        this.header.classList.add("Todo-List-Header")

        this.blank_item = new BlankTodoItem(t);

        this.next_item = undefined

        this.items.push(this.blank_item)

        this.blank_item.add_button.addEventListener("click", () => {this.add_button_listener(this.blank_item.to_todo_item())})

        console.log("made blank")

        
        this.main.appendChild(this.blank_item.root)

        
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

        this.blank_item = new BlankTodoItem(this.title)

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

    to_base_list() {

        let base = ListBase(this.title, this.project_name, [])
        for (let i = 0; i < this.items.length; i++) {
            if (!(this.items[i] instanceof BlankTodoItem)) {
                base.items[i].push(ItemBase(this.items[i].title, this.items[i].description, this.items[i].date, this.title))
            }
        }

        return base
    }




}
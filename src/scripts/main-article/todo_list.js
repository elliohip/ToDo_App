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

        this.blank_item = new BlankTodoItem();

        console.log("made blank")

        this.items.push(this.blank_item)
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
        this.items.pop()
        this.items.push(it)
        this.main.appendChild(it.root)
    }

    check_completed() {

    }


}
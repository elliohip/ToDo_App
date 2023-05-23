import TodoList from "./todo_list";

export default class Project{

    /**
     * 
     * @param {String} n 
     * @param {[]} lists 
     */
    constructor(n, lists) {
        
        
        this.lists = lists;
        this.root = document.getElementById("main-content");
        this.name = n;

    };

    set_root() {
        this.root.innerHTML = ""

        for(let i = 0; i < this.lists.length;i++) {
            this.root.appendChild(this.lists[i].root)
            console.log(this.root)
        }
    };

    /**
     * 
     * @param {TodoList} li 
     */
    add_list(li) {
        this.lists.push(li)

        this.root.appendChild(li.root)
    }
}
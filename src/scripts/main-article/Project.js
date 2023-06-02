import ListBase from "../base_objects/list";
import ProjectBase from "../base_objects/project";
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

        this.root.classList.add("Project")

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

    remove_todo_items() {
        let i = 0, len = this.lists.length;
        while(i < len) {
            this.lists[i].remove_selected_items();
            i++;
        };
    }


    find_list_title(name) {
        for (let i = 0; i < this.lists.length; i++) {
            if (this.lists[i].title == name) {
                return this.lists[i]
            }
        }
    }

    to_base_project() {

        let base = ProjectBase(this.name, [])


        for (let i = 0; i < this.lists.length; i++) {
            base.lists.push(this.lists[i].to_base_list());
        }
        
        return base;
    };
}
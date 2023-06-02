import ItemBase from "../base_objects/item";
import ListBase from "../base_objects/list";
import BlankTodoItem from "./BlankTodoItem";
import TodoItem from "./TodoItem";

import { update_storage } from "../../index";
// import {update_storage} from "../storage/update_storage"

export default class TodoList {

    /**
     * 
     * @param {String} t Title of list
     * @param {String} p Name of Project
     */
    constructor(t, p){

        

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

        this.blank_item.add_button.addEventListener("click", () => {this.add_item(this.blank_item.to_todo_item(),true)})

        console.log("made blank")

        
        this.main.appendChild(this.blank_item.root)

        
        this.main.classList.add("TodoList-main");
        this.root.classList.add("TodoList");
        this.header.classList.add("TodoList-header");


        this.root.appendChild(this.header);
        this.root.appendChild(this.main);

        this.base = this.to_base_list()
    }

    /**
     * 
     * @param {TodoItem} it 
     * @param {boolean} store tells wether to store this item
     */
    add_item(it, store) {

        
        this.main.innerHTML = ""
        this.items.pop()
        this.items.push(it)

        for (let i = 0; i < this.items.length; i++) {

            this.main.appendChild(this.items[i].root)

        }

        this.blank_item = new BlankTodoItem(this.title)

        this.blank_item.add_button.addEventListener("click", () => {this.add_item(this.blank_item.to_todo_item(), true)})

        if (store) {
            update_storage()
        }

        this.items.push(this.blank_item)
        this.main.appendChild(this.blank_item.root)

        /*
        this.main.removeChild(this.items.pop().root)
        this.items.push(it)
        this.main.appendChild(it.root)
        */
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
                base.items.push(ItemBase(this.items[i].title, this.items[i].description, this.items[i].date, this.title))
            }
        }

        return base
    }

    populate_items() {
        for (let i = 0; i < this.items.length; i++) {
            if(this.items[i] instanceof BlankTodoItem) {
                this.items.pop()
            }
            this.root.appendChild(this.items[i])
        }
    }




}
import { check_box } from "./check_box";

import {Date} from "../Date"
import ItemBase from "../base_objects/item";


export default class TodoItem{

    /**
     * 
     * @param {} item
     */
    constructor(item) {

        this.base = item;

        this.root = document.createElement("div")

        this.title = item.name;
        this.description = item.description;
        this.due_date = item.date;

        

        this.remove_button = check_box()

        this.priority = item.p;



        this.create_item();


        

        



        this.remove_button.box.addEventListener("click", () => {this.remove_button_listener()});

        this.rm = false;


        

        this.root.classList.add("Todo-Item")

    }


    remove_button_listener() {

        if (this.remove_button.completed == true) {


            this.remove_button.completed = false
            this.remove_button.box.style.backgroundColor = "white"
            this.rm = false;
        } else if (this.remove_button.completed == false) {
            this.remove_button.completed = true
            this.remove_button.box.style.backgroundColor = "black"
            this.rm = true
        }

    }

    completed_button_listener() {
        if (this.checkbox.completed == true) {
            this.checkbox.completed = false
            this.checkbox.box.style.backgroundColor = "white"
            this.rm = false
        } else if (this.checkbox.completed == false) {
            this.checkbox.completed = true
            this.checkbox.box.style.backgroundColor = "black"
            this.rm = true
        }
    }




    create_item() {

        // TODO: Use date library to add dates user can schedule
        //let date_string = String(this.due_date.month) + "/" + String(this.due_date.day) + "/" +  String(this.due_date.year);
        const title_comp = document.createElement("h1");
        const description_comp = document.createElement("p");
        const date = document.createElement("p");

        const priority = document.createElement("p")

        description_comp.classList.add("Todo-Item-description")
        
        
        
        
        date.innerHTML = this.due_date;
        title_comp.innerHTML = this.title;
        description_comp.innerHTML = this.description;

        priority.innerHTML = this.priority

        this.remove_button.innerHTML = "Remove"
        // this.remove_button.classList.add("remove_item_button")
        

        this.root.appendChild(title_comp)
        // this.root.appendChild(due_date)
        this.root.appendChild(description_comp)
        this.root.appendChild(date)
        this.root.appendChild(priority)

        this.root.appendChild(this.remove_button.root)
        

    }

    remove_item() {

        this.root.parentElement.removeChild(this.root)

    }
    

}
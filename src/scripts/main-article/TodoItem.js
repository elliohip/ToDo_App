import { check_box } from "./check_box";

import {Date} from "../Date"


export default class TodoItem{

    /**
     * 
     * @param {String} t Stirng for the Title
     * @param {String} d String for the description
     * @param {Date} date Date object for Date, in m/d/y format
     * @param {String} p String for the priority
     */
    constructor(t, d, date, p) {

        this.root = document.createElement("div")

        this.title = t;
        this.description = d;
        this.due_date = date;

        

        this.remove_button = check_box()

        this.priority = p;
        this.checkbox = check_box()

        this.create_item();


        

        

        this.checkbox.box.addEventListener("click", function() {
            if (this.checkbox.completed = true){
                this.checkbox.completed = false
                this.checkbox.box.style.backgroundColor = "white"
            } else {
                this.checkbox.completed = true
                this.checkbox.box.style.backgroundColor = "white"
            }
        });

        this.rm = false;


        

        this.root.classList.add("TodoItem")

    }


    remove_button_listener() {

        if (this.remove_button.completed == true) {
            this.remove_button.completed = false
            this.remove_button.box.style.backgroundColor = "white"
            this.rm = false;
        } else if (this.remove_button.completed == false) {
            this.remove_button.completed = true
            this.remove_button.box.style.backgroundColor = "white"
            this.rm = true
        }

    }

    completed_button_listener() {
        if (this.remove_button.completed == true) {
            this.remove_button.completed = false
            this.remove_button.box.style.backgroundColor = "white"
        } else if (this.remove_button.completed == false) {
            this.remove_button.completed = true
            this.remove_button.box.style.backgroundColor = "white"
        }
    }




    create_item() {

        let date_string = String(this.due_date.month) + "/" + String(this.due_date.day) + "/" +  String(this.due_date.year);
        const title = document.createElement("h1");
        const description = document.createElement("p");
        const due_date = document.createElement("p");

        
        
        

        due_date.innerHTML = date_string;
        title.innerHTML = this.title;
        description.innerHTML = this.description;

        this.remove_button.innerHTML = "Remove"
        // this.remove_button.classList.add("remove_item_button")
        

        this.root.appendChild(title)
        this.root.appendChild(due_date)
        this.root.appendChild(description)
        this.root.appendChild(this.checkbox.root)
        this.root.appendChild(this.remove_button.root)
        

    }

    remove_item() {

        this.root.parentElement.removeChild(this.root)

    }

    send_to_storage() {

        

        
    }
    

}
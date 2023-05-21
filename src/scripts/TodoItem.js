import { check_box } from "./check_box";

export default class TodoItem{

    constructor(t, d, due_m, due_d, due_y, p) {

        this.root = document.createElement("div")

        this.title = t;
        this.description = d;
        this.due_date = {
            due_month: due_m,
            due_day: due_d,
            due_year: due_y,
        };
        this.priority = p;

        this.checkbox = check_box()

        

        this.root.classList.add("TodoItem")
    }



    create_item() {

        let date_string = String(this.due_date.due_month) + "/" + String(this.due_date.due_day) + "/" +  String(this.due_date.due_year);
        const title = document.createElement("h1");
        const description = document.createElement("p");
        const due_date = document.createElement("p");

        
        
        

        due_date.innerHTML = date_string;
        title.innerHTML = this.title;
        description.innerHTML = this.description;
        

    }
    

}
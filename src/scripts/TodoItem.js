export default class TodoItem{

    constructor(t, d, due, p) {

        this.root = document.createElement("div")

        this.title = t;
        this.description = d;
        this.due_date = due;
        this.priority = p;

        this.completed = false

        this.root.classList.add("TodoItem")
    }



    create_item() {

        const title = document.createElement("h1")
        const description = document.createElement("p")
    }
    

}
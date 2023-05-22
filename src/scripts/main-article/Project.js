export default class Project{

    constructor() {
        
        this.lists = []
        this.root = document.getElementById("main-content")

    }

    set_root() {
        this.root.innerHTML = ""

        for(let i = 0; i < this.lists.length;i++) {
            this.root.appendChild(this.lists[i])
        }
    }
}
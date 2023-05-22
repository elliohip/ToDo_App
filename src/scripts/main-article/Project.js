export default class Project{

    constructor(n) {
        
        this.lists = [];
        this.root = document.getElementById("main-content");
        this.name = n;

    };

    set_root() {
        this.root.innerHTML = ""

        for(let i = 0; i < this.lists.length;i++) {
            this.root.appendChild(this.lists[i])
        }
    };
}
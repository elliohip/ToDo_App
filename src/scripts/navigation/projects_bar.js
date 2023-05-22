export default function projects_bar() {
    let projects = {
        root : document.createElement("div"),
        items : [],
        is_opened : false,
        open_bar: function(){
            if (this.is_opened == false) {
                this.root.innerHTML = ""
                for (let i = 0; i < this.items.length; i++) {
                    this.root.append(this.items[i].root)
                }
                this.is_opened = true
            }
            else {
                this.root.innerHTML = "> projects"
                this.is_opened = false
            }
        }
    }

    

    projects.root.classList.add("projects_bar")

    return projects
}
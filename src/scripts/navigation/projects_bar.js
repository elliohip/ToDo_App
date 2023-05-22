export default function projects_bar() {
    let projects = {
        root : document.createElement("div"),
        items : [],
        is_opened : false,
        
    }

    projects.root.innerHTML = "> projects"

    projects.root.classList.add("projects_bar")

    return projects
}
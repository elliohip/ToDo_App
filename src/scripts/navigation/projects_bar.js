export default function projects_bar() {
    let projects = {
        root : document.createElement("div"),
        projects_button : document.createElement("div"),
        projects_container : document.createElement("div"),
        items : [],
        is_opened : false,
        
    };

    projects.projects_button.classList.add("projects-bar-show-projects")

    projects.projects_button.innerHTML = "> projects";

    projects.root.classList.add("projects-bar");

    projects.root.appendChild(projects.projects_button);
    projects.root.appendChild(projects.projects_container);

    return projects;
};
import {Date} from "./scripts/Date"

import {TodoList} from "./scripts/main-article/todo_list"
import {TodoItem} from "./scripts/main-article/TodoItem"
import { check_box } from "./scripts/main-article/check_box"

import nav_bar from "./scripts/navigation/nav_bar"
import project_container from "./scripts/navigation/project_container"
import Project from "./scripts/main-article/Project"
import projects_bar from "./scripts/navigation/projects_bar"
import project_item from "./scripts/navigation/project_item"



let nav = nav_bar()


let current_project = undefined



nav.new_project.addEventListener("click", function() {
    let name = prompt("project name: ")
    current_project = new Project(name)
    current_project.set_root()

    nav.projects.items.push(project_item(current_project))

    
});


nav.root.appendChild(nav.new_project)
nav.root.appendChild(nav.projects)

nav.projects.root.addEventListener("click", function() {
    nav.projects.open_bar()
});





import {Date} from "./scripts/Date"

import {TodoList} from "./scripts/main-article/todo_list"
import {TodoItem} from "./scripts/main-article/TodoItem"
import { check_box } from "./scripts/main-article/check_box"

import nav_bar from "./scripts/navigation/nav_bar"
import Project from "./scripts/main-article/Project"
import projects_bar from "./scripts/navigation/projects_bar"
import project_item from "./scripts/navigation/project_item"

import "./style.css"



let nav = {
    root : document.createElement("nav"),
    new_project : document.createElement("div"),
    projects : projects_bar()

}

let doc = document

const main_content = document.getElementById("main-content")


const wrapper = document.getElementById("wrapper")




let current_project = undefined



nav.new_project.addEventListener("click", function() {
    let name = prompt("project name: ")
    current_project = new Project(name)
    current_project.set_root()

    nav.projects.items.push(project_item(current_project))

    
});

nav.root.appendChild(nav.new_project)
nav.root.appendChild(nav.projects.root)

nav.projects.root.addEventListener("click", function() {
    open_bar()
});

function open_bar() {
            if (nav.projects.is_opened == false) {
                nav.projects.root.innerHTML = ""
                for (let i = 0; i < nav.projects.items.length; i++) {
                    nav.projects.root.appendChild(nav.projects.items[i].root)
                }
                nav.projects.is_opened = true
            }
            else {
                nav.projects.root.innerHTML = "> projects"
                nav.projects.is_opened = false
            }
}





wrapper.appendChild(nav.root)
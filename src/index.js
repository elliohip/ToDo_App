import {Date} from "./scripts/Date"

import TodoList, {todo_list} from "./scripts/main-article/todo_list"
import {TodoItem} from "./scripts/main-article/TodoItem"
import { check_box } from "./scripts/main-article/check_box"

import nav_bar from "./scripts/navigation/nav_bar"
import Project from "./scripts/main-article/Project"
import projects_bar from "./scripts/navigation/projects_bar"
import project_item from "./scripts/navigation/project_item"

import "./style.css"
import send_to_storage from "./scripts/send_to_storage"
import BlankTodoItem from "./scripts/main-article/BlankTodoItem"



let nav = {
    root : document.createElement("nav"),
    new_project : document.createElement("div"),
    projects : projects_bar()

}

let doc = document

const main_content = document.getElementById("main-content")


const wrapper = document.getElementById("wrapper")

let current_project = undefined



nav.new_project.classList.add("new-project-button")

nav.new_project.innerHTML = "> new_project"

nav.new_project.addEventListener("click", function() {

    let name = prompt("name of project: ")
    let first_list = prompt("name of first list: ")
    let project = new Project(name, [new TodoList(first_list)])

    current_project = project
    nav.projects.items.push(project_item(project))

    // does nothing for now
    send_to_storage("project", project)
    project.set_root()

    
    

    nav.projects.projects_container
});







nav.root.appendChild(nav.new_project)
nav.root.appendChild(nav.projects.root)

nav.projects.projects_button.addEventListener("click", function() {
    open_bar()
});

function open_bar() {
            if (nav.projects.is_opened == false) {
                nav.projects.projects_container.innerHTML = ""
                for (let i = 0; i < nav.projects.items.length; i++) {
                    nav.projects.root.appendChild(nav.projects.items[i].root)
                }
                nav.projects.is_opened = true
            }
            else {
                nav.projects.projects_container.innerHTML = ""
                nav.projects.is_opened = false
            }
}





wrapper.appendChild(nav.root)
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
import lightFormat from "date-fns/fp/lightFormat/index.js"



let nav = nav_bar()

let doc = document

let projects = []

document.addEventListener("DOMContentLoaded", function () {

    let projs =JSON.parse(localStorage.getItem("projects"))

    console.log(projs)
    if (JSON.parse(localStorage.getItem("projects")) != null) {
        for (let i = 0; i < projs.length; i++) {
            projects[i] = Object.setPrototypeOf(projs[i], Project.prototype)
            nav.projects.items.push(projects[i])
        }
    }

    
    
});

const main_content = document.getElementById("main-content")


const wrapper = document.getElementById("wrapper")

let current_project = undefined

nav.new_list.innerHTML = "> New List"


nav.new_project.classList.add("new-project-button")

nav.new_project.innerHTML = "> new_project"

nav.new_project.addEventListener("click", function() {

    let name = prompt("name of project: ")
    let first_list = prompt("name of first list: ")
    let project = new Project(name, [new TodoList(first_list)])


    current_project = project

    projects.push(project)
    nav.projects.items.push(project_item(project))

    // does nothing for now
    send_to_storage("projects", projects)

    project.set_root()

    
    

    nav.projects.projects_container
});









nav.projects.projects_button.addEventListener("click", function() {
    open_bar()
});

function open_bar() {
            if (nav.projects.is_opened == false) {
                nav.projects.projects_container.innerHTML = ""
                for (let i = 0; i < nav.projects.items.length; i++) {
                    nav.projects.projects_container.appendChild(nav.projects.items[i].root)
                }
                nav.projects.is_opened = true
            }
            else if (nav.projects.is_opened == true) {
                nav.projects.projects_container.innerHTML = ""
                nav.projects.is_opened = false
            }
}


nav.new_list.addEventListener("click", new_list)

function new_list() {
    let name = prompt("new list name")

    let new_li = new TodoList(name)

    current_project.add_list(new_li)
};


wrapper.appendChild(nav.root)

nav.remove_selected_items_button.addEventListener("click", function() {
    current_project.remove_todo_items();

    console.log("removed");
});

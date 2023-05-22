import {Date} from "./scripts/Date"

import {TodoList} from "./scripts/main-article/todo_list"
import {TodoItem} from "./scripts/main-article/TodoItem"
import { check_box } from "./scripts/main-article/check_box"

import nav_bar from "./scripts/navigation/nav_bar"
import project_container from "./scripts/navigation/project_container"
import Project from "./scripts/main-article/Project"




let nav = nav_bar()

nav.root.appendChild(nav.new_project)
nav.root.appendChild(nav.projects)


nav.projects.clickListener




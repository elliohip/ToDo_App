import BlankTodoItem from "../main-article/BlankTodoItem";
import Project from "../main-article/Project";
import TodoItem from "../main-article/TodoItem";
import TodoList from "../main-article/todo_list";
import ProjectBase from "./project";

/**
 * 
 * @param {any} project 
 */
export default function project_to_article(project) {
    let proj = new Project(project.name, []);

    let pre_lists = project.lists;

    let post_lists = [];
    for (let i = 0; i < pre_lists.length; i++) {

        let list = new TodoList(pre_lists[i].name, project.name)
        let post_arr = [];

        for (let j = 0; j < pre_lists[i].items.length; j++) {
            list.add_item(new TodoItem(pre_lists[i].items[j]), false)
        }
        // post_arr.push(new BlankTodoItem(list.title))
        // list.items = post_arr

        post_lists.push(list)
    }
    proj.lists = post_lists;

    return proj
}


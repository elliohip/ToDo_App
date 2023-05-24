import projects_bar from "./projects_bar"

export default function nav_bar() {

    let nav = {
        root : document.createElement("nav"),
        remove_selected_items_button : document.createElement("div"),
        new_project : document.createElement("div"),
        projects : projects_bar(),
        new_list : document.createElement("div"),
        remove_list : {
            root : document.createElement("div"),
            input_bar : document.createElement("input"),
            action_button : document.createElement("button")
        }

    }

    nav.remove_list.input_bar.type = "text"
    nav.remove_list.action_button.hnnerHTML = "rm"


    nav.new_list.innerHTML ="> new list"

    nav.remove_list.root.appendChild(nav.remove_list.input_bar)
    nav.remove_list.root.appendChild(nav.remove_list.action_button)

    nav.root.classList.add("nav")

    nav.remove_selected_items_button.innerHTML = "> Remove_Selected_Items <"; 

    nav.remove_list.root.classList.add("remove_list")

    nav.root.appendChild(nav.new_project)
    nav.root.appendChild(nav.projects.root)

    nav.root.appendChild(nav.new_list)

    nav.remove_selected_items_button.classList.add("remove-selected-items")

    nav.root.appendChild(nav.remove_selected_items_button)
    nav.root.appendChild(nav.remove_list.root)

    return nav
}
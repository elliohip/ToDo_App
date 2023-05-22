import projects_bar from "./projects_bar"

export default function nav_bar() {

    let nav = {
        root : document.createElement("nav"),
        new_project : document.createElement("div"),
        projects : projects_bar()

    }

    



    return nav
}
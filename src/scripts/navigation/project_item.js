import Project from "../main-article/Project"
import index from "../../index"

/**
 * 
 * @param {Project} project 
 * @returns 
 */
export default function project_item(project) {

    

    let item = {
        root : document.createElement("div"),
        clickListener: function() {
            project.set_root();
            index = project
        }
    }

    item.root.classList.add("project-item-selector")

    item.root.innerHTML = "&nbsp > " + project.name


    return item
    
}
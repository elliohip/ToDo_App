import Project from "../main-article/Project"

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
            
        }
    }

    item.root.classList.add("project-item-selector")

    item.root.innerHTML = "&nbsp > " + project.name


    return item
    
}
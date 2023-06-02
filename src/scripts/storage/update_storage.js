import project_base from "../base_objects/project";
import ItemBase from "../base_objects/item";
import ListBase from "../base_objects/list";
import ProjectBase from "../base_objects/project";

import index, { current_project } from "../../index"
import Project from "../main-article/Project";

function update_storage() {

    localStorage.setItem("project", JSON.stringify(current_project.to_base_project()))
    
}

export {update_storage}
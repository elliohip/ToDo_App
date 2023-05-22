import Project from "../main-article/Project"

export default function project_item(json_file) {

    if (json_file == null) {

        let item = {
            root : document.createElement("div"),
            clickListener: function() {
                
            }
        }


        return item
    }
}
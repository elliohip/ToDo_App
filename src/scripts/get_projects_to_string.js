
/**
 * 
 * @param {Project[]} projects 
 */
export default function get_projects_to_string(projects) {

    

    for (let i = 0; i < projects.length; i++) {
        let lists = projects[i].lists
        for (let j = 0; j < projects[i].lists.length; j++) {
            let list = lists[j]
            let list_items = list.items;
            for (let k = 0; k < list_items.length; k++) {
                let item = list_items[k]
            }
        }

    }
}
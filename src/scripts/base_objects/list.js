/**
 * 
 * @param {String} n name of list
 * @param {String} p name of project
 * @param {item_base[]} its List of all items in this list
 * @returns 
 */
export default function ListBase(n, p, its) {

    return {
        name : n,
        project : p,
        items : its
    }
    
}
export default function ProjectBase(n, lsts) {
    
    let name= n;
    let lists= [];

    if (lsts != null) {
        lists = lsts
    }

    return {
        name: name,
        lists: lists,
    }

    
}
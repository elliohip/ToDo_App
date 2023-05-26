export default function ProjectBase(n, lsts) {
    
    this.name= n;
    this.lists= [];

    if (lsts != null) {
        this.lists = lsts
    }

    return {
        name: this.name,
        lists: this.lists,
    }

    
}
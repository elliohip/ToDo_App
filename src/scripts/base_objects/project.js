export default function ProjectBase(n, lsts) {
    
    this.name= n,
    this.lists= [],
    this.class= "Project"

    if (lsts != null) {
        this.lists = lsts
    }

    
}
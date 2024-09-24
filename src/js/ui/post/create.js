import { createPost } from "../../api/post/create";

export async function onCreatePost(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const createData = {
        title: formData.get("title"), 
        body: formData.get("body"), 
        tags: formData.get("tags"), 
        url: formData.get("image"),
        alt: formData.get("alt")
        
    }

    createPost(createData)
}

import { createPost } from "../../api/post/create";

/**
 * Handles the creation of a new post from a form submission.
 * 
 * This asynchronous function prevents the default form submission behavior,
 * retrieves the title, body, tags, and media information from the form data,
 * and calls the `createPost` function with the prepared post data.
 * The tags are processed into an array, and the media object is structured
 * to include a URL and alt text.
 * 
 * @async
 * @function onCreatePost
 * @param {Event} event - The event object representing the form submission event.
 * @returns {Promise<void>} Resolves when the post creation process is initiated.
 * @throws {Error} If an error occurs during the post creation process.
 */

export async function onCreatePost(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const createData = {
        title: formData.get("title"), 
        body: formData.get("body"), 
        tags: formData.get("tags")?formData.get("tags").split(',').map(tag => tag.trim()):[], 
        media: {
            url: formData.get("image"),
            alt: formData.get("alt")
        }
        
        
    }

    createPost(createData)
}

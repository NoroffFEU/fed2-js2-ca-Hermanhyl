import { updatePost } from "../../api/post/update";

/**
 * Handles the update of an existing post from a form submission.
 * 
 * This asynchronous function prevents the default form submission behavior,
 * retrieves the title, body, tags, and media information from the form data,
 * and calls the `updatePost` function with the specified post ID and the
 * prepared update data. The tags are processed into an array, and the media
 * object is structured to include a URL and alt text.
 * 
 * @async
 * @function onUpdatePost
 * @param {Event} event - The event object representing the form submission event.
 * @param {string} postId - The unique identifier of the post to be updated.
 * @returns {Promise<void>} Resolves when the post update process is initiated.
 * @throws {Error} If an error occurs during the post update process.
 */

export async function onUpdatePost(event, postId) {
    event.preventDefault(); 
    
    const form = new FormData(event.target);

    const editInfo = {
        title: form.get('title'),
        body: form.get('body'),
        tags: form.get('tags') ? form.get('tags').split(', ').map(tag => tag.trim()) : [],
        media: {
            url: form.get('image'),
            alt: form.get('alt') 
        }
    };

    updatePost(postId, editInfo)

}

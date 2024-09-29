import { deletePost } from "../../api/post/delete";

/**
 * Handles the deletion of a post after user confirmation.
 * 
 * This asynchronous function prompts the user to confirm the deletion of a post.
 * If the user confirms, it calls the `deletePost` function with the specified post ID.
 * It alerts the user whether the deletion was successful or not.
 * If the user cancels the action, a message is logged to the console.
 * 
 * @async
 * @function onDeletePost
 * @param {string} id - The unique identifier of the post to be deleted.
 * @returns {Promise<void>} Resolves when the deletion process is completed.
 * @throws {Error} If an error occurs during the deletion process.
 */


export async function onDeletePost(id) {
    
    const confirmDelete = confirm('Are you sure you want to delete this post?');

    if (confirmDelete) {
        const success = await deletePost(id);  // Call the deletePost function

        if (success) {
            alert('Post successfully deleted!');
        } else {
            alert('Failed to delete the post.');
        }
    } else {
        console.log('User canceled the delete action.');
    }
    
}

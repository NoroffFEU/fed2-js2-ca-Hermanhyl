import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers"

/**
 * Deletes a post based on the post ID from the URL query parameters.
 * 
 * This function retrieves the post ID from the current URL's query string and sends a DELETE request to the server.
 * If the deletion is successful, a confirmation message is logged. Otherwise, an error message is displayed.
 * 
 * @async
 * @function deletePost
 * @returns {Promise<boolean>} Returns `true` if the post is successfully deleted, or `false` if an error occurs.
 * @throws {Error} If the deletion request fails.
 */

export async function deletePost() {
    const id = new URLSearchParams(window.location.search).get('id');
    try {
        const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
            method: 'DELETE',
            headers: headers()
        });

        if (response.ok) {
            console.log('Post successfully deleted');
        } else {
            const errorMessage = await response.text(); 
            console.error('Failed to delete post:', errorMessage);
            return false;
        }
    } catch (error) {
        console.error('Error deleting post:', error);
        return false;
    }
}

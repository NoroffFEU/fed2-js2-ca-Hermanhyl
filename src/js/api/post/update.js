import { API_SOCIAL_POSTS } from "../constants"
import { headers } from "../headers"

/**
 * Updates an existing post with new details.
 * 
 * This function sends a PUT request to update a specific post identified by its ID,
 * including the new title, body, tags, and media. If the update is successful, it alerts the user
 * and returns the updated post data. If the update fails, it alerts the user and logs an error.
 * 
 * @async
 * @function updatePost
 * @param {string} id - The unique identifier of the post to update.
 * @param {Object} params - The new details for the post.
 * @param {string} params.title - The new title of the post.
 * @param {string} params.body - The new body content of the post.
 * @param {Array<string>} [params.tags] - Optional new tags for the post.
 * @param {Array<string>} [params.media] - Optional new media links for the post.
 * @returns {Promise<Object|null>} The updated post data if successful, or `null` if an error occurs.
 * @throws {Error} If the update request fails.
 */

export async function updatePost(id, { title, body, tags, media }) {
    id = new URLSearchParams(window.location.search).get('id');

    try {
        const response = await fetch (`${API_SOCIAL_POSTS}/${id}`, {
            method: 'PUT',
            headers: headers(),
            body: JSON.stringify({title, body, tags, media})
        });

        if (!response.ok) {
            alert('Failed to update post')

        } else {
            alert('Post successfully updated')
            //window.location.href = /post/?id=${id}
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.error('Failed to update the post:', error);
    }
}

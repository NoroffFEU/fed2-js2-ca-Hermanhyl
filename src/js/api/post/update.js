import { API_SOCIAL_POSTS } from "../constants"
import { headers } from "../headers"

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

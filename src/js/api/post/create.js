import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

/**
 * Creates a new post by sending the post details to the server.
 * 
 * This function sends a POST request to the social posts API with the post's title, body, tags, and media.
 * If the post is created successfully, the response data is returned, otherwise, an error is logged.
 *
 * @async
 * @function createPost
 * @param {Object} params - The post details.
 * @param {string} params.title - The title of the post.
 * @param {string} params.body - The content of the post.
 * @param {Array<string>} [params.tags] - Optional tags for the post.
 * @param {Array<string>} [params.media] - Optional media links for the post.
 * @returns {Promise<Object|undefined>} The data of the created post, or undefined if an error occurs.
 * @throws {Error} If the post creation fails.
 */

export async function createPost({ title, body, tags, media }) {
    
        const requestBody = {
            title, 
            body, 
            tags, 
            media
        };
        
        console.log("request-body", requestBody);
        
        try {
            const response = await fetch(API_SOCIAL_POSTS, {
                method: "POST",
                headers: headers(),
                body: JSON.stringify(requestBody),
            });

            if (response.ok) {
                const data = await response.json();
            return data
            }
            
        } catch (error) {
            console.error("Error creating post:", error);
        }
}

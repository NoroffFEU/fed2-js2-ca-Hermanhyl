import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

/**
 * Fetches and returns the details of a post by its ID from the query parameters.
 * 
 * This function sends a GET request to the server to retrieve a specific post along with its author details.
 * If the request is successful, it returns the post data. If an error occurs or the request fails, it logs an error and returns `null`.
 * 
 * @async
 * @function readPost
 * @returns {Promise<Object|null>} The post data if successful, or `null` if an error occurs.
 * @throws {Error} If an error occurs while fetching the post.
 */

export async function readPost() {
    
    const id = new URLSearchParams(window.location.search).get("id");

     try {
         const response = await fetch(`${API_SOCIAL_POSTS}/${id}?_author=true`, {
             method: "GET",
             headers: headers(),
         });

         if (response.ok) {
             const data = await response.json();
             const post = data.data
             return post; 
         } else {
             console.error("Failed to fetch post:", response.status, response.statusText);
             return null; 
         }
     } catch (error) {
         console.error("An error occurred while fetching the post:", error);
         return null; 
     }
}

/**
 * Fetches a list of posts with optional pagination and filtering by tag.
 * 
 * This function sends a GET request to fetch a paginated list of posts, including author details.
 * It allows specifying the number of posts per page (`limit`), the current page (`page`), and an optional tag to filter posts.
 * If the request is successful, the post data is returned. In case of an error, it is logged and thrown.
 * 
 * @async
 * @function readPosts
 * @param {number} [limit=12] - The number of posts to retrieve per page (default is 12).
 * @param {number} [page=1] - The current page number (default is 1).
 * @param {string} [tag] - An optional tag to filter posts by.
 * @returns {Promise<Array<Object>>} The list of posts, including their author details.
 * @throws {Error} If an error occurs while fetching the posts.
 */

export async function readPosts(limit = 12, page = 1, tag) {
    try {
        const params = new URLSearchParams({
            limit: limit.toString(),
            page: page.toString(),
            _author: true,
        });

        if (tag) {
            params.append("tag", tag);
        }

        const url = `${API_SOCIAL_POSTS}?${params.toString()}`;

        const response = await fetch(url, {
            method: "GET",
            headers: headers(),
        });
        
        if (!response.ok) {
            throw new Error(`Error! Didn't manage to fetch posts: ${response.status}`);
        }
        
        const data = await response.json();
        const posts = data.data
        return posts;
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
    }
}

/**
 * Not in use yet
 */

export async function readPostsByUser(name, limit = 12, page = 1, tag) {

    try {
        const params = new URLSearchParams({ 
            limit: limit.toString(),
            page: page.toString(),
            _author: true, 
        });

        if (tag) {
            params.append("tag", tag);
        }

        const url = `${API_SOCIAL_POSTS}?${params.toString()}`;

        const response = await fetch(url, {
            method: "GET",
            headers: headers(),
        });

        
        if (!response.ok) {
            throw new Error(`Error! Didn't manage to fetch posts: ${response.status}`);
        }
        
        const data = await response.json();
        const posts = data.data
        
        return posts;
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
    }
}

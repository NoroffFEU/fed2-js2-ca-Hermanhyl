import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

     // const accessToken = getAuthToken();
    //const createButton = document.getElementById("create-button");

export async function createPost({ title, body, tags, image, alt }) {
    
        const requestBody = {
            title: title,
            body: body,
            tags: [tags],
            url: image,
            alt: alt, 
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
            console.log("Post created successfully:", data);
            return data
            }
            
        } catch (error) {
            console.error("Error creating post:", error);
        }
}

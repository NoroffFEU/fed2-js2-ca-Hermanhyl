import { readPost } from "../../api/post/read";
import { setLogoutListener } from "../../ui/global/logout";
import { onUpdatePost } from "../../ui/post/update";
import { authGuard } from "../../utilities/authGuard";


const postId = JSON.parse(localStorage.getItem("postId"));

/**
 * Loads a post and populates the edit form with its details.
 * 
 * This asynchronous function fetches a post using `readPost` and populates the form fields for editing.
 * It sets the title, body, tags, media URL, and alt text of the post in the corresponding form elements.
 * If the post is not found or an error occurs during the fetching, an appropriate error message is logged.
 * 
 * @async
 * @function loadPost
 * @returns {Promise<void>} Resolves when the post details have been loaded into the form.
 * @throws {Error} If an error occurs while fetching the post.
 */

async function loadPost() {

    try {
        const post = await readPost();
        if (post || post.data) {
            formEditPost.title.value = post.title;
            formEditPost.body.value = post.body; 
            formEditPost.tags.value = post.tags?.join(', ') || ''; 
            formEditPost.image.value = post.media?.url || ''; 
            formEditPost.alt.value = post.media?.alt || ''; 
            
        } else {
            console.error("Post not found");
        }
    } catch (error) {
        console.error("Error loading post:", error);
    }
}

const formEditPost = document.forms['editPost'];
formEditPost.addEventListener('submit', (event) => onUpdatePost(event, postId));
loadPost();

setLogoutListener()

authGuard();

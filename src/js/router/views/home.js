import { displayPosts } from "../../api/post/posts-Structure";
import { readPosts } from "../../api/post/read";
import { setLogoutListener } from "../../ui/global/logout";
import { authGuard } from "../../utilities/authGuard";

/**
 * Retrieves and displays a list of posts on the page.
 * 
 * This asynchronous function calls `readPosts` to fetch the posts and then
 * passes the retrieved posts to the `displayPosts` function to render them in the UI.
 * 
 * @async
 * @function runPage
 * @returns {Promise<void>} Resolves when the posts have been fetched and displayed.
 */

async function runPage() {
    const posts = await readPosts()
    displayPosts(posts)
}

runPage();

setLogoutListener();

authGuard();

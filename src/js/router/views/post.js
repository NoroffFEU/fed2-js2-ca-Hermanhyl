import { readPost } from "../../api/post/read";
import { onDeletePost } from "../../ui/post/delete";

/**
 * Displays the details of a single post in the HTML container with the ID "postContainer".
 * 
 * This function creates and appends elements for the post, including the title, author, date, body,
 * media (if available), and buttons for deleting and editing the post.
 * The delete button triggers the `onDeletePost` function, while the edit button redirects to the edit page.
 * 
 * @function displayPost
 * @param {Object} post - The post object to display.
 * @param {string} post.title - The title of the post.
 * @param {Object} post.author - The author of the post.
 * @param {string} post.author.name - The name of the author.
 * @param {string} post.body - The content of the post.
 * @param {string} post.created - The creation date of the post in ISO format.
 * @param {Object} [post.media] - Optional media object associated with the post.
 * @param {string} [post.media.url] - The URL of the post's media.
 * @returns {void}
 */

export const displayPost = (post) => {
    const postContainer = document.getElementById("postContainer");

    if (!postContainer) {
        console.error("No container with the id 'postsContainer' found.");
        return;
    }

    const container = document.createElement("div");
    container.className = "postContainer";

    const title = document.createElement("h2");
    title.innerText = post.title;

    const userName = post.author.name;
    const postDate = new Date(post.created).toLocaleDateString();

    const text = document.createElement("p");
    text.innerText = post.body;

    const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.addEventListener('click', () => onDeletePost());

    const editButton = document.createElement('button');
        editButton.innerText = "Edit"
        editButton.className = "edit-button"
        editButton.addEventListener('click', () => window.location.href = `/post/edit/?id=${post.id}`)

    const image = document.createElement("img");

    if (post.media && post.media.url) {
        image.src = post.media.url;
        image.alt = post.media.url;
        image.className = "postImage";
        container.append(image);
    }

    container.append(title, text, userName, postDate, deleteButton, editButton);
    postContainer.append(container);
};


async function runPage() {
    const post = await readPost()
    displayPost(post)
}

runPage();

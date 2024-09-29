import { readPost } from "../../api/post/read";
import { setLogoutListener } from "../../ui/global/logout";
import { onDeletePost } from "../../ui/post/delete";



alert("Single Post Page");
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

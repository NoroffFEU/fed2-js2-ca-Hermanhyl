
/**
 * Displays a list of posts in the HTML container with the ID "postsContainer".
 * 
 * This function dynamically creates and appends elements for each post, including the title, author, date, body, tags, media, and a "View Post" button.
 * If a media URL is present, it displays the image. The "View Post" button navigates the user to the individual post page.
 * 
 * @function displayPosts
 * @param {Array<Object>} posts - The array of post objects to display.
 * @param {string} loggedInUserName - The username of the currently logged-in user.
 * @param {string} posts[].title - The title of the post.
 * @param {Object} posts[].author - The author of the post.
 * @param {string} posts[].author.name - The author's name.
 * @param {string} posts[].body - The body content of the post.
 * @param {Array<string>} [posts[].tags] - Optional tags for the post.
 * @param {Object} [posts[].media] - Optional media object associated with the post.
 * @param {string} [posts[].media.url] - The URL of the post's media.
 * @param {string} posts[].created - The creation date of the post in ISO format.
 * @param {string} posts[].id - The unique identifier for the post.
 * @returns {void}
 */

export const displayPosts = (posts, loggedInUserName) => {
    const postContainer = document.getElementById("postsContainer");

    if (!postContainer) {
        console.error("No container with the id 'postsContainer' found.");
        return;
    }

    posts.forEach((post) => {
        const container = document.createElement("div");
        container.className = "postContainer bg-blue-950 p-5 rounded shadow-lg";

        const title = document.createElement("h2");
        title.innerText = post.title;
        title.className = "h2-title text-2xl text-bold max-w-400 truncate"

        const userName = document.createElement("p");
        userName.innerText = post.author?.name || "Unknown Author";
        userName.className = "postAuthor mb-2 mt-2";

        const postDate = document.createElement("p");
        postDate.innerText = new Date(post.created).toLocaleDateString();
        postDate.className = "postDate";

        const text = document.createElement("p");
        text.innerText = post.body;
        text.className = "truncate max-w-400 text-ellipsis"

        const tags = document.createElement("p");
        tags.innerText = Array.isArray(post.tags) ? post.tags.join(", ") : post.tags;

        console.log(`Logged in user: ${loggedInUserName}, Post author: ${post.author?.name}`);

        const image = document.createElement("img");
        image.className = "postImage"

        if (post.media && post.media.url) {
            image.src = post.media.url;
            image.alt = post.media.url;
            image.className = "postImage";
            container.append(image);
        }

        const viewPostButton = document.createElement("button");
        viewPostButton.innerText = "View Post";
        viewPostButton.className = "viewPostButton bg-blue-700 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2";


        // Add event listener to the view post button
        viewPostButton.addEventListener("click", () => {
            window.location.href = `/post/?id=${post.id}`;
            localStorage.setItem("postId", JSON.stringify(post.id))
        });

        // Append all elements to the container
        container.append(title, userName, text, tags, postDate, viewPostButton);
        postContainer.append(container);
    });
};

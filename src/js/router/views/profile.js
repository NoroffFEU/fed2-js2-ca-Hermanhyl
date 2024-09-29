// import { readPostsByUser } from "../../api/post/read";
// import { setLogoutListener } from "../../ui/global/logout";

//     export const displayUserPost = (posts) => {
//         const postContainer = document.getElementById("postUserContainer");
    
//         if (!postContainer) {
//             console.error("No container with the id 'postUserContainer' found.");
//             return;
//         }
    
//         posts.forEach((profilePost) => {
//             const container = document.createElement("div");
//             container.className = "postContainer";
    
//             const title = document.createElement("h2");
//             title.innerText = profilePost.title;
    
//             const userName = document.createElement("p");
//             userName.innerText = `Posted by: ${profilePost.author.name}`;
    
//             const postDate = document.createElement("p");
//             postDate.innerText = `Posted on: ${new Date(profilePost.created).toLocaleDateString()}`;
    
//             const text = document.createElement("p");
//             text.innerText = profilePost.body;

//             const tags = document.createElement("p")
//             text.innerText = profilePost.tags;
    
//             const image = document.createElement("img");
    
//             if (profilePost.media && profilePost.media.url) {
//                 image.src = profilePost.media.url;
//                 image.alt = profilePost.media.url;
//                 image.className = "postImage";
//                 container.append(image);
//             }
    
//             container.append(title, text, tags, userName, postDate);
//             postContainer.append(container);
//         });
//     };
        

//     async function runPage() {
//         const post = await readPostsByUser()
//         displayUserPost(post)
//     }
    
//     runPage()

//     setLogoutListener()

  

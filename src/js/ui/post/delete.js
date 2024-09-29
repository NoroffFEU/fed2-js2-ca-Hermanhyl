import { deletePost } from "../../api/post/delete";

export async function onDeletePost(id) {
    
    const confirmDelete = confirm('Are you sure you want to delete this post?');

    if (confirmDelete) {
        const success = await deletePost(id);  // Call the deletePost function

        if (success) {
            alert('Post successfully deleted!');
        } else {
            alert('Failed to delete the post.');
        }
    } else {
        console.log('User canceled the delete action.');
    }
    
}

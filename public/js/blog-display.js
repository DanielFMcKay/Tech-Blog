techBlogMainContainer = document.querySelector('#techBlogMainContainer');

deleteBlogBtn = document.querySelector('.delete-blog-button');
const delButtonHandler = async (req, res) => {
    console.log("delete button clicked")
    const blogId = deleteBlogBtn.getAttribute('data-id');
    console.log(blogId + " is blogId")
    await fetch(`/api/blogs/${blogId}`, {
        method: 'DELETE',
    })
    // if (res.ok) {
        console.log ("blog may have been deleted now");
        window.location.reload();
    // } else {
    //     alert('Your attempt to delete the blog failed harder than my last relationship.');
    // }
};

const delBlog = () => delButtonHandler().then(window.location.reload());

if (deleteBlogBtn) {
    deleteBlogBtn.addEventListener('click', delBlog);
}

const addCommentBtn = document.querySelector('.add-comment-button');
const addCommentContainer = document.querySelector('.add-comment-container');
addCommentContainer.display = "none";

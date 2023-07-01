techBlogMainContainer = document.querySelector('#techBlogMainContainer');

deleteBlogBtn = document.querySelector('.delete-blog-button');
const delButtonHandler = async (req, res) => {
    console.log("delete button clicked")
    const blogId = deleteBlogBtn.getAttribute('data-id');
    console.log(blogId + " is blogId")
    await fetch(`/api/blogs/${blogId}`, {
        method: 'DELETE'
    })
    if (res.ok) {
        window.location.reload();
    } else {
        alert('Your attempt to delete the blog failed harder than my last relationship.');
    }
};

document.querySelector('.delete-blog-button').addEventListener('click', delButtonHandler);
techBlogMainContainer = document.querySelector('#techBlogMainContainer');

deleteBlogBtn = document.querySelector('.delete-blog-button');
const delButtonHandler = async () => {
    console.log("variance")
    var blogId = deleteBlogBtn.getAttribute('data-id');
    console.log(blogId + " is blogId");
    const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/blog');
    } else {

        alert('Your attempt to delete the blog failed harder than my last relationship.');
    }
}
document.querySelector('.delete-blog-button').addEventListener('click', delButtonHandler);
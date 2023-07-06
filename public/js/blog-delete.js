deleteBlogBtn = document.querySelector('.delete-blog-button');
const delButtonHandler = async (req, res) => {
    console.log("delete button clicked")
    const blogId = deleteBlogBtn.getAttribute('data-id');
    console.log(blogId + " is blogId")

    const deleteBlogConfirm = window.confirm("Are you sure you want to delete this blog?");

    if (!deleteBlogConfirm) {
        return;
    } else {
        await fetch(`/api/blogs/${blogId}`, {
            method: 'DELETE',
        }).then(window.location.reload());

    };
};


if (deleteBlogBtn) {
    deleteBlogBtn.addEventListener('click', delButtonHandler);
}


deleteCommentBtn = document.querySelector('.delete-comment-button');
const commentDeleteHandler = async (req, res) => {
    console.log("comment delete button clicked")
    const commentId = deleteCommentBtn.getAttribute('data-id');
    console.log(commentId + " is commentId")

    const deleteCommentConfirm = window.confirm("Are you sure you want to delete this Comment?");

    if (!deleteCommentConfirm) {
        return;
    } else {
        await fetch(`/api/comments/${commentId}`, {
            method: 'DELETE',
        })
        .then(window.location.reload());

    };
};


if (deleteBlogBtn) {
    deleteBlogBtn.addEventListener('click', delButtonHandler);
};

if (deleteCommentBtn) {
    deleteCommentBtn.addEventListener('click', commentDeleteHandler);
};

techBlogMainContainer = document.querySelector('#techBlogMainContainer');

// Comment Modal stuff
const addCommentTile = document.querySelector('#add-comment-tile');
const closeCommentPopup = document.querySelector('.close-comment-popup');
const addCommentBtn = document.querySelectorAll('.addCommentBtn')[0];
const commentSubmitBtn = document.querySelector('.commentSubmitBtn');

addCommentTile.style.display = "none";

addCommentBtn.addEventListener("click", function () {
    addCommentTile.style.display = "block";
});

closeCommentPopup.addEventListener("click", function () {
    addCommentTile.style.display = "none";
});


const commentRetrieve = async (event) => {

    const commentText = document.querySelector('.new-comment-textfield').value.trim();
    const blogId = addCommentBtn.getAttribute('data-id');

    console.log("comment submit button clicked")
    if (!commentText) {
        alert('Please enter a comment.')
        return;
    }   
    console.log(commentText + " is commentText")
    try {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ 
                commentText,
                blogId,
            }),
            headers: { 'Content-Type': 'application/json' },
        })
        if (response.ok) {
            document.location.reload();
        }
    } catch (err) {
        console.log(err + " is the error");
        return;
    }
};

const commentPoster = () => commentRetrieve().then(() => document.location.reload());

commentSubmitBtn.addEventListener('click', commentPoster);
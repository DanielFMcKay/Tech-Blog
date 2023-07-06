techBlogMainContainer = document.querySelector('#techBlogMainContainer');

// Comment Modal stuff
const addCommentTile = document.querySelector('#add-comment-tile');
const closeCommentPopup = document.querySelector('.close-comment-popup');
const addCommentBtn = document.querySelectorAll('.addCommentBtn')[0];
const commentSubmitBtn = document.querySelector('.commentSubmitBtn')[0];

addCommentTile.style.display = "none";

addCommentBtn.addEventListener("click", function () {
    addCommentTile.style.display = "block";
});

closeCommentPopup.addEventListener("click", function () {
    addCommentTile.style.display = "none";
});


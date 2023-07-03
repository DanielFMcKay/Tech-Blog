// code goes here

const postBlogBtn = document.querySelector('.post-blog-button');


techBlogMainContainer = document.querySelector('#techBlogMainContainer');
const blogRetrieve = async () => {
    const blogTitle = document.querySelector('.blog-title').value.trim();
    const blogText = document.querySelector('.blog-text').value.trim();

    console.log("post button clicked")
    if (!blogTitle || !blogText) {
        alert('Please enter both a title and text for your post.')
        return;
    }
    console.log(blogTitle + " is blogTitle")
    try {
    await fetch('/api/blogs', {
        method: 'POST',
        body: JSON.stringify({ blogTitle, blogText }),
        headers: { 'Content-Type': 'application/json' },
    })
    } catch (err) {
        console.log(err + " is err");
        return;
    }
    // document.location.replace('/blog');
    // .then((res) => {
    // if (res.ok) {
    // document.location.replace('/blog');
};
// else {
//     alert(response.statusText + ": An error occured while posting. Please pray to a nearby house cat and try again later.");
// }}
// )};



// const blogPoster = () => blogRetrieve().then(document.location.replace('/blog'));


postBlogBtn.addEventListener('click', blogRetrieve);

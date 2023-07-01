// code goes here
techBlogMainContainer = document.querySelector('#techBlogMainContainer');
const blogPoster = async () => {

    const blogTitle = document.querySelector('.blog-title').value.trim();
    const blogText = document.querySelector('.blog-text').value.trim();

    const response = await fetch('/api/blogs', {
        method: 'POST',
        body: JSON.stringify({ blogTitle, blogText }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/blog');
    }
    else {
        alert(response.statusText + ": An error occured while posting. Please select a different god to pray to");
    }
}


document.querySelector('.post-blog-button').addEventListener('click', blogPoster);

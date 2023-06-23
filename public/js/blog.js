// code goes here
const blogPoster = async () => {

    const title = document.querySelector('#blog-title').value.trim();
    const blog_text = document.querySelector('#blog-text').value.trim();

    const response = await fetch('/api/blog', {
        method: 'POST',
        body: JSON.stringify({ title, blog_text }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/blog');
    }
    else {
        alert(response.statusText + "An error occured while posting. Please pray");
    }
};

document.querySelector('.blog-entry-submit').addEventListener('submit', blogPoster);
document.querySelector('.blog-entry-submit-button').addEventListener('click', blogPoster);
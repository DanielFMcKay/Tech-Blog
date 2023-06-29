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
        alert(response.statusText + "An error occured while posting. Please pray to your ancestors");
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      const response = await fetch(`/blog/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/blog');
      } else {
   
        alert('Your attempt to delete the blog failed harder than my last relationship.');
      }
    }
  };


document.querySelector('#techBlogMainContainer').addEventListener('click', delButtonHandler);

document.querySelector('.blog-entry-submit').addEventListener('submit', blogPoster);
document.querySelector('.blog-entry-submit-button').addEventListener('click', blogPoster);
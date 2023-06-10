const { Blog } = require('../models');

const blogData =
[
    {
        "title": "What's the deal with airline peanuts?",
        "blog_text": "Airline peanuts have been a long-standing tradition on many flights, particularly in the United States.",
        "user_id": 1,
        "likes": 0
    },
    {
        "title": "where were u when club penguin die?",
        "blog_text": "I was at house eating dorito when phone ring\n'club penguin is kill'\n'no'",
        "user_id": 2,
        "likes": 0
    }

]

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;
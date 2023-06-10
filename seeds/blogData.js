const { Blog } = require('../models');

const blogData =
[
    {
        "title": "What's the deal with airline peanuts?",
        "blog_text": "Airline peanuts have been a long-standing tradition on many flights, particularly in the United States.\nHowever, in recent years, the availability of peanuts on flights has become less common due to concerns about allergies and passenger safety. The primary reason for the prevalence of peanuts on airplanes was simply that they were an inexpensive snack that could be easily distributed to passengers. Peanuts were also a popular choice because they are relatively small and non-perishable, making them convenient for airline catering.",
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
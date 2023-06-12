// const { Blog } = require('../models');
// const sequelize = require('../config/connection');

// const blogData =
//     [
//         {
//             "title": "What's the deal with airline peanuts?",
//             "blog_text": "No seriously, WHAT is the DEAL???",
//             // "user_id": 1,
//             "likes": 0
//         },
//         {
//             "title": "where were u when club penguin die?",
//             "blog_text": "I was at house eating dorito when phone ring\n'club penguin is kill'\n'no'",
//             // "user_id": 2,
//             "likes": 0
//         }

//     ]

// const seedBlogs = async () => {
//     await sequelize.sync({ force: true });
//     await Blog.bulkCreate(blogData);
//     console.log("Blogs seeded!");
// };
// module.exports = seedBlogs;
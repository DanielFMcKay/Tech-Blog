const sequelize = require('../config/connection');
// const seedUsers = require('./userData');
// const seed = require('./blogData');
const { User, Blog, Comment } = require('../models');

// test insert JSON
const userData = require('./userDb.json');
const blogData = require('./blogDb.json');
const commentData = require('./commentDB.json');

const seedData = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    console.log("Users seeded: " + users);
  const blogs = await Blog.bulkCreate(blogData, {
    individualHooks: true,
    returning: true,
  });
  console.log("Blogs seeded: " + blogs);
  const seeds = await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });
  console.log("Comments seeded: " + seeds);
  process.exit(0);

};  

seedData();
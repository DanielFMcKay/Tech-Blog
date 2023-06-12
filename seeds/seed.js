const sequelize = require('../config/connection');
// const seedUsers = require('./userData');
// const seedBlogs = require('./blogData');
const { User, Blog } = require('../models');

const userData = require('./userDb.json');
const blogData = require('./blogDb.json');

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
  process.exit(0);

};  

seedData();
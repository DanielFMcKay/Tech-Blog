const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedBlogs = require('./blogData');

const seedData = async () => {
  await sequelize.sync({ force: true });

  
  await seedBlogs();
  
  await seedUsers();
  console.log("database seeded!");
  process.exit(0);
};

seedData();
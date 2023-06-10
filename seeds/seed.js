const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedBlogs = require('./blogData');

const seedData = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  
//   may need to change the bit below
  await seedBlogs();

  process.exit(0);
};

seedData();
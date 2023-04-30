const sequelize = require('../config/connection');
const seedComment = require('./commentData');
const seedUser = require('./userData');
const seedPost = require('./postData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedPost();

  await seedComment();

  process.exit(0);
};

seedAll();

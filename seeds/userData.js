const { User } = require('../models');

const userData = [
  {
    username: 'jiasi',
    password: '123456',
  },
  
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;

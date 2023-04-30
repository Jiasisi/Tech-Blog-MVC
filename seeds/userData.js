const { User } = require('../models');

const userData = [
  {
    username: '123',
    password: '123456',
  },
  {
    username: 'jiasi',
    password: 'jiasi123',
  },
  
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;

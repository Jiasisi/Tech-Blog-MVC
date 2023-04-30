const { Post } = require('../models');

const postData = [
  {
    post_title: 'Hello',
    post_body: 'Hello world',
    user_id: '1',
  },
  {
    post_title: 'Morning',
    post_body: 'Good morning',
    user_id: '1',
  },
  
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;

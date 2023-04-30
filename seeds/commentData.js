const { Comment } = require('../models');

const commentData = [
  {
    comment_body: "Good comment",
    user_id: "1",
    post_id:"1"
  },
  
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;

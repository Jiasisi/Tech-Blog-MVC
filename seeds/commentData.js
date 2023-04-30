const { Comment } = require('../models');

const commentdata = [
    {
        comment_content: 'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.',
        userName: 'Jiasi',
        comment_date: 6/8/2020,
        blog_id: 1,
    },
];


const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;
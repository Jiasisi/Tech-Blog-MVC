const { Blog } = require('../models');

const blogdata = [
    {
        title: 'WHy MVC is so important',
        blog_content: 'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.',
        userName: 'Jiasi',
        publish_date: 5/8/2020,
    },
    {
        title: 'Authentication vs. Authorization',
        blog_content: 'There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the system.',
        userName: 'Jiasi',
        publish_date: 6/8/2020,
    },
    {
        title: 'Object-Relational Mapping',
        blog_content: 'I have really loved learning about ORMs. It is really somplified the way I create questions in SQL!',
        userName: 'Jiasi',
        publish_date: 7/8/2020,
    },
];


const seedBlog = () => Blog.bulkCreate(blogdata);

module.exports = seedBlog;




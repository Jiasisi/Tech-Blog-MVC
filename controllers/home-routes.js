const router = require('express').Router();
const { Blog, Comment} = require('../models');
const withAuth = require('../utils/auth');

// Get all blogs
router.get('/', async (req, res) => {
    try {
        const dbBlogData = await Blog.findAll();
        const blogs = dbBlogData.map((blog) => blog.get({ plain: true}));
        
        res.render('homepage', {
            blogs,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// Get one blog
router.get('/blog/:id', withAuth, async (req, res) => {
    try {
        const dbBlogData = await Blog.findByPk(req.params.id, {
            include: [
                {
                    model: Comment,
                    attributes: [
                        'id', 
                        'blog_id',
                        'comment_comtent',
                        'username',
                        'comment_date',
                    ],
                },
            ],
        });

        const blog = dbBlogData.get({ plain: true });
        res,render('blog', { blog, loggedIn: req.session.loggedIn});

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// Login route
router.get('/login', (req, res) => {
    
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    
    res.render('login');
  });
  
  module.exports = router;










const router = require('express').Router();
const { Blog, User, Comment} = require('../models');
const withAuth = require('../utils/auth');

// Get all blogs
router.get('/', async (req, res) => {
    try {
        const dbBlogData = await Blog.findAll({
            include: [ {model: User, Comment}]
        });
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
                        'comment_content',
                        'userName',
                        'comment_date',
                    ],
                },
            ],
        });

        const blog = dbBlogData.get({ plain: true });
        res.render('blog', { blog, loggedIn: req.session.loggedIn});

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// Login route
router.get('/login', async (req, res) => {
    try {
      res.render('login');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  router.get('/sign_up', async (req, res) => {
    try {
      res.render('sign_up');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  router.get('/dashboard', async (req, res) => {
    try {
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [ Post ],
      });
  
      const user = userData.get({ plain: true });
      console.log(user)
  
      res.render('dashboard', {
        ...user,
        logged_in: req.session.logged_in,
        logged_in_user: req.session.username
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get('/new_post', async (req, res) => {
    try {
      res.render('new_post', {
        logged_in: req.session.logged_in,
        logged_in_user: req.session.username
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  module.exports = router;










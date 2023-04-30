const router = require('express').Router();
// const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

// Home Page Render
router.get('/', async (req, res) => {
  try {
    const dbBlogData = await Post.findAll({
      include: [ {model: User, Comment} ]
    });

    const posts = dbBlogData.map((post) =>
      post.get({ plain: true })
    );

    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
      logged_in_user: req.session.username
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login Page Render
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

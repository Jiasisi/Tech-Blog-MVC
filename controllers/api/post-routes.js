const router = require('express').Router();
const { Blog } = require('../../models');

router.post('/create', async (req, res) => {
  try {
    const newPost = await Blog.create({...req.body, username: req.session.username});

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const postData = await Blog.destroy({
      where: {
        id: req.params.id,
        username: req.session.username,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No Blog found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
const router = require('express').Router();
// So far only the Blog model is being used here, but the others may be used in the future
const { Blog, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');



router.post('/blog', withAuth, async (req, res) => {
  try {
    const newBlog = await Blog.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

// for Editing in the future. May or may not keep withAuth
router.put('/:id', withAuth, async (req, res) => {
  try {
    const updateBlog = await Blog.update(
      {
        title: req.body.title,
        content: req.body.content,
      },
      {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      }
    );
    if (!updateBlog) {
      res.status(404).json({ message: 'Oh no! Blog missing! Delete C:/Windows/System32 Commence!!' });
      return;
    }  
    res.status(200).json(updateBlog);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('blog/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: 'No blog found with this id! The Illuminati are nigh!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

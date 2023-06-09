const router = require('express').Router();
// So far only the Blog model is being used here, but the others may be used in the future
const { Blog, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');



// May or may not re-add withAuth
router.post('/', async (req, res) => {
  try {
    const newBlog = await Blog.create({

      title: req.body.blogTitle,
      blog_text: req.body.blogText,
      ...req.body,
      user_id: req.session.user_id,
    });
    console.log("Blog Posted");
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
        title: req.body.blogTitle,
        blog_text: req.body.blogText,
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

router.delete('/:id', withAuth, async (req, res) => {
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
    } else if (blogData) {
      res.status(400).json({ message: 'This is not your blog!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
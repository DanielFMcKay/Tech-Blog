const router = require('express').Router();
const { Blog, User } = require('../../models');

// const withAuth = require('../../utils/auth');

router.get("/blog", async (req, res) => {
  try {
    // const menuItems = [];
    const blogEntries = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ],
    });

    const blog = blogEntries.get({ plain: true});

    res.render("blog", {
      ...blog,
      logged_in: req.session.logged_in,
      username: req.session.username,
      title: "Dan's Tech Blog",
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/', async (req, res) => {
//   try {const blogData = await Blog.findAll();
//     res.status(200).json(blogData);
//     console.log(blogData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


router.post('/blog', async (req, res) => {
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

router.delete('blog/:id', async (req, res) => {
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

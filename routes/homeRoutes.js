const router = require("express").Router();
const { Blog, User, Comment } = require("../models");


router.get("/", async (req, res) => {
  try {
    // Get all projects and JOIN with user data


    console.log("this is the homepage");
    res.render("homepage", {

      logged_in: req.session.logged_in,
      username: req.session.username,
      title: "Tech Blog",
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// this is for later
router.get("/blog", async (req, res) => {
  console.log("this is the blog page, user is " + req.session.username);
  console.log("logged in is " + req.session.logged_in);
  console.log("user id is " + req.session.user_id);
  try {
    const blogEntries = await Blog.findAll({
      where: { user_id: req.session.user_id },
      attributes: ['id', 'title', 'blog_text', 'date_created', 'likes', 'user_id'],
      include: [
        {
          model: Comment,
          attributes: ['comment_id', 'comment_text', 'blog_id', 'date_created', 'user_id'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });
    console.log("if (blogEntries) reached");
    if (blogEntries) {
      const blog = blogEntries.map((blog) => blog.get({ plain: true }));
      console.log("This is the blog rendered: " + blog);
      res.render("blog", {


        logged_in: req.session.logged_in,
        username: req.session.username,
        title: "Dan's Tech Blog",
      });
    } 
    else {
      res.status(404).json({ message: 'No blog found! The Illuminati are nigh!' });
      return;
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
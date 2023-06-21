const router = require("express").Router();
const { Blog, User } = require("../models");


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

    res.render("blogpage", {
      ...blog,
      logged_in: req.session.logged_in,
      username: req.session.username,
      title: "Dan's Tech Blog",
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
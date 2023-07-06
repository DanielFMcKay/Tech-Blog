// placeholder
const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const commentData = await Comment.findAll({});
    if (commentData.length === 0) {
      res.status(404).json({ message: "No comments found." });
      return;
    };
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all the comments from 1 post
router.get('/:id', async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      where: { id: req.params.id },
    });
    if (commentData.length === 0) {
      res.status(404).json({ message: `The following id ${req.params.id} has no comments attached.` });
      return;
    }
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});


//   create a new comment
router.post('/', withAuth, async (req, res) => {
  const body = req.body;
  try {
    const newComment = await Comment.create({
      ...body,
      comment_text: req.body.commentText,
      blog_id: req.body.blogId,
      user_id: req.session.user_id,
    });
    res.status(200).json({ newComment, success: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a comment
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: { id: req.params.id },
    });
    if (!commentData) {
      res.status(404).json({
        message: `Comment not found. Freemasons run the country!`,
      });
      return;
    }
    res.status(200).json({ commentData, success: true });
  } catch (err) {
    console.log(err + " is the error");
    res.status(500).json(err);
  }
});

module.exports = router;
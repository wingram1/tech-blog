const router = require("express").Router();

const { Post, User, Comment } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
    });

    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

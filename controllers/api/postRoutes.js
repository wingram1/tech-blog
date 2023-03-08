const router = require("express").Router();

const { Post, User, Comment } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User],
    });
    res.json(postData);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    res.json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
    });

    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

const router = require("express").Router();

const { Post } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({});
    res.json(postData);
  } catch (err) {
    res.status(500).send(err);
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

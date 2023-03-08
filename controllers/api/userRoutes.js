const router = require("express").Router();
const { User } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({});

    res.json(userData);
  } catch (err) {
    console.log("Error fetching users");
    res.sendStatus(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    res.json(newUser);
  } catch (err) {
    console.log("Error");
    res.status(500).json(err);
  }
});
module.exports = router;

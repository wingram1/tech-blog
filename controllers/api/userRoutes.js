const router = require("express").Router();
router.get("/", async (req, res) => {
  try {
    // get posts
    console.log("Hello userRoutes!");
    res.send(200);
  } catch {
    res.send(err);
  }
});
module.exports = router;

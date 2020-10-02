const router = require("express").Router(),
  db = require("../database/db"),
  middleware = require("../middleware/middleware");

router.get("/", middleware.isAuthorized, async (req, res) => {
  try {
    const user = await db.query("SELECT name, email FROM users WHERE id = $1", [
      req.user,
    ]);

    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

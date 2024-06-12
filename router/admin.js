const express = require("express");
const router = express.Router();

router.use("/check", (req, res) => {
  let { email, password } = req.body;
  // encrypt data next time
  if (
    email == process.env.ADMIN_EMAIL &&
    password == process.env.ADMIN_PASSWORD
  ) {
    res.render("./admin.ejs");
  } else {
    res.redirect('/')
  }
});

module.exports = router;

// require modules

const express = require("express");
const router = express.Router();
// require controllers
const home = require("../controller/homeController");
const fileUpload = require("../controller/FileuploadController");
const ShowController = require("../controller/showController");
const upload = require("../middleware/multerUpload");
const newUpload = require("../controller/newUpload.Controler.js");

// routes
router.route("/").get(home);

router.route("/show/:id").get(ShowController);

router.get("/admin", (req, res) => {
  res.render("./admin.ejs");
});

router.route("/upload").post(upload.single("Thumbnail"), fileUpload);

router.route("/newUpload").post(newUpload);
module.exports = router;

const express = require("express");
const search = require("../controller/search");
const router = express.Router();
router.route("/").get(search);

module.exports = router;

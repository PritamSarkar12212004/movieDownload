const express = require("express");
const router = express.Router();
const filterControl = require("../middleware/filterControl");

router.route("/movie").get(filterControl)

module.exports = router;

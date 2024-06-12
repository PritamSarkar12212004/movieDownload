const express = require("express");
const router = express.Router();
const filterControl=require("../controller/filter/filterHindi.js")

router.route("/movie/hindi").get(filterControl)

module.exports = router;

const express = require("express");
const router = express.Router();
const {filterControlHindi,filterControlEnglish,filterControlJapanese,filterControlKorean,filterControlPanjabi,filterControlTelegu,filterControlManlyalam}=require("../controller/filter/filterHindi.js")

// filter routs for side nav bar

// movie 
router.route("/movie/hindi").get(filterControlHindi)
router.route("/movie/english").get(filterControlEnglish)
router.route("/movie/Japanese").get(filterControlJapanese)
router.route("/movie/Korean").get(filterControlKorean)
router.route("/movie/Panjabi").get(filterControlPanjabi)
router.route("/movie/Telegu").get(filterControlTelegu)
router.route("/movie/Manlyalam").get(filterControlManlyalam)


module.exports = router;

const express = require("express");
const router = express.Router();

// require filter movies
const {
  filterControlHindi,
  filterControlEnglish,
  filterControlJapanese,
  filterControlKorean,
  filterControlPanjabi,
  filterControlTelegu,
  filterControlManlyalam,
} = require("../controller/filter/filterHindi.js");

// require filter for websiries
const {
  filterControlHindiWeb,
  filterControlEnglishWeb,
  filterControlJapaneseWeb,
  filterControlKoreanWeb,
} = require("../controller/filter/FilterWeb.js");
// filter routs for side nav bar

// movie
router.route("/movie/hindi").get(filterControlHindi);
router.route("/movie/english").get(filterControlEnglish);
router.route("/movie/Japanese").get(filterControlJapanese);
router.route("/movie/Korean").get(filterControlKorean);
router.route("/movie/Panjabi").get(filterControlPanjabi);
router.route("/movie/Telegu").get(filterControlTelegu);
router.route("/movie/Manlyalam").get(filterControlManlyalam);

// web series
router.route("/webseries/hindi").get(filterControlHindiWeb);
router.route("/webseries/english").get(filterControlEnglishWeb);
router.route("/webseries/japness").get(filterControlJapaneseWeb);
router.route("/webseries/korean").get(filterControlKoreanWeb);

module.exports = router;

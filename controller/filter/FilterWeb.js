const movieupload = require("../../model/movieupload.js");

const filterControlHindiWeb = async (req, res) => {
  let data = await movieupload.find({
    type: "web-series",
    categories: "Hindi",
  });
  res.render("filter.ejs", { data });
};
const filterControlEnglishWeb = async (req, res) => {
  let data = await movieupload.find({
    type: "web-series",
    categories: "English",
  });
  res.render("filter.ejs", { data });
};

const filterControlJapaneseWeb = async (req, res) => {
  let data = await movieupload.find({
    type: "web-series",
    categories: "Japanese",
  });
  res.render("filter.ejs", { data });
};
const filterControlKoreanWeb = async (req, res) => {
  let data = await movieupload.find({
    type: "web-series",
    categories: "Korean",
  });
  res.render("filter.ejs", { data });
};

module.exports = {
  filterControlHindiWeb,
  filterControlEnglishWeb,
  filterControlJapaneseWeb,
  filterControlKoreanWeb,
};

const movieupload = require("../../model/movieupload.js");

const filterControlHindi = async (req, res) => {
  let data = await movieupload.find({ type: "movie", categories: "Hindi" });
  res.render("filter.ejs", { data });
};
const filterControlEnglish = async (req, res) => {
  let data = await movieupload.find({ type: "movie", categories: "English" });
  res.render("filter.ejs", { data });
};
const filterControlPanjabi = async (req, res) => {
  let data = await movieupload.find({ type: "movie", categories: "Panjabi" });
  res.render("filter.ejs", { data });
};
const filterControlTelegu = async (req, res) => {
  let data = await movieupload.find({ type: "movie", categories: "Telegu" });
  res.render("filter.ejs", { data });
};
const filterControlJapanese = async (req, res) => {
  let data = await movieupload.find({ type: "movie", categories: "Japanese" });
  res.render("filter.ejs", { data });
};
const filterControlKorean = async (req, res) => {
  let data = await movieupload.find({ type: "movie", categories: "Korean" });
  res.render("filter.ejs", { data });
};
const filterControlManlyalam = async (req, res) => {
  let data = await movieupload.find({ type: "movie", categories: "Manlyalam" });
  res.render("filter.ejs", { data });
};


module.exports = {filterControlHindi,filterControlEnglish,filterControlPanjabi,filterControlTelegu,filterControlJapanese,filterControlKorean,filterControlManlyalam};

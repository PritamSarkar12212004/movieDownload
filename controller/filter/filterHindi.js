const movieupload = require("../../model/movieupload.js");
const filterControlHindi = async (req, res) => {
  let data = await movieupload.find({ type: "movie" });
  res.render("filter.ejs", { data });
};

module.exports = filterControlHindi;

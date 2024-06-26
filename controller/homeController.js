const movieupload = require("../model/movieupload.js");

const home = async (req, res) => {
  let data = await movieupload.find().sort({ headline: -1 })
  res.render("./index.ejs", { data });
};

module.exports = { home };

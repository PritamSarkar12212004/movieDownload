const movieupload = require("../model/movieupload.js");
const home = async (req, res) => {
  let data = await movieupload.find();
  console.log(data);
  res.render("./index.ejs", { data });
};

module.exports = home;

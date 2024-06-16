const movieupload = require("../model/movieupload");

const search = async (req, res) => {
  let input = req.query.inputSearch;

  // Create a case-insensitive regular expression
  let regex = new RegExp(input, "i");

  let data = await movieupload.find({ Movie: regex });

  if (data.length === 0) {
    res.render("./error/pageNotFound.ejs");
  } else {
    res.render("filter.ejs", { data });
  }
};

module.exports = search;

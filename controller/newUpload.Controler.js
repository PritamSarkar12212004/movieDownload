const movieupload = require("../model/movieupload.js");
const newUpload = async (req, res) => {
  try {
    let {
      Movie,
      downloadLink,
      thumbnailLink,
      screenshot1,
      screenshot2,
      screenshot3,
      tags,
      type,
      categories,
    } = req.body.info;

    await movieupload.insertMany([
      {
        Movie: Movie.toString(),
        downloadLink,
        thumbnailLink,
        screenshot1,
        screenshot2,
        screenshot3,
        tags,
        type,
        categories,
      },
    ]);
    res.redirect("./admin");

    console.log("movie uploaded");
  } catch (error) {
    res.render("./error/serverError.ejs");
  }
};

module.exports = newUpload;

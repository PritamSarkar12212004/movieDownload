const movieupload = require("../model/movieupload");
const ShowController = async (req, res) => {
  try {
    let { id } = req.params;

    const data = await movieupload.findById(id);
    res.render("./show.ejs", { data });
    
  } catch (error) {
    console.log("show error to show ejs");
  }
};

module.exports = ShowController;

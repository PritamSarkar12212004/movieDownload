const movieupload = require("../model/movieupload");
const search = async (req, res) => {
    let Input = await req.query.inputSearch;
    let data = await movieupload.find({ Movie: Input });

    if (data.length === 0) {
      res.render("./error/pageNotFound.ejs")
    } else {
       res.render("filter.ejs",{data})
    }
   
}

module.exports = search;

const movieupload=require("../model/movieupload.js")
const filterControl = async (req, res) => {
    let data = await movieupload.find({ type: 'movie' });
    res.redirect("/",{data})
}

module.exports = filterControl;
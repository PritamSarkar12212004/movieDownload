const movieupload = require("../model/movieupload.js");

let midData = [];
const home = async (req, res) => {
  try {
    const preData = await movieupload.find({}, "tags");
    midData = preData.map((item) => item.tags).flat();
  } catch (error) {
    res.send("no data is present");
  }

  let data = await movieupload.find();
  res.render("./index.ejs", { data });
};
console.log(midData);

module.exports = { home, midData };

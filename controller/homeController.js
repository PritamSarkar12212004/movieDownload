const movieupload= require("../model/movieupload.js");
const home = async (req, res) => {
  try {
  let data= await movieupload.find()
  console.log(data)
   res.render("./index.ejs",{data})
  
 } catch (error) {
  res.send("<h1>Error In Page</h1>")
 }
};

module.exports = home;

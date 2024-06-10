const fileUpload = async (req, res) => {
  try {
    console.log(req.file);
    res.redirect("/admin");
  } catch (error) {
    console.log("file upload error");
  }
};

module.exports = fileUpload;

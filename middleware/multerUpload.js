// require files for multer
const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //file upload path
    cb(null, "./public/Asests/Thumblin/uploads");
  },
  filename: function (req, file, cb) {
    // file rename algorithm
    crypto.randomBytes(12, function (err, bytes) {
      const Filename = bytes.toString("hex") + path.extname(file.originalname);
      cb(null, Filename);
    });
  },
});

const upload = multer({ storage: storage });
module.exports = upload;

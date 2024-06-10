const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  Movie: {
    type: String,
    required: true,
  },
  downloadLink: {
    type: String,
    required: true,
  },
  thumbnailLink: {
    type: String,
    required: true,
  },

  screenshot1: {
    type: String,
    required: true,
  },
  screenshot2: {
    type: String,
    required: true,
  },
  screenshot3: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  categories: {
    type: String,
    required: true,
  },
  
});

const movie = mongoose.model("movie", MovieSchema);

module.exports = movie;

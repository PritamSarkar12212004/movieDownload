// require modules

const express = require("express");
const ejs = require("ejs");
const path = require("path");
require("dotenv").config();
const mongoose = require("mongoose");
const multer = require("multer");

// ready app
const app = express();

// require routes path
const home = require("./router/index.js");
const admin = require("./router/admin.js");
const filter = require("./router/filter.js");
const search = require("./router/search.js");

// set ejs
app.set(`views`, path.join(__dirname, `views`));
app.set(`view engine`, `ejs`);
// set static folders
app.use(express.static(path.join(__dirname, `public`)));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// pars for post body objects
app.use('/uploads', express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/admin", admin);
app.use("/", home);
app.use("/filter", filter);
app.use("/search", search);

// mongo db database
const connectWithRetry = async (retries = 5, delay = 5000) => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database is running");
  } catch (error) {
    if (retries === 0) {
      console.error("Database connection error after multiple retries:", error);
      process.exit(1);
    } else {
      console.warn(
        `Database connection failed. Retrying in ${
          delay / 1000
        } seconds... (${retries} retries left)`
      );
      setTimeout(() => connectWithRetry(retries - 1, delay), delay);
    }
  }
};

connectWithRetry();

// server listening
const port=3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
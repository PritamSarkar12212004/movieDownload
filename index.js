// require modules

const express = require("express");
const ejs = require('ejs');
const cookieParser = require("cookie-parser");
const path = require("path");
require("dotenv").config();
const mongoose = require('mongoose');

// ready app
const app = express();

// require routes path
const home = require("./router/index.js");
const admin = require("./router/admin.js");
const filter = require("./router/filter.js");


// set ejs
app.set(`views`, path.join(__dirname, `views`));
app.set(`view engine`,`ejs`);
// set static folders
app.use(express.static(path.join(__dirname, `public`)));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// pars for post body objects
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/admin", admin);
app.use("/", home);
app.use("/filter", filter);


// mongo db database
const connectWithRetry = async (retries = 5, delay = 5000) => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database is running');
    } catch (error) {
        if (retries === 0) {
            console.error('Database connection error after multiple retries:', error);
            process.exit(1); // Exit the process with failure code
        } else {
            console.warn(`Database connection failed. Retrying in ${delay / 1000} seconds... (${retries} retries left)`);
            setTimeout(() => connectWithRetry(retries - 1, delay), delay);
        }
    }
};

connectWithRetry();

// server listening
const port = 3000;
app.listen(port, () => {
  console.log(`server start at port ${port}`);
});


// require modules
const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
require("dotenv").config();
const mongoose = require('mongoose');

// ready app
const app = express();

// require routes path
const home = require("./router/index.js");
const admin = require("./router/admin.js");


// set ejs
app.set(`views`, path.join(__dirname, `views`));
app.set(`view engine`, `ejs`);

// set static folders
app.use(express.static(path.join(__dirname, `public`)));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// pars for post body objects
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/admin", admin);
app.use("/", home);


// mongo db database
async function main() {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
           
        });
        console.log('Database is running');
    } catch (error) {
        console.error('Database connection error:', error);
    }
}
main();

// server listening
const port = 3030;
app.listen(port, () => {
  console.log(`server start at port ${port}`);
});


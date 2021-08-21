const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const app = express();
dotenv.config();


//database connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("database connection successful!"))
    .catch(err => console.log(err));


//request process

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine 

app.set("view engine", "ejs");

//set static folde

app.use(express.static(path.join(__dirname, "public")));

//parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET))

//routiong setup

//error handling


app.listen(process.env.PORT, () => {
    console.log(`app listening to port ${process.env.PORT}`);

})
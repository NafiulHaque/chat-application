
//external imports
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const loginRouter = require("./routers/loginRouter");
const inboxRouter = require("./routers/inboxRouter");
const usersRouter = require("./routers/usersRouter");

//internal imports
const { notFoundHandler, errorHandler } = require("./middleware/common/errorHandler");

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
app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);


//404 not foundHandler
app.use(notFoundHandler);

//common error handler

app.use(errorHandler);




app.listen(process.env.PORT, () => {
    console.log(`app listening to port ${process.env.PORT}`);

})
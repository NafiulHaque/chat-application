
//external imports
const express = require("express");
const http = require("http");
const dotenv = require("dotenv");
const path = require("path");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const moment = require("moment");

//internal imports
const loginRouter = require("./routers/loginRouter");
const inboxRouter = require("./routers/inboxRouter");
const usersRouter = require("./routers/usersRouter");

//internal imports
const { notFoundHandler, errorHandler } = require("./middleware/common/errorHandler");

const app = express();
const server = http.createServer(app);
dotenv.config();

// socket creation
const io = require("socket.io")(server);
global.io = io;

// set comment as app locals
app.locals.moment = moment;


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

//set static folder

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
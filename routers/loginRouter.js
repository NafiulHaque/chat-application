//external imports
const express = require("express");



//internal imports
const { getLogin, login, logout } = require("../controller/loginController");
const { redirectLoggedIn } = require("../middleware/common/checkLogin");
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse")
const {
    doLoginValidationHandler,
    doLoginValidators,
} = require("../middleware/login/loginValidator");

const router = express.Router();

//set page title
const page_title = "Login";


//login page
router.get("/", decorateHtmlResponse(page_title), redirectLoggedIn, getLogin);

//process login
router.post(
    "/",
    decorateHtmlResponse(page_title),
    doLoginValidators,
    doLoginValidationHandler,
    login
);

//logout 
router.delete("/", logout);

module.exports = router;
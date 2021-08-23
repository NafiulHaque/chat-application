//external imports
const express = require("express");
const { check } = require("express-validator");

const router = express.Router();

//internal imports
const { getUsers } = require("../controller/usersController");
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse")
const avatarUpload = require("../middleware/users/avatarUploads");
const {
    addUserValidators,
    addUserValidationHandler
} = require("../middleware/users/usersValidator");




//login page
router.get("/", decorateHtmlResponse("Users"), getUsers);

//add user
router.post("/", avatarUpload, addUserValidators, addUserValidationHandler);




module.exports = router;
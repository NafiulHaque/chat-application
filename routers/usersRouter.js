//external imports
const express = require("express");

const router = express.Router();

//internal imports
const { getUsers } = require("../controller/usersController");
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse")
const avatarUpload = require("../middleware/users/avatarUploads");




//login page
router.get("/", decorateHtmlResponse("Users"), getUsers);

//add user
router.post("/", avatarUpload);


module.exports = router;
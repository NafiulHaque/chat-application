//external imports
const express = require("express");
const { check } = require("express-validator");

const router = express.Router();

//internal imports
const { getUsers, addUser, removeUser } = require("../controller/usersController");
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse")
const avatarUpload = require("../middleware/users/avatarUploads");
const {
    addUserValidators,
    addUserValidationHandler
} = require("../middleware/users/usersValidator");




//User page
router.get("/", decorateHtmlResponse("Users"), getUsers);

//add user
router.post(
    "/",
    avatarUpload,
    addUserValidators,
    addUserValidationHandler,
    addUser,
);

//remove user
router.delete("/:id", removeUser);



module.exports = router;
//external imports
const express = require("express");



//internal imports
const { getInbox } = require("../controller/inboxController");
const { checkLogin } = require("../middleware/common/checkLogin");
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse")


const router = express.Router();


//Inbox page
router.get("/", decorateHtmlResponse("Inbox"), checkLogin, getInbox);

module.exports = router;
//external imports
const express = require("express");

const router = express.Router();

//internal imports
const { getInbox } = require("../controller/inboxController");
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse")



//Inbox page
router.get("/", decorateHtmlResponse("Inbox"), getInbox);

module.exports = router;
//external imports
const express = require("express");

const router = express.Router();

//internal imports
const { getInbox } = require("../controller/inboxController");




//Inbox page
router.get("/", getInbox);

module.exports = router;
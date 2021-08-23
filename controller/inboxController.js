//get inbox page

function getInbox(req, res, next) {
    res.render("inbox", {
        title: "inbox -chat Application",
    })
}

module.exports = {
    getInbox,
}
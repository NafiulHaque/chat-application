//get users page

function getUsers(req, res, next) {
    res.render("users", {
        title: "Users -chat Application",
    })
}

module.exports = {
    getUsers,
}
const path = require("path");
// const app = express();

// create routing path to survey
module.exports = function (app) {
    app.get("/survey", function (req, res) { // whenever we get /survey, start function and send user a file (survey.html)
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    app.get("/home", function (req, res) { // whenever we get /survey, start function and send user a file (survey.html)
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
    // default route
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};
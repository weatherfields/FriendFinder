const path = require("path");
// const app = express();

// create routing path to button
module.exports = function (app) {
    app.get("/survey", function (req, res) { // whenever we get /survey, start function and send user a file (survey.html)
        res.sendFile(path.join(__dirname + "/app/public/survey.html"));
    });
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + "/app/public/home.html"));
    });
}
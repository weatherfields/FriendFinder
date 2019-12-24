// link route to friend data array ...
const friends = require("../data/friends");



// setup api get request
// gets data from json
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends); // api get request
    });
    // api post request
    // the function below will run when a user submits the form.
    // when the app has a post route to friends, run the function
    app.post("/api/friends", function (req, res) {
        // this is where we compare the difference between the new users score and the other's score.
        // I think this is where totalDifference comes into play.
        let totalDifference = 0;
    });
};
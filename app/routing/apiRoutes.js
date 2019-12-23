// link route to friend data array ...
const friends = require("../data/friends");



// setup api get request
// gets data from json
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends); // api get request
    });
    // api post request
    // when the app has a post route to friends, run function
    app.post("/api/friends", function (req, res) {
        // 
    });
};
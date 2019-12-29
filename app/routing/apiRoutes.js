// link route to friend data array ...
let friends = require("../data/friends");
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
        // this is where we compare the difference between the new userBodys score and the other's score.
        // userBody fills in match variable with their own data.
        let match = {
            name: "",
            photo: "",
            difference: Infinity // global function place holder for data that will be numeric
        }

        let userBody = req.body; // req.body will hold all of the parameters the userBody sends in the POST request
        let userBodyScores = userBody.scores; // will send back the scores parameter on the friends array.
        let totalDifference; // initialize the totalDifference variable.

        // console.log("req.body", req.body)
        // foreach loop to loop through all of the friends in the database.
        friends.forEach(function (object) {
            let currentFriend = object;
            let totalDifference = 0;
            // console.log("name", currentFriend.name)
            // for loop to loop through the currentFriend scores
            for (var i = 0; i < currentFriend.scores.length; i++) {

                let currentFriendScore = currentFriend.scores[i];
                let currentuserBodyScore = userBodyScores.scores[i];

                // math.abs will return the absolute value of the number resulted from the equation below.
                totalDifference += Math.abs(parseInt(currentFriendScore) - parseInt(currentuserBodyScore));
            }
            // below if statement will determine the best match for the user
            if (totalDifference <= match.difference) {
                match.name = currentFriend.name;
                match.photo = currentFriend.photo;
                match.difference = totalDifference;
            }
        })
        // push the new user to the end of the friends array.
        friends.push(userBody);

    });
};
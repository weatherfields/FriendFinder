// Dependencies
const express = require("express");
// const bodyParser = require("body-parser");
const path = require("path");


// Sets up the Express App
const app = express();
const poRt = process.env.PORT || 5000; //if port isnt' available then run on 5000

// I guess bodyparser is no longer needed to return json?
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static('app/public/'));

app.use(express.static('./app/public')); //To serve static files such as images, CSS files, and JavaScript files.

require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

app.listen(poRt, () => console.log(`Server started on port ${poRt}`));
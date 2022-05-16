const express = require("express"); // importing express
const app = express(); // creating an express app
const port = 8000; // setting the port

// need these to handle the requests
// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  importing the config file
require("./server/config/mongoose.config");

// importing the routes
const jokeRoutes = require("./server/routes/joke.routes");
jokeRoutes(app);

//
//
//
//

//@ ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//@ :::::: These lines must be at the bottom of the file ---------------
//@ ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

app.listen(port, () => console.log(`Craig, the server is all fired up and running on port ${port}`));

// import the Joke model so we can use it in this file
const Joke = require("../models/joke.model");

// testing connection to the client
module.exports.sayHello = (req, res) => {
  let name = "Cragar";
  res.json({
    msg: `Hello ${name}, this is coming from the controller file in the project: 'burke-craig-jokes'`
  });
};

//
//t- :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//t- ::::::::::::::: NEW JOKE  (CREATE)  --------------------------------
//t- :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// create a new joke
module.exports.createJoke = (req, res) => {
  Joke.create(req.body)
    .then((newlyCreatedJoke) => res.json({ results: newlyCreatedJoke }))
    .catch((err) => res.json({ message: "CREATING JOKE: Something went wrong", error: err }));
};

//
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//* ::::::::::::::: GET ALL JOKES (READ)  ---------------------
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// get all jokes
module.exports.getAllJokes = (req, res) => {
  Joke.find()
    .then((allJokes) => res.json({ results: allJokes }))
    .catch((err) => res.json({ message: "FIND ALL JOKES: Something went wrong", error: err }));
};

//
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//* ::::::::::::::: GET ONE JOKE (READ)  ---------------------
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// get one joke
module.exports.getOneJoke = (req, res) => {
  Joke.findOne({ _id: req.params._id })
    .then((oneJoke) => res.json({ results: oneJoke }))
    .catch((err) => res.json({ message: "FIND ONE JOKE: Something went wrong", error: err }));
};

//
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//* ::::::::::::::: GET COUNT OF JOKES (READ)  ---------------------
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// get count of jokes
module.exports.getCountOfJokes = (req, res) => {
  Joke.countDocuments({})
    .then((count) => res.json({ results: count }))
    .catch((err) => res.json({ message: "COUNT OF JOKES: Something went wrong", error: err }));
};

//
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//* ::::::::::::::: GET ONE RANDOM JOKE (READ)  ---------------------
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// get random joke
module.exports.getOneRandomJoke = (req, res) => {
  Joke.countDocuments({})
    .then((count) => {
      let random = Math.floor(Math.random() * count);
      Joke.findOne()
        .skip(random)
        .then((randomJoke) => res.json({ results: randomJoke }))
        .catch((err) => res.json({ message: "RANDOM JOKE: Something went wrong", error: err }));
    })
    .catch((err) => res.json({ message: "COUNT OF JOKES IN RANDOM: Something went wrong", error: err }));
};
//
// version 2 for the random joke
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//* ::::::::::::::: GET ONE RANDOM JOKE - v2 -  (READ)  ---------------------
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// get random joke
module.exports.getOneRandomJoke2 = (req, res) => {
  Joke.find()
    .then((allJokes) => {
      // get a random number from index 0 up to but not including the allJokes.length
      let randomIdx = Math.floor(Math.random() * allJokes.length);
      // return the joke at the random index
      res.json({ results: allJokes[randomIdx] });
    })
    .catch((err) => res.json({ message: "RANDOM JOKE V2: Something went wrong", error: err }));
};

//
//n- :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//n- ::::::::::::::: UPDATE ONE JOKE (UPDATE) ---------------------
//n- :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// update a joke
module.exports.updateExistingJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
    .then((updatedJoke) => res.json({ results: updatedJoke }))
    .catch((err) => res.json({ message: "UPDATING JOKE: Something went wrong", error: err }));
};

//
//! :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//! ::::::::::::::: DELETE ONE JOKE (DELETE) ---------------------
//! :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// delete a joke
module.exports.deleteJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ results: result }))
    .catch((err) => res.json({ message: "DELETING JOKE: Something went wrong", error: err }));
};

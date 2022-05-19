// import the product controller
const Author = require("../models/author.model");

// testing the connection with sayHello
module.exports.sayHello = (req, res) => {
  let name = "Cragar";
  res.json({
    msg: `Hi ${name}, this is coming from the controller file in the project: 'authors'`
  });
};

//
//t- :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//t- ::::::::::::::: NEW Author  (CREATE)  --------------------------------
//t- :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// create a new Author
module.exports.createAuthor = (req, res) => {
  Author.create(req.body)
    .then((newlyCreatedAuthor) => res.json({ results: newlyCreatedAuthor }))
    .catch((err) => res.json({ message: "CREATING Author: Something went wrong", error: err }));
};

//
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//* ::::::::::::::: GET ALL Authors (READ)  ---------------------
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// get all Authors
module.exports.getAllAuthors = (req, res) => {
  Author.find()
    .then((allAuthors) => res.json({ results: allAuthors }))
    .catch((err) => res.json({ message: "FIND ALL AuthorS: Something went wrong", error: err }));
};

//
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//* ::::::::::::::: GET ONE Author (READ)  ---------------------
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// get one Author
module.exports.getOneAuthor = (req, res) => {
  Author.findOne({ _id: req.params._id })
    .then((oneAuthor) => res.json({ results: oneAuthor }))
    .catch((err) => res.json({ message: "FIND ONE Author: Something went wrong", error: err }));
};

//
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//* ::::::::::::::: GET COUNT OF Authors (READ)  ---------------------
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// get count of Authors
module.exports.getCountOfAuthors = (req, res) => {
  Author.countDocuments({})
    .then((count) => res.json({ results: count }))
    .catch((err) => res.json({ message: "COUNT OF Authors: Something went wrong", error: err }));
};

//
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//* ::::::::::::::: GET ONE RANDOM Author (READ)  ---------------------
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// get random Author
module.exports.getOneRandomAuthor = (req, res) => {
  Author.countDocuments({})
    .then((count) => {
      let random = Math.floor(Math.random() * count);
      Author.findOne()
        .skip(random)
        .then((randomAuthor) => res.json({ results: randomAuthor }))
        .catch((err) => res.json({ message: "RANDOM Author: Something went wrong", error: err }));
    })
    .catch((err) => res.json({ message: "COUNT OF Authors IN RANDOM: Something went wrong", error: err }));
};
//
// version 2 for the random Author
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//* ::::::::::::::: GET ONE RANDOM Author - v2 -  (READ)  ---------------------
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// get random Author
module.exports.getOneRandomAuthor2 = (req, res) => {
  Author.find()
    .then((allAuthors) => {
      // get a random number from index 0 up to but not including the allAuthors.length
      let randomIdx = Math.floor(Math.random() * allAuthors.length);
      // return the Author at the random index
      res.json({ results: allAuthors[randomIdx] });
    })
    .catch((err) => res.json({ message: "RANDOM Author V2: Something went wrong", error: err }));
};

//
//n- :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//n- ::::::::::::::: UPDATE ONE Author (UPDATE) ---------------------
//n- :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// update a Author
module.exports.updateExistingAuthor = (req, res) => {
  Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
    .then((updatedAuthor) => res.json({ results: updatedAuthor }))
    .catch((err) => res.json({ message: "UPDATING Author: Something went wrong", error: err }));
};

//
//! :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//! ::::::::::::::: DELETE Author (DELETE) -----------------------------
//! :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// delete a Author
module.exports.deleteAuthor = (req, res) => {
  Author.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ results: result }))
    .catch((err) => res.json({ message: "DELETING Author: Something went wrong", error: err }));
};

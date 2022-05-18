// import the product controller
const Product = require("../models/product.models");

// testing the connection with sayHello
module.exports.sayHello = (req, res) => {
  let name = "Cragar";
  res.json({
    msg: `Hi ${name}, this is coming from the controller file in the project: 'product-manager'`
  });
};

//
//t- :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//t- ::::::::::::::: NEW Product  (CREATE)  --------------------------------
//t- :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// create a new Product
module.exports.createProduct = (req, res) => {
  Product.create(req.body)
    .then((newlyCreatedProduct) => res.json({ results: newlyCreatedProduct }))
    .catch((err) => res.json({ message: "CREATING Product: Something went wrong", error: err }));
};

//
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//* ::::::::::::::: GET ALL Products (READ)  ---------------------
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// get all Products
module.exports.getAllProducts = (req, res) => {
  Product.find()
    .then((allProducts) => res.json({ results: allProducts }))
    .catch((err) => res.json({ message: "FIND ALL ProductS: Something went wrong", error: err }));
};

//
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//* ::::::::::::::: GET ONE Product (READ)  ---------------------
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// get one Product
module.exports.getOneProduct = (req, res) => {
  Product.findOne({ _id: req.params._id })
    .then((oneProduct) => res.json({ results: oneProduct }))
    .catch((err) => res.json({ message: "FIND ONE Product: Something went wrong", error: err }));
};

//
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//* ::::::::::::::: GET COUNT OF Products (READ)  ---------------------
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// get count of Products
module.exports.getCountOfProducts = (req, res) => {
  Product.countDocuments({})
    .then((count) => res.json({ results: count }))
    .catch((err) => res.json({ message: "COUNT OF Products: Something went wrong", error: err }));
};

//
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//* ::::::::::::::: GET ONE RANDOM Product (READ)  ---------------------
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// get random Product
module.exports.getOneRandomProduct = (req, res) => {
  Product.countDocuments({})
    .then((count) => {
      let random = Math.floor(Math.random() * count);
      Product.findOne()
        .skip(random)
        .then((randomProduct) => res.json({ results: randomProduct }))
        .catch((err) => res.json({ message: "RANDOM Product: Something went wrong", error: err }));
    })
    .catch((err) => res.json({ message: "COUNT OF Products IN RANDOM: Something went wrong", error: err }));
};
//
// version 2 for the random Product
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//* ::::::::::::::: GET ONE RANDOM Product - v2 -  (READ)  ---------------------
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// get random Product
module.exports.getOneRandomProduct2 = (req, res) => {
  Product.find()
    .then((allProducts) => {
      // get a random number from index 0 up to but not including the allProducts.length
      let randomIdx = Math.floor(Math.random() * allProducts.length);
      // return the Product at the random index
      res.json({ results: allProducts[randomIdx] });
    })
    .catch((err) => res.json({ message: "RANDOM Product V2: Something went wrong", error: err }));
};

//
//n- :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//n- ::::::::::::::: UPDATE ONE Product (UPDATE) ---------------------
//n- :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// update a Product
module.exports.updateExistingProduct = (req, res) => {
  Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
    .then((updatedProduct) => res.json({ results: updatedProduct }))
    .catch((err) => res.json({ message: "UPDATING Product: Something went wrong", error: err }));
};

//
//! :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//! ::::::::::::::: DELETE Product (DELETE) -----------------------------
//! :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// delete a Product
module.exports.deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ results: result }))
    .catch((err) => res.json({ message: "DELETING Product: Something went wrong", error: err }));
};
